import { useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Select } from "antd";
import { LangOptions } from "../../shared/const";
import { useTranslation } from "react-i18next";
import { getLang, setLang } from "../../service/storage";

const AppHeader = () => {
  const location = useLocation();

  const { t, i18n } = useTranslation();

  const title = useMemo(() => {
    if (location.pathname === "/form") {
      return t("header");
    }

    return "";
  }, [location, t]);

  const lang = useMemo(() => {
    const lng = getLang();

    return lng ? lng : i18n.language;
  }, [i18n.language]);

  async function selectAppLang(e: string) {
    setLang(e);
    await i18n.changeLanguage(e);
  }

  useEffect(() => {
    const lang = getLang();
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, []);
  return (
    <>
      <div className="d-flex items-center justify-between">
        <h1>{title}</h1>
        <Select
          value={lang}
          defaultValue="en"
          options={LangOptions}
          onSelect={selectAppLang}
          style={{ minWidth: "120px" }}
        ></Select>
      </div>
      {location.pathname !== "/" && (
        <Link
          to="/"
          style={{ maxWidth: "90px", alignSelf: "end", marginTop: "10px" }}
        >
          <Button>Back</Button>
        </Link>
      )}
    </>
  );
};

export default AppHeader;
