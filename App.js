import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import Ionicons from '@expo/vector-icons/Ionicons'

const Drawer = createDrawerNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{
                headerStyle: {backgroundColor: '#303030'},
                headerTintColor: '#CC9933',
                drawerActiveTintColor: '#CC9933'
            }}>
                <Drawer.Screen name='WelcomeScreen'
                               component={WelcomeScreen}
                               options={{
                                   drawerLabel: 'Welcome',
                                   // color is passed down from Navigator via drawerActiveTintColor
                                   drawerIcon: ({color}) => <Ionicons name='home' color={color} size={18}/>
                               }}
                />
                <Drawer.Screen name='UserScreen' component={UserScreen}
                               options={{
                    drawerIcon: ({color}) => <Ionicons name='person' color={color} size={18}/>
                }}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
