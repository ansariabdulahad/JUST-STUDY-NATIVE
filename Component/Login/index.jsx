import React, { useEffect, useRef, useState } from "react";
import { Animated, Button, Text, View } from "react-native";

const Login = () => {

    const anim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(anim, {
                    toValue: 1,
                    useNativeDriver: false
                }),
                Animated.timing(anim, {
                    toValue: 2,
                    useNativeDriver: false
                }),
                Animated.timing(anim, {
                    toValue: 3,
                    useNativeDriver: false
                }),
                Animated.timing(anim, {
                    toValue: 4,
                    useNativeDriver: false
                })
            ]),
            {
                iterations: 5,
                useNativeDriver: true
            }
        ).start();
    }, []);

    return (
        <View>
            <Animated.View
                style={{
                    width: anim.interpolate({
                        inputRange: [0, 1, 2, 3, 4],
                        outputRange: [20, 40, 60, 80, 100]
                    }),
                    height: anim.interpolate({
                        inputRange: [0, 1, 2, 3, 4],
                        outputRange: [20, 40, 60, 80, 100]
                    }),
                    margin: 20,
                    opacity: 1,
                    backgroundColor: anim.interpolate({
                        inputRange: [0, 1, 2, 3, 4],
                        outputRange: ['red', 'green', 'blue', 'yellow', 'black'],
                    })
                }}
            />
        </View>
    );
}

export default Login;