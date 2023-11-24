// DetailArtifactPage.js
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

const DetailDomainPage = ({ route }) => {
  const [domainData, setCharacterData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://genshin.jmp.blue/domains/${route.params.name.toLowerCase()}`);
        console.log(response.data);
        setCharacterData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error here
      }
    };

    fetchData();
  }, [route.params.name]);

  if (!domainData) {
    return (
      <View style={styles.container}>
        <Text>Loading Domain Data...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.text}>{domainData.name}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Type:</Text>
        <Text style={styles.text}>{domainData.type}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Description:</Text>
        <Text style={styles.text}>{domainData.description}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Location:</Text>
        <Text style={styles.text}>{domainData.location}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Recommended Elements:</Text>
        {domainData.recommendedElements.map((element, index) => (
          <Text key={index} style={styles.text}>
            {element}
          </Text>
        ))}
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Drop Artifacts:</Text>
        {domainData.rewards.map((reward, index) => (
          <View key={index}>
            {reward.details && reward.details.length > 0 && reward.details[0].drops && reward.details[0].drops.length > 0 ? (
              <Text style={styles.text}>{reward.details[0].drops[0].name}</Text>
            ) : (
              <Text style={styles.text}>No drop details available</Text>
            )}
          </View>
        ))}
      </View>
      {/* <View style={styles.box}>
        <Text style={styles.label}>Drop Name:</Text>
        <Text style={styles.text}>{domainData.rewards[0].details[0].drops[0].name}</Text>
        <Text style={styles.text}>{domainData.rewards[1].details[0].drops[0].name}</Text>
        <Text style={styles.text}>{domainData.rewards[2].details[0].drops[0].name}</Text>
      </View> */}
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

export default DetailDomainPage;
