import { Button, View } from "react-native";

function Organizar({navigation}){
    return(
        <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
            <Button
            onPress={()=>navigation.navigate('Evento')}
            title="Go to Evento"
            />
        </View>
    );
}
export default Organizar;