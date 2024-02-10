import React from "react";
import { Text } from "react-native";
import WebView from "react-native-webview";

const Home = () => {
    return (
        <WebView
            source={{ uri: 'https://www.w3schools.com/' }}
            style={{
                marginTop: 37
            }}
        />
    );
}

export default Home;