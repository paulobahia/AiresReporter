/// <reference types="nativewind/types" />

type RootTabParamList = {
    Home: undefined;
    Call: { device: Device };
    Pairing: undefined;
};


type Device = {
    id: string;
    name: string;
    description: string;
}