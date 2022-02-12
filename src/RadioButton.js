import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

const DEFAULT_ITEM_LAYOUT = (option, labelStyleOverride, onPress) => (
  <Text
    onPress={() => {
      onPress();
    }}
    style={[labelStyleOverride]}>
    {option}
  </Text>
);

const RadioButton = ({
    items,
    onPress,
    selectedIndex,
    orientation,
    selectedButtonStyle,
    buttonStyle,
    textStyle: labelStyleOverride,
    buttonPosition,
    itemLayout = DEFAULT_ITEM_LAYOUT,
    style: styleOverride,
    containerStyle: containerStyleOverride,
    errorMessage,
    errorTextStyle,
}) => {
    return (
        <View
          style={[
            orientation === 'vertical'
              ? styles.verticalOrientation
              : styles.horizontalOrientation,
            styleOverride,
          ]}>
          {items.map((res, index) => {
            return buttonPosition === 'right' ? (
              <View
                style={[
                  orientation === 'vertical'
                    ? styles.container
                    : styles.horizontalContainer,
                  containerStyleOverride,
                ]}
                key={index}>
                {itemLayout(res, labelStyleOverride, () => onPress(res, index))}
                <View style={styles.outerCircle}>
                  <TouchableOpacity
                    style={
                      selectedIndex === index
                        ? selectedButtonStyle !== undefined
                          ? selectedButtonStyle
                          : styles.selectedRb
                        : buttonStyle !== undefined
                        ? buttonStyle
                        : styles.radioCircle
                    }
                    onPress={() => onPress(res, index)}
                    activeOpacity={1}
                  />
                </View>
              </View>
            ) : (
              <View
                style={[
                  orientation === 'vertical'
                    ? styles.container
                    : orientation === 'center-horizontal'
                    ? styles.centerHorizontalOrientation
                    : styles.horizontalContainer,
                  containerStyleOverride,
                ]}
                key={index}>
                <View style={[styles.outerCircle]}>
                  <TouchableOpacity
                    style={
                      selectedIndex === index
                        ? selectedButtonStyle !== undefined
                          ? selectedButtonStyle
                          : styles.selectedRb
                        : buttonStyle !== undefined
                        ? buttonStyle
                        : styles.radioCircle
                    }
                    onPress={() => onPress(res, index)}
                    activeOpacity={1}
                  />
                </View>
                {itemLayout(res, labelStyleOverride, () => onPress(res, index))}
              </View>
            );
          })}
          {!!errorMessage && (
            <Text variant={'fieldError'} style={errorTextStyle}>
              {errorMessage}
            </Text>
          )}
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginVertical: 12,
    },
    horizontalContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginRight: 30,
    },
    radioText: {
      marginLeft: 5,
      fontSize: 12,
      color: '#000',
      textAlign: 'left',
    },
    radioCircle: {
      height: 18,
      width: 18,
      borderRadius: 9,
      borderWidth: 0.5,
      borderColor: 'white',
      justifyContent: 'center',
      marginHorizontal: 5,
    },
    outerCircle: {
      height: 22,
      width: 22,
      borderRadius: 11,
      borderWidth: 2,
      borderColor: '#ffb6c1',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 8,
    },
    selectedRb: {
      width: 14,
      height: 14,
      borderRadius: 7,
      backgroundColor: '#007FFF',
      marginHorizontal: 5,
    },
    verticalOrientation: {
      flexDirection: 'column',
    },
    horizontalOrientation: {
      flexDirection: 'row',
    },
    centerHorizontalOrientation: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginHorizontal: 24,
    },
  });
  
export default RadioButton;