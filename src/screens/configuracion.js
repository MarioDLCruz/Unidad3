import { Button, View } from "react-native";

function Configuracion({navigation}){
    return(
        <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
            <Button
            onPress={()=>navigation.navigate('Inicio')}
            title="Go to Inicio"
            />
        </View>
    );
}
export default Configuracion;