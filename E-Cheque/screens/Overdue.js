import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Border,
  FontSize,
  Color,
  FontFamily,
  Padding,
} from "../GlobalStyles";

const Overdue = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.overdue}>
      <Image
        style={[styles.sliderIcon, styles.iconLayout, styles.sliderIconLayout]}
        resizeMode="cover"
        source={require("../assets/slider.png")}
      />
      <View style={styles.navbar}>
        <View style={[styles.container, styles.containerPosition]} />
        <Image
          style={[styles.moreIcon, styles.backPosition, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/more.png")}
        />
        <Text style={styles.chequesOverdue}>Cheques Overdue</Text>
        <Pressable
          style={[styles.back, styles.backPosition]}
          onPress={() => navigation.navigate("MainHome1")}
        >
          <View style={styles.containerPosition} />
          <Image
            style={[styles.arrowChevronLeft, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-chevron-left.png")}
          />
        </Pressable>
      </View>
      <View style={styles.statusBar}>
        <View style={[styles.statusBar1, styles.containerPosition]}>
          <View style={[styles.container, styles.containerPosition]} />
          <Image
            style={[styles.rightSideIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/right-side1.png")}
          />
          <Text style={styles.time}>
            <Text style={styles.text}>09:4</Text>6
          </Text>
        </View>
      </View>
      <Image
        style={[styles.sliderIcon1, styles.iconLayout, styles.sliderIconLayout]}
        resizeMode="cover"
        source={require("../assets/slider1.png")}
      />
      <View style={[styles.card, styles.cardLayout]}>
        <View style={[styles.background, styles.backgroundLayout]} />
        <Text
          style={[
            styles.nabil,
            styles.payContainerTypo,
            styles.nabilTypo,
            styles.nabilPosition,
          ]}
        >
          NABIL
        </Text>
        <View
          style={[styles.balance, styles.balanceLayout, styles.balancePosition]}
        >
          <Text
            style={[styles.rupee3600, styles.rupeeLayout, styles.rupeeLayout1]}
          >
            <Text style={styles.rupee}>{`RUPEE: `}</Text>
            <Text style={styles.text1}>3,600</Text>
          </Text>
          <Text style={[styles.theContainerLayout, styles.balanceLayout]}>
            <Text style={styles.requestTypo}>THE SUM OF</Text>
            <Text
              style={styles.nabilTypo}
            >{`: THREE THOUSAND AND SIX HUNDRED `}</Text>
          </Text>
        </View>
        <View style={[styles.cardHolder, styles.cardHolderLayout]}>
          <Text
            style={[
              styles.cardHolderLayout,
              styles.payContainerTypo,
              styles.payContainerPosition,
            ]}
          >
            <Text style={styles.requestTypo}>PAY</Text>
            <Text style={styles.nabilTypo}>: Pratik shrestha</Text>
          </Text>
        </View>
        <View style={[styles.ac24234456Layout, styles.cardPosition]}>
          <Text style={[styles.ac24234456Typo, styles.ac24234456Layout]}>
            A/C: 2423 4456 8907 4567
          </Text>
        </View>
        <Text style={[styles.date30032023, styles.dateTypo]}>
          Date: 30/03/2023
        </Text>
      </View>
      <View style={[styles.card1, styles.cardLayout]}>
        <View style={[styles.background1, styles.backgroundLayout]} />
        <Text
          style={[
            styles.nicAsia,
            styles.payContainerTypo,
            styles.nabilTypo,
            styles.nabilPosition,
          ]}
        >
          NIC ASIA
        </Text>
        <View
          style={[
            styles.balance1,
            styles.balance1Layout,
            styles.balancePosition,
          ]}
        >
          <Text
            style={[styles.rupee30100, styles.rupeeLayout, styles.rupeeLayout1]}
          >
            <Text style={styles.rupee}>{`RUPEE: `}</Text>
            <Text style={styles.text1}>30,100</Text>
          </Text>
          <Text style={[styles.balance1Layout, styles.theContainerLayout]}>
            <Text style={styles.requestTypo}>THE SUM OF</Text>
            <Text
              style={styles.nabilTypo}
            >{`: THIRTY THOUSAND AND ONE HUNDRED `}</Text>
          </Text>
        </View>
        <View style={[styles.cardHolder2, styles.cardHolder2Layout]}>
          <Text
            style={[
              styles.cardHolder2Layout,
              styles.payContainerTypo,
              styles.payContainerPosition,
            ]}
          >
            <Text style={styles.requestTypo}>PAY</Text>
            <Text style={styles.nabilTypo}>: Nitiz Khanal</Text>
          </Text>
        </View>
        <View style={[styles.ac24233581Layout, styles.cardPosition]}>
          <Text style={[styles.ac24233581Layout, styles.ac24234456Typo]}>
            A/C: 2423 3581 9503 2412
          </Text>
        </View>
        <Text style={[styles.date2332023, styles.dateTypo]}>
          Date: 23/3/2023
        </Text>
      </View>
      <View style={[styles.toast, styles.toastBorder, styles.toastShadowBox]}>
        <View style={[styles.closeIcon, styles.viewFlexBox]}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </View>
        <View style={[styles.frame, styles.ml12]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-1.png")}
          />
          <View style={[styles.frrame, styles.ml12]}>
            <View style={styles.title}>
              <Text style={[styles.toastTitle, styles.button1Typo]}>
                Delayed Payments
              </Text>
            </View>
            <Text style={styles.toastDescription}>
              <Text style={styles.delayedPaymentsMightResult}>
                <Text
                  style={styles.delayedPaymentsMight}
                >{`Delayed payments might result in `}</Text>
              </Text>
              <Text style={styles.legalActionsLearnMore}>
                <Text
                  style={styles.delayedPaymentsMight}
                >{`legal actions. `}</Text>
                <Text>Learn more</Text>
              </Text>
            </Text>
            <View style={styles.buttons}>
              <View style={[styles.button, styles.buttonFlexBox]}>
                <Text style={[styles.button1, styles.button1Typo]}>Button</Text>
              </View>
              <View
                style={[
                  styles.button2,
                  styles.ml12,
                  styles.buttonFlexBox,
                  styles.toastBorder,
                ]}
              >
                <Text style={styles.button3}>Button</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.parent}>
        <Pressable
          style={[
            styles.pressable,
            styles.viewLayout,
            styles.viewFlexBox,
            styles.payContainerPosition,
          ]}
          onPress={() => navigation.navigate("MainHome1")}
        >
          <Text style={[styles.text3, styles.text3FlexBox]}>􀎟</Text>
          <Text style={[styles.home, styles.mt3]}>Home</Text>
        </Pressable>
        <View style={[styles.view, styles.viewLayout, styles.viewFlexBox]}>
          <Pressable
            style={styles.mditickCircleOutline}
            onPress={() => navigation.navigate("Cleared")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/mditickcircleoutline.png")}
            />
          </Pressable>
          <Text style={[styles.cleared, styles.mt3, styles.clearedTypo]}>
            Cleared
          </Text>
        </View>
        <Text
          style={[
            styles.overdue1,
            styles.clearedTypo,
            styles.text3FlexBox,
            styles.viewLayout,
          ]}
        >
          Overdue
        </Text>
      </View>
      <Pressable
        style={[styles.ggdanger, styles.rupeeLayout]}
        onPress={() => navigation.navigate("Overdue")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/ggdanger.png")}
        />
      </Pressable>
      <Text style={[styles.forYou, styles.youTypo]}>For you</Text>
      <Text style={[styles.byYou, styles.youTypo]}>BY You</Text>
      <Pressable
        style={[styles.button4, styles.toastShadowBox]}
        onPress={() => navigation.navigate("MainHome1")}
      >
        <Text
          style={[styles.request, styles.requestTypo, styles.requestTypo1]}
        />
      </Pressable>
      <Text style={[styles.request1, styles.requestTypo, styles.requestTypo1]}>
        Request
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ml12: {
    marginLeft: Margin.m_lg,
  },
  mt3: {
    marginTop: Margin.m_md,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  sliderIconLayout: {
    width: "97.91%",
    height: "5.42%",
    maxWidth: "100%",
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
  backPosition: {
    bottom: "14.29%",
    top: "14.29%",
    width: "10.67%",
    height: "71.43%",
    position: "absolute",
  },
  cardLayout: {
    height: 171,
    width: 376,
    left: 29,
    position: "absolute",
  },
  backgroundLayout: {
    borderRadius: Border.br_sm,
    left: 0,
    top: 0,
    height: 171,
    width: 376,
    position: "absolute",
  },
  payContainerTypo: {
    textAlign: "right",
    lineHeight: 18,
    fontSize: FontSize.caption12pxRegular_size,
    color: Color.baseColorWhite,
  },
  nabilTypo: {
    fontFamily: FontFamily.bodySemiBold,
    fontWeight: "500",
  },
  nabilPosition: {
    top: 137,
    height: 18,
    fontFamily: FontFamily.bodySemiBold,
    lineHeight: 18,
    fontSize: FontSize.caption12pxRegular_size,
    position: "absolute",
  },
  balanceLayout: {
    width: 316,
    position: "absolute",
  },
  balancePosition: {
    left: 20,
    top: 70,
    height: 44,
  },
  rupeeLayout: {
    height: 28,
    position: "absolute",
  },
  rupeeLayout1: {
    lineHeight: 28,
    top: 16,
    height: 28,
    fontSize: FontSize.b1_size,
    color: Color.baseColorWhite,
    left: 0,
    textAlign: "left",
    letterSpacing: 0.1,
  },
  cardHolderLayout: {
    width: 123,
    height: 18,
    position: "absolute",
  },
  payContainerPosition: {
    left: 0,
    top: 0,
  },
  cardPosition: {
    left: 19,
    top: 134,
  },
  ac24234456Layout: {
    height: 21,
    width: 252,
    position: "absolute",
  },
  dateTypo: {
    color: Color.labelsColorsTertiary,
    fontFamily: FontFamily.caption1Regular,
    height: "9.36%",
    lineHeight: 16,
    fontSize: FontSize.caption12pxRegular_size,
    textAlign: "left",
    position: "absolute",
  },
  balance1Layout: {
    width: 328,
    position: "absolute",
  },
  theContainerLayout: {
    opacity: 0.7,
    lineHeight: 16,
    height: 16,
    color: Color.baseColorWhite,
    fontSize: FontSize.caption12pxRegular_size,
    left: 0,
    top: 0,
    textAlign: "left",
  },
  cardHolder2Layout: {
    width: 102,
    height: 18,
    position: "absolute",
  },
  ac24234456Typo: {
    lineHeight: 21,
    fontFamily: FontFamily.calloutBold,
    fontSize: FontSize.b1_size,
    color: Color.baseColorWhite,
    left: 0,
    top: 0,
    textAlign: "left",
    fontWeight: "700",
  },
  toastBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  toastShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    alignItems: "center",
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  viewFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  button1Typo: {
    fontFamily: FontFamily.interSemibold,
    fontSize: FontSize.b1_size,
    textAlign: "left",
    fontWeight: "600",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_md,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_sm,
    flex: 1,
  },
  viewLayout: {
    width: 99,
    position: "absolute",
  },
  text3FlexBox: {
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
  youTypo: {
    textShadowRadius: 14,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.15)",
    color: Color.gray_800,
    fontFamily: FontFamily.latoBold,
    textTransform: "uppercase",
    fontSize: FontSize.bodySemiBold_size,
    left: "9.11%",
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  requestTypo: {
    fontFamily: FontFamily.calloutBold,
    fontWeight: "700",
  },
  requestTypo1: {
    color: Color.baseColorWhite,
    fontFamily: FontFamily.calloutBold,
    fontSize: FontSize.b1_size,
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 0.1,
  },
  sliderIcon: {
    top: "40.17%",
    right: "1.04%",
    bottom: "54.41%",
    left: "1.04%",
  },
  container: {
    backgroundColor: Color.baseColorWhite,
  },
  moreIcon: {
    right: "2.13%",
    left: "87.2%",
  },
  chequesOverdue: {
    height: "39.29%",
    width: "39.47%",
    top: "30.36%",
    left: "30.13%",
    fontSize: FontSize.headlineRegular_size,
    textAlign: "center",
    color: Color.labelscolorsPrimary,
    lineHeight: 22,
    letterSpacing: 0.1,
    fontFamily: FontFamily.tittleLargeBold,
    fontWeight: "700",
    position: "absolute",
  },
  arrowChevronLeft: {
    height: "60%",
    width: "60%",
    top: "20%",
    right: "20%",
    bottom: "20%",
    left: "20%",
    position: "absolute",
  },
  back: {
    right: "87.2%",
    left: "2.13%",
  },
  navbar: {
    top: 56,
    width: 446,
    height: 56,
    left: 10,
    position: "absolute",
  },
  rightSideIcon: {
    height: "26.09%",
    width: "18.13%",
    top: "36.96%",
    right: "3.47%",
    bottom: "36.96%",
    left: "78.4%",
    position: "absolute",
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
    fontFamily: FontFamily.sFProDisplaySemibold,
    textAlign: "left",
    fontWeight: "600",
    color: Color.labelscolorsPrimary,
    position: "absolute",
  },
  statusBar1: {
    overflow: "hidden",
  },
  statusBar: {
    top: 8,
    width: 418,
    height: 48,
    left: 10,
    position: "absolute",
  },
  sliderIcon1: {
    top: "75.92%",
    right: "1.86%",
    bottom: "18.66%",
    left: "0.23%",
  },
  background: {
    backgroundColor: Color.darkslategray_100,
  },
  nabil: {
    left: 324,
    width: 37,
    height: 18,
  },
  rupee: {
    fontFamily: FontFamily.tittleLargeBold,
    fontWeight: "700",
  },
  text1: {
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
  },
  rupee3600: {
    width: 115,
  },
  balance: {
    height: 44,
  },
  cardHolder: {
    top: 47,
    left: 11,
  },
  date30032023: {
    width: "27.36%",
    top: "5.26%",
    left: "68.12%",
  },
  card: {
    top: 480,
  },
  background1: {
    backgroundColor: Color.maroon,
  },
  nicAsia: {
    left: 306,
    width: 55,
    height: 18,
  },
  rupee30100: {
    width: 125,
  },
  balance1: {
    height: 44,
  },
  cardHolder2: {
    top: 52,
    left: 10,
  },
  ac24233581Layout: {
    width: 243,
    height: 21,
    position: "absolute",
  },
  date2332023: {
    width: "24.63%",
    top: "9.94%",
    left: "72.11%",
  },
  card1: {
    top: 182,
  },
  vectorIcon: {
    width: 16,
    height: 16,
  },
  closeIcon: {
    top: 6,
    right: 8,
    borderRadius: Border.br_2xs,
    width: 44,
    zIndex: 0,
    display: "none",
    height: 44,
    backgroundColor: Color.baseColorWhite,
    position: "absolute",
  },
  frameChild: {
    width: 32,
    height: 32,
  },
  toastTitle: {
    color: Color.black,
  },
  title: {
    height: 32,
    alignItems: "center",
    flexDirection: "row",
  },
  delayedPaymentsMight: {
    color: Color.gray,
  },
  delayedPaymentsMightResult: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  legalActionsLearnMore: {
    margin: Margin.m_sm,
  },
  toastDescription: {
    lineHeight: 26,
    fontFamily: FontFamily.interRegular,
    width: 312,
    fontSize: FontSize.b1_size,
    textAlign: "left",
  },
  button1: {
    color: Color.white,
  },
  button: {
    backgroundColor: Color.primary,
  },
  button3: {
    fontFamily: FontFamily.interMedium,
    color: Color.gray,
    fontSize: FontSize.b1_size,
    fontWeight: "500",
    textAlign: "left",
  },
  button2: {
    borderColor: "#565656",
  },
  buttons: {
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_2xs,
    alignSelf: "stretch",
    display: "none",
    flexDirection: "row",
  },
  frrame: {
    paddingRight: Padding.p_xl,
  },
  frame: {
    zIndex: 1,
    flexDirection: "row",
  },
  toast: {
    top: 746,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 12,
    elevation: 12,
    borderColor: "#e4e4e4",
    width: 406,
    height: 116,
    paddingLeft: Padding.p_md,
    paddingTop: Padding.p_md,
    paddingRight: Padding.p_lg,
    paddingBottom: Padding.p_md,
    alignItems: "center",
    flexDirection: "row",
    left: 14,
    backgroundColor: Color.baseColorWhite,
  },
  text3: {
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
    alignItems: "center",
    textAlign: "center",
  },
  pressable: {
    height: 60,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  mditickCircleOutline: {
    width: 24,
    height: 24,
  },
  cleared: {
    alignSelf: "stretch",
  },
  view: {
    left: 139,
    height: 59,
    top: 0,
    width: 99,
    justifyContent: "center",
  },
  overdue1: {
    top: 36,
    left: 293,
    height: 18,
  },
  parent: {
    top: 860,
    width: 392,
    height: 60,
    left: 14,
    position: "absolute",
  },
  ggdanger: {
    left: 341,
    top: 864,
    width: 30,
  },
  forYou: {
    width: "17.99%",
    top: "47.84%",
  },
  byYou: {
    width: "12.38%",
    top: "15.77%",
  },
  request: {
    fontSize: FontSize.b1_size,
  },
  button4: {
    top: 671,
    left: 46,
    backgroundColor: Color.green,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 30,
    elevation: 30,
    width: 342,
    height: 36,
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_sm,
    alignItems: "center",
  },
  request1: {
    top: 679,
    left: 114,
    width: 206,
    height: 25,
    fontSize: FontSize.b1_size,
    position: "absolute",
  },
  overdue: {
    backgroundColor: Color.systemBackgroundSecondary,
    height: 926,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Overdue;
