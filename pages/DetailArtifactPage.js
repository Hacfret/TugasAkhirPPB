// DetailArtifactPage.js
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

const DetailArtifactPage = ({ route }) => {
  const [artifactData, setArtifactData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://genshin.jmp.blue/artifacts/${route.params.name.toLowerCase()}`);
        console.log(response.data);
        setArtifactData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error here
      }
    };

    fetchData();
  }, [route.params.name]);

  if (!artifactData) {
    return (
      <View style={styles.container}>
        <Text>Loading Artifact Data...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.text}>{artifactData.name}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Max Rarity:</Text>
        <Text style={styles.text}>{artifactData.max_rarity}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>1-piece Bonus:</Text>
        <Text style={styles.text}>{artifactData["1-piece_bonus"]}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>2-piece Bonus:</Text>
        <Text style={styles.text}>{artifactData["2-piece_bonus"]}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>4-piece Bonus:</Text>
        <Text style={styles.text}>{artifactData["4-piece_bonus"]}</Text>
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

export default DetailArtifactPage;
