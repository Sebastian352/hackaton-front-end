import { StyleSheet, Text, View,SafeAreaView, StatusBar, Image,Button,TouchableOpacity, Alert, onPress, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';



export default function Leaderboard() {
  return (
    <SafeAreaView style = {styles.container}>
        <View style = {styles.upper}>
            <View style={{marginTop: 20}}>
                <Text style={styles.boldStyleText}>LeaderBoard</Text>
            </View>

            <View style={styles.area}>
                <TouchableOpacity onPress={(console.log('viata'))}>
                    <View style={styles.local}>
                        <Text style={styles.localStyleText}>Local</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={(console.log('viata'))}>
                    <View style={styles.global}>
                        <Text style={styles.globalStyleText}>Global</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={(console.log('viata'))}>
                    <View style={styles.regional}>
                        <Text style={styles.regionalStyleText}>Regional</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        
        <View style={styles.lower}>
            <View style={styles.scroll}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.scrollItem}>
                        <Text style={styles.counter}>1</Text>
                        <View style={{backgroundColor: 'white', padding: 10, borderRadius: 50, marginLeft: 10}}>
                            <Image source={require('../assets/microsoftLogo.png')} style={styles.logoStyle} />
                        </View>
                        <Text style={styles.boldStyleText}>Microsoft</Text>
                        <Text style={styles.boldStyleText}>400</Text>
                    </View>
                </ScrollView>
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
        alignItems:'center',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        backgroundColor: '#0cb16c',
        width:'100%',
        height:130,
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

    mediumStyleText:{
        color: 'black',
        fontSize: 14,
        textAlign:'justify',
        fontWeight:'500'
    },
    
    boldStyleText:{
        color: 'black',
        fontSize: 30,
        fontWeight: '700',
        textAlign:'justify',
        marginLeft: 10
    },

    area:{
        flexDirection:'row',
    },
    
    local:{
        textAlign: 'justify',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    
    global:{
        textAlign: 'justify',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        width: 175
    },
    
    regional:{
        textAlign: 'justify',
        alignItems: 'flex-end',
        alignContent: 'center',
        justifyContent: 'center',
    },
    
    localStyleText:{
        color:'white',
        backgroundColor: '#0cb16c',
        fontSize: 24,
        marginTop: 35
    },
    
    globalStyleText:{
        color:'white',
        backgroundColor: '#0cb16c',
        fontSize: 24,
        marginTop: 15
    },

    regionalStyleText:{
        color:'white',
        backgroundColor: '#0cb16c',
        fontSize: 24,
        marginTop: 35
    },
    
    lower:{
        flex:1,
        justifyContent: 'flex-end'
    },
    
    scroll:{
        alignItems: 'center',
        flex: 6,
        backgroundColor: '#F3EDEB',
        centerContent: true,
        justifyContent: 'space-evenly'
    },
    
    scrollItem:{
        backgroundColor: '#F3DEE5',
        flexDirection: 'row',
        margin: 10,
        padding: 15,
        borderRadius: 35,
        width: 325
    },

    counter:{
        textAlign: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 90,
        marginLeft: -25,
        width: 50,
        height: 50
    },
    
    menu:{
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

    logoStyle:{
        width: 35,
        height: 35,
    },

    trophyStyle:{
        width:100,
        height:100
    },
})