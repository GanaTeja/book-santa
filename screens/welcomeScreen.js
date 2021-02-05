import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native';
import { Modal } from 'react-native';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

export default class WelcomeScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            contact: '',
            address: '',
            confirmPassword: '',
            isModalVisible: false
        }

    }
    userSignup=(email,password)=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(()=>{alert("user added succesfully")})
        .catch(function(error){alert(error.message)})
    }
    userLogin=(email,password)=>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(()=>{alert("logged in succesfully")})
        .catch(function(error){alert(error.message)})
    }
    showModal = () => {
        return
        (
            <Modal animationType="fade" transparent={true} visible={this.state.isModalVisible}>
                <ScrollView><KeyboardAvoidingView>
                    <Text>registration</Text>
                    <TextInput placeholder="first name" maxLength={10}
                        onChangeText={(text) => { this.setState({ firstName: text }) }}
                    ></TextInput>
                    <TextInput placeholder="last name" maxLength={10}
                        onChangeText={(text) => { this.setState({ lastName: text }) }}
                    ></TextInput>
                    <TextInput placeholder="email" keyboardType={'email-address'}
                        onChangeText={(text) => { this.setState({ email: text }) }}
                    ></TextInput>
                    <TextInput placeholder="password" secureTextEntry={true}
                        onChangeText={(text) => { this.setState({ password: text }) }}
                    ></TextInput>
                    <TextInput placeholder="confirm password" secureTextEntry={true}
                        onChangeText={(text) => { this.setState({ confirmPassword: text }) }}
                    ></TextInput>
                    <TextInput placeholder="contact" keyboardType={'numeric'}
                        onChangeText={(text) => { this.setState({ contact: text }) }}
                    ></TextInput>
                    <TextInput placeholder=" address" multiline={true}
                        onChangeText={(text) => { this.setState({ address: text }) }}
                    ></TextInput>

                    <TouchableOpacity onPress={() => { this.setState({ isModalVisible: false });
                this.userSignup(this.state.email,this.state.password) }}>
                        <Text>register</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.setState({ isModalVisible: false }) }}>
                        <Text>cancel</Text></TouchableOpacity>



                </KeyboardAvoidingView></ScrollView>
            </Modal>
        )
    }
    componentDidMount(){this.showModal()}
    render() {
        return (
            <View style={{alignItems:'center',justifyContent:'center'}}>
                <TextInput placeholder="enter your email id."
                    onChangeText={(text) => { this.setState({ email: text }) }}>

                </TextInput>
                <TextInput placeholder="enter your password."

                    onChangeText={(text) => { this.setState({ password: text }) }}>


                </TextInput>
                <TouchableOpacity onPress={()=>{this.userLogin(this.state.email,this.state.password)}}>
                    <Text>
                        login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.setState({ isModalVisible: true });  }}>
                    <Text >signup</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
