import { StyleSheet, Text, View } from "react-native";

export const Stops = () => {
  return (
    <View style={styles.container}>
      <Text>Stops Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
