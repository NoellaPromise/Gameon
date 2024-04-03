import { View, Text,Image } from 'react-native'
import React from 'react'

const ListItem = () => {
  return (
    <View>
      <View style={{flexDirection:'row',alignItems:'center',flex:1}}>
      <Image source={require('../assets/images/FarCry6 (1).png')} 
      style={{width:55,height:55,borderRadius:10, marginLeft:30, marginRight:8}}
      
      />
        </View>
    </View>
  )
}

export default ListItem