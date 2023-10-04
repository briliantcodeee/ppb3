import { NavigationContainer } from '@react-navigation/native';
import Router from './src/navigation';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
        <Router />
    </NavigationContainer>
  );
}
