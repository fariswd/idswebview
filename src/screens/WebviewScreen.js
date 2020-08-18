import React from 'react'
import {
  View,
  Text,
  ActivityIndicator,
} from 'react-native'
import { WebView } from 'react-native-webview';
import Loading from '../components/Loading'

import Colors from '../constants/Colors'

export default class WebviewScreen extends React.Component {
  render(){
    return (
      <View style={{flex: 1}}>
        <WebView
          source={{ uri: 'https://www.indonesiadefenceservices.com/' }}
          startInLoadingState={true}
          renderLoading={() => <Loading />}
        />
      </View>
    )
  }
}