import * as React from "react";
import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const SignUp1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.signUp, styles.iconLayout]}>
      <Pressable
        style={[styles.signUpChild, styles.signShadowBox]}
        onPress={() => navigation.navigate("SignUp")}
      />
      <View
        style={[
          styles.signUpItem,
          styles.signUpItemPosition,
          styles.signShadowBox,
        ]}
      />
      <Pressable
        style={[styles.arrowBackIos, styles.signUpItemPosition]}
        onPress={() => navigation.navigate("More")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-back-ios.png")}
        />
      </Pressable>
      <Text style={[styles.signUp1, styles.icon1Typo]}>Sign Up</Text>
      <Text style={[styles.icon1, styles.icon1Position, styles.icon1Typo]}>
        Icon
      </Text>
      <Text style={styles.signUpFor}>
        Sign up for safe, secure and instant cheque processing
      </Text>
      <Image
        style={[styles.signUpInner, styles.signUpInnerLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-101.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.signUpInnerLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-101.png")}
      />
      <Text style={[styles.signUpVia, styles.signUpViaTypo]}>
        Sign Up Via MobBank
      </Text>
      <Text style={[styles.signupUsingMobile, styles.signUpViaTypo]}>
        Signup Using Mobile Numer
      </Text>
      <Text style={[styles.signUpVia1, styles.signTypo]}>
        Sign up via your Mobile banking application.
      </Text>
      <Text style={[styles.signUpVia2, styles.signTypo]}>
        Sign up via your mobile number
      </Text>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-35204.png")}
      />
      <Image
        style={[styles.signUpChild1, styles.icon1Position]}
        resizeMode="cover"
        source={require("../assets/group-35207.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  signShadowBox: {
    height: 191,
    width: 345,
    shadowOpacity: 1,
    elevation: 40,
    shadowRadius: 40,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xl,
    backgroundColor: Color.baseColorWhite,
  },
  signUpItemPosition: {
    left: 41,
    position: "absolute",
  },
  icon1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.b1,
    lineHeight: 48,
  },
  icon1Position: {
    left: 79,
    position: "absolute",
  },
  signUpInnerLayout: {
    height: 60,
    width: 60,
    left: 65,
    position: "absolute",
  },
  signUpViaTypo: {
    fontSize: FontSize.size_2xl,
    left: 69,
    lineHeight: 15,
    textAlign: "left",
    color: Color.darkslateblue_200,
    fontFamily: FontFamily.b1,
    position: "absolute",
  },
  signTypo: {
    fontSize: FontSize.size_6xs,
    left: 69,
    lineHeight: 15,
    textAlign: "left",
    color: Color.darkslateblue_200,
    fontFamily: FontFamily.b1,
    position: "absolute",
  },
  signUpChild: {
    top: 443,
    left: 40,
    position: "absolute",
  },
  signUpItem: {
    top: 199,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrowBackIos: {
    top: 73,
    width: 24,
    height: 24,
  },
  signUp1: {
    top: 61,
    fontSize: 27,
    color: Color.darkslateblue_200,
    left: 77,
    textAlign: "left",
    fontFamily: FontFamily.b1,
    lineHeight: 48,
    position: "absolute",
  },
  icon1: {
    top: 479,
    fontSize: FontSize.size_sm,
    color: Color.darkgray_200,
    textAlign: "left",
    fontFamily: FontFamily.b1,
    lineHeight: 48,
    left: 79,
  },
  signUpFor: {
    top: 109,
    fontSize: 9,
    lineHeight: 15,
    textAlign: "left",
    color: Color.darkslateblue_200,
    fontFamily: FontFamily.b1,
    left: 77,
    position: "absolute",
  },
  signUpInner: {
    top: 233,
  },
  ellipseIcon: {
    top: 474,
  },
  signUpVia: {
    top: 313,
  },
  signupUsingMobile: {
    top: 554,
  },
  signUpVia1: {
    top: 336,
  },
  signUpVia2: {
    top: 577,
  },
  groupIcon: {
    height: "2.81%",
    width: "10.53%",
    top: "53.02%",
    right: "72.65%",
    bottom: "44.17%",
    left: "16.82%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  signUpChild1: {
    top: 248,
    width: 27,
    height: 30,
  },
  signUp: {
    flex: 1,
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.baseColorWhite,
    width: "100%",
  },
});

export default SignUp1;
