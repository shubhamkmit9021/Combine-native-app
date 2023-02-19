import {SafeAreaView, View, Text, StyleSheet, Platform, Button} from 'react-native';
import React ,{useState} from 'react';

const Counter = () => {
    const [count, setCount] =useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <View >
       <Text style={styles.headings}>Counter App</Text>
      </View>

      <View style={styles.childContainer}>
        <Text style={styles.childHeadings}>COUNT :  {count} </Text>
        <View style={styles.btnDiv}>
          <Button title='Increment' color='green' onPress={ ()=> setCount(prev => prev+1) } ></Button>
          <Button title='Decrement' disabled = {count <= 0 ? true : false} color='red' onPress={ ()=> setCount(prev => prev-1) } ></Button>
        </View>
      </View>
    </SafeAreaView>

  )
}

export default Counter;

const styles = StyleSheet.create({

    container: {
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#909090'
    },

    headings:{
      fontSize: 40,
      textAlign:'center',
      fontWeight:'bold',
    },

    childContainer:{
      borderWidth:3,
      borderColor:'green',
      padding:15,
      paddingVertical:40,
      borderRadius:10,
      marginVertical:15,
      width:'80%'
    },
    childHeadings:{
        textAlign:'center',
        marginBottom:15,
        fontSize:22
    },

    btnDiv:{
      flexDirection:'row',
      justifyContent:'space-evenly'
    }


})
