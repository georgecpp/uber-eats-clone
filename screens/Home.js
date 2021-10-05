import React, { useEffect, useState } from "react";
import {View, Text, SafeAreaView, ScrollView} from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItems, { localRestaurants } from "../components/RestaurantItems";
import SearchBar from "../components/SearchBar";
import GlobalStyles from "../styles/GlobalStyles";
import {YELP_API_KEY} from "@env";


export default function Home() {
    const [restaurantData, setRestaurantData] = useState(localRestaurants)
    const [city, setCity] = useState("San Francisco");
    const [activeTab, setActiveTab] = useState("Delivery");

    const getRestaurantsFromYelp = () => {
        if(YELP_API_KEY === 'GO_FIND_SOME') {
            return;
        }
        // console.log(YELP_API_KEY+"ba cam nu bagam");
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,   
            }
        }

        return fetch(yelpUrl, apiOptions)
        .then((res) => res.json()
        .then((json) => setRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase())))));

    };

    useEffect(() => {
        getRestaurantsFromYelp();
      }, [city, activeTab]);

    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <View style = {{backgroundColor:"white", padding:15}}>
             <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
             <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView vertical showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData}  />
            </ScrollView>
        </SafeAreaView>
    );
}