// DetailArtifactPage.js
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

const DetailEnemiesPage = ({ route }) => {
  const [enemiesData, setEnemiesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://genshin.jmp.blue/enemies/${route.params.name.toLowerCase()}`);
        console.log(response.data);
        setEnemiesData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error here
      }
    };

    fetchData();
  }, [route.params.name]);

  if (!enemiesData) {
    return (
      <View style={styles.container}>
        <Text>Loading Enemies Data...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.text}>{enemiesData.name}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Description:</Text>
        <Text style={styles.text}>{enemiesData.description}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Type:</Text>
        <Text style={styles.text}>{enemiesData.type}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Family:</Text>
        <Text style={styles.text}>{enemiesData.family}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Drops:</Text>
        {Array.isArray(enemiesData.drops) ? (
          enemiesData.drops.map((drop, index) => (
            <Text key={index} style={styles.text}>
              {drop.name}
            </Text>
          ))
        ) : (
          <Text style={styles.text}>{enemiesData.drops}</Text>
        )}
      </View>

      <View style={styles.box}>
        <Text style={styles.label}>Elements:</Text>
        <Text style={styles.text}>{enemiesData.elements.join(", ")}</Text>
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

export default DetailEnemiesPage;
