import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from "../screens/loadingScreen";
import MainScreen from "../screens/mainScreen";
import ChoiceScreen from "../screens/choiceScreen";
import ConnectionScreen from "../screens/connectionScreen";
import LoginScreen from "../screens/loginScreen";

export type RouteParams = {
    LoadingScreen: undefined;
    MainScreen: undefined;
    ChoiceScreen : undefined;
    ConnectionScreen : {
        type : string
    };
    LoginScreen : {
        type : string | undefined
    }
};

const Stack = createNativeStackNavigator<RouteParams>();

export const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Group>
                <Stack.Screen name="LoadingScreen" component={LoadingScreen}/>
                <Stack.Screen name="ChoiceScreen" component={ChoiceScreen}/>
                <Stack.Screen name="MainScreen" component={MainScreen} options={{animation : "slide_from_right"}}/>
                <Stack.Screen name="ConnectionScreen" component={ConnectionScreen} options={{animation : "slide_from_right"}}/>
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{animation : "slide_from_right"}}/>
            </Stack.Group>
        </Stack.Navigator>
    )
}