import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Carousel from '../components/Carousel';
import Social from '../components/social';



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
      title: "Who are we",
      description: "We are an innovative Social startup working towards spreading financial literacy across India! \
      ​We train underprivileged communities in financial literacy using innovative pedagogical methods. \
      Making India Financially SMART",
      buttonText: "Learn More"
    },
    {
      id: 2,
      title: "",
    },
  ];

function HomeScreen(props) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Gallery</Text>
        <Carousel images={images} />
        <Social />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
      justifyContent: "center",
      alignItems: "center"
  },
  text: {
    fontWeight:"bold",
    marginTop: 10
  }
});

export default HomeScreen;