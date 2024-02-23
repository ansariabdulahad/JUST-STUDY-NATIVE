import React, { useCallback, useState } from "react";
import { Button, Card, Main } from "../Reusable";
import { View } from "react-native";

const Home = () => {

    const [refreshHome, setRefreshHome] = useState(false);

    const handle = useCallback(() => {
        setRefreshHome(true);
        setTimeout(() => {
            setRefreshHome(false);
        }, 5000);
    }, [refreshHome]);

    const detectScrollEnd = ({ nativeEvent }) => {
        const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;

        if ((layoutMeasurement.height + contentOffset.y) >= (contentSize.height - 20)) {
            console.log("Scroll End !");
        }
    }

    return (
        <Main
            refreshing={refreshHome}
            onRefresh={handle}
            colors={['red', 'green', 'yellow', 'blue']}
            onScroll={detectScrollEnd}
        >
            <View style={{
                padding: 20
            }}>
                {
                    Array(10).fill('JUST FOR CODE').map((item, index) => (
                        <Card
                            title={item}
                            key={index}
                            image={require('../../assets/welcomeImages/a.png')}
                        />
                    ))
                }
                <Button
                    onPress={handle}
                >Test</Button>
            </View>
        </Main >
    );
}

export default Home;