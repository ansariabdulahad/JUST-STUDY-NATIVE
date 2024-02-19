import React from "react";
import { View } from "react-native";
import { Loader, Font, Button } from "../Reusable";
import { error, info, primary, secondary, success, warning } from "../Reusable/Color";

const Home = () => {
    return (
        <View
            style={{
                flexDirection: 'row'
            }}
        >
            <Button
                size={'lg'}
                backgroundColor="red"
            >
                Sumit
            </Button>
        </View>
    );
}

export default Home;