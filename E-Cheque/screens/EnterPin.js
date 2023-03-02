import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const EnterPin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.enterPin}>
      <View style={[styles.button, styles.buttonLayout]}>
        <Text style={[styles.learnMore, styles.learnTypo]}>Forgot Pin</Text>
      </View>
      <View style={[styles.button1, styles.buttonLayout]}>
        <Text style={[styles.learnMore1, styles.learnTypo]}>
          Use Finger Print
        </Text>
      </View>
      <View style={[styles.otpForm, styles.otpFormPosition]}>
        <View style={[styles.container, styles.containerPosition]} />
        <View style={styles.otpCode5Parent}>
          <View style={[styles.otpCode5, styles.otpPosition]}>
            <View
              style={[
                styles.textBox,
                styles.textBoxBorder,
                styles.containerPosition,
              ]}
            />
            <Text style={styles.text}>0</Text>
          </View>
          <View style={[styles.otpCode6, styles.otpPosition]}>
            <View
              style={[
                styles.textBox,
                styles.textBoxBorder,
                styles.containerPosition,
              ]}
            />
            <Text style={styles.text}>0</Text>
          </View>
          <View style={[styles.otpCode04, styles.otpPosition]}>
            <View
              style={[
                styles.textBox,
                styles.textBoxBorder,
                styles.containerPosition,
              ]}
            />
            <Text style={styles.text}>0</Text>
          </View>
          <View style={[styles.otpCode03, styles.otpPosition]}>
            <View
              style={[
                styles.textBox,
                styles.textBoxBorder,
                styles.containerPosition,
              ]}
            />
            <Text style={styles.text}>0</Text>
          </View>
          <View style={[styles.otpCode02, styles.otpPosition]}>
            <View
              style={[
                styles.textBox,
                styles.textBoxBorder,
                styles.containerPosition,
              ]}
            />
            <Text style={styles.text}>0</Text>
          </View>
          <View style={[styles.otpCode01, styles.otpPosition]}>
            <View
              style={[
                styles.textBox,
                styles.textBoxBorder,
                styles.containerPosition,
              ]}
            />
            <Text style={styles.text}>0</Text>
          </View>
        </View>
      </View>
      <Text style={styles.enterYourPin}>{`Enter your pin to login `}</Text>
      <Text style={styles.enterYourPin1}>Enter Your Pin</Text>
      <View style={[styles.keyboard, styles.otpFormPosition]}>
        <Image
          style={[styles.backgroundIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/background.png")}
        />
        <View style={styles.keys}>
          <Image
            style={styles.deleteIcon}
            resizeMode="cover"
            source={require("../assets/delete.png")}
          />
          <View style={[styles.view, styles.viewPosition5]}>
            <Image
              style={[styles.keyBackgroundIcon, styles.keyIconLayout]}
              resizeMode="cover"
              source={require("../assets/key-background.png")}
            />
            <Text style={styles.number}>0</Text>
          </View>
          <View style={[styles.viewPosition3, styles.viewPosition4]}>
            <Image
              style={[styles.keyBackgroundIcon1, styles.keyIconLayout]}
              resizeMode="cover"
              source={require("../assets/key-background1.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>WXYZ</Text>
            <Text style={[styles.number1, styles.numberPosition]}>9</Text>
          </View>
          <View style={[styles.viewPosition4, styles.viewPosition5]}>
            <Image
              style={[styles.keyBackgroundIcon1, styles.keyIconLayout]}
              resizeMode="cover"
              source={require("../assets/key-background2.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>TUV</Text>
            <Text style={[styles.number1, styles.numberPosition]}>8</Text>
          </View>
          <View style={[styles.viewPosition2, styles.viewPosition4]}>
            <Image
              style={[styles.keyBackgroundIcon1, styles.keyIconLayout]}
              resizeMode="cover"
              source={require("../assets/key-background3.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>PQRS</Text>
            <Text style={[styles.number1, styles.numberPosition]}>7</Text>
          </View>
          <View style={[styles.viewPosition1, styles.viewPosition3]}>
            <Image
              style={[styles.keyBackgroundIcon1, styles.keyIconLayout]}
              resizeMode="cover"
              source={require("../assets/key-background4.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>MNO</Text>
            <Text style={[styles.number1, styles.numberPosition]}>6</Text>
          </View>
          <View style={[styles.viewPosition1, styles.viewPosition5]}>
            <Image
              style={[styles.keyBackgroundIcon1, styles.keyIconLayout]}
              resizeMode="cover"
              source={require("../assets/key-background5.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>JKL</Text>
            <Text style={[styles.number1, styles.numberPosition]}>5</Text>
          </View>
          <View style={[styles.viewPosition1, styles.viewPosition2]}>
            <Image
              style={[styles.keyBackgroundIcon1, styles.keyIconLayout]}
              resizeMode="cover"
              source={require("../assets/key-background6.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>GHI</Text>
            <Text style={[styles.number1, styles.numberPosition]}>4</Text>
          </View>
          <View style={[styles.viewPosition, styles.viewPosition3]}>
            <Image
              style={[styles.keyBackgroundIcon, styles.keyIconLayout]}
              resizeMode="cover"
              source={require("../assets/key-background7.png")}
            />
            <Text style={[styles.label6, styles.labelTypo]}>DEF</Text>
            <Text style={[styles.number7, styles.numberPosition]}>3</Text>
          </View>
          <View style={[styles.viewPosition, styles.viewPosition5]}>
            <Image
              style={[styles.keyBackgroundIcon, styles.keyIconLayout]}
              resizeMode="cover"
              source={require("../assets/key-background8.png")}
            />
            <Text style={[styles.label6, styles.labelTypo]}>ABC</Text>
            <Text style={[styles.number7, styles.numberPosition]}>2</Text>
          </View>
          <View style={[styles.viewPosition, styles.viewPosition2]}>
            <Image
              style={[styles.keyBackgroundIcon, styles.keyIconLayout]}
              resizeMode="cover"
              source={require("../assets/key-background9.png")}
            />
            <Text style={[styles.label6, styles.labelTypo]}>{` `}</Text>
            <Text style={[styles.number7, styles.numberPosition]}>1</Text>
          </View>
        </View>
        <View style={styles.loginButton}>
          <View style={styles.loginButtonChild} />
          <View style={[styles.github, styles.githubPosition]}>
            <View
              style={[
                styles.githubChild,
                styles.withPosition1,
                styles.textBoxBorder,
              ]}
            />
            <View
              style={[styles.iconmonstrGithub11Parent, styles.parentPosition]}
            >
              <Image
                style={[styles.iconmonstrGithub11, styles.statusBarPosition]}
                resizeMode="cover"
                source={require("../assets/iconmonstrgithub1-11.png")}
              />
              <Text
                style={[styles.github1, styles.timeTypo, styles.github1Typo]}
              >
                GitHub
              </Text>
            </View>
          </View>
          <Pressable
            style={styles.login}
            onPress={() => navigation.navigate("TransferSuccess")}
          >
            <Text style={styles.continue}>{`Continue        `}</Text>
          </Pressable>
          <View style={[styles.gitlab, styles.githubPosition]}>
            <View
              style={[
                styles.githubChild,
                styles.withPosition1,
                styles.textBoxBorder,
              ]}
            />
            <View
              style={[styles.gitlabSeeklogocom1Parent, styles.parentPosition]}
            >
              <Image
                style={[
                  styles.gitlabSeeklogocom1Icon,
                  styles.statusBarPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/gitlabseeklogocom-11.png")}
              />
              <Text
                style={[styles.gitlab1, styles.timeTypo, styles.github1Typo]}
              >
                GitLab
              </Text>
            </View>
          </View>
          <View style={[styles.with, styles.withPosition1]}>
            <Text style={[styles.orWith, styles.timeTypo]}>Or With</Text>
            <View style={[styles.withChild, styles.withPosition]} />
            <View style={[styles.withItem, styles.withPosition]} />
          </View>
        </View>
      </View>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <View style={[styles.statusBar1, styles.containerPosition]}>
          <View style={[styles.container1, styles.containerPosition]} />
          <Image
            style={[styles.rightSideIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/right-side.png")}
          />
          <Text style={[styles.time, styles.timeTypo]}>
            <Text style={styles.text6}>09:4</Text>6
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    alignItems: "center",
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_2xl,
    height: 50,
    width: 377,
    borderRadius: Border.br_sm,
    left: 18,
    position: "absolute",
  },
  learnTypo: {
    fontFamily: FontFamily.calloutBold,
    lineHeight: 22,
    fontSize: FontSize.b1_size,
    textAlign: "center",
    fontWeight: "700",
    letterSpacing: 0.1,
  },
  otpFormPosition: {
    left: 0,
    width: 413,
    position: "absolute",
  },
  containerPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
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
  textBoxBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.baseColorWhite,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  viewPosition5: {
    left: "33.88%",
    right: "33.88%",
  },
  keyIconLayout: {
    borderRadius: Border.br_xs,
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  viewPosition4: {
    bottom: "25.6%",
    top: "51.69%",
    height: "22.71%",
    width: "32.23%",
    position: "absolute",
  },
  labelTypo: {
    fontFamily: FontFamily.nunitoBold,
    letterSpacing: 2,
    fontSize: FontSize.size_5xs,
    top: "63.04%",
    width: 129,
    left: 0,
    color: Color.labelscolorsPrimary,
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  numberPosition: {
    top: "2.17%",
    width: 129,
    fontFamily: FontFamily.nunitoRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_6xl,
    left: 0,
    color: Color.labelscolorsPrimary,
    textAlign: "center",
    position: "absolute",
  },
  viewPosition3: {
    left: "67.77%",
    right: "0%",
  },
  viewPosition2: {
    right: "67.77%",
    left: "0%",
  },
  githubPosition: {
    height: 0,
    width: 0,
    left: "50%",
    top: "39.56%",
    position: "absolute",
  },
  withPosition1: {
    display: "none",
    position: "absolute",
  },
  parentPosition: {
    height: 65,
    top: 11,
    display: "none",
    position: "absolute",
  },
  statusBarPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  timeTypo: {
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  github1Typo: {
    color: Color.gray_600,
    top: "70.74%",
    textAlign: "left",
    fontFamily: FontFamily.manropeSemibold,
    fontSize: FontSize.bodySemiBold_size,
  },
  withPosition: {
    borderTopWidth: 0.5,
    borderColor: "#000",
    bottom: "44.04%",
    top: "53.33%",
    width: "37.73%",
    height: "2.63%",
    borderStyle: "solid",
    position: "absolute",
  },
  learnMore: {
    color: Color.labelsColorsTertiary,
    textAlign: "center",
  },
  button: {
    top: 461,
  },
  learnMore1: {
    color: Color.labelscolorsPrimary,
    textAlign: "center",
  },
  button1: {
    top: 411,
  },
  container: {
    left: "0%",
    backgroundColor: Color.baseColorWhite,
  },
  textBox: {
    borderColor: "#0f9aff",
    left: "0%",
    borderRadius: Border.br_sm,
    borderWidth: 1,
    borderStyle: "solid",
    height: "100%",
  },
  text: {
    height: "39.29%",
    width: "25%",
    top: "30.36%",
    left: "37.5%",
    fontFamily: FontFamily.headlineRegular,
    fontSize: FontSize.headlineRegular_size,
    color: Color.labelscolorsPrimary,
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 0.1,
    position: "absolute",
  },
  otpCode5: {
    left: "85.37%",
    right: "0%",
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
    top: 222,
    height: 74,
    width: 413,
  },
  enterYourPin: {
    top: 164,
    fontSize: FontSize.caption12pxRegular_size,
    lineHeight: 16,
    fontFamily: FontFamily.caption1Regular,
    color: Color.labelsColorsSecondary,
    height: 16,
    textAlign: "center",
    width: 377,
    left: 18,
    position: "absolute",
  },
  enterYourPin1: {
    top: 116,
    fontSize: FontSize.tittleLargeBold_size,
    lineHeight: 30,
    fontFamily: FontFamily.tittleLargeBold,
    height: 31,
    color: Color.labelscolorsPrimary,
    textAlign: "center",
    fontWeight: "700",
    letterSpacing: 0.1,
    width: 377,
    left: 18,
    position: "absolute",
  },
  backgroundIcon: {
    height: "19.64%",
    width: "59.08%",
    top: "-41.99%",
    right: "19.61%",
    bottom: "122.36%",
    left: "21.31%",
  },
  deleteIcon: {
    width: 26,
    height: 20,
  },
  keyBackgroundIcon: {
    height: "101.91%",
    bottom: "-1.91%",
  },
  number: {
    top: "15.22%",
    width: 129,
    fontFamily: FontFamily.nunitoRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_6xl,
    height: "73.91%",
    left: 0,
    color: Color.labelscolorsPrimary,
    textAlign: "center",
    position: "absolute",
  },
  view: {
    top: "77.78%",
    width: "32.23%",
    height: "22.22%",
    left: "33.88%",
    right: "33.88%",
    bottom: "0%",
    position: "absolute",
  },
  keyBackgroundIcon1: {
    height: "101.87%",
    bottom: "-1.87%",
  },
  label: {
    height: "29.79%",
  },
  number1: {
    height: "72.34%",
  },
  viewPosition1: {
    bottom: "51.69%",
    top: "25.6%",
    height: "22.71%",
    width: "32.23%",
    position: "absolute",
  },
  label6: {
    height: "30.43%",
  },
  number7: {
    height: "73.91%",
    top: "2.17%",
  },
  viewPosition: {
    bottom: "77.78%",
    width: "32.23%",
    height: "22.22%",
    top: "0%",
    position: "absolute",
  },
  keys: {
    height: "71.13%",
    width: "96.8%",
    top: "2.06%",
    right: "1.6%",
    bottom: "26.8%",
    left: "1.6%",
    position: "absolute",
  },
  loginButtonChild: {
    height: "22.06%",
    bottom: "77.94%",
    backgroundColor: "#1b191c",
    borderRadius: Border.br_md,
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  githubChild: {
    borderColor: "#cdd1e0",
    width: 173,
    height: 60,
    borderRadius: Border.br_md,
  },
  iconmonstrGithub11: {
    width: 23,
    height: 23,
    overflow: "hidden",
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
  continue: {
    color: Color.baseColorWhite,
    fontFamily: FontFamily.manropeSemibold,
    fontWeight: "600",
    fontSize: FontSize.headlineRegular_size,
    textAlign: "center",
  },
  login: {
    left: "40.18%",
    top: "6.86%",
    position: "absolute",
  },
  gitlabSeeklogocom1Icon: {
    width: 24,
    height: 22,
    overflow: "hidden",
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
    color: Color.darkgray_100,
    fontFamily: FontFamily.manropeSemibold,
    fontSize: FontSize.bodySemiBold_size,
    textAlign: "left",
    top: "0%",
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
    height: "6.96%",
    top: "33.94%",
    bottom: "59.1%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  loginButton: {
    top: 261,
    left: 9,
    width: 394,
    height: 273,
    position: "absolute",
  },
  keyboard: {
    top: 541,
    backgroundColor: "#ccced3",
    height: 331,
    width: 413,
  },
  container1: {
    left: "0%",
  },
  rightSideIcon: {
    height: "26.09%",
    width: "18.13%",
    top: "36.96%",
    right: "3.47%",
    bottom: "36.96%",
    left: "78.4%",
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
    fontFamily: FontFamily.sFProDisplaySemibold,
    color: Color.labelscolorsPrimary,
  },
  statusBar1: {
    left: "0%",
    overflow: "hidden",
  },
  statusBar: {
    height: 48,
    width: 413,
  },
  enterPin: {
    flex: 1,
    height: 872,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.baseColorWhite,
  },
});

export default EnterPin;
