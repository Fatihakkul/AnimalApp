import {StyleSheet,Dimensions} from 'react-native'

const styles = StyleSheet.create({
    safeArea : {
        flex : 1,
    },
    container : {
        flex : 1 , 
        backgroundColor : '#794CF3D1',
        justifyContent : 'flex-end'
    },
    main : {
        height : Dimensions.get('window').height *  4/5,
        width : Dimensions.get('window').width,
        backgroundColor : 'white',
        borderTopEndRadius  : 50,
        borderTopStartRadius : 50,
        alignItems : 'center',
        justifyContent : 'center',
        paddingTop : 25
    },
    myDeclared : {
        width : Dimensions.get('window').width,
        height : 60,
        paddingTop : 10,
        alignItems : 'center'
    },
    myDeclaredButton : {
        borderColor : '#794CF3',
        height : 28,
        width : 85,
        borderWidth : 1,
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 15,
        alignSelf : 'flex-end',
        marginRight : 25,
        marginBottom : 50
    },
    buttonTitle : {
        color : '#794CF3D1',
        fontSize : 18
    },
    myDeclaredText : {
        color  : '#766A99',
        fontSize : 18,
        width : Dimensions.get('window').width * 0.8,
        marginBottom : 5
    },
  
})
export default styles