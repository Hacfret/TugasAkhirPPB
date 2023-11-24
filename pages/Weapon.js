// Data.js
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome5"; // ikon FontAwesome5!

const WeaponPage = () => {
  const [weaponsData, setWeaponsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://genshin.jmp.blue/weapons");
        console.log(response.data);
        setWeaponsData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error here
      }
    };

    fetchData();
  }, []);

  const Card = ({ weapon }) => {
    const navigation = useNavigation();

    const navigateToDetail = () => {
      navigation.navigate("DetailWeaponPage", {
        name: weapon,
        // Kirim parameter lain jika diperlukan
      });
    };

    return (
      <TouchableOpacity onPress={navigateToDetail} style={styles.card}>
        <Text style={styles.cardTitle}>
          {""}
          <Icon name="star" size={20} color="#e3b019" />
          {"    "}
          {weapon}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>List of Weapons:</Text>
        <Text>Klik salah satu card untuk masuk ke detail</Text>
      </View>
      <FlatList data={weaponsData} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => <Card weapon={item} />} contentContainerStyle={styles.listContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },

  headerContainer: {
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
  },

  listContainer: {
    flexGrow: 1,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    elevation: 2, // For Android
    shadowColor: "#000", // For iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: "100%",
    alignSelf: "flex-start",
    borderWidth: 1, // Lebar garis tepi (outline border)
    borderColor: "#003459", // Warna garis tepi
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "normal",
    color: "#333",
  },
});

export default WeaponPage;
