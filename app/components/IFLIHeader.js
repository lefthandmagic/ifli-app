import React from 'react';
import {StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import {Octicons} from '@expo/vector-icons'
import colors from '../config/colors';
import Text from '../components/Text';


function IFLIHeader({scene}) {
    const { navigation, options } = scene.descriptor;
    const title =
      options.headerTitle !== undefined
        ? options.headerTitle
        : options.title !== undefined
        ? options.title
        : scene.route.name;
  return (
    <Header
    backgroundColor={colors.primary}>
    <Octicons name="three-bars" size={24} color={colors.white}
    onPress={() => (navigation.openDrawer())} />
    <Text style={styles.text}>{title}</Text>
  </Header>
  );
}

const styles = StyleSheet.create({
    text: {
      color: colors.white,
      fontWeight: "900",
    }
  });

export default IFLIHeader;
