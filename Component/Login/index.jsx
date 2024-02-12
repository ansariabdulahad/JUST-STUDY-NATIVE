import React from "react";
import { Text } from "react-native";
import WebView from "react-native-webview";

const Login = () => {
    return (
        <WebView
            source={{ uri: 'https://profile.w3schools.com/log-in?redirect_url=https%3A%2F%2Fmy-learning.w3schools.com' }}
            style={{
                // marginTop: 37
            }}
        />
    );
}

export default Login;