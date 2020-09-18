import React,{useEffect} from 'react'
import {SafeAreaView,View,Image,Text,StatusBar, ScrollView, Pressable} from 'react-native'
import styles from '../style/DeclaredStyle'
import MapView , {Marker} from 'react-native-maps';

const Declared =props=>{
   
    const item = props.route.params
    

    return(
        <SafeAreaView style={{flex: 1}}>
            <StatusBar backgroundColor = "#916CF5"/>
            <View style={{flex: 1}}>
                
                <View style={styles.ImageCont}>
                    <Image style={styles.Image} source={require('../assets/dog.jpg')}/>
                    <Image style={styles.starButton} source={require('../assets/star.png')}/>
                    <Image style={styles.backButton} source={require('../assets/back.png')}/>
                </View>
                <Text style={styles.title}>{item.name}</Text>
                <ScrollView showsVerticalScrollIndicator = {false} contentContainerStyle={styles.scrollView}>
                        <Text style={styles.declaredText}>{item.ilan}</Text>
                </ScrollView>
                
                <View style={styles.mapCont}>
                    <MapView
                        style={styles.map}
                        provider = 'google'
                        initialRegion={{
                            latitude: item.lat,
                            longitude:  item.long,
                            latitudeDelta: 0.0022,
                            longitudeDelta: 0.0021,
                            //buraya itemın lat ve long değerleri gelecek
                        }}
                    >   
                        <Marker 
                        
                            coordinate = {{
                                latitude:  item.lat,
                                longitude: item.long
                                
                            }}
                            tracksViewChanges = {false}
                        />

                    </MapView>
                </View>
                
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