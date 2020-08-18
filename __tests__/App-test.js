/**
 * @format
 */

import 'react-native'
import { TouchableOpacity } from 'react-native'
import React from 'react'
import App from '../App'
import TosScreen from '../src/screens/TosScreen'
import WebviewScreen from '../src/screens/WebviewScreen'
import Enzyme, {shallow} from 'enzyme'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

jest.useFakeTimers()

test('render app', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('hide splashscreen', () => {
  const methodHide = jest.spyOn(App.prototype, 'hideSplashScreen');
  const wrapper = shallow(<App />)
  expect(methodHide).toHaveBeenCalled();
})

test('press on touchable opacity', () => {
  const onPressEvent = jest.fn()
  onPressEvent.mockReturnValue('Link on press invoked')
  const wrapper = shallow(
    <TosScreen buttonFn={onPressEvent} />,
  )
  wrapper.find(TouchableOpacity).first().props().onPress()
  expect(onPressEvent.mock.calls.length).toBe(1)
})

test('render webview', () => {
  const tree = renderer.create(<WebviewScreen />).toJSON()
  expect(tree).toMatchSnapshot()
})
