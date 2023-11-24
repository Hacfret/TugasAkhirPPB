import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import axios from "axios";

const Mondstadt = () => {
  const [mondstadtData, setMondstadtData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://genshin.jmp.blue/nations/mondstadt");
        setMondstadtData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {mondstadtData ? (
        <>
          <TouchableOpacity style={styles.card}>
            <Image
              source={{
                uri: "https://upload-os-bbs.hoyolab.com/upload/2020/07/14/1072831/0386851a028480eb95da974ccd2227ea_213412409097284740.png?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_80",
              }} // Gantilah URL_GAMBAR_ANDA dengan URL gambar yang ingin Anda tampilkan
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Name: {mondstadtData.name}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Image source={{ uri: "https://ih1.redbubble.net/image.1877643934.1786/flat,750x1000,075,f.jpg" }} style={styles.cardImage} />
            <Text style={styles.cardText}>Element: {mondstadtData.element}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Image source={{ uri: "https://staticg.sportskeeda.com/editor/2022/03/a53c2-16479499301416-1920.jpg?w=840" }} style={styles.cardImage} />
            <Text style={styles.cardText}>Archon: {mondstadtData.archon}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Image source={{ uri: "https://preview.redd.it/knights-of-favonius-parade-or-smth-v0-5dmsjmq7msea1.png?auto=webp&s=f84b4ea07a3d17f6495c00597ffb7ee685570397" }} style={styles.cardImage} />
            <Text style={styles.cardText}>Controlling Entity: {mondstadtData.controllingEntity}</Text>
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

export default Mondstadt;
