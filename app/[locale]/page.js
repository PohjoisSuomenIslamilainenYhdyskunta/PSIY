import { useTranslations } from "next-intl";
import Link from "next/link";
import AlertMessage from "../../components/AlertMessage";
import Content from "../../components/Content";
import About from "../../components/About";
import ContentSection from "../../components/ContentSection";
import DonationSection from "../../components/DonationSection";

export default function Home() {
  const t = useTranslations("default");

  return (
    <div>
      <div>
        <Link href="/en" locale="en">
          In english
        </Link>{" "}
        |{" "}
        <Link href="/fi" locale="fi">
          In Finnish
        </Link>
        <br />
        <br />
      </div>
      <div>
        <p>{t("name")}</p>
        <p>{t("description")}</p>
      </div>
      <div>
        <br />
        <Content content={t("about")} />
      </div>
      <div>
        <br />
        <AlertMessage message={t("alertMessage")} />
        <br />
        <About data={t("about")} />
        <br />
        <DonationSection data={t("donation")} />
        {/* <ContentSection data={t("content_sections")} /> */}
      </div>
    </div>
  );
}