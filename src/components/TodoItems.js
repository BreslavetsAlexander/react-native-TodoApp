import React from 'react';
import {FlatList, Text} from 'react-native';
import TodoItem from './TodoItem';

export default function TodoItems(props) {
    let content = (
        <FlatList
            data={props.todos}
            renderItem={({item}) => <TodoItem 
                                        setActiveTodoId={props.setActiveTodoId} 
                                        removeTodoItem={props.removeTodoItem} 
                                        item={item} 
                                    />}
            keyExtractor={item => item.id}
        />
    );
    if (!props.todos.length) {
        content = (<Text style={{textAlign: 'center', marginTop: 10, fontSize: 20}}>Your tasks will be displayed here</Text>);
    }
    return content;
}