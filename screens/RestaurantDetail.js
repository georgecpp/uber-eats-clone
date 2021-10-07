import React from "react";
import {View, Text} from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

export default function RestaurantDetail({route, navigation}) {
    return (
        <View style={{flex: 1}}>
            <About route={route} />
            <Divider width={1.8} style={{marginVertical: 20}} />
            <View style={{flex: 1}}>
                <MenuItems />
                <ViewCart navigation={navigation} restaurantName={route.params.name}/>
            </View>
        </View>
    );
}