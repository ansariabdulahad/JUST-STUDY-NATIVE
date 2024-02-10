import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home";
import Course from "../Course";
import Login from "../Login";
import Youtube from "../Youtube";
import Icon from "react-native-vector-icons/Ionicons";
import Notifications from "../Notifications";

const { Navigator, Screen } = createBottomTabNavigator();

const LayoutScreen = () => {

    const screenOptions = ({ route }) => ({
        tabBarIcon: ({ focused }) => {
            switch (route.name) {
                case "Home": return <Icon
                    name={focused ? "home" : "home-outline"}
                    size={24}
                    color={focused ? "tomato" : "grey"}
                />
                case "Course": return <Icon
                    name={focused ? "book" : "book-outline"}
                    size={24}
                    color={focused ? "tomato" : "grey"}
                />
                case "Youtube": return <Icon
                    name={focused ? "play-circle" : "play-circle-outline"}
                    size={24}
                    color={focused ? "tomato" : "grey"}
                />
                case "Login": return <Icon
                    name={focused ? "log-in" : "log-in-outline"}
                    size={24}
                    color={focused ? "tomato" : "grey"}
                />
                case "Notifications": return <Icon
                    name={focused ? "notifications" : "notifications-outline"}
                    size={24}
                    color={focused ? "tomato" : "grey"}
                />
                default: return null
            }
        },
        tabBarActiveTintColor: "tomato",
        tabBarInActiveTintColor: "grey",
        headerShown: false
    });

    return (
        <Navigator screenOptions={screenOptions}>
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="Course"
                component={Course}
            />
            <Screen
                name="Youtube"
                component={Youtube}
            />
            <Screen
                name="Login"
                component={Login}
            />
            <Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarBadge: 7
                }}
            />
        </Navigator>
    );
}

export default LayoutScreen;