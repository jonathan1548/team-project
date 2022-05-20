import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Button  } from 'react-native-paper';
import {editUsers, getUsers} from "../db/cities/Users";
import {auth} from "../db/config";
import {getCities, subscribe} from "../db/cities/Cities";
export default function Payment({ navigation }) {
  const getCitiesList = async () => {
    const c = await getCities();
    setCart(c);
  };
  useEffect(() => {
    getCitiesList();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribe(({ change, snapshot }) => {
      if (change.type === "added") {
        getCitiesList();
      }
      if (change.type === "modified") {
        getCitiesList();
      }
      if (change.type === "removed") {
        getCitiesList();
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const [cart, setCart] = useState([]);

  const fillCart = async () => {
    const array = await getUsers()
    const user = array.find(e => e.email === auth.currentUser.email)
    const usercart = user.cart
    const products = await getCities()
    usercart.map((item , index) => {
      const product = products.find(e => e.id === item)
      let temp = cart
      temp.push(product)
      setCart(temp)
    })
  }


  const removeProduct = async(id) =>{
    const array = await getUsers()
    const user = array.find(e => e.email === auth.currentUser.email)
    var usercart = user.cart
    for(var i = 0; i < usercart.length; i++){
      if(usercart[i] === id){
        usercart = usercart.splice(i, 1);
      }
    }
    editUsers({
      ...user,
      cart: [...usercart]

    })
  }



  const [shippingMethod, setShippingMethod] = useState('Normal');

  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
    fillCart()
  }, []);

  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
              style={{
                paddingRight: 10,
              }}
              onPress={() => {
                navigation.goBack();
              }}
          >
            <Icon name='angle-left' type='font-awesome' size={30} color='#fff' />
          </TouchableOpacity>
        </View>
        <Text style={styles.paymentTitle}>Payment</Text>
        <View style={styles.cartContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.cartTitleView}>
              <Icon name='shopping-cart' type='font-awesome-5' />
              <Text style={styles.cartTitle}>My Cart</Text>
            </View>

            {cart.length > 0 ? (
                <View>
                  {cart.map((product) => (
                          <View style={styles.productView}>
                            <Image
                                style={styles.productImage}
                                source={{
                                  uri: product.image,
                                }}
                            />
                            <View style={styles.productMiddleView}>
                              <Text style={styles.productTitle}>{product.name}</Text>
                            </View>
                            <View style={styles.productRightView}>
                              <Button icon="cart-remove" mode="text" color ="#000"  onPress={() =>[ removeProduct(product.id) , setCart(cart.filter(
                                  (p) => p.id !== product.id))]}>
                              </Button>
                              <Text
                                  style={styles.productPriceText}
                              >{`EGP ${product.price}`}</Text>
                              <View style={styles.productItemCounterView}>
                                <TouchableOpacity
                                    onPress={() => {
                                      if (product.count === 1) {
                                        return setCart(cart.filter(
                                            (p) => p.id !== product.id));
                                      }
                                      const newProd = {
                                        ...product,
                                        count:product.count - 1,
                                        price: product.price - product.total,
                                      };
                                      const restProds = cart.filter(
                                          (p) => p.id !== product.id
                                      );
                                      setCart([...restProds, newProd]);
                                    }}
                                >
                                  <Icon
                                      style={styles.toggleCounterButton}
                                      name='minus-circle'
                                      type='font-awesome'
                                  />
                                </TouchableOpacity>
                                <Text style={styles.counterValue}>
                                </Text>
                                <TouchableOpacity
                                    onPress={() => {
                                      const newProd = {
                                        ...product,
                                        count:product.count + 1,
                                        price: product.price + product.total,
                                      };
                                      const restProds = cart.filter(
                                          (p) => p.id !== product.id
                                      );
                                      setCart([...restProds, newProd]);
                                    }}
                                >
                                  <Icon
                                      style={styles.toggleCounterButton}
                                      name='plus-circle'
                                      type='font-awesome'
                                  />
                                </TouchableOpacity>
                              </View>
                            </View>
                          </View>
                      ))}
                  <View style={styles.shippingView}>
                    <Text style={styles.shippingText}>Shipping -</Text>
                    <View style={styles.shippingItemsView}>
                      <TouchableOpacity
                          style={styles.shippingItem}
                          onPress={() => {
                            setShippingMethod('Normal');
                          }}
                      >
                        <Text style={styles.shippingItemText}>Normal (Free)</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.totalView}>
                    <Text style={styles.totalText}>Total -</Text>
                        <Text style={styles.totalPrice}>
                          EGP {cart.reduce((acc, val) => val.price + acc, 0)}
                        </Text>
                  </View>
                  <TouchableOpacity style={styles.checkoutButton}>
                    <Text style={styles.checkoutButtonText}>
                      Proceed to Checkout
                    </Text>
                  </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.emptyCartView}>
                  <Text style={styles.emptyCartViewText}>Your cart is empty.</Text>
                </View>
            )}
            <View style={{ height: 100 }}></View>
          </ScrollView>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingTop: 40,
  },
  header: {
    alignItems: 'flex-start',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  paymentTitle: {
    fontSize: 30,
    fontWeight: '900',
    color: '#fff',
    marginVertical: 12,
    paddingHorizontal: 20,
  },
  cartContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 30,
    paddingHorizontal: 16,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 6,
  },
  cartTitleView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartTitle: {
    fontSize: 26,
    fontWeight: '700',
    marginLeft: 10,
  },
  productView: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 8,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    elevation: 2,
    marginTop: 14,
  },
  productImage: {
    width: 60,
    height: 60,
    alignSelf: 'center',
  },
  productMiddleView: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  productTitle: {
    fontSize: 20,
    fontWeight: '500',
  },
  productCompanyTitle: {
    fontSize: 16,
    fontWeight: '300',
  },
  productRightView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  productItemCounterView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 4,
  },
  counterValue: {
    fontSize: 20,
    fontWeight: '500',
  },
  productPriceText: {
    alignSelf: 'flex-end',
    paddingRight: 10,
    fontSize: 20,
    fontWeight: '700',
  },
  toggleCounterButton: {
    paddingHorizontal: 10,
  },
  shippingView: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    paddingBottom: 10,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  shippingItemsView: {
    marginTop: 10,
  },
  shippingText: {
    fontSize: 18,
    fontWeight: '500',
  },
  shippingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  shippingItemText: {
    fontSize: 16,
    paddingVertical: 4,
    fontWeight: '300',
  },
  totalView: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  totalText: {
    fontSize: 18,
    fontWeight: '500',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: '300',
  },
  checkoutButton: {
    backgroundColor: '#333',
    paddingVertical: 14,
    marginTop: 30,
    alignItems: 'center',
  },
  checkoutButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
  },
  emptyCartView: {
    flex: 1,
    marginTop: 140,
  },
  emptyCartViewText: {
    fontSize: 20,
    fontWeight: '300',
    alignSelf: 'center',
  },
});