import { Button, View } from "react-native";

function Perfil({navigation}){
    return(
        <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
            <Button
            onPress={()=>navigation.navigate('Agenda')}
            title="Go to Agenda"
            />
        </View>
    );
}
export default Perfil;