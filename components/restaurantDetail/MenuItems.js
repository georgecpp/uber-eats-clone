import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const foods = [
    {
        title: 'Lasagna',
        image: 'https://retete.unica.ro/wp-content/uploads/2013/10/lasagna.jpg',
        description: 'Yummi',
        price: '$13.60'
    },
    {
        title: 'Spaghetti',
        image: 'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-3-1200.jpg',
        description: 'Yummi X2',
        price: '$14.50'
    },
    {
        title: 'Lasagna',
        image: 'https://retete.unica.ro/wp-content/uploads/2013/10/lasagna.jpg',
        description: 'Yummi',
        price: '$13.60'
    },
    {
        title: 'Lasagna',
        image: 'https://retete.unica.ro/wp-content/uploads/2013/10/lasagna.jpg',
        description: 'Yummi',
        price: '$13.60'
    },
    {
        title: 'Lasagna',
        image: 'https://retete.unica.ro/wp-content/uploads/2013/10/lasagna.jpg',
        description: 'Yummi',
        price: '$13.60'
    },
    {
        title: 'Lasagna',
        image: 'https://retete.unica.ro/wp-content/uploads/2013/10/lasagna.jpg',
        description: 'Yummi',
        price: '$13.60'
    },
    {
        title: 'Spaghetti',
        image: 'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-3-1200.jpg',
        description: 'Yummi X2',
        price: '$14.50'
    },
    {
        title: 'Spaghetti',
        image: 'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-3-1200.jpg',
        description: 'Yummi X2',
        price: '$14.50'
    },
];

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: "row", 
        justifyContent: "space-between",
        margin: 20,
    },

    titleStyle: {
        fontSize: 19,
        fontWeight: "700"
    }, 
})
export default function MenuItems() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food,index) => (
            <View key={index}>
                <View style={styles.menuItemStyle}>
                <BouncyCheckbox iconStyle={{borderColor: "lightgray", borderRadius: 0}} fillColor="green"/>
                <FoodInfo food={food} />
                <FoodImage food={food}/>
                </View>
                <Divider width={0.5} orientation="vertical" style={{marginHorizontal:20}} />
            </View>
            ))}
        </ScrollView>
    );
}

const FoodInfo = (props) => (
    <View style={{width: 240, justifyContent: "space-evenly" }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
)

const FoodImage = (props) => (
    <View>
        <Image source={{uri: props.food.image}} style={{width: 100, height: 100, borderRadius: 8}}/>
    </View>
)