import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url:"https://b-iff.ro/wp-content/uploads/2021/04/Cum-sa-faceti-o-rezervare-la-restaurant.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url:"https://b-iff.ro/wp-content/uploads/2021/04/Cum-sa-faceti-o-rezervare-la-restaurant.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1500,
        rating: 4.2,
    },
    {
        name: "India's Grill",
        image_url:"https://b-iff.ro/wp-content/uploads/2021/04/Cum-sa-faceti-o-rezervare-la-restaurant.jpg",
        categories: ["Indian", "Bar"],
        price: "$$",
        reviews: 1000,
        rating: 4.9,
    },
]

export default function RestaurantItems(props) {
    return (
        <TouchableOpacity activeOpacity={1} style={{marginBottom: 30}}>
            {props.restaurantData.map((restaurant, index) => (
            <View 
            key={index} 
            style={{marginTop: 10, padding:15, backgroundColor:"white"}}
            >
                <RestaurantImage image={restaurant.image_url} />
                <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
            </View>
            ))}

        </TouchableOpacity>

    );
}

const RestaurantImage = (props) => (
    <>
        <Image
            style={{width:"100%", height: 180}} 
            source = {{uri: props.image}}
        />
        <TouchableOpacity style ={{position:'absolute', right:20,  top: 20}}>
            <MaterialCommunityIcons name='heart-outline' size={25} color='#fff' />
        </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => (
    <View style={{flexDirection: "row", justifyContent:"space-between", alignItems:"center", marginTop:10}}>
        <View>
          <Text style={{fontSize:15, fontWeight:"bold"}}>{props.name}</Text>
          <Text style={{fontSize: 13, color: "gray"}}>30-45 • min</Text>
        </View>
        <View style={{
            backgroundColor: '#eee',
            height:30,
            width:30,
            alignItems: "center",
            borderRadius: 15,
            justifyContent:"center"
            }}>
          <Text>{props.rating}</Text>
        </View>
    </View>
);
