import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Alert
} from 'react-native';


function App(){

  const [resultText, setResultText] = useState("");
  const [calcText, setCalcText] = useState("");

const onButtonClick = (text) =>{
  console.log(text);
  if (text == "=") {
    return calculation();
  }
  setResultText(resultText + text)
}

const calculation = () => {

  if (resultText == "+") {
    Alert.alert("Invalid Expression")
   } else if(resultText == "-"){
    Alert.alert("Invalid Expression")
   } else if(resultText == "/"){
    Alert.alert("Invalid Expression")
   } else if(resultText == "*"){
    Alert.alert("Invalid Expression")
   } else{
  setCalcText(eval(resultText))
}
}

const onOperationClick = (text) =>{

let operations = ["C","Del","+","-","*","/"]



  if (text == "C") {
    setResultText("")
    setCalcText()
    return;
  }
  if (text == "Del") {
    return setResultText(resultText.toString().substring(0, resultText.length-1))
  }


  console.log(text);

if (operations.includes(resultText.toString().split("").pop())) return;

  setResultText(resultText + text);
}

  return<>
  <SafeAreaView>
    <ScrollView>

    
<View style={{backgroundColor:"#F5F0F0",height:727}}>
<View style={{marginTop:40}}>
  <Text style={{fontSize:25,color:"#28282B"}}>{resultText}</Text>
</View>
<View style={{marginTop:20}}>
  <Text style={{fontSize:35,color:"#28282B"}}>{calcText}</Text>
</View>


<View style={{backgroundColor:"#f5f0f0",height:1700,borderRadius:40,marginTop:70}}>
  <View style={{marginTop:-40}}>
<TouchableOpacity onPress={()=> (onOperationClick("C"))} style={{marginLeft:30,marginTop:150,width: 56,
      height: 56,
      elevation: 60,
      borderRadius: 28,
      marginBottom: 3,
      backgroundColor: '#28282B'}}>
  <Text style={{fontSize:25,marginLeft:20,marginTop:13,color:'cyan'}}>C</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=> (onOperationClick("Del"))} style={{backgroundColor:"#28282B", width:60,height:55,marginLeft:110,marginTop:-55,borderRadius:28}}>
  <Text style={{fontSize:20,marginLeft:17,marginTop:15,color:"cyan"}}>Del</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=> (onOperationClick("/"))} style={{backgroundColor:"#28282B", width:60,height:55,marginLeft:190,marginTop:-55,borderRadius:28}}>
  <Text style={{fontSize:25,marginLeft:23,marginTop:13,color:"cyan"}}>/</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=> (onOperationClick("*"))} style={{backgroundColor:"#28282B", width:60,height:55,marginLeft:270,marginTop:-55,borderRadius:28}}>
  <Text style={{fontSize:25,marginLeft:23,marginTop:13,color:"pink"}}>X</Text>
</TouchableOpacity>


<TouchableOpacity onPress={()=> (onButtonClick(1))} style={{backgroundColor:"#28282B", width:60,height:55,marginLeft:30,marginTop:15,borderRadius:28}}>
  <Text style={{color:"cyan",fontSize:25,marginLeft:20,marginTop:13,}}>1</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=> (onButtonClick(2))} style={{backgroundColor:"#28282B", width:60,height:55,marginLeft:110,marginTop:-55,borderRadius:28}}>
  <Text style={{fontSize:25,marginLeft:20,marginTop:13,color:"cyan"}}>2</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=> (onButtonClick(3))} style={{backgroundColor:"#28282B", width:60,height:55,marginLeft:190,marginTop:-55,borderRadius:28}}>
  <Text style={{fontSize:25,marginLeft:20,marginTop:13,color:"cyan"}}>3</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=> (onOperationClick("-"))} style={{backgroundColor:"#28282B", width:60,height:55,marginLeft:270,marginTop:-55,borderRadius:28}}>
  <Text style={{fontSize:55,marginLeft:20,marginTop:-8,color:"pink"}}>-</Text>
</TouchableOpacity>


<TouchableOpacity onPress={()=> (onButtonClick(4))} style={{backgroundColor:"#28282B", width:60,height:55,marginLeft:30,marginTop:15,borderRadius:28}}>
  <Text style={{fontSize:25,marginLeft:20,marginTop:13,color:"cyan"}}>4</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=> (onButtonClick(5))} style={{backgroundColor:"#28282B", width:60,height:55,marginLeft:110,marginTop:-55,borderRadius:28}}>
  <Text  style={{fontSize:25,marginLeft:20,marginTop:13,color:"cyan"}}>5</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=> (onButtonClick(6))} style={{backgroundColor:"#28282B", width:60,height:55,marginLeft:190,marginTop:-55,borderRadius:28}}>
  <Text  style={{fontSize:25,marginLeft:20,marginTop:13,color:"cyan"}}>6</Text>
</TouchableOpacity>


<TouchableOpacity onPress={()=> (onButtonClick(7))} style={{backgroundColor:"#28282B", width:60,height:55,marginLeft:30,marginTop:15,borderRadius:28}}>
  <Text  style={{fontSize:25,marginLeft:20,marginTop:13,color:"cyan"}}>7</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=> (onButtonClick(8))} style={{backgroundColor:"#28282B", width:60,height:55,marginLeft:110,marginTop:-55,borderRadius:28}}>
  <Text  style={{fontSize:25,marginLeft:20,marginTop:13,color:"cyan"}}>8</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=> (onButtonClick(9))} style={{backgroundColor:"#28282B", width:60,height:55,marginLeft:190,marginTop:-55,borderRadius:28}}>
  <Text style={{fontSize:25,marginLeft:20,marginTop:13,color:"cyan"}}>9</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=> (onOperationClick("+"))} style={{backgroundColor:"#28282B", width:60,height:115,marginLeft:270,marginTop:-125,borderRadius:28}}>
  <Text style={{fontSize:25,marginLeft:23,marginTop:40,color:"pink"}}>+</Text>
</TouchableOpacity>


<TouchableOpacity onPress={()=> (onButtonClick(0))} style={{backgroundColor:"#28282B", width:140,height:55,marginLeft:30,marginTop:30,borderRadius:28}}>
  <Text style={{fontSize:25,marginLeft:60,marginTop:13,color:"cyan"}}>0</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=> (onButtonClick("."))} style={{backgroundColor:"#28282B", width:60,height:55,marginLeft:190,marginTop:-55,borderRadius:28}}>
  <Text style={{fontSize:35,marginLeft:25,marginTop:-3,color:"cyan"}}>.</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() =>onButtonClick("=")} style={{backgroundColor:"#28282B", width:60,height:55,marginLeft:270,marginTop:-55,borderRadius:28}}>
  <Text style={{fontSize:25,marginLeft:23,marginTop:13,color:"pink"}}>=</Text>
</TouchableOpacity>
</View>

</View>
</View>
</ScrollView>
  </SafeAreaView>
</>
};
export default App;
