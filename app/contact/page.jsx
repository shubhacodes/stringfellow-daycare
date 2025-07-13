import Navigation from "@/components/Navigation";
import ContactPageHeader from "@/components/ContactPageHeader";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us - Stringfellow Daycare",
  description:
    "Get in touch with Stringfellow Daycare. We'd love to hear from you and discuss how we can support your family's childcare needs.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ContactPageHeader />
      <ContactForm />
      <Footer />
    </div>
  );
}
