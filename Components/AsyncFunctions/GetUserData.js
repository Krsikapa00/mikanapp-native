import { AsyncStorage } from 'react-native'

const getUserValue =async () =>{
    try {
        const value = await AsyncStorage.getItem('user')
        if (value !== null) {
            const response = JSON.parse(value)
            return response;
        }
    } catch (error) {
        alert(error)
    }
}
export default getUserValue;