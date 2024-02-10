import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    main: {
        flex: 1
    },
    image: {
        width: '100%',
        height: '100%',
    },
    roundedButton: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40 / 2
    }
});

export default Styles;