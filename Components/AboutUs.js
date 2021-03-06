/* ///////////  A B O U T    US   ////////// 
PAGE FOR EDITING-- FREE PAGE */

import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

export default function indexM() {
  //loadind the Font used in this page
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    if (!fontsLoaded) {
      Font.loadAsync({
        Charlotte: require("../assets/fonts/Charlotte.otf"),
      });
    }
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        {/*Container that are defining the position of the icons on the pages*/}
        <View style={{ paddingTop: 15, paddingHorizontal: 20, justifyContent: "center", alignItems: "center"}}>
          
          {/*Here is the code that is showing the Diren's photo and name*/}
          <Avatar.Image size={250} source={require("../assets/Diren.png")} />
          <Text style={styles.text}>Diren Akkoc Demir - 2020266`</Text>

           {/*Here is the code that is showing the Gabriel's photo and name*/}
          <Avatar.Image size={250} source={require("../assets/Gabriel.png")} />
          <Text style={styles.text}>
            Gabriel Climaco Brites Farina - 2020419
          </Text>
          
          {/*Here is the code that is showing the Steffany's photo and name*/}
          <Avatar.Image size={250} source={require("../assets/Steffany.png")} />
          <Text style={styles.text}>Steffany Aseret Roa Cañedo - 2020431</Text>

          {/*Here is the code that is showing the Walter's photo and name*/}
          <Avatar.Image size={250} source={require("../assets/Walter.png")} />
          <Text style={styles.text}>Walter Guimarães Junior - 2020403</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#740001",
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontStyle: "italic",
    textAlign: "center",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
