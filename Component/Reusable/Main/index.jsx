import React from "react";
import { ScrollView, View } from "react-native";

const Main = ({ children }) => {
    return (
        <View>
            <ScrollView>
                {children}
            </ScrollView>
        </View>
    );
}

export default Main;