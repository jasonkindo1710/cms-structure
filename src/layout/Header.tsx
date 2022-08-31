import { useTranslation } from "next-i18next";
import Link from "next/link";
import '../../styles/header.module.css'
import { lngs } from "../constants/lngs";

const Header = () => {
  const { t, i18n } = useTranslation("header");
  return (
    <div className="header-bar">
      <div className="logo">
        <Link href="/">
          <a>{t("home")}</a>
        </Link>
      </div>

      <div className="navtabs">
        <Link href="/news">
          <a>{t("news")}</a>
        </Link>
        <Link href="/aboutus">
          <a>{t("aboutus")}</a>
        </Link>
        <Link href="/contactus">
          <a>{t("contactus")}</a>
        </Link>
        <Link href="/auth/login">
          <a>{t("logout")}</a>
        </Link>
        <div className="change-lng">
        {Object.keys(lngs).map((lng) => (
          <button
            type="submit"
            key={lng}
            onClick={() => i18n.changeLanguage(lng)}
            disabled={i18n.resolvedLanguage === lng}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
      </div>

  
    </div>
  );
};

export default Header;
