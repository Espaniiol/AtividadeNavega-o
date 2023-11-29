import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    header:{
        marginTop: 100,
        marginLeft: 100
    },
    title:{
        fontSize: 18,
        marginBottom: 50,
        color: "#333333",
        fontWeight: 'bold'
    },
    title2:{
        fontWeight: 'bold',
        fontSize: 18,
        color: "#333333"
    },
    containerResults:{
        alignItems: "center",
        gap: 20,
        marginTop: 40,
        flex: 1
    },
    identifier:{
        fontSize: 43,
        fontWeight: 'bold',
        color: "#333333"
        
    },
    textResult:{
        fontSize: 25,
        color: "#6F6B73",
        fontWeight: 'bold'
    },
    Buttons:{
        justifyContent: "center",
        flexDirection: "row",
        gap: 10
    }
})