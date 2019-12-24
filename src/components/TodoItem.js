import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function TodoItem(props) {
  return (
    <TouchableOpacity 
      onPress={() => props.setActiveTodoId(props.item.id)} 
      onLongPress={() => props.removeTodoItem(props.item.id)}
    >
      <View style={styles.todo}>
        <Text>{props.item.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
  }
});