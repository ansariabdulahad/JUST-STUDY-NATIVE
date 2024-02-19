import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { primary } from "../Color";
import { Font } from '../';

const Button = ({ children, backgroundColor = primary, size, color = "white", type }) => {
    return (
        <TouchableOpacity>
            <View style={{
                backgroundColor: type === "outline" ? null : backgroundColor,
                borderWidth: type === "outline" ? 1 : null,
                borderColor: type === "outline" ? backgroundColor : null,
                paddingVertical: (size === "sm" && 6) || (size === "md" && 10) || (size === "lg" && 16) || 10,
                paddingHorizontal: (size === "sm" && 12) || (size === "md" && 16) || (size === "lg" && 18) || 12,
                alignItems: 'center',
                borderRadius: 4
            }}>
                <Font
                    size={size}
                    style={{ color: type === "outline" ? backgroundColor : color }}
                >{children}</Font>
            </View>
        </TouchableOpacity>
    );
}

export default Button;