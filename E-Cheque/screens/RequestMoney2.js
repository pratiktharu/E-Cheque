import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const RequestMoney2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.requestMoney2}>
      <Pressable
        style={[styles.button, styles.formLayout, styles.buttonPosition]}
        onPress={() => navigation.navigate("EnterPin")}
      >
        <Text style={styles.learnMore}>Next</Text>
      </Pressable>
      <View
        style={[
          styles.requestPaymentAs,
          styles.formLayout,
          styles.buttonPosition,
        ]}
      >
        <View style={[styles.form, styles.formLayout]}>
          <View style={styles.form1} />
          <Text style={[styles.text, styles.textFlexBox]}>
            {" "}
            2423 3581 9503 2412
          </Text>
        </View>
        <Text style={[styles.accountNumber, styles.bankTypo]}>
          Account Number
        </Text>
      </View>
      <View style={[styles.paymentDue, styles.formPosition]}>
        <View style={[styles.form, styles.formLayout]}>
          <View style={styles.form1} />
          <Image
            style={[styles.actionCalendarToday, styles.rightSideIconLayout]}
            resizeMode="cover"
            source={require("../assets/action--calendar-today.png")}
          />
          <Text style={styles.text1}>25/03/2023</Text>
        </View>
        <Text style={[styles.paymentDue1, styles.bankTypo]}>Payment Due</Text>
      </View>
      <View style={[styles.noteOptional, styles.formPosition]}>
        <View style={[styles.form4, styles.formLayout]}>
          <View style={styles.form1} />
          <Text style={[styles.nabilBankLtd, styles.nitizKhanalLayout]}>
            Nabil Bank LTD
          </Text>
        </View>
        <Text style={[styles.bank, styles.bankTypo]}>Bank</Text>
      </View>
      <Text style={[styles.nameOfThe, styles.bankTypo]}>
        Name of the Reciever
      </Text>
      <View style={[styles.amount, styles.amountLayout]}>
        <Text style={[styles.amountRs, styles.amountLayout]}>Amount (Rs)</Text>
      </View>
      <View style={[styles.form6, styles.formPosition]}>
        <View style={styles.form1} />
        <Text style={[styles.nitizKhanal, styles.nitizKhanalLayout]}>
          Nitiz Khanal
        </Text>
      </View>
      <View style={[styles.form8, styles.formPosition]}>
        <View style={styles.form1} />
        <Text style={[styles.nitizKhanal, styles.nitizKhanalLayout]}>
          25000
        </Text>
      </View>
      <View style={[styles.navbar, styles.navbarLayout]}>
        <View style={[styles.container, styles.navbarLayout]} />
        <Text style={styles.issueACheque}>Issue a Cheque</Text>
        <View style={[styles.backLayout, styles.backPosition]}>
          <View style={[styles.container1, styles.backLayout]} />
          <Image
            style={[styles.arrowChevronLeft, styles.backPosition]}
            resizeMode="cover"
            source={require("../assets/arrow-chevron-left2.png")}
          />
        </View>
      </View>
      <View style={styles.statusBar}>
        <View style={[styles.statusBar1, styles.statusBar1Position]}>
          <View style={[styles.container2, styles.statusBar1Position]} />
          <Image
            style={[styles.rightSideIcon, styles.rightSideIconLayout]}
            resizeMode="cover"
            source={require("../assets/right-side6.png")}
          />
          <Text style={[styles.time, styles.textFlexBox]}>
            <Text style={styles.text3}>09:4</Text>6
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formLayout: {
    width: 390,
    position: "absolute",
  },
  buttonPosition: {
    left: 18,
    width: 390,
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.labelscolorsPrimary,
    position: "absolute",
  },
  bankTypo: {
    height: 22,
    fontFamily: FontFamily.bodySemiBold,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.bodySemiBold_size,
    textAlign: "left",
    color: Color.labelscolorsPrimary,
    letterSpacing: 0.1,
    position: "absolute",
  },
  formPosition: {
    left: 16,
    width: 390,
    position: "absolute",
  },
  rightSideIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  nitizKhanalLayout: {
    width: "32.94%",
    fontFamily: FontFamily.caption12pxRegular,
    lineHeight: 18,
    fontSize: FontSize.caption12pxRegular_size,
    height: "45%",
    textAlign: "left",
    position: "absolute",
  },
  amountLayout: {
    width: 90,
    height: 22,
    position: "absolute",
  },
  navbarLayout: {
    height: 56,
    width: 375,
    left: 0,
    position: "absolute",
  },
  backPosition: {
    left: 8,
    top: 8,
  },
  backLayout: {
    height: 40,
    width: 40,
    position: "absolute",
  },
  statusBar1Position: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  learnMore: {
    fontFamily: FontFamily.calloutBold,
    color: Color.baseColorWhite,
    textAlign: "center",
    fontWeight: "700",
    lineHeight: 22,
    letterSpacing: 0.1,
    fontSize: FontSize.b1_size,
  },
  button: {
    top: 667,
    borderRadius: Border.br_sm,
    backgroundColor: Color.purpleSolid,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    height: 51,
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_sm,
    alignItems: "center",
  },
  form1: {
    height: "102.37%",
    width: "100.26%",
    top: "-1.18%",
    right: "-0.13%",
    bottom: "-1.18%",
    left: "-0.13%",
    borderRadius: Border.br_2xs,
    borderStyle: "solid",
    borderColor: "#efefef",
    borderWidth: 1,
    backgroundColor: Color.baseColorWhite,
    position: "absolute",
  },
  text: {
    top: "15.2%",
    left: "1.28%",
    letterSpacing: -0.1,
    lineHeight: 30,
    fontFamily: FontFamily.questrialRegular,
    fontSize: FontSize.b1_size,
    textAlign: "left",
  },
  form: {
    top: 30,
    height: 42,
    left: 0,
  },
  accountNumber: {
    left: 2,
    width: 157,
    top: 0,
  },
  requestPaymentAs: {
    top: 408,
    height: 72,
  },
  actionCalendarToday: {
    height: "60%",
    width: "7%",
    top: "20%",
    right: "2.33%",
    bottom: "20%",
    left: "90.67%",
  },
  text1: {
    width: "18.66%",
    fontFamily: FontFamily.caption12pxRegular,
    lineHeight: 18,
    fontSize: FontSize.caption12pxRegular_size,
    height: "45%",
    left: "2.33%",
    top: "27.5%",
    textAlign: "left",
    color: Color.labelscolorsPrimary,
    position: "absolute",
  },
  paymentDue1: {
    width: 102,
    top: 0,
    left: 0,
  },
  paymentDue: {
    top: 503,
    height: 72,
  },
  nabilBankLtd: {
    top: "27.03%",
    left: "2.57%",
    color: "#131313",
  },
  form4: {
    top: 29,
    height: 42,
    left: 0,
  },
  bank: {
    left: 4,
    width: 117,
    top: 0,
  },
  noteOptional: {
    top: 304,
    height: 71,
  },
  nameOfThe: {
    top: 124,
    left: 19,
    width: 174,
  },
  amountRs: {
    fontFamily: FontFamily.bodySemiBold,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.bodySemiBold_size,
    width: 90,
    top: 0,
    textAlign: "left",
    color: Color.labelscolorsPrimary,
    left: 0,
    letterSpacing: 0.1,
  },
  amount: {
    top: 215,
    left: 20,
  },
  nitizKhanal: {
    left: "2.33%",
    top: "27.5%",
    width: "32.94%",
    color: Color.labelscolorsPrimary,
  },
  form6: {
    top: 156,
    height: 42,
  },
  form8: {
    top: 244,
    height: 42,
  },
  container: {
    top: 0,
    backgroundColor: Color.baseColorWhite,
  },
  issueACheque: {
    top: 17,
    left: 133,
    fontSize: FontSize.headlineRegular_size,
    fontFamily: FontFamily.tittleLargeBold,
    color: Color.labelscolorsPrimary,
    textAlign: "center",
    fontWeight: "700",
    lineHeight: 22,
    letterSpacing: 0.1,
    position: "absolute",
  },
  container1: {
    top: 0,
    left: 0,
  },
  arrowChevronLeft: {
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  navbar: {
    top: 48,
  },
  container2: {
    backgroundColor: Color.baseColorWhite,
  },
  rightSideIcon: {
    height: "26.09%",
    width: "18.13%",
    top: "36.96%",
    right: "3.47%",
    bottom: "36.96%",
    left: "78.4%",
  },
  text3: {
    letterSpacing: 1,
  },
  time: {
    marginTop: -11,
    top: "50%",
    left: "5.07%",
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.sFProDisplaySemibold,
  },
  statusBar1: {
    overflow: "hidden",
  },
  statusBar: {
    height: 48,
    width: 375,
    top: 0,
    left: 0,
    position: "absolute",
  },
  requestMoney2: {
    backgroundColor: Color.systemBackgroundSecondary,
    flex: 1,
    height: 877,
    overflow: "hidden",
    width: "100%",
  },
});

export default RequestMoney2;
