import React from 'react';
import { View, StyleSheet } from 'react-native';
import Carousel from '../components/Carousel';


const images= [
    { source: {
        uri: 'https://picsum.photos/200',
      },
      id:'1'
    },
      {source: {
        uri: 'https://picsum.photos/200',
      },
      id:'2'
    },
      {source: {
        uri: 'https://picsum.photos/200',
      },
      id:'3'
    },
      {source: {
        uri: 'https://picsum.photos/200',
      },
      id:'4'
    },
      {source: {
        uri: 'https://picsum.photos/200',
      },
      id:'5'
    },
  ]

function HomeScreen(props) {
  return (
    <View style={styles.container}>
        <Carousel images={images} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
      justifyContent: "center",
      alignItems: "center"
  }
});

export default HomeScreen;