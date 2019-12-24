import React, {useState} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {Icon} from 'react-native-elements'
import EditModalWindow from '../components/EditModalWindow'

export default function TodoItemScreen(props) {
    const [modal, setModal] = useState(false);
    return (
        <View>
            <EditModalWindow 
                editTodoItem={(title) => {props.editTodoItem(props.todo.id, title); setModal(false)}} 
                closeModal={() => setModal(false)} 
                title={props.todo.title} 
                visible={modal}
            />
            <View style={styles.editBlock}>
                <Text style={{fontSize: 20}}>{props.todo.title}</Text>
                <Icon 
                    name='edit' 
                    type='font-awesome' 
                    color='#000' 
                    onPress={() => setModal(true)}
                />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{...styles.button, backgroundColor: '#3949ab'}}>
                    <Icon 
                        name='arrow-left' 
                        type='font-awesome' 
                        color='#ffffff' 
                        onPress={props.goBack}
                    />
                </View>
                <View style={{...styles.button, backgroundColor: 'red'}}>
                    <Icon 
                        name='trash' 
                        type='font-awesome' 
                        color='#ffffff'
                        onPress={() => props.removeTodoItem(props.todo.id)}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    editBlock: {
        marginBottom: 20,
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    button: {
        width: '40%',
        justifyContent: 'center',
        paddingVertical: 5
    }
})