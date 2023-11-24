import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import axios from "axios";

const Sumeru = () => {
  const [sumeruData, setSumeruData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://genshin.jmp.blue/nations/sumeru");
        setSumeruData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {sumeruData ? (
        <>
          <TouchableOpacity style={styles.card}>
            <Image
              source={{
                uri: "https://static.wikia.nocookie.net/gensin-impact/images/1/11/Sumeru.png/revision/latest?cb=20221123012821",
              }} // Gantilah URL_GAMBAR_ANDA dengan URL gambar yang ingin Anda tampilkan
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Name: {sumeruData.name}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Image
              source={{
                uri: "https://i.pinimg.com/originals/94/11/9a/94119a39f381a19df93a774d87d6d793.png",
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Element: {sumeruData.element}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Image source={{ uri: "https://www.tech-critter.com/wp-content/uploads/2022/10/Genshin-Impact-v3.2-0ANahida-1.jpg" }} style={styles.cardImage} />
            <Text style={styles.cardText}>Archon: {sumeruData.archon}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Image source={{ uri: "https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Commission_Akademiya_Q%26A.png/revision/latest?cb=20220902172930" }} style={styles.cardImage} />
            <Text style={styles.cardText}>Controlling Entity: {sumeruData.controllingEntity}</Text>
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

export default Sumeru;
