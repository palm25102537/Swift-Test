import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./assets/lang/en.json";
import th from "./assets/lang/th.json";
import { getLang } from "./service/storage";

const resources = {
  en: {
    translation: en,
  },
  th: {
    translation: th,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: getLang() ?? "en",
  fallbackLng: "en",
});

export default i18next;
