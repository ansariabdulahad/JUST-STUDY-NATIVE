import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Button, Font } from "../";

const Card = ({
    image = null,
    title = null,
    description = null,
    action = null,
    ...rest
}) => {
    return (
        <TouchableOpacity {...rest}>
            <View style={{
                backgroundColor: 'white',
                borderRadius: 12,
                elevation: 10,
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                marginBottom: 20
            }}>
                {
                    image &&
                    <Image
                        source={image}
                        resizeMode="repeat"
                        style={{
                            width: '100%',
                            height: 200,
                            borderTopRightRadius: 12,
                            borderTopLeftRadius: 12
                        }}
                    />
                }
                <View style={{
                    padding: 20
                }}>
                    {
                        title &&
                        <Font size={'lg'}>{title}</Font>
                    }
                    {
                        description &&
                        <Font size={'md'}
                            style={{
                                marginTop: 4
                            }}
                        >{description}</Font>
                    }
                    {
                        action &&
                        <View style={{
                            marginTop: 20
                        }}>
                            {action()}
                        </View>
                    }
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default Card;