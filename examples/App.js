/**
 * rn-radio-button example app
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {RadioButton} from 'rn-customizable-radio-button';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: '',
      items: [{key: 'ietm_one', value: 'YES'}, {key: 'item_two', value: 'NO'}, {key: 'item_three', value: 'MAYBE'}]
    }
  }
  
  onValueChange(key, value) {
    this.setState({ selectedKey: key });
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.titleText}>Horizontal View With Left Side Radio Button</Text>
        <RadioButton 
        items={this.state.items} 
        selectedKey={this.state.selectedKey} 
        onPress={this.onValueChange.bind(this)} 
        // orientation='vertical'
        // buttonPosition='right'
        // selectedButtonStyle={styles.selectedRb}
        // buttonStyle={styles.radioCircle}
        />
        <Text style={styles.titleText}>Horizontal View With Right Side Radio Button</Text>
        <RadioButton 
        items={this.state.items} 
        selectedKey={this.state.selectedKey} 
        onPress={this.onValueChange.bind(this)} 
        // orientation='vertical'
        buttonPosition='right'
        selectedButtonStyle={styles.selectedRb}
        buttonStyle={styles.radioCircle}
        />
        <Text style={styles.titleText}>Vertical View With Left Side Radio Button</Text>
        <RadioButton 
        items={this.state.items} 
        selectedKey={this.state.selectedKey} 
        onPress={this.onValueChange.bind(this)} 
        orientation='vertical'
        // buttonPosition='right'
        // selectedButtonStyle={styles.selectedRb}
        // buttonStyle={styles.radioCircle}
        />
        <Text style={styles.titleText}>Vertical View With Right Side Radio Button</Text>
        <RadioButton 
        items={this.state.items} 
        selectedKey={this.state.selectedKey} 
        onPress={this.onValueChange.bind(this)} 
        orientation='vertical'
        buttonPosition='right'
        selectedButtonStyle={styles.selectedRb1}
        buttonStyle={styles.radioCircle1}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  radioText: {
    // marginLeft: 5,
    marginRight: 10,
    fontSize: 12,
    color: '#000',
      // fontWeight: 'Bold'
  },
  radioCircle: {
    height: 15,
    width: 15,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: 'red',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginHorizontal: 5
  },
  radioCircle1: {
    height: 15,
    width: 15,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: 'orange',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginHorizontal: 5
  },
  selectedRb: {
    width: 15,
    height: 15,
    borderRadius: 7,
    backgroundColor: 'green',
    marginHorizontal: 5
  },
  selectedRb1: {
    width: 15,
    height: 15,
    borderRadius: 7,
    backgroundColor: 'teal',
    marginHorizontal: 5
  },
  titleText: {
    fontSize: 14,
    marginBottom: 8,
    marginTop: 15,
    fontWeight: 'bold'
    // fontStyle: 'bold'
  }
});

