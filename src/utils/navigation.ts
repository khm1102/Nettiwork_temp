import { MainStackParamList } from "@navigations/MainNavigation";
import { NavigationProp, RouteProp } from "@react-navigation/native";

export type PropsWithMainNav<
  RouteName extends keyof MainStackParamList = Extract<
    keyof MainStackParamList,
    string
  >,
> = Readonly<{
  navigation: NavigationProp<MainStackParamList>;
  route: RouteProp<MainStackParamList, RouteName>;
}>;
