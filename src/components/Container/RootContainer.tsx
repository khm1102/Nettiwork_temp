import React, { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native";

interface Props {}

/**
 * 스크린 전체 공통 컨테이너
 *
 * @param param0 children
 * @returns `Container`
 */
function RootContainer({ children }: PropsWithChildren<Props>) {
  return <SafeAreaView>{children}</SafeAreaView>;
}

export default RootContainer;
