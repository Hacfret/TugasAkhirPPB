// DetailArtifactPage.js
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

const DetailCharacterPage = ({ route }) => {
  const [characterData, setCharacterData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://genshin.jmp.blue/characters/${route.params.name.toLowerCase()}`);
        console.log(response.data);
        setCharacterData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error here
      }
    };

    fetchData();
  }, [route.params.name]);

  if (!characterData) {
    return (
      <View style={styles.container}>
        <Text>Loading Character Data...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.text}>{characterData.name}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Title:</Text>
        <Text style={styles.text}>{characterData.title}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Vision:</Text>
        <Text style={styles.text}>{characterData.vision}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Weapon:</Text>
        <Text style={styles.text}>{characterData.weapon}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Gender:</Text>
        <Text style={styles.text}>{characterData.gender}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Nation:</Text>
        <Text style={styles.text}>{characterData.nation}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Rarity:</Text>
        <Text style={styles.text}>{characterData.rarity}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Description:</Text>
        <Text style={styles.text}>{characterData.description}</Text>
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

export default DetailCharacterPage;
