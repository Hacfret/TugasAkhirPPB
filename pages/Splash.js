import React, { useEffect } from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Main");
    }, 9000);
    // ganti time splashscreen ke (10000)

    return () => clearTimeout(timer);
  }, [navigation]);

  const imageUrl = "https://upload-os-bbs.mihoyo.com/upload/2021/04/21/96734061/6d02d31937b15d6f9cb3b360aece900b_5744561963691469419.gif";

  const { width, height } = Dimensions.get("window");

  return (
    <View style={[styles.container, { backgroundColor: "#191920" }]}>
      {/* Tampilkan teks di atas gambar */}
      <Text style={styles.text}>Genshin Impact Guide App</Text>

      {/* Tampilkan gambar splash screen dari URL */}
      <Image source={{ uri: imageUrl }} style={{ width: width * 0.8, height: height * 0.8 }} resizeMode="center" />

      {/* Tampilkan teks di bawah gambar */}
      <Text style={styles.text}>Ahmad Rizqy Yourin - 21120121140136</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ffffff", // Warna teks putih
    fontSize: 20,
    marginTop: -80,
    marginBottom: -80,
  },
});

export default SplashScreen;
