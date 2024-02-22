import React, { useEffect, useState } from "react";
import { Modal, View } from "react-native";
import { Loader, Font, Button, Main, Card } from "../Reusable";
import { error, info, primary, secondary, success, warning } from "../Reusable/Color";

const Home = () => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true)
        }, 5000);
    }, [visible])

    const Action = (price) => {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Font size={'md'}>$ {price}</Font>
                <Button size={'sm'}
                    onPress={() => setVisible(false)}
                >Close Modal</Button>
            </View>
        )
    }

    return (
        <Main>
            <Button
                onPress={() => setVisible(true)}
            >Open Modal</Button>
            <Modal
                visible={visible}
                transparent={true}
                animationType="slide"
            >
                <View style={{
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    flex: 1,
                    justifyContent: 'center',
                    padding: 20
                }}>
                    <Card
                        image={require('../../assets/welcomeImages/a.png')}
                        title={'React JS'}
                        description={'Enroll in React JS Course'}
                        action={() => Action(5000)}
                    />
                </View>
            </Modal>
        </Main>
    );
}

export default Home;