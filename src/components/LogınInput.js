import React from 'react'
import {TextInput,View,StyleSheet,Image} from 'react-native'

const LoginInput =props=>{
    return(
        <View style={styles.inputCont} >
            <View  style={styles.container}>
                <TextInput 
                    placeholder={props.placeholder}
                    secureTextEntry={props.secure}
                    keyboardType={props.type}
                />
            </View>
            
            <View style={styles.imageCont}>
                <Image style={styles.image}source={props.source}/>
            </View>
        </View>
        
    )
}
const styles = StyleSheet.create({
    container : {
        borderColor : '#916CF5',
        borderWidth : 1,
        width : 255,
        height : 49,
        flexDirection : 'row',
        marginVertical : 12
    },
    imageCont : {
        alignItems : 'center',
        justifyContent : 'center',
        width : 47,
        height : 49,
        borderColor : '#916CF5',
        borderWidth : 1

    },
    image : {
        width : 33,
        height : 33,
        resizeMode : 'contain'
    },
    inputCont : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        
    }
})
export {LoginInput}