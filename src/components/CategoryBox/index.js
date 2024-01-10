import React from "react";
import { Pressable, Image, Text, View } from "react-native"
import { styles } from "./styles";

const CategoryBox = ({title, image, onPress}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View styles={styles.imageContainer}>
                <Image styles={styles.image} source={{uri: image}}/>
            </View>
        </Pressable>
    )
}

export default React.memo(CategoryBox)