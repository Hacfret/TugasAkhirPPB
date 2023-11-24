import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import axios from "axios";

const Inazuma = () => {
  const [inazumaData, setInazumaData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://genshin.jmp.blue/nations/inazuma");
        setInazumaData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {inazumaData ? (
        <>
          <TouchableOpacity style={styles.card}>
            <Image
              source={{
                uri: "https://static.wikia.nocookie.net/gensin-impact/images/2/2f/Inazuma.png/revision/latest/scale-to-width-down/1200?cb=20230818202755",
              }} // Gantilah URL_GAMBAR_ANDA dengan URL gambar yang ingin Anda tampilkan
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Name: {inazumaData.name}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Image
              source={{
                uri: "https://static.wikia.nocookie.net/gensin-impact/images/1/11/Item_Electro_Sigil.png/revision/latest?cb=20210806024715",
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Element: {inazumaData.element}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Image source={{ uri: "https://preview.redd.it/kk1k2b4r5cn71.png?width=1200&format=png&auto=webp&s=b06aa91187108f80b35c4d3adb15ce858f79bf6a" }} style={styles.cardImage} />
            <Text style={styles.cardText}>Archon: {inazumaData.archon}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Image source={{ uri: "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/07/Genshin-Impacts-Tri-Commission-Explained.jpg" }} style={styles.cardImage} />
            <Text style={styles.cardText}>Controlling Entity: {inazumaData.controllingEntity}</Text>
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

export default Inazuma;
