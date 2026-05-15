import { LegalLayout } from "../../components/LegalLayout";
import { Container, SectionTitle } from "../../components/LegalPrimitives";
import { CopyEmailButton } from "../../components/CopyEmailButton";
import { SupportContactForm } from "../../components/SupportContactForm";

export const metadata = {
  title: "Support & Contact | Volume Discount App",
  description: "Premium support page for Shopify merchants with copyable email contact.",
};

const SUPPORT_EMAIL = "getxdiscount@gmail.com";

export default function SupportPage() {
  return (
    <LegalLayout
      title="Support"
      description="One clean support page for contact and merchant help."
    >
      <Container>
        <section
          id="contact"
          className="grid gap-0 overflow-hidden rounded-[28px] border border-slate-200 bg-[#f5d8c2]"
        >
          <div className="bg-[#f8e8d8] px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
            <SectionTitle
              kicker="Contact"
              title="Send us a message"
              text="The support form is intentionally open and easy to scan, so merchants can reach out fast."
            />
            <SupportContactForm recipient={SUPPORT_EMAIL} />
          </div>

          <aside className="bg-[#a98272] px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10">
            <h3 className="text-[clamp(2rem,3vw,2.8rem)] font-black tracking-[-0.05em]">
              Contact details
            </h3>
            <div className="mt-10 space-y-10">
              <div>
                <p className="text-[1.15rem] font-semibold text-white/90">Our Web</p>
                <p className="mt-2 text-[clamp(1.8rem,2.8vw,2.7rem)] font-medium leading-tight">
                  discountray.com
                </p>
              </div>
              <div>
                <p className="text-[1.15rem] font-semibold text-white/90">E-mail US</p>
                <p className="mt-2 text-[clamp(1.6rem,2.6vw,2.4rem)] font-medium leading-tight">
                  getxdiscount@gmail.com
                </p>
              </div>
              <div>
                <p className="text-[1.15rem] font-semibold text-white/90">Our location</p>
                <p className="mt-2 max-w-md text-[clamp(1.35rem,2vw,2rem)] font-medium leading-tight">
                  Mirpur DOHS, Dhaka, Bangladesh.
                </p>
              </div>
              <div className="pt-2">
                <div className="flex flex-wrap gap-3">
                  <CopyEmailButton email={SUPPORT_EMAIL} />
                  <a
                    href={`mailto:${SUPPORT_EMAIL}?subject=Support%20Request`}
                    className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
                  >
                    Open email app
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </Container>
    </LegalLayout>
  );
}
