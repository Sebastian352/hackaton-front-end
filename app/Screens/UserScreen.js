import { StyleSheet, Text, View,SafeAreaView, StatusBar, Image,Button,TouchableOpacity, onPress } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const text = {
    fontStyle: "normal",
    color: "#000000",
    fontSize: 20,
    fontStyle: "normal",
    width: 350,
    alignSelf:'flex-end',
    marginTop:30
}

export default function UserScreen() {
  return (
    <SafeAreaView style = {styles.container}>
            <View style = {styles.upper}>

            </View>
            <View style={styles.underUpper}>
                <Text style = {[styles.boldStyleText,styles.aboveText]}>
                        Nearest center
                </Text>
                <Text style = {[styles.mediumStyleText,styles.belowText]}>
                        may, 28 from 9:00 to 17:00
                </Text>  
                <Text style = {[styles.mediumStyleText,styles.belowText]}>
                        Observator, 17  
                </Text>
                <Image source={require('../assets/QR.png')} style = {[styles.imageStyle,styles.qrStyle]}></Image>            
            </View>

            <View>
                <Text style = {[text]}>
                    3 recycling collection points are available near your
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
    qrStyle:{
        width:80,
        height:80,
        alignSelf:'flex-end',
        marginRight:20,
        marginTop:-75
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
    aboveText:{
        paddingLeft:15,
        marginTop:-35,
    },
    belowText:{
        fontWeight: '500',
        fontStyle: "normal",
        color: "#b3a8a8",
        fontSize: 14,
        paddingLeft:15,
    },
    boldStyleText:{
        color: 'black',
        fontSize: 24,
        fontWeight: '700',
        textAlign:'justify',
    }
})