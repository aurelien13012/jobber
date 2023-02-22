import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootNavigator } from './navigation/navigation';
import LoadingScreen from './screens/loadingScreen';
import MainScreen from './screens/mainScreen';

type RootStackParamList = {
  LoadingScreen: { time: number, screen: string };
  MainScreen: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  );
}

