import React from 'react'
import {SafeAreaView,View,Text,StatusBar} from 'react-native'
import {LoginInput,LoginButtons} from '../components'
import styles from '../style/RegisterStyle'

const Register =props=>{
    return(
        <SafeAreaView style={{flex: 1}}>
            <StatusBar backgroundColor = '#916CF5'/>
            <View style={[styles.container,{flex : 2}]}>
                
                <LoginInput source={require('../assets/person.png')}/>
                <LoginInput source={require('../assets/email.png')} />
                <LoginInput source={require('../assets/eye.png')}/>
                <LoginInput source={require('../assets/eye.png')}/>
                <LoginInput source={require('../assets/phone.png')}/>
               
            </View>
            <View style={[styles.container,{flex : 1 }]}>
                <LoginButtons title = 'KAYIT OL' />
            </View>
        </SafeAreaView>
    )
}
export {Register}