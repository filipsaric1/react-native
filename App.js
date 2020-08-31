import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
  Modal,
} from "react-native";
import Fills from "./Fills.js";
import React, { Component } from "react";
import AddFill from "./AddFill.js";
export default class App extends Component {
  state = {
    fills: [
      {
        id: 6,
        date: "01-06-2020",
        ammountInLitres: 50,
        pricePerLitre: 9.11,
        kmInOdometer: 210334,
      },
      {
        id: 5,
        date: "16-06-2020",
        ammountInLitres: 46,
        pricePerLitre: 9.16,
        kmInOdometer: 211005,
      },
      {
        id: 4,
        date: "03-07-2020",
        ammountInLitres: 44,
        pricePerLitre: 9.23,
        kmInOdometer: 211712,
      },
      {
        id: 3,
        date: "17-07-2020",
        ammountInLitres: 47,
        pricePerLitre: 9.25,
        kmInOdometer: 212322,
      },
      {
        id: 2,
        date: "01-08-2020",
        ammountInLitres: 42,
        pricePerLitre: 9.33,
        kmInOdometer: 212809,
      },
      {
        id: 1,
        date: "17-08-2020",
        ammountInLitres: 45,
        pricePerLitre: 9.25,
        kmInOdometer: 213445,
      },
    ],
    modalVisible: false,
    inputLitre: "",
  };
  submitForm = (data) => {
    if (data.inputLitre == "" || data.inputPrice == "" || data.inputKm == "") {
      alert("Invalid data entered");
    } else {
    }
  };
  openModal = () => {
    this.setState({ modalVisible: true });
  };
  closeModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, paddingTop: 40 }}>
        <ScrollView contentContainerStyle={styles.mainView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.openModal()}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <Modal
            visible={this.state.modalVisible}
            animationType="slide"
            onBackdropPress={this.closeModal}
            transparent
          >
            <View style={styles.wrapper}>
              <AddFill
                closeModal={this.closeModal}
                submitForm={this.submitForm}
              />
            </View>
          </Modal>
          <Fills fills={this.state.fills} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "dodgerblue",
    width: 80,
    height: 80,
    borderRadius: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  buttonText: {
    fontSize: 43,
    fontWeight: "bold",
    color: "white",
  },
  modal: {
    width: "80%",
    height: "80%",
    marginTop: 20,
    backgroundColor: "dodgerblue",
    borderRadius: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
