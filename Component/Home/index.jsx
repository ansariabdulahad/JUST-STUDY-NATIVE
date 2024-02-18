import React from "react";
import Loader from "../Reusable/Loader";
import { View } from "react-native";
import Font from "../Reusable/Font";

const Home = () => {
    return (
        <View>
            <Font size="xs" style={{ color: 'red' }}>Just CODING</Font>
            <Font size="sm">Just CODING</Font>
            <Font size="md">Just CODING</Font>
            <Font size="lg">Just CODING</Font>
            <Font size="xl">Just CODING</Font>
            <Font size="xxl">Just CODING</Font>
            <Font style={{ color: 'blue' }}>Just CODING</Font>
            <Loader
                size={180}
                color="red"
                style={{
                    margin: 24
                }}
            />
        </View>
    );
}

export default Home;