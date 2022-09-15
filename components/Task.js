import React from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';

const Task = (props) => {
  return (
    <View style={styles.items}>
      <View style={styles.itemsLeft}>
        <View style={styles.square} />
        <Text style={styles.itemsText}>{props.text}</Text>
      </View>
      <View style={styles.circular} />
      
    </View>
  );
};
const styles = StyleSheet.create({
  items: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    // opacity: '0.4',
    borderRadius: 5,
    marginRight: 15,
  },
  itemsText: {
    maxWidth: '80%',
    color: 'black',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
 
});
export default Task;
