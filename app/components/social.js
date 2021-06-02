import React from 'react';
import { View, StyleSheet, Linking} from 'react-native';
import { SocialIcon } from 'react-native-elements'

function Social(props) {
  return (
    <View style={styles.container}>
        <SocialIcon type='facebook' 
            onPress={() => Linking.openURL('https://www.facebook.com/Indian-Financial-Literacy-Initiative-348485289354300/') }/>
        <SocialIcon type='twitter'
            onPress={() => Linking.openURL('https://twitter.com/ifli_national') }/>
        <SocialIcon type='linkedin' 
            onPress={() => Linking.openURL('https://www.linkedin.com/company/indian-financial-literacy-initiative') }/>
        <SocialIcon type='instagram'
            onPress={() => Linking.openURL('https://www.instagram.com/ifli_national/') } />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
      flexDirection: "row"
  }
});

export default Social;