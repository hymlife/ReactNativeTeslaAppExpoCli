import React from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./style";
import StyledButton from "../styledButton";

const CarItem = (props) => {
  const { carImage, carName, carPrice } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={carImage} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{carName}</Text>
        <Text style={styles.subtitle}>{carPrice}</Text>
      </View>

      <View style={styles.buttonsContainers}>
        <StyledButton
          type="primary"
          content="Custom Order"
          onPress={() => {
            console.warn("Custom Order was Pressed");
          }}
        />

        <StyledButton
          type="secondary"
          content="Existing Inventory"
          onPress={() => {
            console.warn("Existing Inventory was Pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
