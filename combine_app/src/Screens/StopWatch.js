import {View, SafeAreaView, Text, StyleSheet, TextInput, TouchableOpacity, Pressable} from 'react-native';
import React, {useEffect, useState, useRef } from 'react';

// conversion if time less than 10 second then add 0 before
const fixedTimeString = (time) => {
    return time < 10 ? `0${time}` : time;
  };
  
  // time conversion format
  const formatTimeToString = (time) => {
    const seconds = time % 60;
    const minutes = Math.floor(time / 60) % 60;
    const hours = 0;
  
    return `${hours}:${fixedTimeString(minutes)}:${fixedTimeString(seconds)}`;
  };
  

const StopWatch = () => {

    const [value, setValue] = useState('');
    const [maxValue, setmaxValue] = useState('');
    //  const [value, setValue] = useState(0);
    let ref = useRef(null); 
  
    if(value===maxValue) {
        clearInterval(ref.current);
        ref.current = null;
        setValue(parseInt(0));
  
      }
  
      useEffect(() => {
      const cleanup = () => {
        stopTimer();
      };
      return cleanup;
    }, []);
  
    const startTimer = () => {
  
      if (ref.current !== null) return;
      ref.current = setInterval(() => {
        setValue((prevValue) => {
          return parseInt(prevValue + 1);
        });
      }, 1000);
  
    };
  
    const stopTimer = () => {
      clearInterval(ref.current);
      ref.current = null;
    };
  
    const resetTimer = () => {
      stopTimer();
      setValue(parseInt(0));
    };

  return(
    <SafeAreaView style={styles.box} >

     <View >

      <View>
        <Text style={{...styles.heading, marginBottom:10}}>Stopwatch App</Text>
      </View>

      <View style={{flexDirection:'row', }}>
        <TextInput placeholder="Enter Start Value" style={styles.textinput} onChangeText={ (t) => setValue(parseInt(t)) } />

        <TextInput placeholder="Enter Last Value" style={styles.textinput} onChangeText={ (t) => setmaxValue(parseInt(t)) } />
      </View>

      <View style={{borderWidth:1, borderRadius:10,}}>

        <View >
          <Text style={styles.heading}>{formatTimeToString(value)}</Text>
        </View>

        <View style={styles.container}>

          <Pressable onPress={startTimer} activeOpacity='0.3' style={styles.btn}>
            <Text style={styles.text}>Start</Text> 
          </Pressable>

          <Pressable  onPress={stopTimer} activeOpacity='0.3' style={styles.btn}>
            <Text style={styles.text}>Stop</Text> 
          </Pressable>

          <Pressable  onPress={resetTimer} activeOpacity='0.3' style={styles.btn}>
            <Text style={styles.text}>Reset</Text> 
          </Pressable>

        </View>

      </View>
      
     </View>
      
    </SafeAreaView>
  )
}

export default StopWatch;

const styles = StyleSheet.create({
    box:{
      padding:10,
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#909090',
      
    },
    container : {
      padding:10,
      paddingVertical:25, 
      flexDirection:'row', 
      
    },
    heading: {
      textAlign:'center',
      fontSize:30,
      marginTop:15
    },
    btn : {
      borderWidth: 1,
      backgroundColor: 'green',
      padding:10,
      paddingHorizontal:20,
      borderRadius:10,
      marginHorizontal:15
    },
    text:{
      color:'#fff',
      fontSize:18,
    },
    textinput : {
      borderWidth:2,
      borderRadius:6,
      padding:8,
      borderColor:'rgba(20,20,20,0.2)',
      width:'42%',
      marginVertical:25,
      marginHorizontal:10

    }

})
