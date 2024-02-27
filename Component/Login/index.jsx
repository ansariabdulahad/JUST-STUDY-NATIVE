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
                    width: 50,
                    height: 50,
                    backgroundColor: 'red',
                    transform: [
                        {
                            translateX: anim.interpolate({
                                inputRange: [0, 1, 2, 3, 4],
                                outputRange: [0, 200, 200, 0, 0]
                            })
                        },
                        {
                            translateY: anim.interpolate({
                                inputRange: [0, 1, 2, 3, 4],
                                outputRange: [0, 0, 200, 200, 0]
                            })
                        }
                    ]
                }}
            />

            <Animated.Text
                style={{
                    fontSize: anim.interpolate({
                        inputRange: [0, 1, 2, 3, 4],
                        outputRange: [20, 40, 80, 90, 100]
                    })
                }}
            >
                WELCOME TO JFC
            </Animated.Text>

            <Animated.Image
                source={require('../../assets/welcomeImages/a.png')}
                style={{
                    width: 200,
                    height: 200,
                    opacity: anim.interpolate({
                        inputRange: [0, 1, 2, 3, 4],
                        outputRange: [0, 0.2, 0.5, 0.7, 1]
                    })
                }}
            />
        </View>
    );
}

export default Login;