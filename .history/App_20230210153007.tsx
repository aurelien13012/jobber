import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from './screens/loadingScreen';
import MainScreen from './screens/mainScreen';

type RootStackParamList = {
  LoadingScreen: { time: number, screen: string },
  MainScreen: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='LoadingScreen'>
        <RootStack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          initialParams={{ time: 5000, screen: "Main" }}
        />
        <RootStack.Screen name="MainScreen" component={MainScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

