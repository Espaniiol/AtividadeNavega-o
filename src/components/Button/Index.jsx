import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"


function ButtonGeneric(props){

    const navigation = useNavigation()

    handleScreen = (screen, params) =>{
        navigation.navigate(screen, params)
    }
    return(
        <View>
            <TouchableOpacity
                style={[styles.button, {backgroundColor: props.backgroundColor}]}
                onPress={() => handleScreen(props.destinyScreen, props.params)}>
                <Text style={styles.textButton}>{props.textButton}</Text>
            </TouchableOpacity>    
        </View>
    )
}

export default ButtonGeneric