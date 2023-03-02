import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const More = () => {
  return (
    <View style={styles.more}>
      <Image
        style={styles.moreChild}
        resizeMode="cover"
        source={require("../assets/rectangle-938.png")}
      />
      <View style={[styles.moreItem, styles.moreShadowBox]} />
      <View style={[styles.moreInner, styles.moreShadowBox]} />
      <View style={[styles.rectangleView, styles.moreShadowBox]} />
      <View style={[styles.moreChild1, styles.moreShadowBox]} />
      <View style={[styles.moreChild2, styles.moreChildShadowBox]} />
      <View style={[styles.moreChild3, styles.moreChildShadowBox]} />
      <View style={[styles.moreChild4, styles.moreChildShadowBox]} />
      <View style={[styles.moreChild5, styles.moreChildShadowBox]} />
      <View style={[styles.moreChild6, styles.moreChildLayout]} />
      <View style={[styles.moreChild7, styles.moreChildLayout]} />
      <Text style={styles.swipeUpTo}>Swipe up to SignUp</Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-10.png")}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-35202.png")}
      />
      <Text style={styles.eCheque}>E-cheque</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  moreShadowBox: {
    height: 60,
    width: 60,
    shadowOpacity: 1,
    elevation: 22,
    shadowRadius: 22,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_lg,
    top: 756,
    position: "absolute",
  },
  moreChildShadowBox: {
    top: 836,
    height: 60,
    width: 60,
    shadowOpacity: 1,
    elevation: 22,
    shadowRadius: 22,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  moreChildLayout: {
    height: 3,
    borderWidth: 0.5,
    borderStyle: "solid",
    backgroundColor: Color.darkslateblue_100,
    position: "absolute",
  },
  moreChild: {
    top: 676,
    left: 0,
    borderRadius: 69,
    width: 482,
    height: 360,
    position: "absolute",
  },
  moreItem: {
    left: 59,
  },
  moreInner: {
    left: 147,
  },
  rectangleView: {
    left: 235,
  },
  moreChild1: {
    left: 323,
  },
  moreChild2: {
    left: 59,
  },
  moreChild3: {
    left: 147,
  },
  moreChild4: {
    left: 235,
  },
  moreChild5: {
    left: 323,
  },
  moreChild6: {
    top: 733,
    left: 196,
    borderColor: "#cbcbcb",
    width: 39,
  },
  moreChild7: {
    top: 916,
    left: 156,
    borderColor: "#a0a0a0",
    width: 117,
  },
  swipeUpTo: {
    top: 504,
    left: 129,
    fontSize: FontSize.size_2xl,
    lineHeight: 48,
    fontFamily: FontFamily.b1,
    color: Color.darkslateblue_100,
    textAlign: "left",
    position: "absolute",
  },
  ellipseIcon: {
    top: 422,
    left: 185,
    width: 59,
    height: 59,
    position: "absolute",
  },
  groupIcon: {
    top: 439,
    left: 206,
    width: 18,
    height: 24,
    position: "absolute",
  },
  eCheque: {
    top: 227,
    left: 75,
    fontSize: 48,
    letterSpacing: 13.9,
    lineHeight: 6,
    fontFamily: FontFamily.princessSofiaRegular,
    color: Color.labelscolorsPrimary,
    textAlign: "center",
    width: 282,
    height: 30,
    position: "absolute",
  },
  more: {
    backgroundColor: Color.baseColorWhite,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default More;
