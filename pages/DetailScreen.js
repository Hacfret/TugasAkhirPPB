import React from "react";
import { View, Text } from "react-native";

const DetailScreen = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text> Detail Screen</Text>
      {/* Tambahkan konten lainnya sesuai kebutuhan */}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
};

export default DetailScreen;
