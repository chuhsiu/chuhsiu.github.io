import React, { createContext, useContext } from "react";
import { useTranslation } from "react-i18next";

const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
  const { t, i18n } = useTranslation();
  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <I18nContext.Provider value={{ t, i18n, changeLang }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
