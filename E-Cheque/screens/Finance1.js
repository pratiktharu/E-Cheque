import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Margin, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Finance1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.finance}>
      <Pressable
        style={[styles.financeChild, styles.financeShadowBox]}
        onPress={() => navigation.navigate("RequestMoney2")}
      />
      <Pressable
        style={[styles.financeItem, styles.financeShadowBox]}
        onPress={() => navigation.navigate("RequestMoney2")}
      />
      <View style={[styles.financeInner, styles.financeLayout]} />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("MainHome1")}
      />
      <Text style={[styles.nabilBankLtd, styles.bankTypo]}>
        {" "}
        Nabil Bank LTD
      </Text>
      <View style={styles.rectangleView} />
      <Text style={styles.infoStroke}>􀅴</Text>
      <View style={styles.financeChild1} />
      <Text style={[styles.banks, styles.banksTypo]}>Banks</Text>
      <Pressable
        style={[styles.arrowBackIos, styles.arrowBackIosLayout]}
        onPress={() => navigation.navigate("MainHome1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-back-ios1.png")}
        />
      </Pressable>
      <Text style={[styles.connectedBankAccounts, styles.banksTypo]}>
        Connected Bank Accounts
      </Text>
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("RequestMoney2")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/vector-452.png")}
        />
      </Pressable>
      <View style={[styles.financeChild2, styles.financeLayout]} />
      <View style={[styles.financeChild2, styles.financeLayout]} />
      <Image
        style={styles.image13Icon}
        resizeMode="cover"
        source={require("../assets/image-13.png")}
      />
      <Pressable
        style={[styles.container, styles.wrapperLayout]}
        onPress={() => navigation.navigate("RequestMoney2")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/vector-452.png")}
        />
      </Pressable>
      <Text style={[styles.nicAsiaBank, styles.bankTypo]}>
        {" "}
        NIC ASIA Bank LTD
      </Text>
      <View style={styles.parent}>
        <View style={[styles.view, styles.viewFlexBox, styles.viewPosition]}>
          <Text style={styles.text}>􀎟</Text>
          <Text style={[styles.home, styles.mt3]}>Home</Text>
        </View>
        <View style={[styles.view1, styles.viewFlexBox, styles.viewPosition]}>
          <Image
            style={[styles.mditickCircleOutlineIcon, styles.arrowBackIosLayout]}
            resizeMode="cover"
            source={require("../assets/mditickcircleoutline.png")}
          />
          <Text style={[styles.cleared, styles.mt3, styles.clearedTypo]}>
            Cleared
          </Text>
        </View>
        <Image
          style={styles.icon3}
          resizeMode="cover"
          source={require("../assets/2.png")}
        />
        <Text style={[styles.profile, styles.clearedTypo, styles.viewFlexBox]}>
          Profile
        </Text>
      </View>
      <Image
        style={styles.downloadRemovebgPreview1}
        resizeMode="cover"
        source={require("../assets/downloadremovebgpreview-1-1.png")}
      />
      <Image
        style={styles.unnamed11}
        resizeMode="cover"
        source={require("../assets/unnamed-1-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt3: {
    marginTop: Margin.m_md,
  },
  financeShadowBox: {
    height: 96,
    width: 377,
    shadowOpacity: 1,
    elevation: 24,
    shadowRadius: 24,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xl,
    left: 26,
    position: "absolute",
    backgroundColor: Color.baseColorWhite,
  },
  financeLayout: {
    height: 58,
    width: 58,
    borderRadius: Border.br_sm,
    left: 43,
    position: "absolute",
  },
  bankTypo: {
    textAlign: "center",
    color: Color.darkslateblue_100,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  banksTypo: {
    color: Color.darkslateblue_200,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    lineHeight: 24,
    position: "absolute",
  },
  arrowBackIosLayout: {
    height: 24,
    width: 24,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  wrapperLayout: {
    width: 10,
    height: 18,
    position: "absolute",
  },
  viewFlexBox: {
    width: 99,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  viewPosition: {
    top: 0,
    width: 99,
  },
  clearedTypo: {
    color: Color.darkgray_200,
    fontFamily: FontFamily.b1,
    lineHeight: 12,
    fontSize: FontSize.size_5xs,
    textAlign: "center",
  },
  financeChild: {
    top: 184,
  },
  financeItem: {
    top: 302,
  },
  financeInner: {
    backgroundColor: "#ff3a3a",
    top: 321,
  },
  rectanglePressable: {
    top: -11,
    left: -24,
    width: 132,
    height: 136,
    position: "absolute",
    backgroundColor: Color.baseColorWhite,
  },
  nabilBankLtd: {
    left: 92,
    top: 223,
  },
  rectangleView: {
    top: 815,
    left: -27,
    width: 482,
    height: 112,
    position: "absolute",
  },
  infoStroke: {
    height: "5.18%",
    width: "11.21%",
    top: "12.74%",
    left: "168.46%",
    fontFamily: FontFamily.sFProDisplayLight,
    color: Color.darkGreen,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "300",
    lineHeight: 22,
    fontSize: FontSize.size_3xl,
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  financeChild1: {
    top: -37,
    borderRadius: Border.br_4xl,
    width: 428,
    height: 155,
    left: 0,
    position: "absolute",
  },
  banks: {
    top: 69,
    left: 97,
    fontSize: 35,
  },
  icon: {
    overflow: "hidden",
  },
  arrowBackIos: {
    top: 68,
    left: 26,
    position: "absolute",
  },
  connectedBankAccounts: {
    top: 147,
    fontSize: FontSize.size_2xl,
    left: 26,
  },
  wrapper: {
    left: 369,
    height: 18,
    top: 223,
  },
  financeChild2: {
    top: 204,
    backgroundColor: Color.mediumspringgreen,
  },
  image13Icon: {
    top: 323,
    borderRadius: Border.br_md,
    display: "none",
    height: 59,
    width: 60,
    left: 40,
    position: "absolute",
  },
  container: {
    left: 365,
    top: 344,
    height: 18,
  },
  nicAsiaBank: {
    top: 341,
    left: 77,
    width: 213,
  },
  text: {
    fontFamily: FontFamily.sFProLight,
    width: 26,
    height: 26,
    color: Color.dimgray_100,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontWeight: "300",
    lineHeight: 22,
    fontSize: FontSize.size_3xl,
    textAlign: "center",
  },
  home: {
    height: 12,
    fontFamily: FontFamily.b1,
    lineHeight: 12,
    fontSize: FontSize.size_5xs,
    color: Color.dimgray_100,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  view: {
    height: 60,
    left: 0,
  },
  mditickCircleOutlineIcon: {
    overflow: "hidden",
  },
  cleared: {
    alignSelf: "stretch",
  },
  view1: {
    left: 137,
    height: 59,
  },
  icon3: {
    top: 4,
    left: 318,
    width: 31,
    height: 29,
    position: "absolute",
  },
  profile: {
    top: 36,
    left: 284,
    height: 18,
    width: 99,
    display: "flex",
    color: Color.darkgray_200,
  },
  parent: {
    top: 851,
    left: 20,
    width: 383,
    height: 60,
    position: "absolute",
  },
  downloadRemovebgPreview1: {
    top: 205,
    borderRadius: 28,
    width: 63,
    height: 61,
    left: 40,
    position: "absolute",
  },
  unnamed11: {
    left: 44,
    width: 57,
    height: 53,
    top: 321,
    position: "absolute",
  },
  finance: {
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.baseColorWhite,
  },
});

export default Finance1;
