import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import Navbar from './src/components/Navbar';
import MainScreen from './src/screens/MainScreen';
import TodoItemScreen from './src/screens/TodoItemScreen';

export default function App() {
    const [todos, setTodos] = useState([
        { id: '1', title: 'react-native' },
        { id: '2', title: 'native app' },
        { id: '3', title: 'javascript' }
    ]);
    const [activeTodoId, setActiveTodoId] = useState(null);

    function addTodoItem(title) {
        setTodos(prevTodos => [
            ...prevTodos,
            {
                id: Date.now().toString(),
                title
            }
        ]);
    }

    function removeTodoItem(id) {
        Alert.alert(
            'Item removing',
            'Are you sure to remove?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Remove',
                    onPress: () => {
                        setActiveTodoId(null);
                        setTodos(prevTodos => [
                            ...prevTodos.filter(item => item.id !== id)
                        ]);
                    }
                }
            ],
            { cancelable: false }
        );
    }

    function editTodoItem(id, title) {
        setTodos(prevTodos =>
            prevTodos.map(item => {
                if (item.id === id) {
                    item.title = title;
                }
                return item;
            })
        );
    }

    let activeScreen = (
        <MainScreen
            addTodoItem={addTodoItem}
            removeTodoItem={removeTodoItem}
            todos={todos}
            setActiveTodoId={id => setActiveTodoId(id)}
        />
    );

    if (activeTodoId) {
        const selectedTodoItem = todos.find(item => item.id === activeTodoId);
        activeScreen = (
            <TodoItemScreen
                editTodoItem={editTodoItem}
                todo={selectedTodoItem}
                removeTodoItem={removeTodoItem}
                goBack={() => setActiveTodoId(null)}
            />
        );
    }

    return (
        <View>
            <Navbar/>
            <View style={{paddingHorizontal: 30, paddingVertical: 20}}>{activeScreen}</View>
        </View>
    );
}