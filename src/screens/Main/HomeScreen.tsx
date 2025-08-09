import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useIntl } from "react-intl";
import RootContainer from "@components/Container/RootContainer";
import { PropsWithMainNav } from "@utils/navigation";

interface Props extends PropsWithMainNav<"Home"> {}

function HomeScreen({ navigation }: Props) {
  const intl = useIntl();

  return (
    <RootContainer>
      <View style={styles.container}>
        <Text>{intl.formatMessage({ id: "please-try-again" })}</Text>

        <Button
          title={"Login!!!"}
          onPress={async () => {
            navigation.navigate("Login", {});
          }}
        />

        <Button
          title={"Goto group call"}
          onPress={() => {
            navigation.navigate("GroupCall", {});
          }}
        />
      </View>
    </RootContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    backgroundColor: "blue",
  },
});

export default HomeScreen;
