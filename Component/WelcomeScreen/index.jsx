import React from "react";
import { Image, Text, View } from "react-native";
import Slider from "react-native-app-intro-slider";
import Styles from "./WelcomeScreen.style";
import Icon from "react-native-vector-icons/Ionicons";

const slides = [
    {
        key: 1,
        image: require('../../assets/welcomeImages/a.png')
    },
    {
        key: 2,
        image: require('../../assets/welcomeImages/b.png')
    },
    {
        key: 3,
        image: require('../../assets/welcomeImages/c.png')
    },
    {
        key: 4,
        image: require('../../assets/welcomeImages/d.png')
    },
    {
        key: 5,
        image: require('../../assets/welcomeImages/e.png')
    }
];

const WelcomeScreen = ({ navigation }) => {

    const RenderItem = ({ item }) => {
        return (
            <View style={Styles.main}>
                <Image
                    source={item.image}
                    resizeMode="cover"
                    style={Styles.image}
                />
            </View>
        );
    }

    const NextButton = () => {
        return (
            <View style={Styles.roundedButton}>
                <Icon
                    name="arrow-forward-outline"
                    size={24}
                    color={"#fff"}
                />
            </View>
        );
    }

    const DoneButton = () => {
        return (
            <View style={Styles.roundedButton}>
                <Icon
                    name="checkmark-outline"
                    size={24}
                    color={"#fff"}
                />
            </View>
        );
    }

    const SkipButton = () => {
        return (
            <View style={Styles.roundedButton}>
                <Icon
                    name="airplane-outline"
                    size={24}
                    color={"#fff"}
                />
            </View>
        );
    }

    return (
        <Slider
            data={slides}
            renderItem={RenderItem}
            renderNextButton={NextButton}
            renderDoneButton={DoneButton}
            showSkipButton={true}
            renderSkipButton={SkipButton}
            onDone={() => navigation.navigate('Layout')}
            onSkip={() => navigation.navigate('Layout')}
        />
    );
}

export default WelcomeScreen;