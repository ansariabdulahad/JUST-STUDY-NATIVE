import React from "react";
import { Text } from "react-native";
import WebView from "react-native-webview";

const Course = () => {
    return (
        <WebView
            source={{ uri: 'https://www.w3schools.com/react/default.asp' }}
            style={{
                // marginTop: 37
            }}
        />
    );
}

export default Course;