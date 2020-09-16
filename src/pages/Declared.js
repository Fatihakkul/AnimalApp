import React from 'react'
import {SafeAreaView,View,Image,Text,StatusBar, ScrollView, Pressable} from 'react-native'
import styles from '../style/DeclaredStyle'
import MapView , {Marker} from 'react-native-maps';

const Declared =props=>{
    const kordinat ={"x" : 37.78825 , "y" : -122.4324 }
  
    return(
        <SafeAreaView style={{flex: 1}}>
            <StatusBar backgroundColor = "#916CF5"/>
            <View style={{flex: 1}}>
                <View style={styles.ImageCont}>
                    <Image style={styles.Image} source={require('../assets/dog.jpg')}/>
                    <Image style={styles.starButton} source={require('../assets/star.png')}/>
                    <Image style={styles.backButton} source={require('../assets/back.png')}/>
                </View>
                <Text style={styles.title}>Boncuk</Text>
                <ScrollView showsVerticalScrollIndicator = {false} contentContainerStyle={styles.scrollView}>
                        <Text style={styles.declaredText}>asdasdasdasd</Text>
                </ScrollView>
                <MapView
                    style={styles.map}
                    provider = 'google'
                    initialRegion={{
                        latitude: 41.015974,
                        longitude: 29.020422,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                        //buraya itemın lat ve long değerleri gelecek
                      }}
                >   
                    <Marker 
                      
                        coordinate = {{
                            latitude:  41.015974,
                            longitude: 29.020422,
                            //buraya itemın lat ve long değerleri gelecek
                        }}
                      
                    />

                </MapView>
                <View style={styles.buttonCont}>
                    <Pressable style={styles.adoptButton}>
                        <Text style={[styles.titleButton , {color : '#8F56B5'}]}>Sahiplen</Text>
                    </Pressable>
                    <Pressable style={[styles.adoptButton,{backgroundColor : '#8F56B5' , width : 125}]}>
                        <Text style={[styles.titleButton , {color : 'white'}]}>Sahiplen</Text>
                    </Pressable>
                </View>
               
            
            </View>
        </SafeAreaView>
    )
}
export {Declared}