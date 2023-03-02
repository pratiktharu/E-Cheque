import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Color,
  FontFamily,
  FontSize,
  Padding,
  Border,
} from "../GlobalStyles";

const Cleared = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cleared}>
      <Image
        style={[
          styles.sliderIcon,
          styles.iconLayout1,
          styles.sliderIconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/slider2.png")}
      />
      <View style={styles.navbar}>
        <View style={[styles.toastBg, styles.containerPosition]} />
        <Image
          style={[styles.moreIcon, styles.backPosition, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/more1.png")}
        />
        <Text style={styles.chequesCleared}>Cheques Cleared</Text>
        <View style={[styles.back, styles.backPosition]}>
          <View style={[styles.container1, styles.containerPosition]} />
          <Pressable
            style={styles.arrowChevronLeft}
            onPress={() => navigation.navigate("MainHome1")}
          >
            <Image
              style={[styles.iconLayout, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/arrow-chevron-left1.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.statusBar, styles.backgroundPosition]}>
        <View style={[styles.statusBar1, styles.containerPosition]}>
          <View style={styles.containerPosition} />
          <Image
            style={[styles.rightSideIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/right-side2.png")}
          />
          <Text style={styles.time}>
            <Text style={styles.text}>09:4</Text>6
          </Text>
        </View>
      </View>
      <Text style={[styles.byYou, styles.youTypo]}>BY You</Text>
      <Image
        style={[
          styles.sliderIcon1,
          styles.iconLayout1,
          styles.sliderIconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/slider3.png")}
      />
      <Text style={[styles.forYou, styles.youTypo]}>For you</Text>
      <View
        style={[
          styles.toast,
          styles.toastFlexBox,
          styles.toastBorder,
          styles.toastBg,
        ]}
      >
        <View style={[styles.closeIcon, styles.viewFlexBox, styles.toastBg]}>
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
            <View style={[styles.title, styles.toastFlexBox]}>
              <Text style={[styles.toastTitle, styles.button1Typo]}>
                Completed
              </Text>
            </View>
            <Text style={[styles.toastDescription, styles.button3Typo]}>
              <Text
                style={styles.theChequesListed}
              >{`The cheques listed above has been cleared. `}</Text>
              <Text style={styles.didntReceiveContact}>
                Didn’t receive? Contact us
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
                <Text style={[styles.button3, styles.button3Typo]}>Button</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={styles.clearedChild}
        resizeMode="cover"
        source={require("../assets/group-12.png")}
      />
      <View style={styles.parent}>
        <Pressable
          style={[
            styles.pressable,
            styles.viewLayout,
            styles.viewFlexBox,
            styles.backgroundPosition,
          ]}
          onPress={() => navigation.navigate("MainHome1")}
        >
          <Text style={[styles.text1, styles.text1FlexBox]}>􀎟</Text>
          <Text style={[styles.home, styles.mt3]}>Home</Text>
        </Pressable>
        <View style={[styles.view, styles.viewLayout, styles.viewFlexBox]}>
          <Pressable
            style={styles.mditickCircleOutline}
            onPress={() => navigation.navigate("Cleared")}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/mditickcircleoutline.png")}
            />
          </Pressable>
          <Text style={[styles.cleared1, styles.mt3, styles.overdueTypo]}>
            Cleared
          </Text>
        </View>
        <Text
          style={[
            styles.overdue,
            styles.overdueTypo,
            styles.text1FlexBox,
            styles.viewLayout,
          ]}
        >
          Overdue
        </Text>
      </View>
      <Pressable
        style={styles.ggdanger}
        onPress={() => navigation.navigate("Overdue")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/ggdanger.png")}
        />
      </Pressable>
      <View style={[styles.card, styles.cardLayout]}>
        <View
          style={[
            styles.background,
            styles.cardLayout,
            styles.backgroundPosition,
          ]}
        />
        <Text style={[styles.siddhartha, styles.nmbTypo]}>Siddhartha</Text>
        <View style={[styles.balance, styles.balanceLayout]}>
          <Text style={[styles.rupee301000, styles.rupeePosition]}>
            <Text style={styles.rupee}>{`RUPEE: `}</Text>
            <Text style={styles.text2}>3,01,000</Text>
          </Text>
          <Text style={[styles.theContainerLayout, styles.balanceLayout]}>
            <Text style={styles.theSumOf}>THE SUM OF</Text>
            <Text
              style={styles.thirtyLakhsAnd}
            >{`: THIRTY LAKHS AND ONE THOUSAND `}</Text>
          </Text>
        </View>
        <View style={[styles.cardHolder, styles.cardHolderLayout]}>
          <Text style={[styles.cardHolderLayout, styles.payeeContainerTypo]}>
            <Text style={styles.theSumOf}>PAYEE</Text>
            <Text style={styles.thirtyLakhsAnd}>: Rounak Jha</Text>
          </Text>
        </View>
        <View style={[styles.cardHolder1, styles.ac24233581Layout]}>
          <Text style={[styles.ac24233581Typo, styles.ac24233581Layout]}>
            A/C: 2423 3581 9503 2412
          </Text>
        </View>
        <Text style={[styles.date2332023, styles.dateTypo]}>
          Date: 23/3/2023
        </Text>
      </View>
      <View style={[styles.card1, styles.card1Layout]}>
        <View
          style={[
            styles.background1,
            styles.card1Layout,
            styles.backgroundPosition,
          ]}
        />
        <Text style={[styles.nmb, styles.nmbTypo]}>NMB</Text>
        <View style={[styles.balance1, styles.balance1Layout]}>
          <Text style={[styles.rupee3600, styles.rupeePosition]}>
            <Text style={styles.rupee}>{`RUPEE: `}</Text>
            <Text style={styles.text2}>3,600</Text>
          </Text>
          <Text style={[styles.balance1Layout, styles.theContainerLayout]}>
            <Text style={styles.theSumOf}>THE SUM OF</Text>
            <Text
              style={styles.thirtyLakhsAnd}
            >{`: THREE THOUSAND AND SIX HUNDRED `}</Text>
          </Text>
        </View>
        <View style={[styles.cardHolder2, styles.cardHolder2Layout]}>
          <Text style={[styles.cardHolder2Layout, styles.payeeContainerTypo]}>
            <Text style={styles.theSumOf}>PAYEE</Text>
            <Text style={styles.thirtyLakhsAnd}>: Pratik Tharu</Text>
          </Text>
        </View>
        <View style={[styles.cardHolder3, styles.cardHolder3Layout]}>
          <Text style={[styles.cardHolder3Layout, styles.ac24233581Typo]}>
            A/C: 2423 3581 9503 2412
          </Text>
        </View>
        <Text style={[styles.date30032023, styles.dateTypo]}>
          Date: 30/03/2023
        </Text>
      </View>
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
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  sliderIconPosition: {
    left: "0%",
    right: "-11.09%",
    width: "111.09%",
    height: "5.42%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  containerPosition: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    width: "100%",
  },
  backPosition: {
    bottom: "14.29%",
    top: "14.29%",
    width: "10.67%",
    height: "71.43%",
    position: "absolute",
  },
  backgroundPosition: {
    left: 0,
    top: 0,
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
    left: "8.45%",
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  toastFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  toastBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  toastBg: {
    backgroundColor: Color.baseColorWhite,
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
  button3Typo: {
    fontSize: FontSize.b1_size,
    textAlign: "left",
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
  text1FlexBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  overdueTypo: {
    color: Color.darkgray_200,
    fontFamily: FontFamily.b1,
    lineHeight: 12,
    fontSize: FontSize.size_5xs,
    textAlign: "center",
  },
  cardLayout: {
    height: 181,
    width: 361,
    position: "absolute",
  },
  nmbTypo: {
    height: 19,
    textAlign: "right",
    color: Color.baseColorWhite,
    fontFamily: FontFamily.bodySemiBold,
    lineHeight: 18,
    fontSize: FontSize.caption12pxRegular_size,
    fontWeight: "500",
    position: "absolute",
  },
  balanceLayout: {
    width: 295,
    position: "absolute",
  },
  rupeePosition: {
    lineHeight: 28,
    top: 17,
    color: Color.baseColorWhite,
    fontSize: FontSize.b1_size,
    textAlign: "left",
    left: 0,
    letterSpacing: 0.1,
    position: "absolute",
  },
  cardHolderLayout: {
    width: 112,
    height: 19,
    position: "absolute",
  },
  payeeContainerTypo: {
    textAlign: "right",
    color: Color.baseColorWhite,
    lineHeight: 18,
    fontSize: FontSize.caption12pxRegular_size,
    left: 0,
    top: 0,
  },
  ac24233581Layout: {
    height: 22,
    width: 233,
    position: "absolute",
  },
  dateTypo: {
    color: Color.labelsColorsTertiary,
    fontFamily: FontFamily.caption1Regular,
    left: "67.64%",
    top: "5.26%",
    height: "9.36%",
    lineHeight: 16,
    fontSize: FontSize.caption12pxRegular_size,
    textAlign: "left",
    position: "absolute",
  },
  card1Layout: {
    height: 177,
    width: 363,
    position: "absolute",
  },
  balance1Layout: {
    width: 305,
    position: "absolute",
  },
  theContainerLayout: {
    opacity: 0.7,
    height: 17,
    lineHeight: 16,
    color: Color.baseColorWhite,
    fontSize: FontSize.caption12pxRegular_size,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  cardHolder2Layout: {
    width: 115,
    height: 19,
    position: "absolute",
  },
  cardHolder3Layout: {
    width: 234,
    height: 22,
    position: "absolute",
  },
  ac24233581Typo: {
    lineHeight: 21,
    fontFamily: FontFamily.calloutBold,
    color: Color.baseColorWhite,
    fontSize: FontSize.b1_size,
    textAlign: "left",
    left: 0,
    top: 0,
    fontWeight: "700",
  },
  sliderIcon: {
    top: "39.31%",
    bottom: "55.27%",
  },
  moreIcon: {
    right: "2.13%",
    left: "87.2%",
    overflow: "hidden",
  },
  chequesCleared: {
    width: "37.87%",
    top: "30.36%",
    left: "30.93%",
    fontSize: FontSize.headlineRegular_size,
    textAlign: "center",
    color: Color.labelscolorsPrimary,
    lineHeight: 22,
    letterSpacing: 0.1,
    fontFamily: FontFamily.tittleLargeBold,
    fontWeight: "700",
    position: "absolute",
  },
  container1: {
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrowChevronLeft: {
    left: "20%",
    top: "20%",
    right: "20%",
    bottom: "20%",
    width: "60%",
    height: "60%",
    position: "absolute",
  },
  back: {
    right: "87.2%",
    left: "2.13%",
  },
  navbar: {
    top: 48,
    left: 1,
    width: 417,
    height: 56,
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
    fontFamily: FontFamily.sFProDisplaySemibold,
    textAlign: "left",
    fontWeight: "600",
    color: Color.labelscolorsPrimary,
    position: "absolute",
  },
  statusBar1: {
    position: "absolute",
    overflow: "hidden",
  },
  statusBar: {
    width: 428,
    height: 48,
    position: "absolute",
  },
  byYou: {
    width: "15.7%",
    top: "14.36%",
  },
  sliderIcon1: {
    top: "71.71%",
    bottom: "22.88%",
  },
  forYou: {
    height: "1.84%",
    width: "22.95%",
    top: "48.16%",
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
    height: 44,
    zIndex: 0,
    display: "none",
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
  },
  theChequesListed: {
    color: Color.gray,
  },
  didntReceiveContact: {
    textDecoration: "underline",
    color: Color.royalblue,
  },
  toastDescription: {
    lineHeight: 26,
    fontFamily: FontFamily.interRegular,
    width: 312,
  },
  button1: {
    color: Color.white,
  },
  button: {
    backgroundColor: Color.primary,
  },
  button3: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.gray,
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
    top: 720,
    left: 14,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    borderColor: "#e4e4e4",
    width: 395,
    paddingLeft: Padding.p_md,
    paddingTop: Padding.p_md,
    paddingRight: Padding.p_lg,
    paddingBottom: Padding.p_md,
    borderRadius: Border.br_sm,
  },
  clearedChild: {
    top: 730,
    left: 29,
    width: 36,
    height: 32,
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
    alignItems: "center",
    textAlign: "center",
  },
  pressable: {
    height: 60,
  },
  mditickCircleOutline: {
    width: 24,
    height: 24,
  },
  cleared1: {
    alignSelf: "stretch",
  },
  view: {
    left: 139,
    height: 59,
    top: 0,
    width: 99,
    justifyContent: "center",
  },
  overdue: {
    top: 36,
    left: 293,
    height: 18,
  },
  parent: {
    top: 860,
    width: 392,
    height: 60,
    left: 26,
    position: "absolute",
  },
  ggdanger: {
    left: 350,
    top: 870,
    width: 30,
    height: 28,
    position: "absolute",
  },
  background: {
    backgroundColor: Color.olive,
    borderRadius: Border.br_sm,
  },
  siddhartha: {
    top: 145,
    left: 278,
    width: 66,
  },
  rupee: {
    fontFamily: FontFamily.tittleLargeBold,
    fontWeight: "700",
  },
  text2: {
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
  },
  rupee301000: {
    width: 135,
    height: 30,
  },
  theSumOf: {
    fontFamily: FontFamily.calloutBold,
    fontWeight: "700",
  },
  thirtyLakhsAnd: {
    fontFamily: FontFamily.bodySemiBold,
    fontWeight: "500",
  },
  balance: {
    top: 74,
    height: 47,
    left: 19,
  },
  cardHolder: {
    top: 55,
    left: 16,
  },
  cardHolder1: {
    left: 18,
    top: 142,
  },
  date2332023: {
    width: "26.24%",
  },
  card: {
    top: 177,
    left: 26,
  },
  background1: {
    backgroundColor: Color.darkslateblue_200,
    borderRadius: Border.br_sm,
  },
  nmb: {
    left: 317,
    width: 29,
    top: 142,
  },
  rupee3600: {
    width: 111,
    height: 29,
  },
  balance1: {
    top: 72,
    height: 46,
    left: 19,
  },
  cardHolder2: {
    top: 50,
    left: 19,
  },
  cardHolder3: {
    top: 139,
    left: 18,
  },
  date30032023: {
    width: "29.15%",
  },
  card1: {
    top: 487,
    left: 26,
  },
  cleared: {
    backgroundColor: Color.systemBackgroundSecondary,
    height: 926,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Cleared;
