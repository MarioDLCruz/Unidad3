import React from 'react';
import { Center, Box, Heading, VStack, FormControl, Input, Link, Button, HStack, Text, Checkbox, NativeBaseProvider, Icon } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Example = () => {
    const navigation = useNavigation();

    return (
        <Center w="100%" flex={1} bg="#FFEE00">
            <Box safeArea p="4" py="8" w="90%" maxW="300" alignItems="center">
                
                {/* Encabezado con el logo y título */}
                <Box flexDirection="row" mb="5" alignItems="center">
                    <Box bg="#B138F5" borderRadius="md" px="4" py="1" mr="2">
                        <Text color="white" fontWeight="bold" fontSize="2xl">Linker</Text>
                    </Box>
                    <Box bg="#00E3D8" borderRadius="md" px="4" py="1">
                        <Text color="black" fontWeight="bold" fontSize="2xl">Bash</Text>
                    </Box>
                </Box>
                
                {/* Campo de entrada para el usuario */}
                <VStack space={4} w="100%" alignItems="center">
                    <FormControl>
                        <Input 
                            placeholder="Ingresa tu usuario" 
                            variant="outline" 
                            bg="white" 
                            borderColor="black" 
                            borderRadius="md" 
                            _focus={{ borderColor: "black" }} 
                            InputLeftElement={<Icon as={<FontAwesome name="user" />} size={5} ml="2" color="black" />}
                        />
                    </FormControl>
                    
                    {/* Campo de entrada para la contraseña */}
                    <FormControl>
                        <Input 
                            placeholder="Ingresa tu contraseña" 
                            type="password" 
                            variant="outline" 
                            bg="white" 
                            borderColor="black" 
                            borderRadius="md" 
                            _focus={{ borderColor: "black" }} 
                            InputLeftElement={<Icon as={<FontAwesome name="lock" />} size={5} ml="2" color="black" />}
                        />
                    </FormControl>
                    
                    {/* Checkbox para mantener sesión iniciada */}
                    <Checkbox value="mantener" colorScheme="pink" my="2" defaultIsChecked>
                        <Text color="black" fontSize="xs">Mantener sesión iniciada</Text>
                    </Checkbox>
                    
                    {/* Botón de inicio de sesión */}
                    <Button 
                        mt="4" 
                        bg="#FF0080" 
                        _pressed={{ bg: "#FF66A3" }} 
                        borderRadius="md"
                        width="100%"
                        onPress={() => navigation.navigate('MainApp')}
                    >
                        INICIAR SESION
                    </Button>
                    
                    {/* Enlace para registrarse */}
                    <HStack mt="4" justifyContent="center">
                        <Text fontSize="sm" color="black">
                            ¿No tienes una cuenta?{" "}
                        </Text>
                        <Link _text={{
                            color: "#FF0080",
                            fontWeight: "bold",
                            fontSize: "sm"
                        }} onPress={() => navigation.navigate('Registro')}>
                            REGISTRARSE
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </Center>
    );
};

export default function App() {
    return (
        <NativeBaseProvider>
            <Example />
        </NativeBaseProvider>
    );
}
