import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import MyHeader from '../components/MyHeader';

export default class StudentDetailsScreen extends React.Component {
    render() {
        return (
            <View>
                <MyHeader title='Student Details' navigation={this.props.navigation} />
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Student Details Screen!</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} >Next</TouchableOpacity>
                </View>
            </View>
        )
    }
}