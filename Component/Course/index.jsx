import React from "react";
import { Text, View } from "react-native";
import WebView from "react-native-webview";
import { Card, Main } from "../Reusable";

const Course = () => {
    return (
        <Main>
            <Card
                image={require('../../assets/welcomeImages/a.png')}
            />
        </Main>
    );
}

export default Course;