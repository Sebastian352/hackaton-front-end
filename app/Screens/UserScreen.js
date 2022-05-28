import { StyleSheet, Text, View,SafeAreaView, StatusBar, Image,Button,TouchableOpacity, onPress } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';



export default function UserScreen() {
  return (
    <SafeAreaView style = {styles.container}>
            <View style = {styles.upper}>

            </View>
            <View style={styles.underUpper}>
                <Text style = {styles.boldStyleText}>
                        Nearest center
                </Text>                
            </View>


            <View style = {styles.menu}>

                <TouchableOpacity onPress={(console.log('moarte'))}>
                    <View style = {styles.leftButton}>
                        <Image source={require('../assets/home.png')} style = {styles.imageStyle} />
                        <Text style = {styles.mediumStyleText}>Home</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={(console.log('moarte'))}>
                    <View style = {styles.middleButton}>
                        <Image source={require('../assets/trophy.png')} style = {styles.trophyStyle} />
                        <Text style = {styles.mediumStyleText}>Leaderboards</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style = {styles.rightButton} >
                        <Image source={require('../assets/icon96.png')} style = {styles.imageStyle} />
                        <Text style = {styles.mediumStyleText}>User</Text>
                    </View>
                </TouchableOpacity>

            </View>
        <StatusBar hidden={true} />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: '#F3EDEB',
    },
    upper:{
        flex: 0.20,
        flexDirection: 'row',
        alignContent:'flex-end',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        backgroundColor: '#0cb16c',
        width:'100%',
        height:130,
        zIndex:1,
    },
    underUpper:{
        backgroundColor:'white',
        zIndex:100,
        marginTop:-50,
        width:360, 
        height:95,
        paddingTop:50,
        borderRadius:30
    },
    menu:{
        flex: 1,
        justifyContent:'center',
        alignItems:'flex-end',
        flexDirection: 'row',
        backgroundColor: '#F3EDEB',

    }, 
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
      },

    leftButton:{
        backgroundColor: 'white',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
        paddingLeft:70,
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
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        paddingRight:70,
        height: 100,

    },

    imageStyle:{
        width:50,
        height:50,
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
        textAlign:'justify',
        fontWeight:'500'
    },
    boldStyleText:{
        color: 'black',
        fontSize: 24,
        fontWeight: '700',
        textAlign:'justify',
    }
})