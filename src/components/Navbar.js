import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>Todo React Native App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: '#3949ab',
    paddingBottom: 10
  },
  title: {
    color: '#ffffff',
    fontSize: 20
  }
});