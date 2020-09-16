import {StyleSheet,Dimensions} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const DeclaredStyle = StyleSheet.create({
    Image  : {
         width : width,
         height : height * 2/7,
         resizeMode : 'stretch'
     },
    ImageCont : {
        overflow : 'hidden',
        borderBottomEndRadius : 36,
        borderBottomStartRadius : 36
    },
    backButton : {
        width : 26 ,
        height : 34,
        position : 'absolute',
        alignSelf : 'flex-start',
        left: 15,
        top : 15
    },
    starButton : {
        width : 34 ,
        height : 30,
        position : 'absolute' ,
        alignSelf : 'flex-end',
        top : 15,
        right : 15
    },
    title : {
        color : '#766A99',
        fontSize : 30 ,
        fontWeight : 'bold',
        marginLeft : 14,
        marginTop : 25
    },
    declaredText : {
        color : '#766A99',
        fontSize : 18,
        marginLeft  : 14,
      
    },
    scrollView : {
        height : 147,
        marginRight : 10,
        marginTop : 23,
      
    },
    adoptButton : {
        height  : 43,
        width : 173,
        borderWidth : 2,
        borderRadius : 7,
        borderColor : '#8F56B5',
        alignItems : 'center',
        justifyContent : 'center'
    },
   titleButton : {
        fontSize : 18,
        fontWeight : 'bold'
   },
   buttonCont : {
       alignItems : 'center',
       flexDirection : 'row',
       justifyContent : 'space-between',
       paddingHorizontal : 22,
       marginBottom : 10
   },
   map : {
       width : width,
       height : 150,
       marginBottom : 15
   }

})

export default DeclaredStyle