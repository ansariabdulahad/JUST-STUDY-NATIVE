import React, { useEffect, useRef, useState } from "react";
import { Animated, Button, View } from "react-native";

const Login = () => {

    const [finish, setFinish] = useState(false);
    const height = useRef(new Animated.Value(20)).current; // useref use when you want to change varaibale as muted - means it not render again and again.
    const width = useRef(new Animated.Value(20)).current;
    const opacity = useRef(new Animated.Value(0)).current;

    const open = () => { // Animated.parallel & Animated.sequence

        Animated
            .sequence([
                Animated
                    .timing(height, {
                        toValue: 300,
                        duration: 1000,
                        useNativeDriver: false
                    }),
                Animated
                    .timing(width, {
                        toValue: 300,
                        duration: 1000,
                        useNativeDriver: false
                    }),
                // Animated
                //     .timing(opacity, {
                //         toValue: 1,
                //         duration: 1000,
                //         useNativeDriver: false
                //     })
            ])
            .start(() => setFinish(true));
    }

    const close = () => {

        Animated
            .sequence([
                Animated
                    .timing(height, {
                        toValue: 20,
                        duration: 1000,
                        useNativeDriver: false
                    }),
                Animated
                    .timing(width, {
                        toValue: 20,
                        duration: 1000,
                        useNativeDriver: false
                    }),
                // Animated
                //     .timing(opacity, {
                //         toValue: 0,
                //         duration: 1000,
                //         useNativeDriver: false
                //     })
            ])
            .start(() => setFinish(false));
    }

    return (
        <View>
            <Button
                title="Animate Now"
                onPress={finish ? close : open}
            />
            <Animated.View
                style={{
                    width: width,
                    height: height,
                    backgroundColor: 'tomato',
                    margin: 20,
                    // opacity: opacity
                }}
            />
        </View>
    );
}

export default Login;