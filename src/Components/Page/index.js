import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Cart from '../Cart';

const Data = (props) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: props.gambar}} style={styles.gambar} />
      <View style={styles.judul}>
        <Text style={styles.merk}>{props.merk}</Text>
        <Text style={styles.harga}>{props.harga}</Text>
        <TouchableOpacity style={styles.press} onPress={props.button}>
          <Text style={styles.addcart}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Page = () => {
  const [isikeranjang, setIsiKeranjang] = useState(0);
  return (
    <View>
      <Cart quantity={isikeranjang} />
      <ScrollView>
        <Data
          button={() =>
            setIsiKeranjang(isikeranjang + 1, alert('Berhasil ditambahkan'))
          }
          harga="Rp89.000,-"
          merk="Flat Shoes Import"
          gambar="https://ecs7-p.tokopedia.net/img/cache/200-square/VqbcmM/2020/9/14/40180b45-e64d-4730-9e32-1e0ee3151357.jpg.webp"
        />
        <Data
          button={() => setIsiKeranjang(isikeranjang + 1)}
          harga="Rp895.000,-"
          merk="Tory Burch Ori"
          gambar="https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/5/31/72064467/72064467_6997f6f5-d53f-442c-9246-ceda42777969_479_479.webp"
        />
        <Data
          button={() => setIsiKeranjang(isikeranjang + 1)}
          harga="Rp88.800,-"
          merk="Lyodra Daniella Flat"
          gambar="https://ecs7-p.tokopedia.net/img/cache/300/product-1/2020/9/2/108697383/108697383_6af929f4-3be2-4eaa-8097-5ab298f57b85_1200_1200.webp"
        />
        <Data
          button={() => setIsiKeranjang(isikeranjang + 1)}
          harga="Rp88.000,-"
          merk="Lyodra Arya Flip"
          gambar="https://ecs7-p.tokopedia.net/img/cache/300/product-1/2020/9/2/108697383/108697383_34fc46a0-3e43-4a62-99a1-118a78a642a8_1200_1200.webp"
        />
        <Data />
      </ScrollView>
    </View>
  );
};
export default Page;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#7DE945',
    margin: 5,
    padding: 5,
  },
  judul: {
    marginLeft: 10,
  },
  gambar: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  merk: {
    fontSize: 20,
    fontWeight: '900',
    fontFamily: 'serif',
    color: '#000000b3',
  },
  harga: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#7DE945',
  },
  addcart: {
    fontSize: 18,
    fontFamily: 'serif',
    color: 'white',

    backgroundColor: '#7DE945',
    borderRadius: 10,
    width: 150,
    height: 30,
    textAlign: 'center',
  },
  press: {
    position: 'absolute',
    bottom: 0,
  },
});
