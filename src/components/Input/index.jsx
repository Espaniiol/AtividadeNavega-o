import { Text, TextInput, View } from "react-native"
import { styles } from "./styles"


function Input (props){

    return(
        <View>
            <Text style={styles.title}>{props.title}</Text>
            <TextInput
                style={styles.input}
                onChangeText={props.setValue}
            />            
        </View>
    )
}

export default Input