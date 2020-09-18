import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {
    Login,
    Register,
    SplashScreen,
    Declared,
    Main
} from './pages'

const Stack = createStackNavigator();


function Router (){
    return( <NavigationContainer>
        <Stack.Navigator initialRouteName="Main"> 
            <Stack.Screen name="Main" component={Main} options={{ headerShown : false}}/>
            <Stack.Screen name="Declared" component={Declared}   options={{ headerShown : false}}/>
        </Stack.Navigator>
    </NavigationContainer> )
}
export default Router