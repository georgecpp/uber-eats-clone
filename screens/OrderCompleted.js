import React, { useEffect, useState } from "react";
import {View, Text, SafeAreaView} from "react-native";
import { useSelector } from "react-redux";
import GlobalStyles from "../styles/GlobalStyles";
import LottieView from "lottie-react-native";
import firestore from "@react-native-firebase/firestore"; // FOR NATIVE CLI REACT NATIVE
import MenuItems from "../components/restaurantDetail/MenuItems";
import { ScrollView } from "react-native-gesture-handler";


export default function OrderCompleted() {
    const [lastOrder, setLastOrder] = useState({
        items: [
            {
                title: 'Lasagna',
                image: 'https://retete.unica.ro/wp-content/uploads/2013/10/lasagna.jpg',
                description: 'Yummi',
                price: '$13.60'
            },
        ]
    });

    const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems);
    const total = items.map((item => Number(item.price.replace('$','')))).reduce((prev,curr) => prev+curr,0);

    var formatter = Intl.NumberFormat('en-US', {
        style:'currency',
        currency:'USD'
    });

    useEffect(() => {
        const unsubscribe = firestore()
            .collection('orders')
            .orderBy('createdAt', 'desc')
            .limit(1)
            .onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => {
                    setLastOrder(doc.data());
                })
            });
        
            return () => unsubscribe();
    }, []);

    const totalUSD = formatter.format(total);
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea, {flex:1, backgroundColor: "white"}}>
            <View style={{
                margin: 15,
                alignItems: "center",
                height: "100%",
            }}>
                {/* green checkmark */}
                <LottieView style={{height: 100, alignSelf:"center",marginBottom: 30}}
                source={require('../assets/animations/check-mark.json')}
                autoPlay
                speed={0.5}
                loop={false} />
                <Text style= {{fontSize: 20, fontWeight: "bold", marginLeft: 30}}>Your order at {restaurantName} has been placed for {totalUSD}</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <MenuItems foods={lastOrder.items} hideCheckbox={true} marginLeft={10} />
                    {/* cooking */}
                    <LottieView style={{height: 200, alignSelf:"center",marginBottom: 30}}
                    source={require('../assets/animations/cooking.json')}
                    autoPlay
                    speed={0.5}
                    loop={true} />
                </ScrollView>

            </View>

        </SafeAreaView>
    );
}