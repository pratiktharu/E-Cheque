import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Margin, Color, FontFamily, FontSize } from "../GlobalStyles";

const GroupScreen = () => {
  return (
    <View style={styles.parent}>
      <View style={[styles.view, styles.viewFlexBox]}>
        <Text style={[styles.text, styles.textFlexBox]}>􀎟</Text>
        <Text style={[styles.home, styles.mt3]}>Home</Text>
      </View>
      <View style={[styles.view1, styles.viewFlexBox]}>
        <Image
          style={styles.mditickCircleOutlineIcon}
          resizeMode="cover"
          source={require("../assets/mditickcircleoutline.png")}
        />
        <Text style={[styles.cleared, styles.mt3, styles.clearedTypo]}>
          Cleared
        </Text>
      </View>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/.png")}
      />
      <Text style={[styles.profile, styles.clearedTypo, styles.textFlexBox]}>
        Profile
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt3: {
    marginTop: Margin.m_md,
  },
  viewFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    width: 99,
    position: "absolute",
  },
  textFlexBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  clearedTypo: {
    color: Color.darkgray_200,
    fontFamily: FontFamily.b1,
    lineHeight: 12,
    fontSize: FontSize.size_5xs,
    textAlign: "center",
  },
  text: {
    fontSize: FontSize.size_3xl,
    lineHeight: 22,
    fontWeight: "300",
    fontFamily: FontFamily.sFProLight,
    width: 26,
    height: 26,
    textAlign: "center",
    color: Color.dimgray_100,
    display: "flex",
  },
  home: {
    width: 60,
    height: 12,
    fontFamily: FontFamily.b1,
    lineHeight: 12,
    fontSize: FontSize.size_5xs,
    display: "flex",
    textAlign: "center",
    color: Color.dimgray_100,
    justifyContent: "center",
    alignItems: "center",
  },
  view: {
    left: 0,
    height: 60,
  },
  mditickCircleOutlineIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  cleared: {
    alignSelf: "stretch",
  },
  view1: {
    left: 137,
    height: 59,
  },
  icon: {
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
    display: "flex",
    width: 99,
    color: Color.darkgray_200,
    position: "absolute",
  },
  parent: {
    flex: 1,
    width: "100%",
    height: 60,
  },
});

export default GroupScreen;
