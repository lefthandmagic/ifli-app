import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import Social from '../components/social';
import routes from '../navigation/routes';
import { Divider } from 'react-native-elements';
import colors from '../config/colors';


const images= [
    { 
        image: require("../assets/ifli-mumbai.jpg"),
        id:'1',
        header: "Mumbai Airport Road Community",
        subText: "IFLI Team Members Uday & Viraj Imparting Financial Skills to houswives from the airport road community"
    },
    {
        image: require("../assets/ifli-kutch.jpg"),
        id:'2',
        header: "Kutch"
    },
    {
        image: require("../assets/ifli-chandrapara-west-bengal.jpg"),
        id:'3',
        header: "Chandpara, West Bengal"
    },
  ]

  const listings = [
    {
      id: 1,
      title: "Who are We?",
      description: "We are an innovative Social startup working towards spreading financial literacy across India!\n​We train underprivileged communities in financial literacy using innovative pedagogical methods.\nMaking India Financially SMART",
    },
  ];

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
        <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.description}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
      <Divider style={styles.divider} />
        <Text style={styles.text}>Gallery</Text>
        <Carousel images={images} />
        <Divider style={styles.divider} /> 
        <Social />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    
  },
  divider: {
      backgroundColor: colors.primary,
      margin: 10
  },
  text: {
    fontWeight:"bold",
    color: colors.primary,
    padding:20
  }
});

export default HomeScreen;