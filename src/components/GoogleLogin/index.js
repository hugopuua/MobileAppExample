import React from "react";
import { Image, TouchableOpacity } from "react-native";
import {styles} from './styles'

const GoogleLogin = () => {
    const signIn = async () => {
        try {
            await GoogleSingin.hasPlayService();
            const userInfo = await GoogleSingin.signIn();
            // this.setState({ userInfo });
            console.log('userInfo => ', userInfo)
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in proegress already
            } else if (error.code === statusCodes.PLAY_SERVICE_NOT_AVAILABLE) {
                // play service not available or outdated
            } else {
                // some other error happened
            }
        }
    }

    return(
        <TouchableOpacity accessibilityActions={0.6} style={styles.container}>
            <Image style={styles.image} source={require('../../assets/Gmail.png')}></Image>        
        </TouchableOpacity>
    )
}
export default React.memo(GoogleLogin)