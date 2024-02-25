import React, { useEffect, useRef, useState } from "react";
import { Animated, Button, View } from "react-native";

const Login = () => {

    const fade = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated
            .loop(
                Animated
                    .sequence([
                        Animated
                            .timing(fade, {
                                toValue: 1,
                                duration: 500,
                                useNativeDriver: true
                            }),
                        Animated
                            .delay(1000),
                        Animated
                            .timing(fade, {
                                toValue: 0,
                                duration: 500,
                                useNativeDriver: true
                            })
                    ]),
                {
                    iterations: 10,
                }
            )
            .start()
    }, []);

    return (
        <View>
            <Animated.View
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: 'blue',
                    margin: 20,
                    opacity: fade
                }}
            />
        </View>
    );
}

export default Login;