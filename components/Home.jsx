import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";

import CarButton from "./CarButton";

const Home = ({ cars }) => {
  const { name, subTitle, hyperLinkText, image } = cars;

  return (
    <View style={styles.garethContainer}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.headline}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subTitle}>
            {subTitle} <Text style={styles.hyperLinkText}>{hyperLinkText}</Text>
          </Text>
        </View>
      </ImageBackground>

      <View style={styles.buttonContainer}>
        <CarButton
          type="primary"
          text={"Custom Order"}
          onPress={() => {
            console.log("Primary button pressed");
          }}
        />
        <CarButton
          type="secondary"
          text={"Custom Order"}
          onPress={() => {
            console.log("Secondary button pressed");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  garethContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  headline: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
  hyperLinkText: {
    textDecorationLine: "underline",
  },
});

export default Home;
