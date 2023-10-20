import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Call, Home, Pairing } from '../screens';

const Stack = createNativeStackNavigator();

const Router: React.FC = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Pairing' component={Pairing} />
            <Stack.Screen name='Call' component={Call} />
        </Stack.Navigator>
    )
}

export default Router;