import React from "react";
import {View, Text} from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";


const foods = [
    {
        title: 'Lasagna',
        image: 'https://retete.unica.ro/wp-content/uploads/2013/10/lasagna.jpg',
        description: 'Yummi',
        price: '$13.60'
    },
    {
        title: 'Tuna Steak',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/13/ed/77/8f/tuna-steak.jpg',
        description: 'Yummi Ocean',
        price: '$20.50'
    },
    {
        title: 'Tandoori Chicken',
        image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
        description: 'Yummi Indian',
        price: '$19.20'
    },
    {
        title: 'Spaghetti',
        image: 'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-3-1200.jpg',
        description: 'Yummi X2',
        price: '$14.50'
    },
];

export default function RestaurantDetail({route, navigation}) {
    return (
        <View style={{flex: 1}}>
            <About route={route} />
            <Divider width={1.8} style={{marginVertical: 20}} />
            <View style={{flex: 1}}>
                <MenuItems restaurantName={route.params.name} foods={foods}/>
            </View>
            <ViewCart navigation={navigation}/>
        </View>
    );
}