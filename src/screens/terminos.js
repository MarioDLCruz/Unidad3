import { Button, View } from "react-native";

function Terminos({navigation}){
    return(
        <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
            <Button
            onPress={()=>navigation.navigate('Sesion')}
            title="Go to Sesion"
            />
        </View>
    );
}
export default Terminos;