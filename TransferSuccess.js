import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  FontFamily,
  FontSize,
  Color,
  Padding,
  Border,
} from "../GlobalStyles";

const TransferSuccess = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.transferSuccess}>
      <View style={styles.button}>
        <Text style={[styles.learnMore, styles.learnTypo]}>Get Receipt</Text>
      </View>
      <Pressable
        style={styles.button1}
        onPress={() => navigation.navigate("MainHome1")}
      >
        <Text style={[styles.learnMore1, styles.learnTypo]}>Confirm</Text>
      </Pressable>
      <Text style={[styles.detailsNitizKhanalContainer, styles.timeFlexBox]}>
        <Text style={styles.details}>
          <Text style={styles.details1}>Details</Text>
        </Text>
        <Text style={styles.details}>
          <Text style={styles.nitizKhanal1}>{`Nitiz Khanal `}</Text>
        </Text>
        <Text style={styles.details}>
          <Text style={styles.nitizKhanal1}>Bank : Nabil Bank Ltd</Text>
        </Text>
        <Text style={styles.details}>
          <Text style={styles.nitizKhanal1}>
            Account No: 2423 3581 9503 2412
          </Text>
        </Text>
        <Text style={styles.details}>
          <Text style={styles.nitizKhanal1}>Amount : NPR 25,000</Text>
        </Text>
        <Text style={styles.blankLine}>
          <Text style={styles.nitizKhanal1}> </Text>
        </Text>
      </Text>
      <View style={styles.statusBar}>
        <View style={[styles.statusBar1, styles.containerPosition]}>
          <View style={styles.containerPosition} />
          <Image
            style={styles.rightSideIcon}
            resizeMode="cover"
            source={require("../assets/right-side3.png")}
          />
          <Text style={[styles.time, styles.timeFlexBox]}>
            <Text style={styles.text}>09:4</Text>6
          </Text>
        </View>
      </View>
      <Image
        style={styles.transferSuccessChild}
        resizeMode="cover"
        source={require("../assets/group-35209.png")}
      />
      <View style={styles.parent}>
        <View style={[styles.view, styles.viewFlexBox]}>
          <Text style={[styles.text1, styles.text1FlexBox]}>􀎟</Text>
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
        <Text style={[styles.profile, styles.clearedTypo, styles.text1FlexBox]}>
          Profile
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt3: {
    marginTop: Margin.m_md,
  },
  learnTypo: {
    textAlign: "center",
    fontFamily: FontFamily.calloutBold,
    fontWeight: "700",
    lineHeight: 22,
    letterSpacing: 0.1,
    fontSize: FontSize.b1_size,
  },
  timeFlexBox: {
    textAlign: "left",
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
  viewFlexBox: {
    justifyContent: "center",
    width: 99,
    top: 0,
    alignItems: "center",
    position: "absolute",
  },
  text1FlexBox: {
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
  learnMore: {
    color: Color.systemTint5825E6,
  },
  button: {
    top: 755,
    left: 20,
    width: 394,
    height: 51,
    alignItems: "center",
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_2xl,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  learnMore1: {
    color: Color.baseColorWhite,
  },
  button1: {
    top: 686,
    left: 29,
    backgroundColor: Color.green,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 375,
    height: 52,
    alignItems: "center",
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_2xl,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  details1: {
    fontSize: FontSize.size_2xl,
    color: "#6ebf3d",
  },
  details: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  nitizKhanal1: {
    color: Color.labelscolorsPrimary,
    fontSize: FontSize.b1_size,
  },
  blankLine: {
    margin: Margin.m_sm,
  },
  detailsNitizKhanalContainer: {
    top: 452,
    left: 44,
    letterSpacing: "-0.4%",
    lineHeight: 30,
    fontFamily: FontFamily.questrialRegular,
    whiteSpace: "pre-wrap",
    width: 374,
    height: 228,
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
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.sFProDisplaySemibold,
    color: Color.labelscolorsPrimary,
  },
  statusBar1: {
    overflow: "hidden",
  },
  statusBar: {
    left: 2,
    width: 430,
    top: 0,
    height: 52,
    position: "absolute",
  },
  transferSuccessChild: {
    top: 52,
    width: 433,
    height: 393,
    left: 0,
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_3xl,
    fontWeight: "300",
    fontFamily: FontFamily.sFProLight,
    width: 26,
    height: 26,
    color: Color.dimgray_100,
    display: "flex",
    textAlign: "center",
    lineHeight: 22,
  },
  home: {
    width: 60,
    height: 12,
    fontFamily: FontFamily.b1,
    lineHeight: 12,
    fontSize: FontSize.size_5xs,
    display: "flex",
    color: Color.dimgray_100,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  view: {
    height: 60,
    left: 0,
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
    top: 806,
    left: 25,
    width: 383,
    height: 60,
    position: "absolute",
  },
  transferSuccess: {
    backgroundColor: Color.baseColorWhite,
    flex: 1,
    height: 872,
    overflow: "hidden",
    width: "100%",
  },
});

export default TransferSuccess;
