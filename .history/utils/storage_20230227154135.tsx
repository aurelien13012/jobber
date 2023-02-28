import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = (value : object) : void => {

}

export const getItem = (key : string ) : string => {

}

export const removeItem = (key? : string) : void => {
    key ? AsyncStorage.clear(key) : AsyncStorage.clear();
}
 
