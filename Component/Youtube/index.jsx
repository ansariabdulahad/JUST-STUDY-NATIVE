import React from "react";
import { Text } from "react-native";
import WebView from "react-native-webview";

const Youtube = () => {
    return (
        <WebView
            source={{ uri: 'https://www.youtube.com/' }}
            style={{
                marginTop: 37
            }}
        />
    );
}

export default Youtube;