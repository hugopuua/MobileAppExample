import React, { useState } from "react";
import { View, Text } from "react-native"
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import { styles } from "./styles";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";

const Singup = () => {
    const [checked, setChecked] = useState(false)

    return (
        <View style={styles.container}>
            <AuthHeader title="Sing Up"/>
            <Input label="Name" placeholder="John Doe"/>
            <Input label="Email" placeholder="example@gmail.com"/>
            <Input isPassword label="Password" placeholder="******"/>
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} oncheck={setChecked}/>
                <Text style={styles.agreeText}>I agree with<Text style={styles.agreeTextBold}> Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
            </View>
            <button style={styles.button} title="Sing In" />
            <Separator text="Or sing up with" />
            <GoogleLogin />
        </View>
    )
}
export default React.memo(Singup)