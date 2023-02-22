import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './navigation/navigation';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  );
}

