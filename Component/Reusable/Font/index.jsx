import React from "react";
import { Text } from "react-native";

const Font = ({ children, size = null, style }) => {
    switch (size) {
        case 'xs': return <Text style={{ fontSize: 12, ...style }}>{children}</Text>
        case 'sm': return <Text style={{ fontSize: 14, ...style }}>{children}</Text>
        case 'md': return <Text style={{ fontSize: 18, ...style }}>{children}</Text>
        case 'lg': return <Text style={{ fontSize: 24, ...style }}>{children}</Text>
        case 'xl': return <Text style={{ fontSize: 30, ...style }}>{children}</Text>
        case 'xxl': return <Text style={{ fontSize: 36, ...style }}>{children}</Text>
        default: return <Text style={style}>{children}</Text>
    }
}

export default Font;