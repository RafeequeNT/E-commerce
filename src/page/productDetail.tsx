import React from "react";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  Text,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native";
import products from "../data/products";
import { Ionicons } from "@expo/vector-icons";

export const ProductDetail = () => {
  const product = products[0];

  console.log("product", product.image);

  const { width } = useWindowDimensions();

  return (
    <View>
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ aspectRatio: 1, width }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>

          {/* Price */}
          <Text style={styles.price}>${product.price}</Text>

          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <Pressable
        style={styles.button}
        onPress={() => console.log("click add to cart")}
      >
        <Text style={styles.buttonText}> Add to Cart</Text>
      </Pressable>
      <Pressable style={styles.icon}>
        <Ionicons name="close" size={24} color="white" />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
  },
  button: {
    backgroundColor: "black",
    position: "absolute",
    bottom: 30,
    width: "90%",
    alignSelf: "center",

    alignItems: "center",

    padding: 20,
    borderRadius: 100,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
  icon: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "#000000AA",
    borderRadius: 50,
    padding: 5,
  },
});
