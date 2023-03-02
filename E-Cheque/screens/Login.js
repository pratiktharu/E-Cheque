import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <View style={styles.statusbariphoneXLightBackg}>
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
        <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
      </View>
      <Pressable
        style={styles.alreadyHaveAnAccountParent}
        onPress={() => navigation.navigate("Login2")}
      >
        <Text style={[styles.alreadyHaveAn, styles.signInTypo]}>
          Already Have an account ?
        </Text>
        <Text style={[styles.signIn, styles.signInTypo]}>Sign In</Text>
      </Pressable>
      <Text
        style={[styles.otpVerification, styles.otpTypo, styles.timeFlexBox]}
      >
        OTP Verification
      </Text>
      <Text style={styles.submit}>Submit</Text>
      <Text
        style={[styles.weSentAn, styles.weSentAnTypo, styles.textTypo]}
      >{`We sent  an one time password to `}</Text>
      <Text style={[styles.text, styles.textTypo, styles.otpTypo]}>
        +977 - 12989200823
      </Text>
      <Image
        style={[styles.loginChild, styles.loginPosition, styles.loginLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-28.png")}
      />
      <Image
        style={[styles.loginItem, styles.loginPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-29.png")}
      />
      <Image
        style={[styles.loginInner, styles.loginPosition, styles.loginLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-30.png")}
      />
      <Text style={[styles.text1, styles.textLayout1]}>3</Text>
      <Image
        style={[styles.ellipseIcon, styles.loginPosition, styles.loginLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-30.png")}
      />
      <Text style={[styles.text2, styles.textLayout1]}>1</Text>
      <Text style={styles.text3}>{`00.30 `}</Text>
      <Text
        style={[styles.doNotSend, styles.sendPosition, styles.weSentAnTypo]}
      >
        Do not send OTP ?
      </Text>
      <Text style={[styles.sendOtp, styles.sendPosition, styles.otpTypo]}>
        Send OTP
      </Text>
      <Text style={[styles.text4, styles.textLayout]}>4</Text>
      <Text style={[styles.text5, styles.textLayout]}>2</Text>
      <Pressable
        style={styles.login1}
        onPress={() => navigation.navigate("Finance")}
      >
        <Text style={styles.signUpTypo}>Sign Up</Text>
      </Pressable>
      <View style={styles.rectangleView} />
      <Text style={[styles.submit1, styles.signUpTypo]}>Submit</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timeFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  signInTypo: {
    textAlign: "left",
    fontFamily: FontFamily.manropeSemibold,
    fontWeight: "600",
    fontSize: FontSize.bodySemiBold_size,
    top: "0%",
    position: "absolute",
  },
  otpTypo: {
    fontFamily: FontFamily.outfitSemibold,
    fontWeight: "600",
  },
  weSentAnTypo: {
    fontFamily: FontFamily.outfitRegular,
    color: Color.labelscolorsPrimary,
  },
  textTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    position: "absolute",
  },
  loginPosition: {
    height: 57,
    top: 354,
    position: "absolute",
  },
  loginLayout: {
    width: 55,
    height: 57,
    top: 354,
  },
  textLayout1: {
    height: 32,
    width: 23,
    fontFamily: FontFamily.b1,
    lineHeight: 48,
    fontSize: FontSize.size_2xl,
    top: 359,
    textAlign: "center",
    color: Color.labelscolorsPrimary,
    position: "absolute",
  },
  sendPosition: {
    opacity: 0.3,
    top: 474,
    height: 21,
    fontSize: FontSize.caption12pxRegular_size,
    textAlign: "center",
    position: "absolute",
  },
  textLayout: {
    top: 360,
    height: 32,
    width: 23,
    fontFamily: FontFamily.b1,
    lineHeight: 48,
    fontSize: FontSize.size_2xl,
    textAlign: "center",
    color: Color.labelscolorsPrimary,
    position: "absolute",
  },
  signUpTypo: {
    fontSize: FontSize.headlineRegular_size,
    color: Color.baseColorWhite,
    fontFamily: FontFamily.manropeSemibold,
    textAlign: "center",
    fontWeight: "600",
  },
  batteryIcon: {
    marginTop: -5.02,
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
    marginTop: -6.35,
    left: 23,
    letterSpacing: 0,
    fontFamily: FontFamily.sFProTextSemibold,
    width: 30,
    height: 17,
    color: Color.labelscolorsPrimary,
    fontWeight: "600",
    fontSize: FontSize.bodySemiBold_size,
    textAlign: "center",
    top: "50%",
  },
  statusbariphoneXLightBackg: {
    height: "5.69%",
    right: "0%",
    bottom: "94.31%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  alreadyHaveAn: {
    height: "100%",
    width: "75.8%",
    color: Color.darkgray_100,
    left: "0%",
  },
  signIn: {
    height: "98.18%",
    width: "20.64%",
    left: "79.36%",
    color: Color.purpleSolid,
  },
  alreadyHaveAnAccountParent: {
    height: "2.16%",
    width: "60.87%",
    top: "69.11%",
    right: "18.29%",
    bottom: "28.73%",
    left: "20.84%",
    position: "absolute",
  },
  otpVerification: {
    top: 172,
    left: 117,
    fontSize: FontSize.size_3xl,
    color: "#474646",
    width: 213,
    height: 37,
  },
  submit: {
    top: 565,
    left: 189,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    width: 73,
    height: 30,
    color: Color.baseColorWhite,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  weSentAn: {
    top: 221,
    left: 49,
    width: 352,
    height: 51,
  },
  text: {
    top: 269,
    left: 142,
    width: 164,
    height: 24,
    color: Color.labelscolorsPrimary,
  },
  loginChild: {
    left: 89,
  },
  loginItem: {
    left: 161,
    width: 56,
    height: 57,
    top: 354,
  },
  loginInner: {
    left: 235,
  },
  text1: {
    left: 251,
  },
  ellipseIcon: {
    left: 307,
  },
  text2: {
    left: 105,
  },
  text3: {
    top: 431,
    left: 202,
    color: "#675b5b",
    width: 44,
    height: 21,
    fontSize: FontSize.caption12pxRegular_size,
    fontFamily: FontFamily.outfitRegular,
    textAlign: "center",
    position: "absolute",
  },
  doNotSend: {
    left: 116,
    width: 132,
  },
  sendOtp: {
    left: 255,
    color: "#e9890a",
    width: 71,
  },
  text4: {
    left: 322,
  },
  text5: {
    left: 178,
  },
  login1: {
    left: "42.86%",
    top: "59.61%",
    position: "absolute",
  },
  rectangleView: {
    top: 546,
    left: 40,
    backgroundColor: Color.purpleSolid,
    width: 354,
    height: 49,
    position: "absolute",
  },
  submit1: {
    top: 558,
    left: 164,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 102,
    height: 25,
    position: "absolute",
  },
  login: {
    backgroundColor: Color.baseColorWhite,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default Login;
