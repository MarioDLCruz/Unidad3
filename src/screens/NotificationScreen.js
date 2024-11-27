import { Button, View } from "react-native";

function NotificationScreen({navigation}){
    return(
        <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
            <Button
            onPress={()=>navigation.navigate('Recuerdos')}
            title="Go to Recuerdos"
            />
        </View>
    );
}

export default NotificationScreen;
