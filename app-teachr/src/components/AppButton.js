import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const AppButton = ({ onPress, title }) => {
  return (
    <View style={{ flex: 1 }}>
      {title === "Prendre un cours avec ce Teach'r" ? (
        <TouchableOpacity
          onPress={onPress}
          style={styles.appButtonCoursContainer}
        >
          <Text style={styles.appButtonCours}>{title}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={onPress}
          style={styles.appButtonDeleteFavorisContainer}
        >
          <Text style={styles.appButtonDeleteFavoris}>{title}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
export default AppButton;

const styles = StyleSheet.create({
  appButtonCoursContainer: {
    elevation: 8,
    backgroundColor: "#1E90FF",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#1E90FF",
  },
  appButtonCours: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#1E90FF",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingVertical: 8,
    paddingHorizontal: 8,
    fontSize: 13,
    color: "#fff",
    fontWeight: "bold",
  },
  appButtonDeleteFavorisContainer: {
    elevation: 8,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#FF4500",
  },
  appButtonDeleteFavoris: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#FF4500",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingVertical: 8,
    paddingHorizontal: 8,
    fontSize: 13,
    color: "#FF4500",
    fontWeight: "bold",
  },
});
