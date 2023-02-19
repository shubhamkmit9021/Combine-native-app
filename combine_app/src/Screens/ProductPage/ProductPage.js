import React from 'react';
import {
  Text,
  StatusBar,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
  SectionList,
} from 'react-native';
import  {DATA}  from './MyData';

const listHeader = () => <Text style={styles.headerFooter}>This is Header Section </Text>
const listFooter = () => <Text style={styles.headerFooter}>This is Footer Section </Text>

const rendeSingleDiv = ({ item }) => (
  <View style={styles.item}>

    <Image source={{ uri: item.img }} resizeMode="contain" style={{ width: 130, height: 300 , marginBottom:10}} />

    <Text style={styles.myText}>{item.price}</Text>

    <View style={{flexDirection:'row'}}>

       <Text style={{fontSize:16, marginRight:8}}>{item.striked.s1}</Text>

       <Text style={{fontSize:16, textDecorationLine:'line-through'}}>{item.striked.s2}</Text>
    </View>

    <Text style={{fontSize:18, color:'green'}}>{item.discount}</Text>

    <Text style={{fontSize:16}}>{item.title}</Text>

  </View>
);

const renderSingleItem = ({ item }) => (
  <FlatList 
    horizontal 
    data={item.list} 
    renderItem={rendeSingleDiv} 
  
    />
);

const ProductPage = () => {
    return (
        <SafeAreaView style={styles.container}>
          <SectionList 
            sections={DATA}
            renderSectionHeader={({ section: { category } }) => (
            <Text style={styles.header}>{category}</Text>
          )} 
            renderItem={renderSingleItem} 
            ListHeaderComponent={listHeader}
            ListFooterComponent={listFooter}
            keyExtractor={ (_,index) => index.toString() }
            />
            
        </SafeAreaView>
      );
}

export default ProductPage;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    //   marginHorizontal:16,
      backgroundColor:'#909090'
    },
    item: {
      borderWidth:0.2,
      borderColor:'rgba(20 20 20 0.2)',
      borderRadius:12,
      padding: 20,
      paddingHorizontal:30,
      marginVertical: 8,
      margin: 15,
      color: '#fff',
      width:220,
      alignSelf:'center'
    },
    header: {
      fontSize: 28,
      color:'black',
      marginVertical:14,
    },
    myText: {
      fontSize: 24,
      color: '#333300',
    },
    headerFooter: {
      textAlign:'center',
      fontSize:30,
      marginVertical:22
    }
  });
  

