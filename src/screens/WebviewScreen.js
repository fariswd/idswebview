import React from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  BackHandler,
} from 'react-native'
import { WebView } from 'react-native-webview';

import Loading from '../components/Loading'
import Colors from '../constants/Colors'
import helpers from '../utils/helpers'

export default class WebviewScreen extends React.Component {
  constructor(){
    super()
    this.state = {
      webUrl: 'https://www.indonesiadefenceservices.com/'
    }
  }
  componentDidMount(){
    if(helpers.isAndroid){
      BackHandler.addEventListener('hardwareBackPress', () => {
        if (!this.onMainScreen()) {
          this.goBack();
          return true;
        }
        return false;
      });
    }
  }
  componentWillUnmount(){
    if(helpers.isAndroid){
      BackHandler.removeEventListener('hardwareBackPress', () => {
        return false;
      });
    }
  }
  onMainScreen(){
    return this.state.webUrl == 'https://www.indonesiadefenceservices.com/'
  }
  goBack(){
    this.webRef.goBack()
  }
  render(){
    return (
      <View style={{flex: 1}}>
        <WebView
          ref={webRef => this.webRef = webRef}
          source={{ uri: 'https://www.indonesiadefenceservices.com/' }}
          startInLoadingState={true}
          onNavigationStateChange={(webState) => {
            this.setState({webUrl: webState.url})
          }}
          renderLoading={() => <Loading />}
        />
      </View>
    )
  }
}