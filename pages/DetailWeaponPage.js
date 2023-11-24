// DetailArtifactPage.js
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

const DetailWeaponPage = ({ route }) => {
  const [weaponData, setWeaponData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://genshin.jmp.blue/weapons/${route.params.name.toLowerCase()}`);
        console.log(response.data);
        setWeaponData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error here
      }
    };

    fetchData();
  }, [route.params.name]);

  if (!weaponData) {
    return (
      <View style={styles.container}>
        <Text>Loading Weapons Data...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.text}>{weaponData.name}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Type:</Text>
        <Text style={styles.text}>{weaponData.type}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Rarity:</Text>
        <Text style={styles.text}>{weaponData.rarity}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Base Attack:</Text>
        <Text style={styles.text}>{weaponData.baseAttack}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Sub Stat:</Text>
        <Text style={styles.text}>{weaponData.subStat}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Passive Description:</Text>
        <Text style={styles.text}>{weaponData.passiveDesc}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>How to get:</Text>
        <Text style={styles.text}>{weaponData.location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "left",
    backgroundColor: "#fff",
    padding: 25,
  },
  box: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "left",
  },
  text: {
    fontSize: 16,
    textAlign: "left",
  },
});

export default DetailWeaponPage;
