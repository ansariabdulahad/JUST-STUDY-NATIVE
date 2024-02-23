import React, { useCallback, useState } from "react";
import { RefreshControl, ScrollView, View } from "react-native";

const Main = ({ children, onScroll = null, ...rest }) => {

    return (
        <View>
            <ScrollView
                onScroll={onScroll}
                refreshControl={
                    <RefreshControl {...rest} />
                }
            >
                {children}
            </ScrollView>
        </View>
    );
}

export default Main;