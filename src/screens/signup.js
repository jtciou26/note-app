//讓使用者登入帳戶的畫面。嘗試登入成功後，就會將權杖儲存在裝置上。

import React from 'react';
import { Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useMutation, gql } from '@apollo/client';

import UserForm from '../components/UserForm';
import Loading from '../components/Loading';

const SIGNUP_USER = gql`
  mutation signUp($email: String!, $username: String!, $password: String!) {
    signUp(email: $email, username: $username, password: $password)
  }
`;

const SignUp = props => {

    const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
        onCompleted: data => {    
    //使用機碼值token儲存權杖
    //儲存權杖後、前往app畫面
        SecureStore.setItemAsync('token', data.signUp).then(
            props.navigation.navigate('App')
        );
    }    
});

    if (loading) return <Loading />;

    return (
        <React.Fragment>
            {error && <Text>Error signing in!</Text>}
            <UserForm
            action={signUp}
            formType="signUp"
            navigation={props.navigation}
            />
        </React.Fragment>
    );
};

SignUp.navigationOptions = {
  title: '註冊'
};

export default SignUp;
