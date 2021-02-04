import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import MyHeader from '../components/MyHeader';

export default class AddStudentScreen extends React.Component {
    render() {
        return (
            <View>
                <MyHeader title='Add Student' navigation={this.props.navigation} />
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Add Student Screen!</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} >Next</TouchableOpacity>
                </View>
            </View>
        )
    }
}