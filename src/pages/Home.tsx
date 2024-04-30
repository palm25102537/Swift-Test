import { useTranslation } from "react-i18next";
import AppCard from "../components/AppCard";
import AppLayout from "../components/layout/AppLayout";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <AppLayout>
      <div className="w-full h-full d-flex items-center justify-center gap-7 flex-wrap">
        <>
          <Link to="/shape" style={{ textDecoration: "none" }}>
            <AppCard>
              <p style={{ marginBottom: "50px" }}>{t("test.first.title")}</p>
              <p>{t("test.first.desc")}</p>
            </AppCard>
          </Link>
        </>
        <>
          <Link to="/form" style={{ textDecoration: "none" }}>
            <AppCard>
              <p style={{ marginBottom: "50px" }}>{t("test.second.title")}</p>
              <p>{t("test.second.desc")}</p>
            </AppCard>
          </Link>
        </>
      </div>
    </AppLayout>
  );
};

export default HomePage;
