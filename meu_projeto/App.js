import axios from "axios";
import React from "react";
//import { StatusBar } from 'expo-status-bar';
import { Text, View } from "react-native";
import Header from "./src/components/Header";

export default class App extends React.Component {
  renderList() {
   

    // const textElements = names.map((name) => {
    //   return <Text key={name}>{name}</Text>;
    // });

    /*Promises*/

    axios
      .get("https://randomuser.me/api/?nat=br&results=5")
      .then((response) => {
        const { results } = response.data;
        const names = results.map(people => people.name.first)
        })
      };

   
  }
  render() {
    return (
      <View>
        <Header title="Pessoas!" />
        {this.renderList()}
      </View>
    );
  }
}
