import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import RootContainer from "@components/Container/RootContainer";
import { PropsWithMainNav } from "@utils/navigation";
import { AuthProtocol } from "@nettiwork/common";
import { AuthApi } from "@nettiwork/client-modules";

interface Props extends PropsWithMainNav<"Login"> {}

function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState<string>("");
  const [showCodeInput, setShowCodeInput] = useState<boolean>(false);

  return (
    <RootContainer>
      <View style={styles.container}>
        <TextInput
          value={email}
          onChangeText={text => {
            setEmail(text);
          }}
        />

        <Button
          title={"Login!"}
          onPress={async () => {
            if (showCodeInput) {
              return;
            }

            try {
              const userData: AuthProtocol.SendLoginCodeReq = {
                email: email,
              };
              const resp = await AuthApi.sendLoginCode(userData);

              console.log("response:", resp);
              setShowCodeInput(true);
            } catch (error) {
              console.error(error);
            }
          }}
        />
      </View>
    </RootContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 600,
    backgroundColor: "#ccc",
  },
});

export default LoginScreen;
