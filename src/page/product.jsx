import { StyleSheet, View, Image, FlatList, Pressable } from "react-native";
import products from "../data/products";

export const Product = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable
            style={{ width: "50%", padding: 1 }}
            onPress={() => {
              navigation.navigate("Product Details");
            }}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
          </Pressable>
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
