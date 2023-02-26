import React, { useContext} from "react";
import { View, StyleSheet } from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from "react-navigation";


const SignupScreen = ({navigation}) => {
    const {state, signup, clearErrorMessage} = useContext(AuthContext);


    return (
        <View style={styles.container}>
            <NavigationEvents onWillBlur={clearErrorMessage} />
            <AuthForm 
                headerText = "Sign Up for Tracker"
                errorMessage = {state.errorMessage}
                onSubmit = {signup}
                submitButtonText = "Sign Up"
            />
            <NavLink
                routeName = "Signin"
                text="Already have an account? Sign in instead!"
            />
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 350
    },
    errorMessage: {
        fontSize: 16, 
        color: 'red',
        marginLeft: 15,
        marginTop: 15,
    },
    link: {
        color: 'blue',
    }
});

export default SignupScreen;