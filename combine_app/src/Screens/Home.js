import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>Welcome To My Home Page</Text>
      <View style={styles.btnBox}>
        <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      </View>
      <View style={styles.btnBox}>
        <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
      </View>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
    box:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#909090',
    },
    btnBox : {
        marginVertical:10
    },
    text : {
        fontSize:26,
        marginVertical:20
    }
})


