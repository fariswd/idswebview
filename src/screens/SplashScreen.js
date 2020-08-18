import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'

export default class SplashScreen extends React.Component{
  render(){
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Image
          style={{width: 100, height: 100}}
          source={{ uri: 'https://assets.website-files.com/5a1a80a445a0eb000187a6ee/5a5e17799629620001d0331d_IDS%20LOGO%20web.gif'}}
        />
      </View>
    )
  }
}