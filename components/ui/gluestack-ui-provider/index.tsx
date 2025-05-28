import { OverlayProvider } from "@gluestack-ui/overlay";
import { ToastProvider } from "@gluestack-ui/toast";
import React from "react";
import {
  View,
  ViewProps,
  useColorScheme as useNativeColorScheme,
} from "react-native";
import { config } from "./config";

export type ModeType = "light" | "dark" | "system";

export function GluestackUIProvider({
  mode = "light",
  ...props
}: {
  mode?: ModeType;
  children?: React.ReactNode;
  style?: ViewProps["style"];
}) {
  const deviceColorScheme = useNativeColorScheme();
  const effectiveColorMode =
    mode === "system" ? deviceColorScheme || "light" : mode;

  return (
    <View
      style={[
        config[effectiveColorMode],
        { flex: 1, height: "100%", width: "100%" },
        props.style,
      ]}
    >
      <OverlayProvider>
        <ToastProvider>{props.children}</ToastProvider>
      </OverlayProvider>
    </View>
  );
}
