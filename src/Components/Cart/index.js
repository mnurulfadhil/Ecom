import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Cart = (props) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.judul}>Wishlist</Text>
        <TouchableOpacity
          style={styles.parentcart}
          onPress={() => alert('halaman belum dibuat')}>
          <Image
            style={styles.cart}
            source={require('../../assets/basket.png')}
          />
          <View style={styles.qty}>
            <Text style={styles.textqty}>{props.quantity}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Cart;

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#07B421',
    justifyContent: 'center',
  },
  judul: {
    fontSize: 25,
    fontWeight: '900',
    color: 'white',
    fontFamily: 'serif',
  },
  cart: {
    width: 30,
    height: 30,
  },
  parentcart: {
    position: 'absolute',
    right: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qty: {
    fontSize: 20,
    backgroundColor: '#56FB00',
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    top: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textqty: {
    fontSize: 20,
    color: 'black',
  },
});
