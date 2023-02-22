import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from './screens/loadingScreen';
import MainScreen from './screens/mainScreen';

type RootStackParamList = {
  Loading : {time : number , screen : string},
  Main : undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='Loading'>
        <RootStack.Screen name="Loading" component={LoadingScreen} initialParams={{time : 5000, screen : "Main"}}/>
        <RootStack.Screen name="Main" component={MainScreen}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

