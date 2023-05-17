import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './Components/LoginPage'
import SignUpPage from './Components/SignUpPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function App() {


  const Stack = createStackNavigator()


  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={LoginPage}
           options = {{
      headerShown: false,
    }} />
        <Stack.Screen name='SignUpPage' component={SignUpPage} options = {{
          headerShown: false
        }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
