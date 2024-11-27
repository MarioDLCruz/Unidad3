import { Button, View } from "react-native";

function Recuerdos({navigation}){
    return(
        <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
            <Button
            onPress={()=>navigation.navigate('Perfil')}
            title="Go to Perfil"
            />
        </View>
    );
}
export default Recuerdos;