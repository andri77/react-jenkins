import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
} from 'react-native';

var IMAGE_SIZE = 100;

const Container = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    jenkinsImage: {
        borderRadius: IMAGE_SIZE / 2,
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
    },
    helloText: {
        fontSize: 18,
        backgroundColor: '#F5FCFF',
    },
});

export default Container;