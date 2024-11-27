import { Button, View } from "react-native";

function Evento({navigation}){
    return(
        <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
            <Button
            onPress={()=>navigation.navigate('Configuracion')}
            title="Go to Configuracion"
            />
        </View>
    );
}
export default Evento;