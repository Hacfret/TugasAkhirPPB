import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5"; // ikon FontAwesome5!

const Nations = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text>Berikut 4 list negara yang ada di dalam game, klik untuk mengetahui lebih lanjut:</Text>
      </View>
      <CustomCard title="Mondstadt" onPress={() => navigation.navigate("Mondstadt")} />
      <CustomCard title="Liyue" onPress={() => navigation.navigate("Liyue")} />
      <CustomCard title="Inazuma" onPress={() => navigation.navigate("Inazuma")} />
      <CustomCard title="Sumeru" onPress={() => navigation.navigate("Sumeru")} />

      {/* Tambahkan card lainnya sesuai kebutuhan */}
    </View>
  );
};

const CustomCard = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Icon name="chess-queen" size={20} color="#003459" />
          <Text style={styles.cardText}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00171f",
    padding: 20,
  },
  textContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: "100%",
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%",
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 5,
  },
});

export default Nations;
