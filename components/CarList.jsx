import React from "react";
import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import cars from "./cars";
import HeaderScreen from "./Header";
import Home from "./Home";

const CarList = () => {
  return (
    <View style={styles.container}>
      <HeaderScreen />
      <FlatList
        data={cars}
        renderItem={({ item }) => <Home cars={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

export default CarList;
