import React from 'react';
import { Button, Text, StyleSheet, Linking } from 'react-native';

import colors from '../config/colors';
import Screen from '../components/Screen';
import Social from '../components/social';

function ContactScreen(props) {
  return (
    <Screen style={styles.container}>
        <Text style={styles.text}>Email Us</Text>
        <Button style={[styles.text, styles.email]} 
        title="ifli.national@gmail.com"
        onPress={() => Linking.openURL('mailto:ifli.national@gmail.com') } />
      <Social />
    </Screen>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    paddingTop: 20,
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