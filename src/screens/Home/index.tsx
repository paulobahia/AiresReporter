import { SearchNormal, UserOctagon, Call, LinkCircle, Warning2 } from "iconsax-react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, View, Image, ScrollView, TouchableOpacity, TextInput, FlatList } from "react-native";
import { X, Clipboard } from "lucide-react-native";
import { useState } from "react";

type HomeScreenProps = {
    navigation: StackNavigationProp<RootTabParamList, 'Home'>;
};

const Home: React.FC<HomeScreenProps> = (props) => {

    const { navigation } = props

    const [isShowPairing, setShowPairing] = useState(false)

    const FAKEDATA = [
        {
            id: '1',
            name: 'DEV-Thiago',
            description: 'Autenticado',
        },
        {
            id: '2',
            name: 'Studio Principal',
            description: 'Não Autenticado',
        },
        {
            id: '3',
            name: 'Studio Reserva',
            description: 'Autenticado',
        },
        {
            id: '4',
            name: 'DEV-Paulo',
            description: 'Não Autenticado',
        },
    ];

    return (
        <View className="flex flex-1 bg-background-dark h-screen justify-between pb-12 pt-6 items-center">
            <View className="flex gap-y-5 items-center justify-center w-full px-5">
                <View className="flex w-full">
                    <Text className="text-white text-xl font-bold">
                        Selecionar Studio
                    </Text>
                </View>
                <View className="relative w-full">
                    <View className="absolute right-3 justify-center items-center inset-y-0 flex">
                        <SearchNormal size={16} className=" text-zinc-200" variant="Outline" />
                    </View>
                    <TextInput placeholderTextColor={'#a4a4a4'} selectionColor={'#a4a4a4'} placeholder="Nome do dispositivo" className="flex w-full p-2 bg-transparent border text-sm border-background-light text-white rounded-lg" />
                </View>
                {FAKEDATA.map((device, index) => (
                    <View key={index} className="flex flex-row w-full items-center justify-between gap-y-3">
                        <View className="flex flex-row items-center gap-x-2">
                            <UserOctagon
                                size="50"
                                color="white"
                                variant="Bulk"
                            />
                            <View>
                                <Text className="text-gray-400">
                                    {device.name}
                                </Text>
                                <Text className="text-gray-400/50 text-xs font-light">
                                    {device.description}
                                </Text>
                            </View>
                        </View>
                        <View>
                            {
                                device.description == 'Autenticado'
                                    ?
                                    <TouchableOpacity onPress={() => navigation.navigate('Call', { device })}>
                                        <Call
                                            color="#04D361"
                                            size="25"
                                            variant="Bulk"
                                        />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity>
                                        <Warning2
                                            color="white"
                                            size="32"
                                            variant="Bulk"
                                        />
                                    </TouchableOpacity>
                            }
                        </View>
                    </View>
                ))}
            </View>
            <View className="absolute bottom-12 right-5">
                <View>
                    <View className="relative inline-block items-center">
                        <TouchableOpacity onLongPress={() => navigation.navigate('Pairing')} onPress={() => setShowPairing(!isShowPairing)}>
                            <LinkCircle color="white" size={60} variant="Bulk" />
                        </TouchableOpacity>
                        <View className={`${isShowPairing ? 'opacity-100' : 'opacity-0'} transition-all ease-in-out w-80 right-7 bg-neutral-600 rounded-tr-xl rounded-bl-xl absolute p-3 bottom-full mb-2 pointer-events-none`}>
                            <View className="flex flex-row justify-between">
                                <View>
                                    <Text className="text-white mb-3 text-base font-semibold">
                                        Parar novo dispositivo
                                    </Text>
                                </View>
                                <TouchableOpacity onPress={() => setShowPairing(false)}>
                                    <X className="text-gray-300 mt-1" size={20} />
                                </TouchableOpacity>
                            </View>
                            <Text className="text-white text-xs font-light">
                                Para parear um novo dispositivo insira o código abaixo no seu Aires Studio
                            </Text>
                            <View className="mt-4 border border-gray-300 flex flex-row justify-between rounded-md p-2">
                                <Text className="font-medium text-white">
                                    793570590
                                </Text>
                                <TouchableOpacity >
                                    <Clipboard className="text-gray-100" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Home;