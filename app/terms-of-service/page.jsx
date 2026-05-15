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

export const metadata = {
  title: "Terms of Service | Volume Discount App",
  description: "Premium Shopify terms page with modern legal UI.",
};

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
      description="A minimal, premium terms page for a Shopify public app. The content is placeholder copy, but the UI is production-ready."
    >
      <Container>
        <Card className="bg-gradient-to-br from-white to-slate-50/70">
          <div className="flex flex-wrap gap-2">
            <Badge tone="violet">SaaS style</Badge>
            <Badge>Rounded cards</Badge>
            <Badge tone="blue">Anchor nav</Badge>
          </div>
          <AnchorList items={SECTIONS} />
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat, sem
            in luctus elementum, ligula massa tempor magna, sit amet interdum nisl dui at
            metus.
          </p>
        </Card>

        <Divider />

        <Card>
          <SectionTitle
            id="acceptance"
            kicker="Acceptance"
            title="Agreement to the terms"
            text="Use large headings and comfortable spacing so merchants can scan the document quickly."
          />
          <p className="mt-4 text-base leading-8 text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper
            velit id eros convallis, non iaculis sapien posuere. Integer sed suscipit
            sem, vitae venenatis nunc.
          </p>
        </Card>

        <Card>
          <SectionTitle
            id="license"
            kicker="License"
            title="Permitted use of the app"
            text="This section is styled for clarity with consistent typography and section separators."
          />
          <p className="mt-4 text-base leading-8 text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra, odio
            a dignissim aliquet, massa ligula tincidunt est, a feugiat nisi ipsum nec
            urna.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Nullam pharetra eros in metus porttitor placerat. Vestibulum dignissim, nunc
            at lacinia convallis, neque elit faucibus nibh, sit amet fermentum risus urna
            vel urna.
          </p>
        </Card>

        <Card>
          <SectionTitle
            id="billing"
            kicker="Billing"
            title="Subscription and payment details"
            text="The highlight box is used for important notes and reminders."
          />
          <div className="mt-5">
            <HighlightBox title="Billing note">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium
              tempus mauris, a bibendum enim semper sed.
            </HighlightBox>
          </div>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Donec vulputate, massa in vestibulum cursus, tellus mi sollicitudin purus,
            non pharetra erat ipsum eu dui. Suspendisse at commodo nulla, a interdum
            tortor.
          </p>
        </Card>

        <Card>
          <SectionTitle
            id="limits"
            kicker="Limits"
            title="Limitations and disclaimers"
            text="Keep legal pages visually calm with soft gradients and gentle shadows."
          />
          <p className="mt-4 text-base leading-8 text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet ipsum
            vitae nisl maximus consequat. Vestibulum a tortor sed sapien cursus interdum.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Integer in metus ac nibh gravida ultrices. Duis sed tellus vel lectus
            tincidunt interdum vitae a velit. Sed commodo turpis at mauris egestas
            interdum.
          </p>
        </Card>

        <Card>
          <SectionTitle
            id="changes"
            kicker="Changes"
            title="How updates are communicated"
            text="Finish with a clear closing card that supports long-form legal content."
          />
          <p className="mt-4 text-base leading-8 text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget est
            sed risus ultricies tempus in et mauris.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            If you need a heavier legal draft later, the structure here is ready for real
            content without changing the UI system.
          </p>
        </Card>
      </Container>
    </LegalLayout>
  );
}
