import {View, Button, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Platform, RefreshControl} from 'react-native';
import React, {useState} from 'react';

const TaskList = () => {

    const [refresing, setRefreshing] = useState(false);
    const [btnDisplay, setBtnDisplay] = useState(false);
    const [data, setData] = useState([]);
    const [itemDisplay, setItemDisplay] = useState(false);

    const wait = (timeOut) => {
        return new Promise( resolve => setTimeout(resolve, timeOut));
      }
  
      const refreshFun = async() =>  {
  
        setRefreshing(true);
        setBtnDisplay(true);
        // await wait(1000);
        // setRefreshing(false);
        
      }
  
      const randomNumberGenerate = async() => {
        setBtnDisplay(false);
        await wait(500);
        setRefreshing(true);
        setData( (prev) => [...prev, 'item ' + Math.ceil(Math.random()*100 ) ] );
        setRefreshing(false);
        setItemDisplay(true);
      
      }
  
      // setData( (prev) => prev.filter( (_,index) => index !== i))
  
      const deleteFun = async(i) => {
        setBtnDisplay(false);
        await wait(500);
        setRefreshing(true)
        setData( (prev) => prev.filter( (_,index) => index !== 0))
        setRefreshing(false);
        setItemDisplay(true);
      }
  
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
          refreshControl = 
          { 
            <RefreshControl 
              refreshing={refresing}
              onRefresh={refreshFun}
              colors={['red']}
              tintColor='green'
            />  
          }   
      >

      {
         ! refresing && <View><Text style={styles.heading}> Please Refresh For Action </Text></View>
      }

      {
      btnDisplay &&  <View>

        <View style={{flexDirection:'row', alignSelf:'center', marginTop:30}}>
          <TouchableOpacity style={styles.btn} >
            <Text onPress={randomNumberGenerate} style={styles.text}>ADD</Text> 
          </TouchableOpacity>

          <TouchableOpacity style={{...styles.btn, marginLeft:20}} >
            <Text onPress={deleteFun} style={styles.text}>DELETE</Text> 
          </TouchableOpacity>
        </View>

      </View>

    }

    {

      itemDisplay && <View>

        <View style={{margin:'auto', justifyContent:'center', width:'100%', marginTop:50}}>
            <Text style={{...styles.heading, color:'green', fontSize:28}}>---------- List of Items ----------</Text>
        </View>
      
        {
          data.map( (item, index) => <Text key={index} style={styles.dataDisplay}>{item} </Text> )
        }

        {
          data.length===0 && <Text style={{textAlign:'center',fontSize:20,marginTop:40, color:'red' }}>No Items In The List</Text> 
        }
    
    </View>

    }

     </ScrollView>

  </SafeAreaView> )
  
}

export default TaskList;

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#909090',
      borderWidth:1,
      borderColor:'rgba(20,20,20,0.2)', 
      borderRadius:8,
      paddingVertical:15,
      
    },
    heading: {
      fontSize:20, 
      textAlign:'center', 
      paddingBottom:10
      
    },
    btn : {
       width:'40%',
       margin:'auto',
       marginVertical:15,
       borderWidth: 1,
       borderRadius:10,
       backgroundColor:'pink',
       padding:10,
     },
     text:{
       color:'#fff',
       fontSize:18,
       textAlign:'center'
     },
    dataDisplay: {
      margin:10, 
      fontSize:18, 
      borderWidth:1, 
      textAlign:'center', 
      padding: 8, 
      borderRadius:12
      }
  
  })
