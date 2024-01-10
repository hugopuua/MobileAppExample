import React from "react";
import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header"
import { styles } from "./styles";
import { categories } from "../../../data/categories";
import CategoryBox from "../../../components/CategoryBox";

const Home = () => {
    const renderCategoryItem = (item, index) => {
        console.log('item => ', item)
        return(
            <CategoryBox title={item?.title} image={item?.image}/>
        )
    }

    const renderProductItem = ({item}) => {
        console.log('item => ', item)
        return (
            <ProductHomeItem {...item}/>
        )
    }

    retun (
        <SafeAreaView>
            <View style={styles.container}>
                <header showSearch={true} title="Find All You Need" />
                <FlatList showHorizontalScrollIndicator={false} style={styles.list} horizontal data={categoties} rendetItem={renderCategoryItem} keyExtractor={(item, index) => String(index)}/>
                <FlatList numColumns={2} data={products} renderItem={renderProductItem} keyExtractor={(item) => String(item.id)} ListFooterComponent={<View style={{height: 250}}/>} />
                <Text>Home</Text>
            </View>
        </SafeAreaView>
    )
}
export default React.memo(home)