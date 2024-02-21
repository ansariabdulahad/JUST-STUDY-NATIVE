import React from "react";
import { View } from "react-native";
import { Loader, Font, Button, Main, Card } from "../Reusable";
import { error, info, primary, secondary, success, warning } from "../Reusable/Color";

const Home = () => {

    const Action = ({ price }) => {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Font size={'md'}>$ {price}</Font>
                <Button size={'sm'}
                    onPress={() => alert('react')}
                >Enroll Now</Button>
            </View>
        )
    }

    return (
        <Main>
            <View style={{
                padding: 20
            }}>
                <Card
                    image={require('../../assets/welcomeImages/a.png')}
                    title={'React JS'}
                    description={'Purchase this course at 50% off !'}
                    action={() => <Action price="3000" />}
                />
                <Card
                    image={require('../../assets/welcomeImages/b.png')}
                    title={'Angular JS'}
                    description={'Purchase this course at 50% off !'}
                    action={() => <Action price="2000" />}
                />
                <Card
                    image={require('../../assets/welcomeImages/c.png')}
                    title={'Node JS'}
                    description={'Purchase this course at 50% off !'}
                    action={() => <Action price="5000" />}
                />
                <Card
                    image={require('../../assets/welcomeImages/d.png')}
                    title={'MongoDb'}
                    description={'Purchase this course at 50% off !'}
                    action={() => <Action price="1000" />}
                />
            </View>
        </Main>
    );
}

export default Home;