import React from "react";
import { ActivityIndicator } from "react-native";

const Loader = (props) => {
    return (
        <ActivityIndicator
            {...props}
        />
    );
}

export default Loader;