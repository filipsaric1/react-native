import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import React, { Component } from "react";

export default class Fill extends Component {
  render() {
    return (
      <View style={styles.fill}>
        <View style={styles.fillInfo}>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Date:</Text>{" "}
            {this.props.fillObj.date}
          </Text>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Ammount:</Text>{" "}
            {this.props.fillObj.ammountInLitres}
          </Text>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Price per litre:</Text>{" "}
            {this.props.fillObj.pricePerLitre}
          </Text>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Odometer:</Text>{" "}
            {this.props.fillObj.kmInOdometer}
          </Text>
        </View>
        <View style={styles.fillInfo}>
          <Image
            source={require("./assets/fuel.png")}
            style={{ width: 90, height: 80 }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    width: "88%",
    marginTop: 10,
    height: 150,
    backgroundColor: "aliceblue",
    borderRadius: 15,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  fillInfo: {
    flex: 1,
    alignItems: "center",
  },
});
