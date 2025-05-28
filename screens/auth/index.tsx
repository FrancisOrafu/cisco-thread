import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import { useAuth } from "@/providers/AuthProvider";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";

export default () => {
  const { user } = useAuth();
  const [phone, setPhone] = useState("");

  const handleSignin = () => {
    console.log(phone);
  };
  return (
    <SafeAreaView>
      <Input variant="outline" size="md">
        <InputField
          placeholder="Enter Text here..."
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          secureTextEntry={true}
        />
      </Input>
      <Button onPress={handleSignin}>
        <ButtonText>Sign In</ButtonText>
      </Button>
    </SafeAreaView>
  );
};
