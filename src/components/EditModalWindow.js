import React, {useState} from 'react'
import {StyleSheet, View, TextInput, Modal, Alert} from 'react-native'
import {Icon} from 'react-native-elements'

export default function EditModalWindow(props) {
    const [title, setTitle] = useState(props.title);

    function saveTitle() {
        if (title.trim().length) {
            props.editTodoItem(title);
        } else {
            Alert.alert('This field must not be empty');
        }
    }
    
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.wrap}>
                <TextInput style={styles.input} onChangeText={setTitle} value={title}/>
                <View style={styles.buttons}>
                    <View style={{...styles.button, backgroundColor: 'red'}}>
                        <Icon
                            name='times' 
                            type='font-awesome'
                            color='#ffffff' 
                            onPress={() => props.closeModal()}
                        />
                    </View>
                    <View style={{...styles.button, backgroundColor: '#3949ab'}}>
                        <Icon
                            name='check' 
                            type='font-awesome' 
                            color='#ffffff'
                            onPress={saveTitle}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        padding: 5,
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        width: '80%'
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        justifyContent: 'center',
        paddingHorizontal: 30,
        paddingVertical: 5
    }
})