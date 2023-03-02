import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Margin } from "../GlobalStyles";

const Next1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.next1}>
      <Image
        style={[styles.next1Child, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Pressable
        style={[styles.next, styles.nextPosition]}
        onPress={() => navigation.navigate("More")}
      >
        <Text style={[styles.next2, styles.next2Typo, styles.skipLayout]}>
          Next
        </Text>
      </Pressable>
      <Text style={[styles.skip, styles.skipLayout, styles.nextPosition]}>
        Skip
      </Text>
      <Text style={[styles.weAreIntoContainer, styles.next2Typo]}>
        <Text style={styles.weAreInto}>{`We are into  digitalizing `}</Text>
        <Text style={styles.cheques}>Cheques</Text>
      </Text>
      <Image
        style={[styles.ovalIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/oval.png")}
      />
      <Image
        style={[styles.image12Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-12.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  nextPosition: {
    top: "85.64%",
    position: "absolute",
  },
  next2Typo: {
    color: Color.darkslateblue_200,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "center",
  },
  skipLayout: {
    lineHeight: 24,
    fontSize: FontSize.b1_size,
  },
  next1Child: {
    height: "0.86%",
    width: "1.87%",
    top: "83.37%",
    right: "50.93%",
    bottom: "15.77%",
    left: "47.2%",
  },
  next2: {
    textAlign: "center",
  },
  next: {
    left: "82.24%",
  },
  skip: {
    left: "10.98%",
    fontFamily: FontFamily.b1,
    color: "#989898",
    opacity: 0.45,
    textAlign: "center",
  },
  weAreInto: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  cheques: {
    margin: Margin.m_sm,
  },
  weAreIntoContainer: {
    top: "65.23%",
    left: "17.99%",
    fontSize: FontSize.size_4xl,
    lineHeight: 29,
    whiteSpace: "pre-wrap",
    textAlign: "center",
    position: "absolute",
    color: Color.darkslateblue_200,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  ovalIcon: {
    height: "0.42%",
    width: "0.93%",
    top: "46.73%",
    right: "53.98%",
    bottom: "52.85%",
    left: "45.1%",
    display: "none",
  },
  image12Icon: {
    height: "38.66%",
    top: "16.95%",
    right: "0%",
    bottom: "44.38%",
    left: "0%",
    borderRadius: 179,
    width: "100%",
    maxWidth: "100%",
  },
  next1: {
    backgroundColor: Color.baseColorWhite,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default Next1;
