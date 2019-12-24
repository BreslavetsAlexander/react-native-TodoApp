import React from 'react'
import {View} from 'react-native'
import Form from '../components/Form'
import TodoItems from '../components/TodoItems'

export default function MainScreen(props) {
    return (
        <View>
            <Form addTodoItem={props.addTodoItem}/>
            <TodoItems 
                setActiveTodoId={props.setActiveTodoId} 
                removeTodoItem={props.removeTodoItem} 
                todos={props.todos}
            />
        </View>
    )
}