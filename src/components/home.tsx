import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {styles} from './styles'

export const  NavBar = () => {
    return (
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Logs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Credits</Text>
        </TouchableOpacity>
      </View>
    );
  };
  export const Body = () => {
    return (
      <View style={styles.body}>
        <View style={styles.container}>
          <View style={styles.section}>
            <View style={styles.rectangle}></View>
            <View style={styles.rectangle}></View>
            <View style={styles.rectangle}></View>
          </View>
          <View style={styles.section2}>
            <View style={styles.rectangle2}></View>
            <View style={styles.rectangle2}></View>
            <View style={styles.rectangle2}></View>
          </View>
          <View style={styles.section3}>
            <View style={styles.row}>
              <View style={styles.square}></View>
              <View style={styles.square}></View>
              <View style={styles.square}></View>
              <View style={styles.square}></View>
              <View style={styles.square}></View>
            </View>
            <View style={styles.row}>
              <View style={styles.square}></View>
              <View style={styles.square}></View>
              <View style={styles.square}></View>
              <View style={styles.square}></View>
              <View style={styles.square}></View>
            </View>
            <View style={styles.row}>
              <View style={styles.square}></View>
              <View style={styles.square}></View>
              <View style={styles.square}></View>
              <View style={styles.square}></View>
              <View style={styles.square}></View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  export const Footer = () =>{
    return (
    <View style={styles.footer}>
        <Text style={styles.footerText}>Exercício 03-DDM</Text>
      </View>
    );
  };