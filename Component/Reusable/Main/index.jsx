import React, { useCallback, useState } from "react";
import { RefreshControl, ScrollView, View } from "react-native";

const Main = ({ children }) => {

    const [referesh, setReferesh] = useState(false);

    const handleReferesh = useCallback(() => {
        setReferesh(true);
        setTimeout(() => {
            setReferesh(false);
        }, 5000);
    }, [referesh]);

    return (
        <View>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={referesh}
                        onRefresh={handleReferesh}
                        // progressBackgroundColor={'grey'}
                        colors={['red', 'green', 'blue']}
                        // size={'large'}
                    />
                }
            >
                {children}
            </ScrollView>
        </View>
    );
}

export default Main;