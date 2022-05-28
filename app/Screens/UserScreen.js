import { StyleSheet, Text, View,SafeAreaView, StatusBar, Image,Button } from 'react-native'
import React from 'react'
import { useFonts, DM } from '@expo-google-fonts';
  
export default function UserScreen() {
  return (
    <SafeAreaView style = {styles.container}>

        <Button title=''>
        <Image source={require('../assets/home.png')} style = {styles.imageStyle} />
                <Text style = {styles.mediumStyleText}>Home</Text>
        </Button>


        <View style = {styles.menu}>
            <View style = {styles.leftButton}>
                <Image source={require('../assets/home.png')} style = {styles.imageStyle} />
                <Text style = {styles.mediumStyleText}>Home</Text>
            </View>
            <View style = {styles.middleButton}>
                <Image source={require('../assets/trophy.png')} style = {styles.trophyStyle} />
                <Text style = {styles.mediumStyleText}>Leaderboards</Text>
            </View>
            <View style = {styles.rightButton} >
                <Image source={require('../assets/icon96.png')} style = {styles.imageStyle} />
                <Text style = {styles.mediumStyleText}>User</Text>
            </View>
        </View>
        <StatusBar hidden={true} />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderRadius:30,
      justifyContent:'center',
      backgroundColor: '#F3EDEB',
      
    },
    menu:{
        flex: 1,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'flex-end',
        flexDirection: 'row',
        backgroundColor: '#F3EDEB',
        shadowColor: 'black',
        boxShadow: "0px 1px 2px 3px rgba(0, 0, 0, 0.25)",
    }, 
    leftButton:{
        backgroundColor: 'white',
        alignContent:'center',
        justifyContent:'center',
        flex:1,
        flexBasis:100,
        height: 100,
        paddingLeft:25,

    },

    middleButton:{
        backgroundColor: 'white',
        alignContent:'center',
        justifyContent:'center',
        paddingLeft: 35,
        width: 175,
        height: 150,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        
    },

    rightButton:{
        backgroundColor: 'white',
        alignContent:'center',
        justifyContent:'center',
        paddingLeft:25,
        flexBasis:100,
        flex:1,
        height: 100,

    },

    imageStyle:{
        width:50,
        height:50
    },

    trophyStyle:{
        width:100,
        height:100
    },

    mediumStyleText:{
        fontFamily: 'DM',
        color: 'black',
        fontSize: 14,
        textAlign:'justify'
    }
})