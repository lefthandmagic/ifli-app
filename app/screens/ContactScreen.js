import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import defaultStyles from '../config/styles';
import colors from '../config/colors';

function ContactScreen(props) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Email Us</Text>
        <Text style={[styles.text, styles.email]}>ifli.national@gmail.com</Text>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
      paddingTop: 40,
     justifyContent: "center",
     alignItems:"center",
  },
  text: {
    padding: 10,
    fontSize: 25,
    fontWeight:"500",
  },
  email: {
    color: colors.email,
    fontStyle: "italic",
  },
});

export default ContactScreen;