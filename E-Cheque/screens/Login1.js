import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const Login1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <View style={[styles.background, styles.otpFormPosition]}>
        <View style={styles.button}>
          <Text style={styles.learnMore}>Use Password or Pin</Text>
        </View>
        <View style={[styles.otpForm, styles.otpFormPosition]}>
          <View style={[styles.container, styles.containerPosition]} />
        </View>
      </View>
      <View style={styles.homeIndicator}>
        <View style={styles.containerPosition}>
          <View style={styles.containerPosition} />
          <View style={styles.indicator} />
        </View>
      </View>
      <View style={[styles.scanYourFingerPrint, styles.background1Layout]}>
        <View style={[styles.background1, styles.background1Layout]} />
        <Image
          style={styles.actionFingerprint}
          resizeMode="cover"
          source={require("../assets/action--fingerprint.png")}
        />
        <Text style={[styles.placeYourFinger, styles.logInUsingLayout]}>
          Place your finger over the fingerprint sensor
        </Text>
        <Text
          style={[styles.logInUsing, styles.timeClr, styles.logInUsingLayout]}
        >
          Log In using finger print
        </Text>
      </View>
      <View style={styles.statusBar}>
        <View style={[styles.statusBar1, styles.containerPosition]}>
          <View style={styles.containerPosition} />
          <Image
            style={styles.rightSideIcon}
            resizeMode="cover"
            source={require("../assets/right-side.png")}
          />
          <Text style={[styles.time, styles.timeClr]}>
            <Text style={styles.text}>09:4</Text>6
          </Text>
        </View>
      </View>
      <Pressable
        style={styles.arrowBackIos}
        onPress={() => navigation.navigate("Login2")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrow-back-ios.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  otpFormPosition: {
    width: 400,
    left: 0,
    position: "absolute",
  },
  containerPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  background1Layout: {
    height: 307,
    width: 384,
    position: "absolute",
  },
  logInUsingLayout: {
    width: 367,
    left: 9,
    textAlign: "center",
  },
  timeClr: {
    color: Color.labelscolorsPrimary,
    position: "absolute",
  },
  learnMore: {
    fontSize: FontSize.b1_size,
    lineHeight: 22,
    fontFamily: FontFamily.calloutBold,
    color: Color.labelsColorsTertiary,
    textAlign: "center",
    fontWeight: "700",
    letterSpacing: 0.1,
  },
  button: {
    top: 325,
    left: 34,
    width: 366,
    height: 43,
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_sm,
    alignItems: "center",
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  container: {
    backgroundColor: Color.baseColorWhite,
    bottom: "0%",
    right: "0%",
    top: "0%",
  },
  otpForm: {
    height: 65,
    top: 0,
  },
  background: {
    top: 296,
    height: 368,
  },
  indicator: {
    height: "16.22%",
    width: "36%",
    top: "64.86%",
    right: "32%",
    bottom: "18.92%",
    left: "32%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.labelscolorsPrimary,
    position: "absolute",
  },
  homeIndicator: {
    top: 826,
    width: 375,
    height: 37,
    left: 9,
    position: "absolute",
  },
  background1: {
    shadowColor: "rgba(141, 141, 141, 0.05)",
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    top: 0,
    borderRadius: Border.br_sm,
    left: 0,
    width: 384,
    backgroundColor: Color.baseColorWhite,
  },
  actionFingerprint: {
    top: 161,
    left: 145,
    width: 94,
    height: 106,
    position: "absolute",
  },
  placeYourFinger: {
    top: 94,
    lineHeight: 16,
    fontFamily: FontFamily.caption1Regular,
    color: Color.labelsColorsSecondary,
    height: 19,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  logInUsing: {
    top: 39,
    fontSize: 32,
    lineHeight: 30,
    fontFamily: FontFamily.tittleLargeBold,
    height: 36,
    fontWeight: "700",
    letterSpacing: 0.1,
    color: Color.labelscolorsPrimary,
    width: 367,
  },
  scanYourFingerPrint: {
    top: 217,
    left: 16,
  },
  rightSideIcon: {
    height: "26.09%",
    width: "18.13%",
    top: "36.96%",
    right: "3.47%",
    bottom: "36.96%",
    left: "78.4%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    letterSpacing: 1,
  },
  time: {
    marginTop: -11,
    width: "12.27%",
    top: "50%",
    left: "5.07%",
    fontWeight: "600",
    fontFamily: FontFamily.sFProDisplaySemibold,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  statusBar1: {
    overflow: "hidden",
  },
  statusBar: {
    left: 1,
    width: 413,
    height: 48,
    top: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowBackIos: {
    left: 20,
    top: 64,
    width: 24,
    height: 24,
    position: "absolute",
  },
  login: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.baseColorWhite,
  },
});

export default Login1;
