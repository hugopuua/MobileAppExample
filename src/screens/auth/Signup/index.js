import React, { useState } from "react";
import { View, Text, Colors } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button"
import { styles } from "./styles";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";

import { SafeAreaView } from 'react-native-safe-area-context';

const Signup = () => {
    const [checked, setChecked] = useState(false)

    const onBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView>
        <View styles={styles.container}>
            <AuthHeader onBackPress={onBack} title="Sign up"/>
            <Input lable="Name" placeholder="John Doe"/>
            <Input lable="Email" placeholder="example@gmail.com"/>
            <Input isPassword lable="Password" placeholder="******"/>
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked}/>
                <Text style={styles.agreeText}>I agree with <Text Style={styles.agreeTextBold}>Terms</Text> and <Text Style={styles.agreeTextBold}></Text>Privacy</Text>
            </View>
            <Button style={styles.button} title="Sign In" />
            <Separator text="Or sign up with" />
            <GoogleLogin />
            <Text style={styles.footerText}>Already have an account?
                <Text styles={styles.footerLink}>Sign In</Text>
            </Text>
        </View>
        </SafeAreaView>
    )
}
export default React.memo(Signup)