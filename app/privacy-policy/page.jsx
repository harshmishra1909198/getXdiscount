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
  title: "Privacy Policy | VolumeX",
  description: "Privacy policy for VolumeX, including data handling and merchant contact details.",
};

const SUPPORT_EMAIL = "getxdiscount@gmail.com";

const SECTIONS = [
  { label: "Overview", href: "#overview" },
  { label: "Data", href: "#data" },
  { label: "Use", href: "#use" },
  { label: "Sharing", href: "#sharing" },
  { label: "Retention", href: "#retention" },
  { label: "Security", href: "#security" },
  { label: "Choices", href: "#choices" },
  { label: "Updates", href: "#updates" },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      description="This policy explains what information the app uses from your Shopify store, how it is handled, when it may be shared, and how to contact us with privacy questions."
    >
      <Container>
        <Card className="bg-gradient-to-br from-white to-slate-50/70">
          <div className="flex flex-wrap gap-3">
            <Badge tone="blue">Shopify app</Badge>
            <Badge tone="violet">Merchant data</Badge>
            <Badge>Support available</Badge>
          </div>
          <div className="mt-4">
            <AnchorList items={SECTIONS} />
          </div>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            VolumeX is a Shopify app for creating and managing volume discount
            offers. To deliver those features, it only accesses the information needed
            to authenticate the app, configure discounts, render storefront content,
            and support merchants.
          </p>
        </Card>

        <Divider />

        <Card>
          <SectionTitle
            id="overview"
            kicker="Overview"
            title="What this policy covers"
            text="This policy applies to the app, related storefront blocks, support requests, and the merchant-facing features that run through Shopify."
          />
          <p className="mt-4 text-base leading-8 text-slate-600">
            We use information received from Shopify and information you enter into
            VolumeX to operate the service. We do not intentionally collect payment
            card data, and we do not sell merchant or customer data.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Shopify remains the primary platform for store, order, and customer
            information. We only access data that is authorized by your Shopify
            permissions and needed for the features you use.
          </p>
        </Card>

        <Card>
          <SectionTitle
            id="data"
            kicker="Data"
            title="Information the app may access"
            text="The exact data depends on the features you enable and the permissions you approve in Shopify."
          />
          <p className="mt-4 text-base leading-8 text-slate-600">
            VolumeX may access store name, shop domain, merchant contact details,
            currency, time zone, billing country, plan name, owner name, and app
            installation details.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            When you create or manage offers, we may process discount configuration,
            product targeting, customer targeting, exclusions, scheduling settings,
            storefront block settings, theme app extension status, and related rule
            data.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Depending on the feature in use, we may also process product, customer, and
            order information that is necessary to evaluate discount eligibility or
            render the discount experience correctly in your store.
          </p>
          <div className="mt-5">
            <HighlightBox title="Support requests">
              If you contact us for help, we may receive the information you send in
              your request, such as your shop domain, screenshots, and issue details.
            </HighlightBox>
          </div>
        </Card>

        <Card>
          <SectionTitle
            id="use"
            kicker="Use"
            title="How we use information"
            text="We use data only to operate the app, deliver the requested features, and support merchants."
          />
          <p className="mt-4 text-base leading-8 text-slate-600">
            We use this information to authenticate your store, save and update
            discount rules, display offer blocks on the storefront, manage webhook
            events, support billing or installation workflows, and respond to merchant
            support requests.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            We may also use limited operational data to monitor app performance,
            diagnose errors, prevent abuse, and improve the app experience.
          </p>
        </Card>

        <Card>
          <SectionTitle
            id="sharing"
            kicker="Sharing"
            title="When information may be shared"
            text="We do not sell personal information. We share information only when needed to run the app or when required by law."
          />
          <p className="mt-4 text-base leading-8 text-slate-600">
            We may share data with Shopify and with trusted service providers that help
            us operate the app, such as hosting, database, logging, monitoring, and
            support tooling providers.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            We may also disclose information if required by law, court order, or a
            valid legal process, or when we believe disclosure is necessary to protect
            the rights, safety, and security of the app, our users, or others.
          </p>
        </Card>

        <Card>
          <SectionTitle
            id="retention"
            kicker="Retention"
            title="How long we keep data"
            text="We keep data only as long as needed to provide the app, maintain records, and meet legal or operational requirements."
          />
          <div className="mt-5">
            <HighlightBox title="Uninstall behavior">
              When you uninstall VolumeX, we remove active Shopify session records and
              store-specific discount records from our system. We may retain limited
              records such as installation history, uninstall history, logs, or other
              information needed for legal, security, dispute resolution, or accounting
              purposes.
            </HighlightBox>
          </div>
          <p className="mt-4 text-base leading-8 text-slate-600">
            If you want us to delete remaining store-specific information, contact us
            at the email address below and we will review the request according to
            applicable law and our retention obligations.
          </p>
        </Card>

        <Card>
          <SectionTitle
            id="security"
            kicker="Security"
            title="How we protect information"
            text="We use reasonable administrative, technical, and organizational safeguards to protect the data handled by the app."
          />
          <p className="mt-4 text-base leading-8 text-slate-600">
            Access to merchant information is restricted to app processes and
            authorized personnel who need it to operate or support the service. We
            also rely on Shopify authentication and application-level controls to
            reduce unauthorized access risk.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            No system is perfectly secure, so we encourage merchants to keep their
            Shopify staff permissions up to date and to review store access regularly.
          </p>
        </Card>

        <Card>
          <SectionTitle
            id="choices"
            kicker="Choices"
            title="Merchant rights and choices"
            text="You control the app through your Shopify store and can also contact us about data questions."
          />
          <p className="mt-4 text-base leading-8 text-slate-600">
            You may uninstall the app at any time through Shopify. You may also request
            access, correction, or deletion of store-specific information that we hold,
            subject to legal or operational limits.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            If you believe a record is incorrect or want help with a privacy request,
            contact us using the information below.
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

        <Card>
          <SectionTitle
            id="updates"
            kicker="Updates"
            title="Changes to this policy"
            text="We may update this policy from time to time to reflect product, legal, or operational changes."
          />
          <p className="mt-4 text-base leading-8 text-slate-600">
            If we make material changes, we will update this page with the revised
            policy. Continued use of VolumeX after an update means you accept the
            revised policy.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Questions about privacy or data handling can be sent to the email address
            above.
          </p>
        </Card>
      </Container>
    </LegalLayout>
  );
}
