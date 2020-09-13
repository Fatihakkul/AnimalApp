import React from 'react'
import {Pressable,StyleSheet,Text,View} from 'react-native'


const LoginButtons =props=>{
    
    
    return(
          
        <Pressable style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
        </Pressable>
          
        
    )
}
const styles =StyleSheet.create({
    container : {
        alignItems : 'center',
        justifyContent :'center',
        borderColor : '#916CF5',
        borderWidth : 1,
        width :  144,
        height : 30,
        marginHorizontal : 6,
        marginTop : 15
    },
    text : {
        color : '#916CF5',
        fontSize : 15,
        
    }
})
export {LoginButtons}