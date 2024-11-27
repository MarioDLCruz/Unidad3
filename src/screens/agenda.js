import { Button, View } from "react-native";

function Agenda({navigation}){
    return(
        <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
            <Button
            onPress={()=>navigation.navigate('Organizar')}
            title="Go to Organizar"
            />
        </View>
    );
}
export default Agenda;