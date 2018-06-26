import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends Component<{ a: string }, {}> {
render() {
const a = this.props.a;
return (
<View style={styles.container}>
<Text>Open up App.ts to start working on your app!</Text>
<Text>Changes you make will automatically reload.</Text>
</View>
);


}
}

const styles = StyleSheet.create({
container: {
alignItems: "center",
backgroundColor: "#fff",
flex: 1,
justifyContent: "center",
},
});
