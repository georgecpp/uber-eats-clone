import React from "react";
import {View, Text, Image} from "react-native";

const yelpRestaurantInfo = {
    name: "Farmhouse Kitchen Thai Cuisine",
    image: "https://b-iff.ro/wp-content/uploads/2021/04/Cum-sa-faceti-o-rezervare-la-restaurant.jpg",
    price: "$$",
    reviews: "1500",
    rating: 4.5,
    categories: [{title: "Indian"}, {title: "Comfort Food"}, {title: "Coffee"}, {title: "Ice Cream"}, {title: "Snacks"}],
};


export default function About(props) {
    const {name,image,price,reviews,rating,categories} = props.route.params;

    const formattedCategories = categories.map((cat) => cat.title).join(" • ");

    const description = `${formattedCategories} ${price ? " • " + price : ""} • 🎫 • ${rating} ⭐ (${reviews}+)`; 

    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description}/>
        </View>
    );
}

const RestaurantImage = (props) => (
    <Image source={{uri: props.image}} style={{width: "100%", height: 180}}/>
)

const RestaurantName = (props) => (
    <Text style={{
        fontSize: 29,
        fontWeight: "bold",
        marginTop: 10,
        marginHorizontal: 15,
    }} >
        {props.name}
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

