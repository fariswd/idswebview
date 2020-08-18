import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
} from 'react-native';

import WebviewScreen from './src/screens/WebviewScreen'
import SplashScreen from './src/screens/SplashScreen';
import TosPage from './src/screens/TosPage';
import helpers from './src/utils/helpers'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      splash: false,
      showWebview: false,
    }
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({splash: true})
    }, 2000)
  }
  toWebview(){
    this.setState({ showWebview: true })
  }
  render(){
    const { splash, showWebview } = this.state
    if(!splash){
      return <SplashScreen />
    } else {
      return (
        <View style={{flex: 1}}>
          {!helpers.isAndroid && <StatusBar barStyle="dark-content"/>}
          <SafeAreaView style={{ flex: 1 }}>
            {showWebview
              ? <WebviewScreen />
              : <TosPage buttonFn={() => this.toWebview()} />
            }
          </SafeAreaView>
        </View>
      );
    }
  }
}
