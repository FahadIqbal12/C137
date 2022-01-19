import * as React from 'react';
import {View,Text} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home';
import Details from './screens/Details';
export default class App extends React.Component{
    render(){
        return(
            <AppContainer/>
        )
    }
}

const appStackNavigator = createStackNavigator({
  HomeScreen:{
    screen:Home,
    navigationOptions:{
      headerShown:false
    }
  },
  DetailsScreen:{
    screen:Details,
  }
  },
  {
  initialRouteName:"HomeScreen"
}
)

const AppContainer = createAppContainer(appStackNavigator)