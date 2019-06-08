import { AsyncStorage } from 'react-native'

const onStoreData = async (key,data) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(data))
        return true;
    } catch (error) {
        alert(error)
    }
}

export default onStoreData;
