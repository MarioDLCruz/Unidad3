import React from 'react';
import { NativeBaseProvider, Center, Box, VStack, FormControl, Input, Button, Checkbox, Text, Link, Icon, HStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const Example = () => {
    const navigation = useNavigation();

    return (
        <Center w="100%" flex={1} bg="#FF0080">
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

                {/* Campos de entrada para el formulario de registro */}
                <VStack space={4} w="100%" alignItems="center">
                    <FormControl>
                        <Input 
                            placeholder="Ingresa un nombre de usuario" 
                            variant="outline" 
                            bg="white" 
                            borderColor="black" 
                            borderRadius="md" 
                            _focus={{ borderColor: "black" }} 
                            InputLeftElement={<Icon as={<FontAwesome name="user" />} size={5} ml="2" color="black" />}
                        />
                    </FormControl>
                    
                    <FormControl>
                        <Input 
                            placeholder="Ingresa tu correo electronico" 
                            variant="outline" 
                            bg="white" 
                            borderColor="black" 
                            borderRadius="md" 
                            _focus={{ borderColor: "black" }} 
                            InputLeftElement={<Icon as={<FontAwesome name="envelope" />} size={5} ml="2" color="black" />}
                        />
                    </FormControl>
                    
                    <FormControl>
                        <Input 
                            placeholder="Añade una contraseña" 
                            type="password" 
                            variant="outline" 
                            bg="white" 
                            borderColor="black" 
                            borderRadius="md" 
                            _focus={{ borderColor: "black" }} 
                            InputLeftElement={<Icon as={<FontAwesome name="lock" />} size={5} ml="2" color="black" />}
                        />
                    </FormControl>
                    
                    <FormControl>
                        <Input 
                            placeholder="Confirma tu contraseña" 
                            type="password" 
                            variant="outline" 
                            bg="white" 
                            borderColor="black" 
                            borderRadius="md" 
                            _focus={{ borderColor: "black" }} 
                            InputLeftElement={<Icon as={<FontAwesome name="lock" />} size={5} ml="2" color="black" />}
                        />
                    </FormControl>

                    {/* Checkbox de aceptación de términos y condiciones */}
                    <Checkbox value="terminos" colorScheme="yellow" my="2">
                        <Text color="black" fontSize="xs">
                            Estoy de acuerdo con los <Text color="#FFEE00">Términos y Condiciones</Text>
                        </Text>
                    </Checkbox>

                    {/* Botón de registro */}
                    <Button 
                        mt="4" 
                        bg="#FFEE00" 
                        _pressed={{ bg: "#FFDD00" }} 
                        borderRadius="md"
                        width="100%"
                        onPress={() => navigation.navigate('MainApp')}
                    >
                        REGISTRARSE
                    </Button>

                    {/* Enlace para iniciar sesión */}
                    <HStack mt="4" justifyContent="center">
                        <Text fontSize="sm" color="black">
                            ¿Ya tienes una cuenta?{" "}
                        </Text>
                        <Link _text={{
                            color: "#FFEE00",
                            fontWeight: "bold",
                            fontSize: "sm"
                        }} onPress={() => navigation.navigate('Sesion')}>
                            INGRESA
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
