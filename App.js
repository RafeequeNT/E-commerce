import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { Product } from "./src/page/product";
import { ProductDetail } from "./src/page/productDetail";
import { ShoppingCart } from "./src/page/shoppingCart";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Product /> */}
      {/* <ProductDetail /> */}
      <ShoppingCart />

      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
