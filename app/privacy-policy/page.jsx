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
  title: "Privacy Policy | Volume Discount App",
  description: "Premium Shopify privacy policy page with modern legal UI.",
};

const SECTIONS = [
  { label: "Overview", href: "#overview" },
  { label: "Data", href: "#data" },
  { label: "Sharing", href: "#sharing" },
  { label: "Security", href: "#security" },
  { label: "Updates", href: "#updates" },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      description="A premium, easy-to-read privacy policy layout for the Volume Discount App. The page focuses on UI clarity, spacing, and a polished merchant experience."
    >
      <Container>
        <Card className="bg-gradient-to-br from-white to-slate-50/70">
          <div className="flex flex-wrap gap-2">
            <Badge tone="blue">Privacy first</Badge>
            <Badge>Placeholder copy</Badge>
            <Badge tone="violet">Responsive</Badge>
          </div>
          <AnchorList items={SECTIONS} />
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non sem vitae
            lorem vulputate fermentum. Curabitur tempus, sem non blandit rutrum, augue
            nisl tincidunt neque, vitae posuere elit risus in sapien.
          </p>
        </Card>

        <Divider />

        <Card>
          <SectionTitle
            id="overview"
            kicker="Overview"
            title="How this app handles information"
            text="This layout keeps the content easy to scan while preserving a refined SaaS look."
          />
          <p className="mt-4 text-base leading-8 text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida
            tristique lorem, quis rhoncus arcu malesuada ut. Integer egestas, risus at
            posuere mollis, lorem dolor tincidunt metus, a facilisis mi sapien non urna.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Aliquam erat volutpat. Curabitur sodales sem at sapien aliquet, a vulputate
            neque sollicitudin. Suspendisse potenti. Mauris efficitur nisl in metus
            consequat, at dignissim nunc commodo.
          </p>
        </Card>

        <Card>
          <SectionTitle
            id="data"
            kicker="Data"
            title="Information we collect"
            text="Use short paragraphs, structured sections, and clear emphasis for a premium reading experience."
          />
          <p className="mt-4 text-base leading-8 text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada
            semper erat, a euismod lacus semper sed. Donec tincidunt, purus in accumsan
            iaculis, turpis mauris finibus nunc, non feugiat elit nisl id risus.
          </p>
          <div className="mt-5">
            <HighlightBox title="Important note">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed urna sed
              nisl facilisis congue. Cras a ipsum at ligula semper tristique.
            </HighlightBox>
          </div>
        </Card>

        <Card>
          <SectionTitle
            id="sharing"
            kicker="Sharing"
            title="When information may be shared"
            text="Use these cards for grouped legal topics, with subtle shadows and rounded corners."
          />
          <p className="mt-4 text-base leading-8 text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet
            tincidunt sem. Sed faucibus ligula et urna aliquet, in accumsan dolor
            tristique. Nunc sit amet lacus vel arcu sagittis tristique.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Donec sit amet turpis in nisl fermentum congue. Nulla facilisi. Mauris
            convallis, velit at auctor feugiat, ligula turpis condimentum arcu, vitae
            aliquam odio neque at augue.
          </p>
        </Card>

        <Card>
          <SectionTitle
            id="security"
            kicker="Security"
            title="How we protect merchant data"
            text="Keep the language professional and concise, with enough breathing room to feel premium."
          />
          <p className="mt-4 text-base leading-8 text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a volutpat
            orci. Morbi lacinia aliquam sapien, vitae convallis nunc lobortis at.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Cras dictum ligula non justo sollicitudin, vel tempor lectus rhoncus. Sed
            imperdiet lacus a justo egestas, sit amet feugiat lacus consectetur.
          </p>
        </Card>

        <Card>
          <SectionTitle
            id="updates"
            kicker="Updates"
            title="Policy changes and contact"
            text="The layout ends with a clear final section so merchants know where to go next."
          />
          <p className="mt-4 text-base leading-8 text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed augue sed
            ipsum dignissim tincidunt. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            For questions, use the support page. The footer and anchor links keep the
            experience streamlined on every screen size.
          </p>
        </Card>
      </Container>
    </LegalLayout>
  );
}
