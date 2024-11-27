import { Button, View } from "react-native";

function HomeScreen({navigation}){
    return(
        <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
            <Button
            onPress={()=>navigation.navigate('Notification')}
            title="Go to Notification"
            />
        </View>
    );
}
export default HomeScreen;

/*
dimport React from 'react';
import { Alert } from 'react-native';
import { NativeBaseProvider, Box, Center, VStack, HStack, Text, IconButton, Icon, Image, Button, Divider, ScrollView } from 'native-base';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const EventCard = ({ user, date, description, onAccept, onDelete }) => {
  return (
    <Box bg="white" p="4" borderRadius="lg" shadow={5} mb="5" borderWidth="2" borderColor="black">
      <Box bg="purple.600" px="3" py="1" borderRadius="full" alignSelf="center" position="absolute" top="-10">
        <Text color="white" fontWeight="bold" fontSize="xs">
          {user}
        </Text>
      </Box>
      <Image source={{ uri: 'https://via.placeholder.com/150' }} alt="Event Image" w="150" h="150" borderRadius="md" />
      <VStack mt="3" space="2">
        <Text fontWeight="bold" fontSize="lg">Mis XV años</Text>
        <Text fontSize="md" color="black">{date}</Text>
        <Text color="coolGray.600" fontSize="sm">
          {description}
        </Text>
        <HStack mt="3" justifyContent="space-between" alignItems="center">
          <Button bg="#FFEE00" _pressed={{ bg: "#FFDD00" }} borderRadius="md" borderWidth="2" borderColor="black" onPress={() => Alert.alert('Asistiré!')}>
            Asistiré
          </Button>
          <IconButton icon={<Icon as={FontAwesome} name="close" size="md" color="#FF0080" />} borderWidth="2" borderColor="black" borderRadius="full" onPress={() => Alert.alert('Evento eliminado')} />
        </HStack>
      </VStack>
    </Box>
  );
};

const HomeScreen = () => {
  return (
    <Box flex={1} bg="#00A3FF">
      {/* Barra de Navegación Superior *//*
      <Box bg="#00E3D8" py="4" px="3" borderBottomWidth="2" borderColor="black">
        <HStack alignItems="center">
          <IconButton icon={<Icon as={Ionicons} name="menu" size="lg" color="black" />} />
          <Text fontSize="xl" fontWeight="bold" color="black" ml="2">Linker Bash</Text>
        </HStack>
      </Box>

      {/* Contenido del ScrollView para las tarjetas de eventos *//*
      <ScrollView flex={1} p="4">
        <EventCard
          user="Diana González"
          date="20/03/24"
          description="Acompáñame a celebrar mi fiesta de XV años"
          onAccept={() => Alert.alert('¡Asistiré!')}
          onDelete={() => Alert.alert('Evento eliminado')}
        />
        <EventCard
          user="Pedro Jiménez"
          date="24/09/24"
          description="Peda en mi casa para celebrar mi cumpleaños"
          onAccept={() => Alert.alert('¡Asistiré!')}
          onDelete={() => Alert.alert('Evento eliminado')}
        />
      </ScrollView>

      {/* Barra de Navegación Inferior *//*
      <Box bg="white" p="2" borderTopWidth="2" borderColor="black">
        <HStack justifyContent="space-around" alignItems="center">
          <IconButton icon={<Icon as={Ionicons} name="calendar-outline" size="lg" color="black" />} />
          <IconButton icon={<Icon as={Ionicons} name="book-outline" size="lg" color="black" />} />
          <Center bg="#FFEE00" w="12" h="12" borderRadius="full" borderWidth="2" borderColor="black">
            <Icon as={Ionicons} name="search" size="lg" color="black" />
          </Center>
          <IconButton icon={<Icon as={Ionicons} name="images-outline" size="lg" color="black" />} />
          <IconButton icon={<Icon as={Ionicons} name="person-outline" size="lg" color="black" />} />
        </HStack>
      </Box>
    </Box>
  );
};

export default function App() {
  return (
    <NativeBaseProvider>
      <HomeScreen />
    </NativeBaseProvider>
  );
}

*/