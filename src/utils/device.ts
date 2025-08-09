import { NativeModules, Platform } from "react-native";

/**
 * 현재 기기의 언어를 가져옴
 *
 * @returns `System language`
 */
export function getSystemLanguage(): string {
  if (Platform.OS === "ios") {
    return (
      NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0]
    );
  }
  return NativeModules.I18nManager.localeIdentifier;
}
