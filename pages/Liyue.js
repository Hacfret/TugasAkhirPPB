import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import axios from "axios";

const Liyue = () => {
  const [liyueData, setLiyueData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://genshin.jmp.blue/nations/liyue");
        setLiyueData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {liyueData ? (
        <>
          <TouchableOpacity style={styles.card}>
            <Image
              source={{
                uri: "https://static.wikia.nocookie.net/gensin-impact/images/0/0c/Liyue_Harbor.png/revision/latest?cb=20220612170326",
              }} // Gantilah URL_GAMBAR_ANDA dengan URL gambar yang ingin Anda tampilkan
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Name: {liyueData.name}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Image
              source={{
                uri: "data:image/png;base64,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",
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Element: {liyueData.element}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Image source={{ uri: "https://cdn.oneesports.gg/cdn-data/2022/01/GenshinImpact_Zhongli_drinking_tea.jpg" }} style={styles.cardImage} />
            <Text style={styles.cardText}>Archon: {liyueData.archon}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Image source={{ uri: "https://static.wikia.nocookie.net/gensin-impact/images/8/89/Liyue_Qixing.png/revision/latest?cb=20220330172043" }} style={styles.cardImage} />
            <Text style={styles.cardText}>Controlling Entity: {liyueData.controllingEntity}</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    width: "80%", // Adjust the width as needed
  },
  cardImage: {
    width: "100%",
    height: 125, // Adjust the height as needed
    borderRadius: 8,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
  },
});

export default Liyue;
