import React from "react";
import {View, Text, Image} from "react-native";

const image = 'https://b-iff.ro/wp-content/uploads/2021/04/Cum-sa-faceti-o-rezervare-la-restaurant.jpg';
const title = 'Farmhouse Kitchen Thai Cuisine';
const description = 'Thai • Comfort • Food • $$ • 🎫 • 4⭐ (2913+)';

export default function About() {
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle title={title} />
            <RestaurantDescription description={description}/>
        </View>
    );
}

const RestaurantImage = (props) => (
    <Image source={{uri: props.image}} style={{width: "100%", height: 180}}/>
)

const RestaurantTitle = (props) => (
    <Text style={{
        fontSize: 29,
        fontWeight: "bold",
        marginTop: 10,
        marginHorizontal: 15,
    }} >
        {props.title}
    </Text>
)

const RestaurantDescription = (props) => (
    <Text style={{
        marginTop:10,
        marginHorizontal: 15,
        fontWeight: "500",
        fontSize: 15.5,
    }}>{props.description}</Text>
)