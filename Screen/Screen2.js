import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';

// Dummy data for categories and products
const categories = [
  { id: '1', name: 'Smartphone', image: require('../assets/smartphone.png') },
  { id: '2', name: 'Tablet', image: require('../assets/ipad.jpg') },
  { id: '3', name: 'Laptop', image: require('../assets/laptop.jpg') },
];

const products = [
  { id: '1', name: 'Smartphone', price: 899, rating: 4, img: require('../assets/phone.png') },
  { id: '2', name: 'Smartphone', price: 899, rating: 4, img: require('../assets/smartphone.png') },
  { id: '3', name: 'Smartphone', price: 789, rating: 3, img: require('../assets/smartphone2.png') },
  { id: '4', name: 'Smartphone', price: 999, rating: 5, img: require('../assets/phone.png') },
];

const Screen2 = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <AntDesign name="left" size={24} color="black" />
        <Text style={styles.title}>Electronics</Text>
        <Feather name="shopping-cart" size={24} color="black" style={{marginLeft: 40, marginRight: -20}}/>
        <View style={styles.profileContainer}>            
          <Image source={require('../assets/avatar.png')} style={styles.profilePic} />
        </View>
      </View>

      <TextInput placeholder="Search" style={styles.searchInput} />

      <ScrollView style={styles.scrollView}>
        <ScrollView horizontal={true} style={styles.categoriesContainer} showsHorizontalScrollIndicator={false}>
          {categories.map((item, index) => (
            <View key={item.id} style={[styles.categoryCard, { backgroundColor: getCategoryBackgroundColor(index) }]}>
              <Image source={item.image} style={styles.categoryImage} />
            </View>
          ))}
        </ScrollView>

        <View style={styles.tabsContainer}>
          <Text style={styles.activeTab}>Best Sales</Text>
          <Text style={styles.inactiveTab}>Best Matched</Text>
          <Text style={styles.inactiveTab}>Popular</Text>
        </View>

        <FlatList
          data={products}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.productCard}>
              <Image source={item.img} style={styles.productImage} />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.name}</Text>
                <View style={styles.ratingContainer}>
                  <Text>{'★'.repeat(item.rating)}</Text>
                  <Text>{'☆'.repeat(5 - item.rating)}</Text>
                </View>
              </View>
              <Text style={styles.productPrice}>${item.price}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          ListFooterComponent={<Text style={styles.seeAll}>See all</Text>}
        />

        <Image source={require('../assets/poster_smartphone.png')} style={styles.banner} />
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
            <FontAwesome name="home" size={24} color="black" />
            <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
            <FontAwesome name="search" size={24} color="black" />
            <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
            <AntDesign name="hearto" size={24} color="black" />
            <Text style={styles.navText}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
            <MaterialCommunityIcons name="comment-text-outline" size={24} color="black" />
            <Text style={styles.navText}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
            <MaterialCommunityIcons name="account-circle" size={24} color="black" />
            <Text style={styles.navText}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const getCategoryBackgroundColor = (index) => {
  const colors = ['#EDE7F6', '#E3F2FD', '#FFEBEE'];
  return colors[index % colors.length];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: -60,
  },
  profileContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  profilePic: {
    width: '100%',
    height: '100%',
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  scrollView: {
    flexGrow: 1,
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
  categoryCard: {
    width: 80,
    height: 80,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  categoryImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  activeTab: {
    color: '#00f',
    fontWeight: 'bold',
  },
  inactiveTab: {
    color: '#888',
  },
  productCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 15,
  },
  productInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 10,
  },
  productImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#333',
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  seeAll: {
    textAlign: 'center',
    color: '#00f',
    marginTop: 10,
  },
  banner: {
    width: '95%',
    height: 150,
    marginVertical: 20,
    alignSelf: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#fff',
    borderTopColor: '#eee',
    borderTopWidth: 1,
    alignItems: 'center',
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
  },
});

export default Screen2;
