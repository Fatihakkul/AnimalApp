import React from 'react'
import {SafeAreaView,View,Text, FlatList, Pressable} from 'react-native'
import {MainListItem} from '../components'
import styles from '../style/MainStyle'

import data from '../data.json'

const Main =props=>{


    const renderList =({item})=>{
        return(
            <MainListItem data={item}/>
        )
    }

    return(
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.main}>
                    <View style={styles.myDeclared}>
                        <Text numberOfLines={1} style={styles.myDeclaredText}>sdasdasdasdasdasdfsdfsdfsdasdasdasdasdasdd</Text>
                        <Pressable style={styles.myDeclaredButton}>
                            <Text style={styles.buttonTitle}>İLANIM</Text>
                        </Pressable>
                       
                    </View>
                 
                    <View style={{marginTop : 20}}>
                        <FlatList 
                            keyExtractor={(_,index)=>index.toString()}
                            data = {data}
                            renderItem = {renderList}
                            showsVerticalScrollIndicator = {false}
                        />
                    </View>
                   
                </View>
            </View>
        </SafeAreaView>
    )
}
export {Main}