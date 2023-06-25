import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Navigation } from "./src/navigation";
import { Product } from "./src/page/product";
import { ProductDetail } from "./src/page/productDetail";
import { ShoppingCart } from "./src/page/shoppingCart";

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
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
