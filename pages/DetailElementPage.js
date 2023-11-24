// DetailArtifactPage.js
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

const DetailElementPage = ({ route }) => {
  const [elementData, setElementData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://genshin.jmp.blue/elements/${route.params.name.toLowerCase()}`);
        console.log(response.data);
        setElementData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error here
      }
    };

    fetchData();
  }, [route.params.name]);

  if (!elementData) {
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
        <Text style={styles.text}>{elementData.name}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Reaction Name:</Text>
        <Text style={styles.text}>{elementData.reactions[0].name}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Reaction Elements:</Text>
        <Text style={styles.text}>{elementData.reactions[0].elements.join(", ")}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Description:</Text>
        <Text style={styles.text}>{elementData.reactions[0].description}</Text>
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

export default DetailElementPage;
