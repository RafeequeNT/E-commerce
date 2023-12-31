import React from "react";
// import cart from "../data/cart";
import CartListItem from "../components/CartListItem";
import { FlatList, View, StyleSheet, Text, Pressable } from "react-native";
import { useSelector } from "react-redux";
import {
  selectDeliveryPrice,
  selectSubtotal,
  selectTotal,
} from "../store/cartSlice";

export const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const Subtotal = useSelector(selectSubtotal);
  const DeliveryPrice = useSelector(selectDeliveryPrice);
  const total = useSelector(selectTotal);

  const shoppingCartTotals = () => (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{Subtotal}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{`${DeliveryPrice}$`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{`${total}$`}</Text>
      </View>
    </View>
  );

  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={shoppingCartTotals}
      />
      <View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Checkout</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
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
});
