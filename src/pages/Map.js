import React from 'react'
import {SafeAreaView,View,StyleSheet} from 'react-native'
import MapView from 'react-native-maps'


const Map =props=>{
    return(
        <View style={styles.container}>
          <MapView
            provider='google'
            style={styles.map}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
      }}
    />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });
export {Map}