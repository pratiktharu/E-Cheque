import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const CongratsCredit = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.congratsCredit}>
      <Text style={styles.congratulations}>Congratulations</Text>
      <View style={styles.congratsCreditChild} />
      <Pressable
        style={styles.getStarted}
        onPress={() => navigation.navigate("MainHome1")}
      >
        <Text style={styles.getStarted1}>Get Started</Text>
      </Pressable>
      <Image
        style={styles.congratsCreditItem}
        resizeMode="cover"
        source={require("../assets/group-352091.png")}
      />
      <Image
        style={styles.congratsCreditInner}
        resizeMode="cover"
        source={require("../assets/vector-30.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  congratulations: {
    top: 496,
    left: 92,
    fontSize: 30,
    lineHeight: 15,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "left",
    color: Color.darkslateblue_200,
    position: "absolute",
  },
  congratsCreditChild: {
    top: 663,
    left: 66,
    borderRadius: Border.br_2xl,
    backgroundColor: "#e9f2ff",
    shadowColor: "rgba(33, 150, 83, 0.07)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 35,
    elevation: 35,
    shadowOpacity: 1,
    width: 295,
    height: 60,
    position: "absolute",
  },
  getStarted1: {
    fontSize: FontSize.b1_size,
    lineHeight: 24,
    fontFamily: FontFamily.b1,
    textAlign: "center",
    color: Color.darkslateblue_200,
  },
  getStarted: {
    left: 167,
    top: 680,
    position: "absolute",
  },
  congratsCreditItem: {
    top: 97,
    left: 9,
    width: 368,
    height: 366,
    position: "absolute",
  },
  congratsCreditInner: {
    top: 263,
    left: 163,
    width: 120,
    height: 73,
    position: "absolute",
  },
  congratsCredit: {
    backgroundColor: Color.baseColorWhite,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default CongratsCredit;
