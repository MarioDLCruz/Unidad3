import { Button, View } from "react-native";

function Inicio({navigation}){
    return(
        <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
            <Button
            onPress={()=>navigation.navigate('Registro')}
            title="Go to Registro"
            />
        </View>
    );
}
export default Inicio;