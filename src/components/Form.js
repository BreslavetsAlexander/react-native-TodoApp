import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Alert} from 'react-native';

export default function Form(props) {
  const [value, setValue] = useState('');

  function addTodoItem() {
    if (value.trim().length) {
      props.addTodoItem(value.trim());
      setValue('');
    } else {
      Alert.alert('Type the task');
    }
  }

  return (
    <View style={styles.block}>
      <View style={styles.input}>
        <TextInput placeholder='Type the task' onChangeText={setValue} value={value}/>
      </View>
      <View style={{width:'20%'}}>
        <Button color='#3949ab' onPress={addTodoItem} title="Add"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    padding: 5,
    width: '75%',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#3949ab'
  }
});