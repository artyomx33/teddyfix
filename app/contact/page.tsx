import type { Metadata } from "next";
import {
  ContactHero,
  ContactInfo,
  ContactForm,
  TeddyverseFooter,
} from "@/components/sections";
import { contactSeo } from "@/lib/content/contact";

export const metadata: Metadata = {
  title: contactSeo.title,
  description: contactSeo.description,
  keywords: contactSeo.keywords,
  openGraph: {
    title: contactSeo.title,
    description: contactSeo.description,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <TeddyverseFooter />
    </main>
  );
}
