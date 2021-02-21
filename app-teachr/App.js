import React from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import CarouselTeachr from "./src/components/CarouselTeachr";
import { Dimensions } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.viewHeader}>
        <View
          style={{
            paddingLeft: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Chalkboard SE",
              fontSize: 35,
              color: "white",
            }}
          >
            Teach'rs favoris
          </Text>
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.viewCaroussel}>
          <CarouselTeachr />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  viewHeader: {
    flex: 1,
    backgroundColor: "#1a57d5",
    flexWrap: "wrap",
    fontWeight: "bold",
    // fontSize: 20,
    // color: "white",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  safeArea: {
    flex: 2,
    // backgroundColor: "rebeccapurple",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 150,
  },
  viewCaroussel: {
    flex: 2,
    paddingTop: 20,
    paddingBottom: 20,
    // backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "center",
  },
});
