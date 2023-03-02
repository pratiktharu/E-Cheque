import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Finance = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.finance}>
      <View style={styles.financeChild} />
      <Text style={styles.infoStroke}>􀅴</Text>
      <Pressable
        style={styles.financeItem}
        onPress={() => navigation.navigate("CongratsCredit")}
      />
      <Text style={styles.continue}>Continue</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("CongratsCredit")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrow-2.png")}
        />
      </Pressable>
      <Text style={[styles.text, styles.textTypo3, styles.textTypo4]}>1</Text>
      <Text style={[styles.text1, styles.textTypo2]}>3</Text>
      <Text style={[styles.text2, styles.textTypo3, styles.textTypo4]}>2</Text>
      <Text style={[styles.text3, styles.textTypo3]}>4</Text>
      <Text style={[styles.text4, styles.textTypo2]}>5</Text>
      <Text style={[styles.text5, styles.textTypo1]}>8</Text>
      <Text style={[styles.text6, styles.textTypo]}>7</Text>
      <Text style={[styles.text7, styles.textTypo]}>0</Text>
      <Text style={[styles.text8, styles.textTypo3]}>6</Text>
      <Text style={[styles.text9, styles.textTypo1]}>3</Text>
      <Image
        style={styles.img6282Icon}
        resizeMode="cover"
        source={require("../assets/img-6282.png")}
      />
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
        <Text style={styles.time}>9:41</Text>
      </View>
      <View style={[styles.financeInner, styles.financeInnerLayout]} />
      <Text style={[styles.addMpin, styles.text10Typo]}>Add MPIN</Text>
      <View style={[styles.rectangleView, styles.financeInnerLayout]} />
      <Text style={[styles.text10, styles.text10Typo]}>1234</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo3: {
    color: Color.gray_400,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_6xl,
    lineHeight: 24,
    textAlign: "center",
    position: "absolute",
  },
  textTypo4: {
    top: 619,
    color: Color.gray_400,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_6xl,
  },
  textTypo2: {
    top: 676,
    color: Color.gray_400,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_6xl,
    lineHeight: 24,
    textAlign: "center",
    position: "absolute",
  },
  textTypo1: {
    left: 335,
    color: Color.gray_400,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_6xl,
    lineHeight: 24,
    textAlign: "center",
    position: "absolute",
  },
  textTypo: {
    width: 12,
    left: 211,
    color: Color.gray_400,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_6xl,
    lineHeight: 24,
    textAlign: "center",
    position: "absolute",
  },
  financeInnerLayout: {
    borderRadius: Border.br_3xl,
    position: "absolute",
  },
  text10Typo: {
    fontFamily: FontFamily.poppinsSemibold,
    fontSize: FontSize.size_4xl,
    fontWeight: "600",
    lineHeight: 24,
    textAlign: "center",
    position: "absolute",
  },
  financeChild: {
    top: -60,
    left: -38,
    borderRadius: Border.br_4xl,
    backgroundColor: Color.systemBackgroundSecondary,
    width: 516,
    height: 1040,
    position: "absolute",
  },
  infoStroke: {
    height: "5.18%",
    width: "11.21%",
    top: "12.74%",
    left: "168.46%",
    fontSize: FontSize.size_3xl,
    lineHeight: 22,
    fontWeight: "300",
    fontFamily: FontFamily.sFProDisplayLight,
    color: Color.darkGreen,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    position: "absolute",
  },
  financeItem: {
    top: 857,
    left: 31,
    borderRadius: 24,
    backgroundColor: "#eee",
    width: 366,
    height: 45,
    position: "absolute",
  },
  continue: {
    top: 868,
    left: 0,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.b1,
    color: "#a0a0a0",
    width: 164,
    height: 34,
    lineHeight: 24,
    textAlign: "center",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 363,
    top: 876,
    width: 13,
    height: 7,
    position: "absolute",
  },
  text: {
    left: 87,
  },
  text1: {
    left: 84,
  },
  text2: {
    left: 209,
  },
  text3: {
    top: 675,
    left: 207,
  },
  text4: {
    left: 334,
  },
  text5: {
    top: 731,
  },
  text6: {
    top: 733,
  },
  text7: {
    top: 789,
  },
  text8: {
    left: 83,
    width: 14,
    top: 731,
  },
  text9: {
    top: 620,
  },
  img6282Icon: {
    top: 784,
    left: 322,
    width: 51,
    height: 51,
    position: "absolute",
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
    fontSize: FontSize.bodySemiBold_size,
    letterSpacing: 0,
    fontFamily: FontFamily.sFProTextSemibold,
    color: Color.labelscolorsPrimary,
    width: 30,
    height: 17,
    fontWeight: "600",
    top: "50%",
    textAlign: "center",
    position: "absolute",
  },
  statusbariphoneXLightBackg: {
    height: "5.69%",
    width: "96.73%",
    top: "-0.22%",
    right: "1.4%",
    bottom: "94.52%",
    left: "1.87%",
    position: "absolute",
  },
  financeInner: {
    top: 272,
    left: 12,
    backgroundColor: Color.baseColorWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 18,
    elevation: 18,
    shadowOpacity: 1,
    width: 404,
    height: 241,
  },
  addMpin: {
    top: 183,
    left: 151,
    color: Color.darkslateblue_200,
  },
  rectangleView: {
    top: 372,
    backgroundColor: "#f0f0f0",
    width: 271,
    height: 66,
    left: 87,
  },
  text10: {
    top: 392,
    left: 112,
    color: "#909090",
    width: 198,
    height: 56,
  },
  finance: {
    backgroundColor: Color.darkgray_200,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default Finance;
