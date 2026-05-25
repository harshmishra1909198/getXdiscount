import { LegalLayout } from "../../components/LegalLayout";
import {
  Badge,
  Card,
  Container,
  Divider,
  SectionTitle,
  AnchorList,
} from "../../components/LegalPrimitives";
import { CopyEmailButton } from "../../components/CopyEmailButton";
import { SupportContactForm } from "../../components/SupportContactForm";

export const metadata = {
  title: "Support | Volume Discount App",
  description: "Support page for Volume Discount App with direct merchant contact details.",
};

const SUPPORT_EMAIL = "getxdiscount@gmail.com";

const SECTIONS = [{ label: "Contact", href: "#contact" }];

export default function SupportPage() {
  return (
    <LegalLayout
      title="Support"
      description="Need help with volume discount setup, storefront visibility, or billing questions? Email support is available for merchant assistance."
    >
      <Container>
        <Card className="bg-gradient-to-br from-white to-slate-50/70">
          <div className="flex flex-wrap gap-3">
            <Badge tone="blue">Typical reply: 1 business day</Badge>
            <Badge>Email support</Badge>
            <Badge tone="violet">Installation help</Badge>
          </div>
          <div className="mt-5">
            <AnchorList items={SECTIONS} />
          </div>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
            If you need help installing the app, enabling the storefront block, or
            understanding how volume discount offers appear on the product page,
            send a message and include your store domain.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=Support%20Request`}
              className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-violet-50 px-4 py-2.5 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              Contact support
            </a>
            <CopyEmailButton email={SUPPORT_EMAIL} />
          </div>
        </Card>

        <Divider />

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
            <SupportContactForm />
          </div>

          <aside className="bg-[#a98272] px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10">
            <h3 className="text-[clamp(2rem,3vw,2.8rem)] font-black tracking-[-0.05em]">
              Contact details
            </h3>
            <div className="mt-10 space-y-10">
              <div>
                <p className="text-[1.15rem] font-semibold text-white/90">Our Web</p>
                <p className="mt-2 text-[clamp(1.8rem,2.8vw,2.7rem)] font-medium leading-tight">
                  getxdiscounts.com
                </p>
              </div>
              <div>
                <p className="text-[1.15rem] font-semibold text-white/90">E-mail us</p>
                <p className="mt-2 text-[clamp(1.6rem,2.6vw,2.4rem)] font-medium leading-tight">
                  {SUPPORT_EMAIL}
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
