import { UserOctagon, Call as Phone, VolumeHigh, MicrophoneSlash } from "iconsax-react-native";

import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from '@react-navigation/native';
import { useState } from "react";


type CallScreenProps = {
    navigation: StackNavigationProp<RootTabParamList, 'Call'>;
    route: RouteProp<RootTabParamList, 'Call'>
};

const Call: React.FC<CallScreenProps> = ({ route, navigation }) => {
    const { id, name, description } = route.params.device
    const [isMute, setIsMute] = useState(false)

    return (
        <View className="flex flex-1 justify-evenly items-center bg-background-dark">
            <View className="flex justify-center items-center gap-y-3">
                <UserOctagon
                    size="200"
                    color="white"
                    variant="Bulk"
                />
                <View className="flex justify-center items-center gap-y-2">
                    <Text className="text-neutral-400 font-normal text-base">Ligando</Text>
                    <Text className="text-neutral-200 font-bold text-3xl">{name}</Text>
                </View>
            </View>
            <View className="flex flex-row justify-center items-center gap-x-5">
                <TouchableOpacity className="bg-gray-400/50 p-4 rounded-full">
                    <VolumeHigh size="40" color="white" variant="Bold" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} className="bg-gray-500 p-3 rounded-full">
                    <View className="bg-red-500/70 p-4 rounded-full">
                        <Phone size="65" color="white" variant="Bold" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIsMute(!isMute)} className={`${isMute ? 'opacity-100 bg-white' : 'opacity-40 bg-gray-400'} transition-all ease-in p-4 rounded-full`}>
                    {
                        isMute
                            ?
                            <MicrophoneSlash size="40" color="black" variant="Bold" />
                            :
                            <MicrophoneSlash size="40" color="white" variant="Bold" />
                    }
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Call;