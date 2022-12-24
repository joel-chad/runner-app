import React,{useState} from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Dimensions
} from "react-native";
import Loader from "../components/Loader";
import colors from "../styles/color";
import InputField from "../components/form/InputField";
import NextArrowButton from "../components/buttons/NextArrowButton";
import Notification from "../components/Notification";
import { ProductsList } from "./ProductsList";
// import { firebase } from '@react-native-firebase/auth';
export function Login({navigation}){
    const [formValid, setFormValid] = useState(true)
    const [error, setError] = useState('')
    const [loadingVisible, setLoadingVisible] = useState(false)
    const bgColor = formValid ? colors.green01 : colors.darkOrange;
    const showNotification = formValid ? false : true;

    const handleCloseNotification = () => {
        setFormValid(true)
      };

      const handlePress= () =>{
        navigation.navigate('Products')
      }

    return (
      <KeyboardAvoidingView
        style={[{ backgroundColor: bgColor }, styles.wrapper]}
        behavior="padding"
      >
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Login</Text>
            <InputField
              labelText="EMAIL ADDRESS"
            //   onChangeText={handleEmailChange}
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="email"
              customStyle={{ marginBottom: 30 }}
            //   showCheckmark={email === "test@gmail.com"}
            />
            <InputField
              labelText="PASSWORD"
            //   onChangeText={handlePasswordChange}
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="password"
              customStyle={{ marginBottom: 30 }}
            //   showCheckmark={password === "12345"}
            />
          </ScrollView>
          <View style={styles.nextButtonWrapper}>
            <NextArrowButton handlePress={handlePress} />
          </View>
        </View>
        <View>
          <Notification
            showNotification={showNotification}
            handleCloseNotification={handleCloseNotification}
            title="Error"
            message={error}
          />
          <Loader modalVisible={loadingVisible} animationType="fade" />
        </View>
      </KeyboardAvoidingView>
    );
}
const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1
  },
  loginHeader: {
    fontSize: 28,
    color: colors.white,
    fontWeight: "300",
    marginBottom: 40
  },
  notificationWrapper: {
    position: "absolute",
    bottom: -20,
    left: 0,
    right: 0
  },
  nextButtonWrapper: {
    alignItems: "flex-end",
    right: 20,
    bottom: 50
  }
});
