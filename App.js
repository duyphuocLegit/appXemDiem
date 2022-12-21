import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from './screens/Login'
import Trangchu from './screens/Trangchu';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen 
      options={{headerLeft: () => <></>,gestureEnabled:false}} 
      name='Trangchu' 
      component={Trangchu}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}