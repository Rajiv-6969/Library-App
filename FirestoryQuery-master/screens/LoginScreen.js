import React from 'react';
import {View, Text , StyleSheet , TouchableOpacity,KeyboardAvoidingView,TextInput, Alert} from 'react-native';

export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            password:'',
        }
    }
    Login = async(email,password)=>{
        if(email,password){
            try{
           const response=await firebase.auth().signInWithEmailAndPassword(email, password)
  if(response){
      this.props.navigation.navigate('Transaction')
  }
}
  catch(error)  {
    switch(error.code){
        case 'auth/user-not-found':
        Alert.alert("user doesnt exist")
        break
        case 'auth/invalid-email':
            Alert.alert("incorrect email id or password")
            break
    }
  };
        }else {
            Alert.alert("enter Emali ID and password")
        }
    }
    render(){
        return(
            <KeyboardAvoidingView>
                <View>
                <Image
              source={require("../assets/booklogo.jpg")}
              style={{ width: 200, height: 200 }}
            /> 
                </View>
                <View>
                    <TextInput
                    placeholder="abc@example.com"
                    keyboardType='email-address'
                    onChangeText={(text)=>{
                        this.setState({
                            emailId:text
                        })
                    }
                }

                        />
                        <TextInput
                    placeholder="enter password"
                    secureTextEntry={true}
                    onChangeText={(text)=>{
                        this.setState({
                            password:text
                        })
                    }
                }
                        />
                        <TouchableOpacity
                        onPress={()=>{this.Login(this.state.emailId,this.state.password)}}>
                            <Text>Login</Text>
                        </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
            
        )
    }
}
