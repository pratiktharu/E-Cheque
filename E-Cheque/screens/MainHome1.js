import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Margin, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const MainHome1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainHome}>
      <View style={[styles.mainHomeChild, styles.mainChildLayout5]} />
      <Text
        style={[
          styles.processing,
          styles.processingTypo,
          styles.processingTypo1,
        ]}
      >
        Processing
      </Text>
      <Text
        style={[
          styles.processing,
          styles.processingTypo,
          styles.processingTypo1,
        ]}
      >
        Processing
      </Text>
      <Image
        style={styles.mainHomeItem}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={styles.mainHomeInner}
        resizeMode="cover"
        source={require("../assets/group-1564.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <Text style={styles.hariBahadur}>Hari Bahadur</Text>
      <Text style={styles.hello}>Hello</Text>
      <Text style={[styles.infoStroke, styles.view1FlexBox]}>􀅴</Text>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-35216.png")}
      />
      <View
        style={[
          styles.rectangleView,
          styles.mainChildLayout3,
          styles.mainChildLayout4,
        ]}
      />
      <View
        style={[
          styles.mainHomeChild1,
          styles.mainChildLayout3,
          styles.mainChildLayout4,
        ]}
      />
      <View
        style={[
          styles.mainHomeChild2,
          styles.mainChildLayout3,
          styles.mainChildLayout4,
        ]}
      />
      <View
        style={[
          styles.mainHomeChild3,
          styles.mainChildLayout3,
          styles.mainChildLayout4,
        ]}
      />
      <View
        style={[
          styles.mainHomeChild4,
          styles.mainChildLayout3,
          styles.mainChildLayout4,
        ]}
      />
      <View
        style={[
          styles.mainHomeChild5,
          styles.mainChildLayout3,
          styles.mainChildLayout4,
        ]}
      />
      <View
        style={[
          styles.mainHomeChild6,
          styles.mainChildLayout3,
          styles.mainChildLayout4,
        ]}
      />
      <View
        style={[
          styles.mainHomeChild7,
          styles.mainChildLayout3,
          styles.mainChildLayout4,
        ]}
      />
      <View
        style={[
          styles.mainHomeChild8,
          styles.mainChildLayout3,
          styles.mainChildLayout4,
        ]}
      />
      <View style={[styles.mainHomeChild9, styles.mainChildLayout3]} />
      <View style={[styles.mainHomeChild10, styles.mainChildLayout2]} />
      <View style={[styles.mainHomeChild11, styles.mainChildLayout2]} />
      <View style={[styles.mainHomeChild12, styles.mainChildLayout2]} />
      <View style={[styles.mainHomeChild13, styles.mainChildLayout2]} />
      <View style={[styles.mainHomeChild14, styles.mainChildLayout2]} />
      <View style={[styles.mainHomeChild15, styles.mainChildLayout2]} />
      <View style={[styles.mainHomeChild16, styles.mainChildLayout2]} />
      <View style={[styles.mainHomeChild17, styles.mainChildLayout2]} />
      <View style={[styles.mainHomeChild18, styles.mainChildLayout1]} />
      <View style={[styles.mainHomeChild19, styles.mainChildLayout1]} />
      <View style={[styles.mainHomeChild20, styles.mainChildLayout1]} />
      <View style={[styles.mainHomeChild21, styles.mainChildLayout1]} />
      <View style={[styles.mainHomeChild22, styles.mainChildLayout1]} />
      <View style={[styles.mainHomeChild23, styles.mainChildLayout1]} />
      <View style={[styles.mainHomeChild24, styles.mainChildLayout1]} />
      <View style={[styles.mainHomeChild25, styles.mainChildLayout1]} />
      <View style={[styles.mainHomeChild26, styles.mainChildLayout1]} />
      <Text style={styles.chequesHistory}>{`Cheques History `}</Text>
      <Text style={[styles.text, styles.textTypo]}>55,000</Text>
      <Text style={[styles.text1, styles.textTypo]}>36,600</Text>
      <View style={[styles.mainHomeChild27, styles.mainChildLayout]} />
      <View style={[styles.mainHomeChild28, styles.mainChildLayout]} />
      <Text
        style={[
          styles.processing2,
          styles.processingTypo,
          styles.processingTypo1,
        ]}
      >
        Processing
      </Text>
      <Text
        style={[
          styles.processing2,
          styles.processingTypo,
          styles.processingTypo1,
        ]}
      >
        Processing
      </Text>
      <Text style={[styles.processed, styles.processingTypo]}>Processed</Text>
      <View style={[styles.parent, styles.parentPosition]}>
        <View
          style={[styles.view, styles.viewFlexBox, styles.backgroundPosition]}
        >
          <Text style={styles.text2}>􀎟</Text>
          <Text style={[styles.home, styles.mt3]}>Home</Text>
        </View>
        <Text style={[styles.overdue, styles.overdueTypo, styles.viewFlexBox]}>
          Overdue
        </Text>
      </View>
      <Image
        style={[styles.mainHomeChild29, styles.wrapperLayout]}
        resizeMode="cover"
        source={require("../assets/group-35188.png")}
      />
      <View style={styles.slideToggleSimple}>
        <View style={[styles.slideToggleSimpleChild, styles.slidePosition]} />
        <View style={[styles.slideToggleSimpleItem, styles.slidePosition]} />
        <Text style={[styles.public, styles.publicFlexBox, styles.publicTypo]}>
          BY You
        </Text>
        <Text style={[styles.private, styles.publicFlexBox, styles.publicTypo]}>
          On you
        </Text>
      </View>
      <View
        style={[
          styles.mainHomeChild30,
          styles.parentPosition,
          styles.mainChildLayout5,
        ]}
      />
      <View style={[styles.card, styles.cardLayout, styles.cardPosition1]}>
        <View
          style={[
            styles.background,
            styles.backgroundLayout,
            styles.cardLayout,
            styles.backgroundPosition,
          ]}
        />
        <Text
          style={[
            styles.nicAsia,
            styles.nabilTypo,
            styles.nabilTypo1,
            styles.nabilTypo2,
          ]}
        >
          NIC ASIA
        </Text>
        <View style={[styles.balance, styles.balancePosition]}>
          <Text
            style={[
              styles.rupee30100,
              styles.rupee30100Clr,
              styles.publicFlexBox,
              styles.rupee30100Typo,
            ]}
          >
            <Text style={styles.rupee}>{`RUPEE: `}</Text>
            <Text style={styles.text3}>30,100</Text>
          </Text>
          <Text
            style={[
              styles.theSumOfContainer,
              styles.date2332023Typo,
              styles.rupee30100Clr,
              styles.ac24233581Position,
            ]}
          >
            <Text style={styles.theSumOfTypo}>THE SUM OF</Text>
            <Text
              style={styles.nabilTypo1}
            >{`: THIRTY THOUSAND AND ONE HUNDRED `}</Text>
          </Text>
        </View>
        <View style={styles.cardHolder}>
          <Text style={[styles.nabilTypo, styles.backgroundPosition]}>
            <Text style={styles.theSumOfTypo}>PAY</Text>
            <Text style={styles.nabilTypo1}>: Nitiz Khanal</Text>
          </Text>
        </View>
        <View style={[styles.cardHolder1, styles.cardPosition]}>
          <Text
            style={[
              styles.ac24233581,
              styles.theSumOfTypo,
              styles.rupee30100Clr,
              styles.publicFlexBox,
              styles.ac24233581Position,
              styles.rupee30100Typo,
            ]}
          >
            A/C: 2423 3581 9503 2412
          </Text>
        </View>
        <Text style={[styles.date2332023, styles.date2332023Typo]}>
          Date: 23/3/2023
        </Text>
      </View>
      <View style={[styles.card1, styles.cardLayout, styles.cardPosition1]}>
        <View
          style={[
            styles.background1,
            styles.backgroundLayout,
            styles.cardLayout,
            styles.backgroundPosition,
          ]}
        />
        <Text
          style={[
            styles.nabil,
            styles.nabilTypo,
            styles.nabilTypo1,
            styles.nabilTypo2,
          ]}
        >
          NABIL
        </Text>
        <View style={[styles.balance1, styles.balancePosition]}>
          <Text
            style={[
              styles.rupee30100,
              styles.rupee30100Clr,
              styles.publicFlexBox,
              styles.rupee30100Typo,
            ]}
          >
            <Text style={styles.rupee}>{`RUPEE: `}</Text>
            <Text style={styles.text3}>3,600</Text>
          </Text>
          <Text
            style={[
              styles.theSumOfContainer,
              styles.date2332023Typo,
              styles.rupee30100Clr,
              styles.ac24233581Position,
            ]}
          >
            <Text style={styles.theSumOfTypo}>THE SUM OF</Text>
            <Text
              style={styles.nabilTypo1}
            >{`: THREE THOUSAND AND SIX HUNDRED `}</Text>
          </Text>
        </View>
        <View style={[styles.cardHolder2, styles.view1Layout]}>
          <Text style={styles.backgroundPosition}>
            <Text style={styles.theSumOfTypo}>PAY</Text>
            <Text style={styles.nabilTypo1}>: Pratik shrestha</Text>
          </Text>
        </View>
        <View style={[styles.cardHolder3, styles.cardPosition]}>
          <Text
            style={[
              styles.ac24233581,
              styles.theSumOfTypo,
              styles.rupee30100Clr,
              styles.publicFlexBox,
              styles.ac24233581Position,
              styles.rupee30100Typo,
            ]}
          >
            A/C: 2423 4456 8907 4567
          </Text>
        </View>
        <Text style={[styles.date2332023, styles.date2332023Typo]}>
          Date: 30/03/2023
        </Text>
      </View>
      <Text style={styles.issueACheque}>Issue a Cheque</Text>
      <View style={styles.mainHomeChild31} />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Finance1")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/group-351881.png")}
        />
      </Pressable>
      <View style={[styles.mainHomeChild32, styles.backgroundLayout]} />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
      <View style={[styles.view1, styles.view1Layout, styles.view1FlexBox]}>
        <Pressable
          style={styles.mditickCircleOutline}
          onPress={() => navigation.navigate("Cleared")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/mditickcircleoutline6.png")}
          />
        </Pressable>
        <Text style={[styles.cleared, styles.mt3, styles.overdueTypo]}>
          Cleared
        </Text>
      </View>
      <Pressable
        style={styles.ggdanger}
        onPress={() => navigation.navigate("Overdue")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/ggdanger3.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt3: {
    marginTop: Margin.m_md,
  },
  mainChildLayout5: {
    width: 377,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_3xl,
    backgroundColor: Color.baseColorWhite,
  },
  processingTypo: {
    width: 84,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    lineHeight: 14,
    fontSize: FontSize.size_4xs,
    position: "absolute",
  },
  processingTypo1: {
    color: Color.firebrick,
    top: 753,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    lineHeight: 14,
    fontSize: FontSize.size_4xs,
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  view1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainChildLayout3: {
    opacity: 0.04,
    height: 2,
    width: 12,
    backgroundColor: Color.darkGreen,
    borderRadius: Border.br_4xs,
    position: "absolute",
  },
  mainChildLayout4: {
    top: 369,
    opacity: 0.04,
    height: 2,
    width: 12,
    backgroundColor: Color.darkGreen,
    borderRadius: Border.br_4xs,
  },
  mainChildLayout2: {
    top: 355,
    opacity: 0.04,
    height: 2,
    width: 12,
    backgroundColor: Color.darkGreen,
    borderRadius: Border.br_4xs,
    position: "absolute",
  },
  mainChildLayout1: {
    top: 338,
    opacity: 0.04,
    height: 2,
    width: 12,
    backgroundColor: Color.darkGreen,
    borderRadius: Border.br_4xs,
    position: "absolute",
  },
  textTypo: {
    left: 63,
    fontSize: FontSize.size_2xs,
    color: Color.darkslateblue_200,
    lineHeight: 24,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  mainChildLayout: {
    height: 21,
    width: 79,
    borderRadius: Border.br_2xl,
    position: "absolute",
  },
  parentPosition: {
    left: 26,
    position: "absolute",
  },
  viewFlexBox: {
    width: 99,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  backgroundPosition: {
    left: 0,
    top: 0,
  },
  overdueTypo: {
    color: Color.darkgray_200,
    lineHeight: 12,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.b1,
    textAlign: "center",
  },
  wrapperLayout: {
    width: 18,
    height: 18,
    position: "absolute",
  },
  slidePosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  publicFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  publicTypo: {
    fontFamily: FontFamily.latoBold,
    textTransform: "uppercase",
    fontSize: FontSize.bodySemiBold_size,
    top: "27.03%",
    textAlign: "left",
    fontWeight: "700",
  },
  cardLayout: {
    height: 171,
    width: 343,
  },
  cardPosition1: {
    left: 47,
    width: 343,
    position: "absolute",
  },
  backgroundLayout: {
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  nabilTypo: {
    textAlign: "right",
    lineHeight: 18,
    fontSize: FontSize.caption12pxRegular_size,
    color: Color.baseColorWhite,
    position: "absolute",
  },
  nabilTypo1: {
    fontFamily: FontFamily.bodySemiBold,
    fontWeight: "500",
  },
  nabilTypo2: {
    top: 137,
    fontFamily: FontFamily.bodySemiBold,
    lineHeight: 18,
    fontSize: FontSize.caption12pxRegular_size,
  },
  balancePosition: {
    left: 18,
    top: 70,
    height: 44,
    position: "absolute",
  },
  rupee30100Clr: {
    color: Color.baseColorWhite,
    left: 0,
  },
  rupee30100Typo: {
    textAlign: "left",
    fontSize: FontSize.b1_size,
  },
  date2332023Typo: {
    lineHeight: 16,
    fontSize: FontSize.caption12pxRegular_size,
    textAlign: "left",
    position: "absolute",
  },
  ac24233581Position: {
    top: 0,
    color: Color.baseColorWhite,
  },
  cardPosition: {
    top: 134,
    left: 17,
    height: 21,
    position: "absolute",
  },
  theSumOfTypo: {
    fontFamily: FontFamily.calloutBold,
    fontWeight: "700",
  },
  view1Layout: {
    width: 112,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  mainHomeChild: {
    top: 709,
    left: 25,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    height: 120,
    position: "absolute",
  },
  processing: {
    height: 29,
    left: 300,
    color: Color.firebrick,
    top: 753,
  },
  mainHomeItem: {
    top: 32,
    left: 30,
    width: 44,
    height: 44,
    position: "absolute",
  },
  mainHomeInner: {
    top: 21,
    left: 21,
    width: 67,
    height: 67,
    position: "absolute",
  },
  vectorIcon: {
    height: "1.94%",
    width: "4.21%",
    top: "4.54%",
    right: "7.01%",
    bottom: "93.52%",
    left: "88.79%",
  },
  hariBahadur: {
    color: Color.darkslateblue_200,
    fontFamily: FontFamily.b1,
    left: 85,
    lineHeight: 24,
    fontSize: FontSize.b1_size,
    top: 49,
    textAlign: "center",
    position: "absolute",
  },
  hello: {
    top: 30,
    fontSize: FontSize.size_5xs,
    color: Color.darkslateblue_200,
    fontFamily: FontFamily.b1,
    lineHeight: 24,
    left: 85,
    textAlign: "center",
    position: "absolute",
  },
  infoStroke: {
    top: "12.74%",
    left: "168.46%",
    fontFamily: FontFamily.sFProDisplayLight,
    color: Color.darkGreen,
    display: "flex",
    fontWeight: "300",
    lineHeight: 22,
    fontSize: FontSize.size_3xl,
    alignItems: "center",
    width: "11.21%",
    height: "5.18%",
    textAlign: "center",
    position: "absolute",
  },
  groupIcon: {
    top: 260,
    left: 48,
    width: 332,
    height: 7,
    display: "none",
    position: "absolute",
  },
  rectangleView: {
    left: 101,
  },
  mainHomeChild1: {
    left: 133,
  },
  mainHomeChild2: {
    left: 165,
  },
  mainHomeChild3: {
    left: 197,
  },
  mainHomeChild4: {
    left: 229,
  },
  mainHomeChild5: {
    left: 261,
  },
  mainHomeChild6: {
    left: 293,
  },
  mainHomeChild7: {
    left: 325,
  },
  mainHomeChild8: {
    left: 357,
  },
  mainHomeChild9: {
    top: 354,
    left: 101,
  },
  mainHomeChild10: {
    left: 133,
  },
  mainHomeChild11: {
    left: 165,
  },
  mainHomeChild12: {
    left: 197,
  },
  mainHomeChild13: {
    left: 229,
  },
  mainHomeChild14: {
    left: 261,
  },
  mainHomeChild15: {
    left: 293,
  },
  mainHomeChild16: {
    left: 325,
  },
  mainHomeChild17: {
    left: 357,
  },
  mainHomeChild18: {
    left: 101,
  },
  mainHomeChild19: {
    left: 133,
  },
  mainHomeChild20: {
    left: 165,
  },
  mainHomeChild21: {
    left: 197,
  },
  mainHomeChild22: {
    left: 229,
  },
  mainHomeChild23: {
    left: 261,
  },
  mainHomeChild24: {
    left: 293,
  },
  mainHomeChild25: {
    left: 325,
  },
  mainHomeChild26: {
    left: 357,
  },
  chequesHistory: {
    top: 718,
    left: 62,
    fontSize: FontSize.size_2xs,
    color: Color.darkslateblue_200,
    lineHeight: 24,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  text: {
    top: 747,
  },
  text1: {
    top: 776,
  },
  mainHomeChild27: {
    top: 779,
    left: 304,
    backgroundColor: Color.mediumseagreen,
  },
  mainHomeChild28: {
    top: 750,
    left: 303,
    backgroundColor: Color.mistyrose,
  },
  processing2: {
    left: 301,
    height: 18,
    color: Color.firebrick,
    top: 753,
  },
  processed: {
    top: 782,
    color: Color.gray_500,
    height: 18,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    lineHeight: 14,
    fontSize: FontSize.size_4xs,
    left: 300,
  },
  text2: {
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
    width: 60,
    height: 12,
    lineHeight: 12,
    color: Color.dimgray_100,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.b1,
    textAlign: "center",
  },
  view: {
    height: 60,
  },
  overdue: {
    top: 35,
    left: 284,
    height: 18,
    display: "flex",
  },
  parent: {
    width: 383,
    height: 60,
    top: 860,
  },
  mainHomeChild29: {
    top: 606,
    left: 327,
  },
  slideToggleSimpleChild: {
    right: "0%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.gainsboro_200,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: "100%",
  },
  slideToggleSimpleItem: {
    width: "50%",
    right: "50%",
    borderTopLeftRadius: Border.br_xs,
    borderBottomLeftRadius: Border.br_xs,
    backgroundColor: Color.labelscolorsPrimary,
  },
  public: {
    left: "8.67%",
    color: Color.gainsboro_200,
    textShadowColor: "rgba(0, 0, 0, 0.15)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 14,
  },
  private: {
    left: "54.67%",
    color: Color.labelscolorsPrimary,
    opacity: 0.5,
  },
  slideToggleSimple: {
    top: 122,
    left: 33,
    width: 372,
    height: 37,
    position: "absolute",
  },
  mainHomeChild30: {
    top: 201,
    shadowColor: "rgba(0, 0, 0, 0.11)",
    shadowRadius: 28,
    elevation: 28,
    height: 415,
  },
  background: {
    backgroundColor: Color.maroon,
  },
  nicAsia: {
    left: 277,
  },
  rupee: {
    fontFamily: FontFamily.tittleLargeBold,
    fontWeight: "700",
  },
  text3: {
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
  },
  rupee30100: {
    top: 16,
    letterSpacing: 0.1,
    lineHeight: 28,
  },
  theSumOfContainer: {
    opacity: 0.7,
  },
  balance: {
    width: 299,
  },
  cardHolder: {
    left: 19,
    width: 93,
    height: 18,
    top: 49,
    position: "absolute",
  },
  ac24233581: {
    lineHeight: 21,
  },
  cardHolder1: {
    width: 221,
    left: 17,
  },
  date2332023: {
    top: "5.26%",
    left: "67.64%",
    fontFamily: FontFamily.caption1Regular,
    color: Color.labelsColorsTertiary,
  },
  card: {
    top: 229,
  },
  background1: {
    backgroundColor: Color.darkslategray_100,
  },
  nabil: {
    left: 293,
  },
  balance1: {
    width: 288,
  },
  cardHolder2: {
    top: 46,
    left: 17,
    height: 18,
  },
  cardHolder3: {
    width: 230,
    left: 17,
  },
  card1: {
    top: 415,
  },
  issueACheque: {
    top: 651,
    left: 71,
    fontSize: FontSize.size_6xl,
    color: Color.darkslateblue_100,
    width: 242,
    height: 27,
    lineHeight: 24,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  mainHomeChild31: {
    top: 644,
    left: 348,
    borderRadius: Border.br_xl,
    backgroundColor: Color.darkslateblue_200,
    width: 41,
    height: 40,
    position: "absolute",
  },
  wrapper: {
    left: 359,
    top: 655,
  },
  mainHomeChild32: {
    top: "69.11%",
    right: "82.01%",
    bottom: "25.7%",
    left: "6.78%",
    backgroundColor: Color.mintcream,
    width: "11.21%",
    height: "5.18%",
    borderRadius: Border.br_sm,
  },
  vectorIcon1: {
    height: "2.27%",
    width: "6.07%",
    top: "70.52%",
    right: "84.58%",
    bottom: "27.21%",
    left: "9.35%",
  },
  icon1: {
    overflow: "hidden",
  },
  mditickCircleOutline: {
    width: 43,
    height: 34,
  },
  cleared: {
    alignSelf: "stretch",
  },
  view1: {
    left: 155,
    height: 59,
    top: 860,
  },
  ggdanger: {
    left: 337,
    width: 42,
    height: 34,
    top: 860,
    position: "absolute",
  },
  mainHome: {
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.baseColorWhite,
  },
});

export default MainHome1;
