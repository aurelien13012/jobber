import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from './screens/loadingScreen';
import MainScreen from './screens/mainScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Loading'>
        <Stack.Screen name="Loading" component={LoadingScreen} initialParams={{time : 5000, screen : "Main"}}/>
        <Stack.Screen name="Main" component={MainScreen}/>
        <LoadingScreen time={5000} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

