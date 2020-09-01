import React, { Component } from 'react'
import Home from './screens/Home.js'
import ConsumptionInfo from './screens/ConsumptionInfo.js'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{
            title: "Home",
            headerStye: {
              backgroundColor: "dodgerblue"
            }

          }}/>
          <Stack.Screen name="Consumption" component={ConsumptionInfo}/>
        </Stack.Navigator>
      </NavigationContainer>
      
    )
  }
}
