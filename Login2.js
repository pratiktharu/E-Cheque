import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Login2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <View style={[styles.statusbariphoneXLightBackg, styles.withPosition1]}>
        <Image
          style={styles.batteryIcon}
          resizeMode="cover"
          source={require("../assets/battery.png")}
        />
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require("../assets/wifi3.png")}
        />
        <Image
          style={styles.cellularIcon}
          resizeMode="cover"
          source={require("../assets/cellular.png")}
        />
        <Text style={styles.time}>9:41</Text>
      </View>
      <Pressable
        style={styles.dontHaveAnAccountParent}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text
          style={[styles.dontHaveAn, styles.textTypo, styles.orWithTypo]}
        >{`Don’t have an account ? `}</Text>
        <Text style={[styles.signUp, styles.emailTypo]}>Sign Up</Text>
      </Pressable>
      <Text style={styles.helloAgainYouve}>
        Hello again, you’ve been missed!
      </Text>
      <Text style={[styles.hiWecomeBack, styles.textTypo]}>
        Hi, Wecome Back! 👋
      </Text>
      <View style={[styles.emailParent, styles.emailLayout]}>
        <Text style={[styles.email, styles.emailTypo]}>Number</Text>
        <View style={styles.instanceChild} />
        <Text
          style={[
            styles.sophatleatnintrealive,
            styles.sophatleatnintrealivePosition,
            styles.textTypo,
            styles.textTypo1,
          ]}
        >
          sophat.leat@.live
        </Text>
      </View>
      <View style={[styles.emailGroup, styles.emailLayout]}>
        <Text style={[styles.email, styles.emailTypo]}>Password / MPIN</Text>
        <View style={styles.instanceChild} />
        <Text
          style={[
            styles.passwordMpinTypo,
            styles.sophatleatnintrealivePosition,
          ]}
        />
      </View>
      <Text style={[styles.text, styles.textTypo, styles.textTypo1]}>
        +977-
      </Text>
      <Image
        style={[styles.eyefillIcon, styles.eyefillIconPosition]}
        resizeMode="cover"
        source={require("../assets/eyefill1.png")}
      />
      <View style={styles.rememberMe}>
        <Text style={[styles.rememberMe1, styles.textTypo, styles.textTypo1]}>
          Remember Me
        </Text>
        <View style={[styles.check, styles.checkLayout, styles.checkPosition]}>
          <View
            style={[
              styles.checkChild,
              styles.childBorder,
              styles.checkLayout,
              styles.checkPosition,
            ]}
          />
          <Image
            style={[styles.checkItem, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector-3.png")}
          />
        </View>
      </View>
      <View style={styles.forgotPassword}>
        <Text
          style={[styles.forgotPassword1, styles.textTypo, styles.textTypo1]}
        >
          Forgot Password
        </Text>
      </View>
      <View style={styles.loginButton}>
        <View style={[styles.loginButtonChild, styles.withPosition1]} />
        <View style={[styles.github, styles.githubPosition]}>
          <View style={[styles.githubChild, styles.childBorder]} />
          <View
            style={[styles.iconmonstrGithub11Parent, styles.parentPosition]}
          >
            <Image
              style={[
                styles.iconmonstrGithub11,
                styles.iconmonstrGithub11Position,
              ]}
              resizeMode="cover"
              source={require("../assets/iconmonstrgithub1-1.png")}
            />
            <Text style={[styles.github1, styles.github1Typo]}>GitHub</Text>
          </View>
        </View>
        <Text style={styles.login1}>Login</Text>
        <View style={[styles.gitlab, styles.githubPosition]}>
          <View style={[styles.githubChild, styles.childBorder]} />
          <View
            style={[styles.gitlabSeeklogocom1Parent, styles.parentPosition]}
          >
            <Image
              style={[
                styles.gitlabSeeklogocom1Icon,
                styles.iconmonstrGithub11Position,
              ]}
              resizeMode="cover"
              source={require("../assets/gitlabseeklogocom-1.png")}
            />
            <Text style={[styles.gitlab1, styles.github1Typo]}>GitLab</Text>
          </View>
        </View>
        <View style={[styles.with, styles.withPosition1]}>
          <Text style={[styles.orWith, styles.textTypo, styles.orWithTypo]}>
            Or With
          </Text>
          <View style={[styles.withChild, styles.withPosition]} />
          <View style={[styles.withItem, styles.withPosition]} />
        </View>
      </View>
      <Pressable
        style={styles.androidFingerprint}
        onPress={() => navigation.navigate("Login1")}
      >
        <Image
          style={[styles.iconLayout, styles.checkLayout]}
          resizeMode="cover"
          source={require("../assets/android-fingerprint.png")}
        />
      </Pressable>
      <Text
        style={[
          styles.passwordMpin,
          styles.eyefillIconPosition,
          styles.passwordMpinTypo,
        ]}
      >
        Password / MPIN
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  withPosition1: {
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.manropeSemibold,
    fontWeight: "600",
  },
  orWithTypo: {
    color: Color.darkgray_100,
    textAlign: "left",
    fontSize: FontSize.bodySemiBold_size,
    top: "0%",
    position: "absolute",
  },
  emailTypo: {
    color: Color.purpleSolid,
    textAlign: "left",
    fontFamily: FontFamily.manropeSemibold,
    fontWeight: "600",
    fontSize: FontSize.bodySemiBold_size,
    top: "0%",
    position: "absolute",
  },
  emailLayout: {
    height: 90,
    width: 394,
    left: 13,
    position: "absolute",
  },
  sophatleatnintrealivePosition: {
    top: "53.73%",
    left: "3.62%",
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.bodySemiBold_size,
    textAlign: "left",
  },
  eyefillIconPosition: {
    top: 353,
    position: "absolute",
  },
  checkLayout: {
    height: "100%",
    width: "100%",
  },
  checkPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
  },
  childBorder: {
    borderColor: "#cdd1e0",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.baseColorWhite,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  githubPosition: {
    height: 0,
    width: 0,
    left: "50%",
    top: "39.42%",
    position: "absolute",
  },
  parentPosition: {
    height: 66,
    top: 11,
    display: "none",
    position: "absolute",
  },
  iconmonstrGithub11Position: {
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  github1Typo: {
    color: Color.gray_600,
    top: "71%",
    textAlign: "left",
    fontFamily: FontFamily.manropeSemibold,
    fontWeight: "600",
    fontSize: FontSize.bodySemiBold_size,
    position: "absolute",
  },
  withPosition: {
    borderTopWidth: 0.5,
    borderColor: "#000",
    bottom: "43.78%",
    top: "53.59%",
    width: "37.73%",
    height: "2.63%",
    borderStyle: "solid",
    position: "absolute",
  },
  passwordMpinTypo: {
    color: Color.placeHolder,
    textAlign: "left",
    fontFamily: FontFamily.manropeSemibold,
    fontWeight: "600",
    fontSize: FontSize.bodySemiBold_size,
  },
  batteryIcon: {
    marginTop: -4.17,
    right: 15,
    height: 11,
    width: 24,
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
    marginTop: -5.5,
    letterSpacing: 0,
    fontFamily: FontFamily.sFProTextSemibold,
    width: 30,
    height: 17,
    textAlign: "center",
    fontWeight: "600",
    color: Color.labelscolorsPrimary,
    fontSize: FontSize.bodySemiBold_size,
    left: 23,
    top: "50%",
    position: "absolute",
  },
  statusbariphoneXLightBackg: {
    height: "5.69%",
    bottom: "94.31%",
    left: "0%",
    top: "0%",
  },
  dontHaveAn: {
    left: "0%",
  },
  signUp: {
    left: "76.36%",
  },
  dontHaveAnAccountParent: {
    height: "2.12%",
    width: "53.14%",
    top: "93.64%",
    right: "23.43%",
    bottom: "4.24%",
    left: "23.43%",
    position: "absolute",
  },
  helloAgainYouve: {
    top: "14.06%",
    left: "3.62%",
    textAlign: "left",
    color: Color.darkgray_100,
    fontFamily: FontFamily.manropeSemibold,
    fontWeight: "600",
    fontSize: FontSize.bodySemiBold_size,
    position: "absolute",
  },
  hiWecomeBack: {
    top: "10.38%",
    left: "3.14%",
    fontSize: FontSize.size_6xl,
    color: Color.labelscolorsPrimary,
    textAlign: "left",
    position: "absolute",
  },
  email: {
    left: "0%",
  },
  instanceChild: {
    height: "61.19%",
    top: "38.81%",
    borderColor: "#c6c6c6",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_md,
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.baseColorWhite,
  },
  sophatleatnintrealive: {
    color: "#1f1f1f",
    display: "none",
  },
  emailParent: {
    top: 196,
  },
  emailGroup: {
    top: 302,
  },
  text: {
    height: "2.79%",
    width: "9.9%",
    top: "27.46%",
    left: "7%",
    color: "rgba(9, 8, 8, 0.43)",
    position: "absolute",
  },
  eyefillIcon: {
    left: 369,
    width: 19,
    height: 24,
    overflow: "hidden",
  },
  rememberMe1: {
    left: "135%",
    color: "#000c14",
    top: "0%",
    position: "absolute",
  },
  checkChild: {
    borderRadius: Border.br_xs,
  },
  checkItem: {
    height: "47.65%",
    width: "67.67%",
    top: "27.83%",
    right: "16.32%",
    bottom: "24.53%",
    left: "16.01%",
    borderRadius: 1,
    position: "absolute",
  },
  check: {
    position: "absolute",
  },
  rememberMe: {
    top: 415,
    width: 22,
    height: 27,
    left: 13,
    position: "absolute",
  },
  forgotPassword1: {
    color: "#fb344f",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  forgotPassword: {
    top: 416,
    left: 282,
    width: 122,
    height: 26,
    position: "absolute",
  },
  loginButtonChild: {
    height: "22.06%",
    bottom: "77.94%",
    backgroundColor: Color.purpleSolid,
    borderRadius: Border.br_md,
    left: "0%",
    top: "0%",
  },
  githubChild: {
    width: 173,
    height: 60,
    display: "none",
    borderRadius: Border.br_md,
  },
  iconmonstrGithub11: {
    width: 23,
    height: 23,
  },
  github1: {
    left: "47.09%",
  },
  iconmonstrGithub11Parent: {
    left: 35,
    width: 89,
  },
  github: {
    marginLeft: -197,
  },
  login1: {
    top: "6.85%",
    left: "44.24%",
    fontSize: FontSize.headlineRegular_size,
    color: Color.baseColorWhite,
    fontFamily: FontFamily.manropeSemibold,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
  },
  gitlabSeeklogocom1Icon: {
    height: 22,
    width: 24,
  },
  gitlab1: {
    left: "58.2%",
  },
  gitlabSeeklogocom1Parent: {
    left: 37,
    width: 105,
  },
  gitlab: {
    marginLeft: -11,
  },
  orWith: {
    left: "42.9%",
  },
  withChild: {
    right: "62.33%",
    left: "-0.06%",
  },
  withItem: {
    right: "-0.06%",
    left: "62.33%",
  },
  with: {
    height: "6.93%",
    top: "33.94%",
    bottom: "59.13%",
    display: "none",
    left: "0%",
  },
  loginButton: {
    top: 478,
    height: 274,
    width: 394,
    left: 13,
    position: "absolute",
  },
  androidFingerprint: {
    left: "76.81%",
    top: "38.39%",
    right: "13.77%",
    bottom: "57.03%",
    width: "9.42%",
    height: "4.58%",
    position: "absolute",
  },
  passwordMpin: {
    width: 282,
    height: 32,
    left: 23,
    top: 353,
    color: Color.placeHolder,
  },
  login: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.baseColorWhite,
  },
});

export default Login2;
