import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from "../screens/loadingScreen";
import MainScreen from "../screens/mainScreen";

type RouteParams = {
    LoadingScreen: undefined;
    MainScreen: undefined
};

const Stack = createNativeStackNavigator<RouteParams>();

export const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name="LoadingScreen" component={LoadingScreen}/>
                <Stack.Screen name="MainScreen" component={MainScreen}/>
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default RouteParams;