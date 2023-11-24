import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5"; // ikon FontAwesome5!

import { createStackNavigator } from "@react-navigation/stack";

import AboutScreen from "./About";
import ArtifactPage from "./Artifact";
import DetailArtifactPage from "./DetailArtifactPage";
import Nations from "./Nation";

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
        }}
      />

      <Tab.Screen
        name="Nations"
        component={Nations}
        options={{
          tabBarLabel: "Nations",
          tabBarIcon: ({ color, size }) => <Icon name="chess-queen" color={color} size={size} />,
        }}
      />

      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color, size }) => <Icon name="user" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.description}>
          Genshin Guide App: Panduan lengkap untuk pemain Genshin Impact. Antarmuka intuitif, konten terbaru, informasi karakter, senjata, elemen, dan lainnya. Temukan strategi terbaik, pelajari kombinasi karakter efektif, dan jelajahi
          Teyvat bersama panduan kami.
        </Text>
      </View>
      <CustomCard title="Artifacts" onPress={() => navigation.navigate("ArtifactPage")} />
      <CustomCard title="Characters" onPress={() => navigation.navigate("CharacterPage")} />
      <CustomCard title="Domains" onPress={() => navigation.navigate("DomainPage")} />
      <CustomCard title="Elements" onPress={() => navigation.navigate("ElementPage")} />
      <CustomCard title="Enemies" onPress={() => navigation.navigate("EnemiesPage")} />
      <CustomCard title="Weapons" onPress={() => navigation.navigate("WeaponPage")} />

      {/* Tambahkan card lainnya sesuai kebutuhan */}
    </View>
  );
};

const CustomCard = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Icon name="list-ul" size={20} color="#003459" />
          <Text style={styles.cardText}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00171f",
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#003459",
    shadowColor: "#003459",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: "100%",
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50%",
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 5,
  },
  textContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 20,
    borderWidth: 1, // Lebar garis tepi (outline border)
    borderColor: "#003459", // Warna garis tepi
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Main;
