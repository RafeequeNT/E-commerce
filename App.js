import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { Product } from "./src/data/page/product";
import { ProductDetail } from "./src/data/page/productDetail";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Product /> */}
      <ProductDetail />

      <StatusBar style="auto" />
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
