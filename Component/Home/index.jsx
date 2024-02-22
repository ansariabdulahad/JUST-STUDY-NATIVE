import React, { useCallback, useState } from "react";
import { Button, Card, Main } from "../Reusable";

const Home = () => {

    const [x, setX] = useState(false);
    const handle = useCallback(() => {
        setX(!x);
    }, []);

    return (
        <Main>
            <Card
                image={require('../../assets/welcomeImages/a.png')}
            />
            <Button
                onPress={handle}
            >Test</Button>
        </Main>
    );
}

export default Home;