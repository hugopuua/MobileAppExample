import React from "react";
import { Pressable, Image, Text } from "react-native"
import { styles } from "./styles";

const ProductHomeItem = ({title, image, price, onPress}) => {
    return (
        <Pressable onPress={onPress} styles={styles.container}>
            <Image styles={styles.image} source={{uri: image}}/>
            <Text styles={styles.title}>{title}</Text>
            <Text styles={styles.price}>{price}</Text>
        </Pressable>
    )
}
export default React.memo(ProductHomeItem)