import React from 'react'
import {
  Text
} from 'react-native'

export function Bold(props) {
  return(
    <Text style={[{ fontSize: 24, marginTop: 12 }, {...props.style}]}>
      {props.children}
    </Text>
  )
}

export function Header(props) {
  return(
    <Text style={[{ fontSize: 24, textAlign: 'center' }, {...props.style}]}>
      {props.children}
    </Text>
  )
}

export function White(props) {
  return(
    <Text style={[{ color: 'white', textAlign: 'center' }, {...props.style}]}>
      {props.children}
    </Text>
  )
}