import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import products from "../data/products";

export const Product = () => {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={{ width: "50%", padding: 1 }}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
