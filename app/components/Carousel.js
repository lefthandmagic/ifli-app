import React from 'react';
import { View, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.8

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
            <Image style={styles.image} key={image.id} source={image.source} />
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
  image: {
    width,
    height,
    borderRadius:30
  },
});

export default Carousel;