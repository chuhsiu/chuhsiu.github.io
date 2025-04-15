export const getLocalizedText = (obj, lang, fallback = "zh") => {
    return obj?.[lang] || obj?.[fallback] || Object.values(obj)[0] || "";
  };