import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 20,
        alignItems: "center",
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: colors.secondary,
    },
    details: {
        marginLeft: 15,
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    title: {
        fontSize: 16,
        color: colors.text,
        marginBottom: 10,
    },
});