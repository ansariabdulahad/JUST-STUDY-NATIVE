import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import WebView from "react-native-webview";
import { Card, Font, Main } from "../Reusable";
import Icon from "react-native-vector-icons/Ionicons";

const data = [
    {
        id: 1,
        courseName: 'React JS',
        image: require('../../assets/welcomeImages/a.png'),
        rating: 3
    },
    {
        id: 2,
        courseName: 'Node JS',
        image: require('../../assets/welcomeImages/b.png'),
        rating: 5
    },
    {
        id: 3,
        courseName: 'React Native',
        image: require('../../assets/welcomeImages/c.png'),
        rating: 4
    },
    {
        id: 4,
        courseName: 'JavaScript',
        image: require('../../assets/welcomeImages/d.png'),
        rating: 2
    },
    {
        id: 5,
        courseName: 'React JS',
        image: require('../../assets/welcomeImages/a.png'),
        rating: 3
    },
    {
        id: 6,
        courseName: 'Node JS',
        image: require('../../assets/welcomeImages/b.png'),
        rating: 5
    },
    {
        id: 7,
        courseName: 'React Native',
        image: require('../../assets/welcomeImages/c.png'),
        rating: 4
    },
    {
        id: 8,
        courseName: 'JavaScript',
        image: require('../../assets/welcomeImages/d.png'),
        rating: 2
    },
    {
        id: 9,
        courseName: 'React JS',
        image: require('../../assets/welcomeImages/a.png'),
        rating: 3
    },
    {
        id: 10,
        courseName: 'Node JS',
        image: require('../../assets/welcomeImages/b.png'),
        rating: 5
    },
    {
        id: 11,
        courseName: 'React Native',
        image: require('../../assets/welcomeImages/c.png'),
        rating: 4
    },
    {
        id: 12,
        courseName: 'JavaScript',
        image: require('../../assets/welcomeImages/d.png'),
        rating: 2
    }
]

const Course = () => {

    const RenderItem = ({ item }) => {
        return (
            <View style={{
                backgroundColor: 'white',
                elevation: 8,
                marginBottom: 16,
                borderRadius: 4,
                flexDirection: 'row'
            }}>
                <Image
                    source={item.image}
                    style={{
                        width: 100,
                        height: 60
                    }}
                />
                <View style={{
                    padding: 6
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold'
                    }}>{item.courseName}</Text>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        {
                            Array(item.rating).fill(0).map((item, index) => (
                                <Icon
                                    name="star"
                                    color={'tomato'}
                                    style={{
                                        marginRight: 1
                                    }}
                                    key={index}
                                />
                            ))
                        }
                        {
                            Array(5 - item.rating).fill(0).map((item, index) => (
                                <Icon
                                    name="star-outline"
                                    color={'tomato'}
                                    style={{
                                        marginRight: 1
                                    }}
                                    key={index}
                                />
                            ))
                        }
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={{
            padding: 20
        }}>
            <FlatList
                data={data}
                renderItem={RenderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

export default Course;