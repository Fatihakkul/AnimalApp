import React from 'react'
import {View,Text,Image, Pressable} from 'react-native'
import styles from './style/MainListStyle'

const MainListItem =props=>{
    return(
        <View style={styles.container}>
            <View style={styles.imageCont}>
                <Image style={styles.image} source={require('../assets/dog.jpg')}/>
            </View>
            <View style={styles.textCont}>
                <Text style={styles.name}>{props.data.name}</Text>
                <Text style={styles.ilan} numberOfLines ={2}>{props.data.ilan}</Text>
                <View>
                    <Pressable style={styles.button} onPress={props.onPress}>
                        <Text  style={styles.buttonTitle}>Sahiplen</Text>
                    </Pressable>
                </View>
            </View>
          
        </View>
    )
}
export {MainListItem}