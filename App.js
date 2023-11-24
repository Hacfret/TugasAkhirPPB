// App.js

import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./pages/Splash"; // Sesuaikan dengan path file Splash.js Anda
import Main from "./pages/Main"; // Ganti dengan nama halaman utama Anda
import DetailArtifactPage from "./pages/DetailArtifactPage";
import DetailScreen from "./pages/DetailScreen";
import ArtifactPage from "./pages/Artifact";
import Nations from "./pages/Nation";
import Mondstadt from "./pages/Mondstadt";
import Liyue from "./pages/Liyue";
import Inazuma from "./pages/Inazuma";
import Sumeru from "./pages/Sumeru";
import CharacterPage from "./pages/Character";
import DetailCharacterPage from "./pages/DetailCharacterPage";
import DomainPage from "./pages/Domain";
import DetailDomainPage from "./pages/DetailDomainPage";
import ElementPage from "./pages/Element";
import DetailElementPage from "./pages/DetailElementPage";
import EnemiesPage from "./pages/Enemies";
import DetailEnemiesPage from "./pages/DetailEnemiesPage";
import WeaponPage from "./pages/Weapon";
import DetailWeaponPage from "./pages/DetailWeaponPage";
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />

        <Stack.Screen name="ArtifactPage" component={ArtifactPage} />
        <Stack.Screen name="DetailArtifactPage" component={DetailArtifactPage} />

        <Stack.Screen name="CharacterPage" component={CharacterPage} />
        <Stack.Screen name="DetailCharacterPage" component={DetailCharacterPage} />

        <Stack.Screen name="DomainPage" component={DomainPage} />
        <Stack.Screen name="DetailDomainPage" component={DetailDomainPage} />

        <Stack.Screen name="ElementPage" component={ElementPage} />
        <Stack.Screen name="DetailElementPage" component={DetailElementPage} />

        <Stack.Screen name="EnemiesPage" component={EnemiesPage} />
        <Stack.Screen name="DetailEnemiesPage" component={DetailEnemiesPage} />

        <Stack.Screen name="WeaponPage" component={WeaponPage} />
        <Stack.Screen name="DetailWeaponPage" component={DetailWeaponPage} />

        <Stack.Screen name="Nation" component={Nations} />
        <Stack.Screen name="Mondstadt" component={Mondstadt} />
        <Stack.Screen name="Liyue" component={Liyue} />
        <Stack.Screen name="Inazuma" component={Inazuma} />
        <Stack.Screen name="Sumeru" component={Sumeru} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
