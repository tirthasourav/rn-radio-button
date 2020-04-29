# rn-customizable-radio-button
One can customize the radio buttons using custom color, button styles, orientation or button positions. The developer has full control to customize all the properties of the radio buttons.

# Setup

npm i rn-customizable-radio-button

# Usages

import { RAdioButton } from 'rn-customizable-radio-button';

` <RadioButton 
  items={this.state.items} 
  selectedKey={this.state.selectedKey} 
  onPress={this.onValueChange.bind(this)} 
  orientation='vertical'
  buttonPosition='right'
  selectedButtonStyle={styles.selectedRb}
  buttonStyle={styles.radioCircle}
  />`
  
  # Properties
  
  | Prop        | Type           | default  | Required | Note  |
| ------------|:--------------:| :-------:|:--------:|:-----:|
| items     | Array | NA | Required | The Array of the items or check checklist with key-value pair
| selectedKey     | String | Empty String | Required | The key of the selected item
| onPress     | Function | NA | Required | Function Called onpress of the radio button
| orientation     | String | horizontal | Optional | Orientation of the Radio Button View, can be set to vertical or horizontal
| buttonPosition     | String | left | Optional | Position of the radio button with respect to the text, can be set to right or left
| selectedButtonStyle     | Object | NA | Optional | styles for the selected radio button
| buttonStyle     | Object | NA | Optional | styles for all radio buttonsof the array
| textStyle     | Object | NA | Optional | styles for radio button text

# Screenshot

![ScreenShot](https://raw.githubusercontent.com/tirthasourav/rn-radio-button/master/src/screenshot/Screenshot%202020-04-26%20at%2012.52.16%20AM.png)
