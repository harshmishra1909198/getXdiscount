import { LegalLayout } from "../../components/LegalLayout";
import {
  Badge,
  Card,
  Container,
  Divider,
  HighlightBox,
  SectionTitle,
  AnchorList,
} from "../../components/LegalPrimitives";
import { CopyEmailButton } from "../../components/CopyEmailButton";

export const metadata = {
  title: "Support | VolumeX",
  description: "Support page for VolumeX with direct merchant contact details.",
};

const SUPPORT_EMAIL = "getxdiscount@gmail.com";
const SUPPORT_URL = "https://getxdiscounts.com/support";

const SECTIONS = [
  { label: "Contact", href: "#contact" },
  { label: "Response time", href: "#response-time" },
  { label: "Help", href: "#help" },
];

export default function SupportPage() {
  return (
    <LegalLayout
      title="Support"
      description="Need help with offer setup, storefront visibility, or billing questions? VolumeX support is available by email for merchant assistance."
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
            If you need help installing VolumeX, enabling the theme app extension
            block, reviewing offer visibility, or understanding app behavior,
            contact the support team by email.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={SUPPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-violet-50 px-4 py-2.5 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:shadow-soft sm:w-auto"
            >
              Contact support
            </a>
            <CopyEmailButton email={SUPPORT_EMAIL} />
          </div>
        </Card>

        <Divider />

        <div className="grid gap-4 lg:grid-cols-2">
          <Card id="contact">
            <SectionTitle
              kicker="Contact"
              title="Email our support team"
              text="Include your store domain, a short description of the issue, and screenshots when possible so we can respond faster."
            />
            <div className="mt-5 flex flex-wrap items-center gap-3 rounded-[20px] border border-slate-200 bg-slate-50 p-5">
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="w-full text-base font-bold text-slate-950 transition hover:text-orange-700 sm:w-auto"
              >
                {SUPPORT_EMAIL}
              </a>
              <CopyEmailButton email={SUPPORT_EMAIL} />
            </div>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Support requests may include help with app installation, storefront
              block placement, discount configuration, campaign troubleshooting, and
              billing questions.
            </p>
          </Card>

          <Card id="response-time">
            <SectionTitle
              kicker="Response time"
              title="What merchants can expect"
              text="We aim to keep support clear, practical, and focused on resolving store-impacting issues quickly."
            />
            <div className="mt-5">
              <HighlightBox title="Typical turnaround">
                Most support requests receive an initial response within one business
                day. Time-sensitive issues should include the affected shop domain and
                a clear summary in the email subject.
              </HighlightBox>
            </div>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Resolution time depends on issue complexity, storefront setup, and
              whether the request needs reproduction or Shopify-specific
              investigation.
            </p>
          </Card>
        </div>

        <Card id="help">
          <SectionTitle
            kicker="Help"
            title="Common support topics"
            text="These are the most common questions merchants ask during setup and early use."
          />
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <article className="rounded-[18px] border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-lg font-extrabold tracking-tight text-slate-950">
                How do I show the offer block on a product page?
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Open the Shopify theme editor, add the VolumeX app block to the
                relevant product template, and save the theme changes.
              </p>
            </article>
            <article className="rounded-[18px] border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-lg font-extrabold tracking-tight text-slate-950">
                Why is an offer not appearing?
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Check offer status, product targeting, customer conditions,
                scheduling, and whether the theme app block is enabled on the active
                product template.
              </p>
            </article>
            <article className="rounded-[18px] border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-lg font-extrabold tracking-tight text-slate-950">
                Can I get help after installation?
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Yes. VolumeX support can help with setup clarification, app behavior,
                and questions related to using supported features inside Shopify.
              </p>
            </article>
          </div>
        </Card>
      </Container>
    </LegalLayout>
  );
}
