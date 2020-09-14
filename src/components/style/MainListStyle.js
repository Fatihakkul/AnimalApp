import {StyleSheet,Dimensions} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const MainListStyle = StyleSheet.create({
    container : {
        width : width * 0.8,
      
        flexDirection : 'row',
        
        justifyContent : 'space-between',
        marginVertical : 10,
        borderRadius : 36,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        overflow : 'hidden'
    },
    image  :{
        width : width * 0.4,
        height : 135 , 
        resizeMode : 'stretch',
    },
    imageCont : {
       
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        alignItems : 'center',
        borderRadius : 36,
        overflow : 'hidden'
    },
    textCont : {
        width : width * 0.4,
        justifyContent : 'space-between',
        borderTopEndRadius : 36,
        borderBottomEndRadius : 36,
       
    },
    button : {
        width : 74,
        height : 24,
        borderRadius : 8,
        borderColor :'#8F56B5',
        borderWidth : 1,
        alignItems : 'center',
        justifyContent : 'center',
        alignSelf : 'flex-end',
        marginRight : 20,
        marginBottom : 16
        
    },
    buttonTitle : {
        color : '#8F56B5',
        fontSize : 15
    },
    name : {
        color : '#766A99',
        fontSize : 25,
        fontWeight : 'bold',
        marginLeft : 15,
        marginTop : 5
    },
    ilan  : {
        fontSize : 15,
        color : '#766A99' ,
        opacity : 0.78,
        width : width * 0.2,
        marginLeft : 15,
        marginBottom : 15
    }
})
export default MainListStyle