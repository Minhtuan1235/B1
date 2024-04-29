import React from "react";
import {
    
View,
Button,
TouchableOpacity,
Text,
StyleSheet
} from "react-native";
export default () =>{
    return (
        <View style ={Mystyle.container}>
            <Button title="Button 1" onPress={()=>alert("hello!")}></Button>
            <TouchableOpacity
                onPress={() => alert("hello 2!")}
                style={{
                    backgroundColor:"blue",
                    padding:10,
                    alignItems:"center",
                    marginTop:10,
                
                }}>
                <Text style ={{color:"white",fontSize:18}}>Button 2</Text>
            </TouchableOpacity>

        </View>
    )
}
const Mystyle =StyleSheet.create(
{
    container:{
        flex:1,
        justifyContent:"center"
    },
    button:{
        backgroundColor:"blue",
        marginTop:"10",
        alignItems:"center",
        padding:10
    },
    text:{
        color:"white",
        fontSize:18
    }
}



)

