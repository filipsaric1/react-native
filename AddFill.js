import React, { Component } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
export default class AddFill extends Component {
  state = {
    inputLitre: "",
    inputKm: "",
    inputPrice: "",
    date: new Date(),
  };
  inputChangeNumeric = (text) => {
    this.setState({
      inputLitre: text.replace(/[^0-9]/g, ""),
    });
  };

  render() {
    return (
      <View style={styles.form}>
        <TextInput
          placeholder="Enter ammount in litres"
          underlineColorAndroid={"transparent"}
          style={styles.textInput}
          value={this.state.inputLitre}
          onChangeText={(val) => {
            this.setState({ inputLitre: val });
          }}
        />
        <TextInput
          placeholder="Enter price per litre"
          underlineColorAndroid={"transparent"}
          style={styles.textInput}
          onChangeText={(val) => {
            this.setState({ inputPrice: val });
          }}
        />
        <TextInput
          placeholder="Enter current odometer state"
          underlineColorAndroid={"transparent"}
          style={styles.textInput}
          value={this.state.inputKm}
          onChangeText={(val) => {
            this.setState({ inputKm: val });
          }}
        />
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.submitForm(this.state)}
          >
            <Text>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.closeModal()}
          >
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  form: {
    width: "80%",
    height: "80%",
    marginTop: 20,
    backgroundColor: "dodgerblue",
    borderRadius: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    height: 40,
    marginBottom: 20,
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  buttons: {
    flex: 0,
    flexDirection: "row",
  },
  button: {
    backgroundColor: "white",
    borderColor: "black",
    width: 100,
    height: 40,
    flex: 0,
    alignItems: "center",
    margin: 10,
    borderWidth: 1,
    justifyContent: "center",
    borderRadius: 30,
  },
});
