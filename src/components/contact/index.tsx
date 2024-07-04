import styles from "./styles.module.css";
import ContactForm from "./ContactForm";
import { useEffect, useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";

export function ContactIllustration() {
  return (
    <ThemedImage
      alt="Illustration for the contact page with a woman, a mobile phone and an enveloppe."
      sources={{
        light: useBaseUrl("/img/illustrations/contact-light.svg"),
        dark: useBaseUrl("/img/illustrations/contact-dark.svg"),
      }}
    />
  );
}

const breakpointValue: number = 996;

export function ContactDesktop() {
  return (
    <div className={"container" + " " + styles.contact_container}>
      <div className={"row"}>
        <div
          className={
            "col col--6 col--offset-1" + " " + "flex-full-centered" + " "
          }
          style={{
            margin: "var(--ifm-spacing-2xl) 0",
            padding: "var(--ifm-spacing-2xl)",
          }}
        >
          <ContactIllustration />
        </div>
        <div
          className={"col col--5" + " " + "padding-none" + " " + "margin-none"}
        >
          <h1 className={"padding-none"}> Contact us</h1>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactMobile() {
  return (
    <div className={"container" + " " + styles.contact_container}>
      <div className={"row" + " " + "flex-full-centered"}>
        <div className={"col"}>
          <h1 className="text-centered"> Contact us</h1>
        </div>
      </div>
      <div className={"row" + " " + "flex-full-centered"}>
        <div className={"col" + " " + "flex-full-centered"} style={{ padding: "var(--ifm-spacing-2xl)"}}>
          <ContactIllustration />
        </div>
      </div>
      <div className={"row" + " " + "flex-full-centered"}>
        <div className={"col"}>
          <div className="flex-full-centered">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > breakpointValue);

  const updateMedia = () => {
    setDesktop(window.innerWidth > breakpointValue);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return <div>{isDesktop ? <ContactDesktop /> : <ContactMobile />}</div>;
}