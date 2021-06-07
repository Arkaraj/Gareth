import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Platform,
  StatusBar as SB,
} from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo.png")}
      />
      <Image
        style={styles.menu}
        source={require("../assets/images/menu.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    paddingTop: Platform.OS === "android" ? SB.currentHeight : 0,
    zIndex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: "contain",
  },
  menu: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});

export default Header;
