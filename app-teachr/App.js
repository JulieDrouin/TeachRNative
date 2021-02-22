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
            paddingLeft: 30,
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
    alignItems: "center",
    justifyContent: "center",
  },
  viewHeader: {
    flex: 1,
    backgroundColor: "#1E90FF",
    flexWrap: "wrap",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  safeArea: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  viewCaroussel: {
    flex: 2,
    marginTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
});
