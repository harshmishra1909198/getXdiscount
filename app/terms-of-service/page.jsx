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
  title: "Terms of Service | VolumeX",
  description: "Terms of Service page for VolumeX with merchant-facing app terms.",
};

const SUPPORT_EMAIL = "getxdiscount@gmail.com";

const SECTIONS = [
  { label: "Acceptance", href: "#acceptance" },
  { label: "License", href: "#license" },
  { label: "Billing", href: "#billing" },
  { label: "Limits", href: "#limits" },
  { label: "Changes", href: "#changes" },
];

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      title="Terms of Service"
      description="These terms govern merchant access to and use of the app, including app access, billing approvals, acceptable use, and support expectations."
    >
      <Container>
        <Card className="bg-gradient-to-br from-white to-slate-50/70">
          <div className="flex flex-wrap gap-2">
            <Badge tone="violet">Shopify public app</Badge>
            <Badge>Merchant use</Badge>
            <Badge tone="blue">Subscription aware</Badge>
          </div>
          <AnchorList items={SECTIONS} />
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
            By installing or using VolumeX, the merchant agrees to these Terms of
            Service. If the merchant does not agree, the app should not be installed
            or used.
          </p>
        </Card>

        <Divider />

        <Card>
          <SectionTitle
            id="acceptance"
            kicker="Acceptance"
            title="Agreement to the terms"
            text="These terms apply to the merchant account, store staff, and any other users operating the app on behalf of the merchant."
          />
          <p className="mt-4 text-base leading-8 text-slate-600">
            The merchant is responsible for ensuring that all use of VolumeX complies
            with Shopify rules, applicable laws, customer protection requirements, and
            the merchant&apos;s own store policies.
          </p>
        </Card>

        <Card>
          <SectionTitle
            id="license"
            kicker="License"
            title="Permitted use of the app"
            text="The app grants merchants a limited, non-exclusive, revocable license to use it for their own Shopify store operations."
          />
          <p className="mt-4 text-base leading-8 text-slate-600">
            Merchants may use VolumeX to configure discounts, launch campaigns, and
            present storefront offer messaging within stores they control. The app may
            not be copied, resold, sublicensed, reverse engineered, or used to build a
            competing service except where such restrictions are limited by law.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Merchants remain responsible for reviewing their own discount logic,
            storefront presentation, and campaign outcomes before publishing offers to
            live shoppers.
          </p>
        </Card>

        <Card>
          <SectionTitle
            id="billing"
            kicker="Billing"
            title="Subscription and payment details"
            text="If the app includes paid plans, charges are presented for merchant approval through Shopify before billing begins."
          />
          <div className="mt-5">
            <HighlightBox title="Billing note">
              Billing, trial availability, and plan details should be reviewed inside
              the app before approval. Fees, once approved through Shopify, are
              generally billed using Shopify&apos;s billing flow.
            </HighlightBox>
          </div>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Unless otherwise required by law, platform policy, or a specific written
            offer, fees are non-refundable. Uninstalling the app or changing plans may
            affect access to features that depend on an active subscription.
          </p>
        </Card>

        <Card>
          <SectionTitle
            id="limits"
            kicker="Limits"
            title="Limitations and disclaimers"
            text="The app is provided to help merchants configure promotions, but merchants remain responsible for how discounts are used in their store."
          />
          <p className="mt-4 text-base leading-8 text-slate-600">
            We do not guarantee uninterrupted availability, error-free operation, or
            any specific revenue outcome. Merchants should test offers, theme
            placement, and pricing logic before relying on them in live campaigns.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            To the fullest extent permitted by law, VolumeX is provided on an as-is
            and as-available basis without warranties beyond those that cannot be
            disclaimed.
          </p>
        </Card>

        <Card>
          <SectionTitle
            id="changes"
            kicker="Changes"
            title="How updates are communicated"
            text="We may update the app, pricing, or these terms from time to time."
          />
          <p className="mt-4 text-base leading-8 text-slate-600">
            Revised terms become effective when posted unless another effective date is
            stated. Continued use of VolumeX after an update means the merchant
            accepts the revised terms.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            For support or questions about these terms, contact the email address
            below.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3 rounded-[20px] border border-slate-200 bg-slate-50 p-5">
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-base font-bold text-slate-950 transition hover:text-orange-700"
            >
              {SUPPORT_EMAIL}
            </a>
            <CopyEmailButton email={SUPPORT_EMAIL} />
          </div>
        </Card>
      </Container>
    </LegalLayout>
  );
}
