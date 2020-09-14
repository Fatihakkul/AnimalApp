import React from 'react'
import {SafeAreaView,View,Text,StatusBar,Image, StyleSheet} from 'react-native'
import {LoginButtons,LoginInput} from '../components'
import style from '../style/LoginStyle'


const Login =props=>{
    return(
        <SafeAreaView>
            <StatusBar backgroundColor = '#916CF5'/>
            <View style={style.container}>
                <Image style={style.Image} source={require('../assets/Logo.png')}/>
                <LoginInput placeholder="Giriş"  source = {require('../assets/person.png')}/>
                <LoginInput placeholder="Şifreniz"  source = {require('../assets/eye.png')}/>
            </View>
            <View style={style.Buttons}>
                <LoginButtons title ="GİRİŞ"/>
                <LoginButtons title ="KAYIT OL" />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  
})
export {Login}