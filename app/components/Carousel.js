import React from 'react';
import { View, StyleSheet, ScrollView, Image, Dimensions, Text } from 'react-native';
import colors from '../config/colors'

const { width } = Dimensions.get('window');
const height = width * 0.9

function Carousel(props) {
  const { images } = props;
    return (
      <View
        style={styles.scrollContainer}
      >
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          {images.map(image => (
            <View style={styles.imageContainer} key={image.id}>
              <Image style={styles.image} source={image.image} />
              <View style={styles.detailsContainer}>
                <Text style={styles.text}>{image.header}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height,
  },
  imageContainer: {
  },
  image: {
    width,
    height : "90%",
    resizeMode: 'contain',
    borderRadius: 40
  },
  text: {
    color: colors.primary,
  },
  subText: {
    color: colors.secondary,
    fontSize: 20
  },
  detailsContainer: {
    padding:10
  }
});

export default Carousel;