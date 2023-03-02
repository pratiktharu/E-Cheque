import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const FingerPrint = () => {
  return (
    <View style={styles.fingerPrint}>
      <View style={[styles.background, styles.otpFormLayout]}>
        <View style={[styles.button, styles.enterPosition]}>
          <Text style={styles.learnMore}>Forgot Pin</Text>
        </View>
        <View style={[styles.otpForm, styles.otpFormLayout]}>
          <View style={[styles.container, styles.textBoxPosition]} />
          <View style={styles.otpCode5Parent}>
            <View style={[styles.otpCode5, styles.otpPosition]}>
              <View style={[styles.textBox, styles.textBoxPosition]} />
              <Text style={[styles.text, styles.textClr]}>0</Text>
            </View>
            <View style={[styles.otpCode6, styles.otpPosition]}>
              <View style={[styles.textBox, styles.textBoxPosition]} />
              <Text style={[styles.text, styles.textClr]}>0</Text>
            </View>
            <View style={[styles.otpCode04, styles.otpPosition]}>
              <View style={[styles.textBox, styles.textBoxPosition]} />
              <Text style={[styles.text, styles.textClr]}>0</Text>
            </View>
            <View style={[styles.otpCode03, styles.otpPosition]}>
              <View style={[styles.textBox, styles.textBoxPosition]} />
              <Text style={[styles.text, styles.textClr]}>0</Text>
            </View>
            <View style={[styles.otpCode02, styles.otpPosition]}>
              <View style={[styles.textBox, styles.textBoxPosition]} />
              <Text style={[styles.text, styles.textClr]}>0</Text>
            </View>
            <View style={[styles.otpCode01, styles.otpPosition]}>
              <View style={[styles.textBox, styles.textBoxPosition]} />
              <Text style={[styles.text, styles.textClr]}>0</Text>
            </View>
          </View>
        </View>
        <Text
          style={[styles.enterYourPin, styles.yourTypo1, styles.enterPosition]}
        >{`Enter your pin to login `}</Text>
        <Text
          style={[styles.enterYourPin1, styles.yourTypo, styles.enterPosition]}
        >
          Enter Your Pin
        </Text>
      </View>
      <View style={[styles.homeIndicator, styles.otpFormLayout]}>
        <View style={[styles.phoneIndicatorBlack, styles.textBoxPosition]}>
          <View style={[styles.phoneIndicatorBlack, styles.textBoxPosition]} />
          <View style={styles.indicator} />
        </View>
      </View>
      <View style={[styles.scanYourFingerPrint, styles.background1Layout]}>
        <View style={[styles.background1, styles.background1Layout]} />
        <Image
          style={styles.actionFingerprint}
          resizeMode="cover"
          source={require("../assets/action--fingerprint1.png")}
        />
        <Text
          style={[
            styles.placeYourFinger,
            styles.yourPosition,
            styles.yourTypo1,
          ]}
        >
          Place your finger over the fingerprint sensor
        </Text>
        <Text
          style={[styles.scanYourFinger, styles.yourPosition, styles.yourTypo]}
        >
          Scan your finger print
        </Text>
      </View>
      <View style={styles.statusBar}>
        <View style={[styles.statusBar1, styles.textBoxPosition]}>
          <View style={[styles.phoneIndicatorBlack, styles.textBoxPosition]} />
          <Image
            style={styles.rightSideIcon}
            resizeMode="cover"
            source={require("../assets/right-side.png")}
          />
          <Text style={[styles.time, styles.textClr]}>
            <Text style={styles.text6}>09:4</Text>6
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  otpFormLayout: {
    width: 375,
    position: "absolute",
  },
  enterPosition: {
    width: 343,
    left: 16,
    position: "absolute",
  },
  textBoxPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  otpPosition: {
    width: "14.63%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  textClr: {
    color: Color.labelscolorsPrimary,
    position: "absolute",
  },
  yourTypo1: {
    color: Color.labelsColorsSecondary,
    fontFamily: FontFamily.caption1Regular,
    lineHeight: 16,
    fontSize: FontSize.caption12pxRegular_size,
  },
  yourTypo: {
    fontFamily: FontFamily.tittleLargeBold,
    lineHeight: 30,
    fontSize: FontSize.tittleLargeBold_size,
    color: Color.labelscolorsPrimary,
    fontWeight: "700",
    letterSpacing: 0.1,
  },
  background1Layout: {
    height: 252,
    width: 376,
    position: "absolute",
  },
  yourPosition: {
    width: 359,
    left: 8,
    textAlign: "center",
    position: "absolute",
  },
  learnMore: {
    fontSize: FontSize.b1_size,
    fontFamily: FontFamily.calloutBold,
    color: Color.labelsColorsTertiary,
    textAlign: "center",
    fontWeight: "700",
    lineHeight: 22,
    letterSpacing: 0.1,
  },
  button: {
    top: 587,
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_sm,
    alignItems: "center",
    borderRadius: Border.br_sm,
  },
  container: {
    backgroundColor: Color.baseColorWhite,
    left: "0%",
  },
  textBox: {
    borderStyle: "solid",
    borderColor: "#0f9aff",
    borderWidth: 1,
    backgroundColor: Color.baseColorWhite,
    left: "0%",
    borderRadius: Border.br_sm,
  },
  text: {
    top: "30.36%",
    left: "37.5%",
    fontSize: FontSize.headlineRegular_size,
    fontFamily: FontFamily.headlineRegular,
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 0.1,
    color: Color.labelscolorsPrimary,
  },
  otpCode5: {
    left: "85.37%",
    right: "0%",
    width: "14.63%",
  },
  otpCode6: {
    right: "17.07%",
    left: "68.29%",
  },
  otpCode04: {
    right: "34.15%",
    left: "51.22%",
  },
  otpCode03: {
    right: "51.22%",
    left: "34.15%",
  },
  otpCode02: {
    right: "68.29%",
    left: "17.07%",
  },
  otpCode01: {
    right: "85.37%",
    left: "0%",
  },
  otpCode5Parent: {
    height: "77.78%",
    width: "87.47%",
    top: "11.11%",
    right: "6.4%",
    bottom: "11.11%",
    left: "6.13%",
    position: "absolute",
  },
  otpForm: {
    top: 102,
    height: 72,
    left: 0,
  },
  enterYourPin: {
    top: 46,
    textAlign: "center",
  },
  enterYourPin1: {
    top: 0,
    textAlign: "center",
  },
  background: {
    top: 116,
    height: 635,
    left: 0,
  },
  phoneIndicatorBlack: {
    left: "0%",
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
    top: 827,
    left: 9,
    height: 37,
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
    backgroundColor: Color.baseColorWhite,
    borderRadius: Border.br_sm,
    left: 0,
  },
  actionFingerprint: {
    top: 133,
    left: 158,
    width: 92,
    height: 87,
    position: "absolute",
  },
  placeYourFinger: {
    top: 77,
    height: 16,
  },
  scanYourFinger: {
    top: 32,
    height: 30,
  },
  scanYourFingerPrint: {
    top: 541,
    left: 18,
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
  text6: {
    letterSpacing: 1,
  },
  time: {
    marginTop: -11,
    width: "12.27%",
    top: "50%",
    left: "5.07%",
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.sFProDisplaySemibold,
    textAlign: "left",
  },
  statusBar1: {
    left: "0%",
    overflow: "hidden",
  },
  statusBar: {
    top: 1,
    left: 1,
    width: 413,
    height: 48,
    position: "absolute",
  },
  fingerPrint: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    height: 868,
    overflow: "hidden",
    width: "100%",
  },
});

export default FingerPrint;
