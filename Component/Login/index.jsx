import React, { useEffect, useRef, useState } from "react";
import { Animated, Button, ScrollView, Text, View } from "react-native";

const Login = () => {

    const a = useRef(new Animated.Value(0)).current;
    const b = useRef(new Animated.Value(0)).current;
    const c = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.stagger(200, [
            Animated.timing(a, {
                toValue: 1,
                useNativeDriver: true
            }),
            Animated.timing(b, {
                toValue: 1,
                useNativeDriver: true
            }),
            Animated.timing(c, {
                toValue: 1,
                useNativeDriver: true
            })
        ]).start();
    }, []);

    return (
        <ScrollView style={{
            padding: 20
        }}>
            <Animated.Image
                source={require('../../assets/welcomeImages/a.png')}
                style={{
                    width: 390,
                    height: 240,
                    marginBottom: 20,
                    opacity: a
                }}
            />
            <Animated.Image
                source={require('../../assets/welcomeImages/b.png')}
                style={{
                    width: 390,
                    height: 240,
                    marginBottom: 20,
                    opacity: b
                }}
            />
            <Animated.Image
                source={require('../../assets/welcomeImages/c.png')}
                style={{
                    width: 390,
                    height: 240,
                    marginBottom: 20,
                    opacity: c
                }}
            />
        </ScrollView>
    );
}

export default Login;