import React from 'react' 
import {SafeAreaView,View,Text,Image, StyleSheet,StatusBar} from 'react-native'

const SplashScreen =props=>{
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor = '#916CF5'/>
            <View>
                <Image style={{width : 209 , height : 209}}  source={require('../assets/Logo.png')}/>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container : {
        flex : 1 , 
        backgroundColor : '#916CF5',
        alignItems : 'center',
        justifyContent : 'center'
    }
})
export {SplashScreen}