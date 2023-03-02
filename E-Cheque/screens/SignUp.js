import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signup}>
      <View style={[styles.statusbariphoneXLightBackg, styles.emailPosition]}>
        <Image
          style={styles.batteryIcon}
          resizeMode="cover"
          source={require("../assets/battery.png")}
        />
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularIcon}
          resizeMode="cover"
          source={require("../assets/cellular.png")}
        />
        <Text style={styles.time}>9:41</Text>
      </View>
      <Text style={[styles.createAnAccountContainer, styles.emailTypo]}>
        <Text style={styles.createAnAccount}>Create an account</Text>
      </Text>
      <View style={[styles.emailParent, styles.emailParentLayout]}>
        <Text
          style={[
            styles.email,
            styles.emailTypo,
            styles.emailTypo1,
            styles.emailPosition,
          ]}
        >
          Password
        </Text>
        <View style={[styles.instanceChild, styles.childLayout]} />
        <Text
          style={[
            styles.sophatleatnintrealive,
            styles.emailTypo,
            styles.emailTypo1,
          ]}
        >
          mypassword
        </Text>
      </View>
      <Image
        style={styles.eyefillIcon}
        resizeMode="cover"
        source={require("../assets/eyefill.png")}
      />
      <Pressable
        style={styles.signUp}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.signUp1, styles.signTypo]}>Sign Up</Text>
      </Pressable>
      <View style={[styles.phoneNumber, styles.emailParentLayout]}>
        <Text
          style={[
            styles.email,
            styles.emailTypo,
            styles.emailTypo1,
            styles.emailPosition,
          ]}
        >
          Phone Number
        </Text>
        <View
          style={[
            styles.phoneNumberChild,
            styles.phoneBorder,
            styles.childLayout,
          ]}
        />
        <Text style={[styles.enterYourPhonenumber, styles.textTypo]}>
          9885076854
        </Text>
        <View style={[styles.phoneNumberItem, styles.phoneBorder]} />
        <Text style={[styles.text, styles.textTypo]}>+977</Text>
      </View>
      <Text style={[styles.startUsingECheque, styles.emailTypo]}>
        Start using E-cheque now
      </Text>
      <View style={styles.signupChild} />
      <Text style={[styles.signUp2, styles.signTypo]}>Sign Up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emailPosition: {
    left: "0%",
    top: "0%",
  },
  emailTypo: {
    textAlign: "left",
    fontFamily: FontFamily.manropeSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  emailParentLayout: {
    height: 68,
    width: 383,
    left: 23,
    position: "absolute",
  },
  emailTypo1: {
    fontSize: FontSize.bodySemiBold_size,
    fontFamily: FontFamily.manropeSemibold,
  },
  childLayout: {
    borderWidth: 1,
    borderRadius: Border.br_md,
    bottom: "0%",
    top: "38.81%",
    height: "61.19%",
    left: "0%",
    right: "0%",
    width: "100%",
    backgroundColor: Color.baseColorWhite,
  },
  signTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.baseColorWhite,
    fontSize: FontSize.headlineRegular_size,
    fontFamily: FontFamily.manropeSemibold,
    textAlign: "center",
    fontWeight: "600",
  },
  phoneBorder: {
    borderColor: "#cdd1e0",
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo: {
    top: "55.22%",
    textAlign: "left",
    fontFamily: FontFamily.manropeSemibold,
    fontWeight: "600",
    fontSize: FontSize.bodySemiBold_size,
    position: "absolute",
  },
  batteryIcon: {
    marginTop: -5.08,
    right: 15,
    width: 24,
    height: 11,
    top: "50%",
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularIcon: {
    width: 17,
    height: 11,
  },
  time: {
    marginTop: -6.41,
    letterSpacing: 0,
    fontFamily: FontFamily.sFProTextSemibold,
    width: 30,
    height: 17,
    textAlign: "center",
    fontWeight: "600",
    left: 23,
    color: Color.labelscolorsPrimary,
    fontSize: FontSize.bodySemiBold_size,
    top: "50%",
    position: "absolute",
  },
  statusbariphoneXLightBackg: {
    height: "5.69%",
    bottom: "94.31%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  createAnAccount: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  createAnAccountContainer: {
    height: "3.88%",
    width: "56.58%",
    top: "18.64%",
    left: "6.7%",
    fontSize: FontSize.size_6xl,
    color: Color.labelscolorsPrimary,
  },
  email: {
    color: Color.purpleSolid,
    left: "0%",
    top: "0%",
    fontSize: FontSize.bodySemiBold_size,
  },
  instanceChild: {
    borderColor: "#c6c6c6",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: Border.br_md,
    bottom: "0%",
    top: "38.81%",
    height: "61.19%",
    position: "absolute",
  },
  sophatleatnintrealive: {
    top: "53.73%",
    left: "3.62%",
    color: Color.placeHolder,
  },
  emailParent: {
    top: 409,
  },
  eyefillIcon: {
    top: 447,
    left: 375,
    width: 19,
    height: 18,
    position: "absolute",
    overflow: "hidden",
  },
  signUp1: {
    height: "2.59%",
    width: "16.4%",
  },
  signUp: {
    left: "43.65%",
    top: "60.88%",
    position: "absolute",
  },
  phoneNumberChild: {
    borderWidth: 1,
    borderRadius: Border.br_md,
    bottom: "0%",
    top: "38.81%",
    height: "61.19%",
    borderColor: "#cdd1e0",
  },
  enterYourPhonenumber: {
    left: "17.83%",
    color: Color.placeHolder,
  },
  phoneNumberItem: {
    height: "43.26%",
    width: "0.26%",
    top: "47.03%",
    right: "84.55%",
    bottom: "9.71%",
    left: "15.19%",
    borderRightWidth: 1,
  },
  text: {
    left: "4.18%",
    color: Color.labelscolorsPrimary,
  },
  phoneNumber: {
    top: 298,
  },
  startUsingECheque: {
    top: 214,
    left: 27,
    fontSize: FontSize.caption12pxRegular_size,
    width: 255,
    height: 30,
    color: Color.labelscolorsPrimary,
  },
  signupChild: {
    top: 558,
    left: 28,
    backgroundColor: Color.purpleSolid,
    width: 378,
    height: 50,
    position: "absolute",
  },
  signUp2: {
    top: 570,
    left: 165,
    width: 109,
    height: 26,
    position: "absolute",
  },
  signup: {
    flex: 1,
    height: 928,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.baseColorWhite,
  },
});

export default SignUp;
