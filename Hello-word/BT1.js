import react from 'react'; 

import { StyleSheet, Text, View } from 'react-native';


const App=() =>
{
  return(
    <View style={
      Mystyle.ViewStyle

    }>
      <Text style={Mystyle.TextStyle}>Hello World</Text>
    </View>
  );
}
export default App;
<view style={
  {
      width :100,
      height:100,
      backgroundColor:'aqua',
      alignItems:'center',
  }


}>

<Text style={{color:'#fff'}}>Hello World</Text>


</view>
var Mystyle =StyleSheet.create(
  {
    ViewStyle:{
      width:100,
      height:100,
      backgroundColor:'aqua',
      alignItems:'center',
      justifyContent:'center',
    },
    TextStyle:
    {
      color:'black'
    }
  }


)


