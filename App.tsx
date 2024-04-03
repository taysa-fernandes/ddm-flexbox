import React from 'react';
import { View,StyleSheet } from 'react-native';
import { NavBar, Body, Footer } from "./src/components/home";

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar />
      <Body />
      <Footer/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});