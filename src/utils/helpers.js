import React from 'react'
import {
  Platform
} from 'react-native'

const helpers = {
  isAndroid: Platform.OS == 'android'
}

export default helpers