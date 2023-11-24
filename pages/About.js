import { View, Text, Image, StyleSheet } from "react-native";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://avatars.githubusercontent.com/u/90461402?s=400&u=592877703c547e291f93d477d8e72a47512ee86b&v=4" }} style={styles.profileImage} />
      <View style={styles.textContainer}>
        <Text style={styles.description}>Dikerjakan untuk memenuhi Tugas Akhir Mata Kuliah Praktikum Pemrograman Perangkat Bergerak</Text>
        <Text style={styles.profileInfo}>Nama: Ahmad Rizqy Yourin</Text>
        <Text style={styles.profileInfo}>NIM: 21120121140136</Text>
        <Text style={styles.profileInfo}>API yang digunakan: https://genshin.jmp.blue/</Text>
        <Text style={styles.profileInfo}>Link Github App: https://github.com/Hacfret/TugasAkhirPPB</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00171f",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    borderWidth: 1, // Lebar garis tepi (outline border)
    borderColor: "#fff", // Warna garis tepi
  },
  textContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
  },
  description: {
    marginBottom: 10,
  },
  profileInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default AboutScreen;
