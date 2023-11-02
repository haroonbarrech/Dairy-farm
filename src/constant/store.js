import AsyncStorage from '@react-native-async-storage/async-storage';

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('LogIn', jsonValue)
    } catch (e) {
      // saving error
    }
  }
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('LogIn')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('LogIn')
    } catch(e) {
      // remove error
    }
  
    console.log('Done.')
  }
  
  
  
  export {storeData, getData, removeValue};   
