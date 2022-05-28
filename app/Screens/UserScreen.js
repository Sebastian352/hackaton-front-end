import { StyleSheet, Text, View,SafeAreaView, StatusBar, Image,Button } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function UserScreen() {
  return (
    <SafeAreaView style = {styles.container}>

      
        <View style = {styles.menu}>
            <FontAwesome.Button name = 'home' iconStyle={styles.iconStyle} style={styles.lb}>
                <Text style = {styles.mediumStyleText}>Home</Text>
            </FontAwesome.Button>
            <FontAwesome.Button name = 'trophy' style={styles.lb} >
                Leaderboards
            </FontAwesome.Button>
            <FontAwesome.Button name = 'user' style={styles.lb}>
                User
            </FontAwesome.Button> 
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
        flex: 0.5,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'flex-start',
        flexDirection: 'row',
        backgroundColor: '#F3EDEB',
        shadowColor: 'black',
        boxShadow: "0px 1px 2px 3px rgba(0, 0, 0, 0.25)",
    }, 

    lb:{
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'white',
        height: 10,
        flexDirection:'row',
        flex:1
    }, 

    leftButton:{
        backgroundColor: 'white',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
        flex:1,
        flexBasis:100,
        height: 100,
    },

    middleButton:{
        backgroundColor: 'white',
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        width: 175,
        height: 150,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        
    },

    rightButton:{
        backgroundColor: 'white',
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        flexBasis:100,
        flex:1,
        height: 100,

    },

    imageStyle:{
        width:50,
        height:50
    },
    
    iconStyle:{
        backgroundColor:'black'
    },

    trophyStyle:{
        width:100,
        height:100
    },

    mediumStyleText:{
        color: 'black',
        fontSize: 14,
        textAlign:'justify'
    }
})