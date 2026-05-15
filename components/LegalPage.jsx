import { AnchorList, Badge, Card, Container, Divider, HighlightBox, SectionTitle } from "./LegalPrimitives";

export function LegalPage({
  title,
  description,
  eyebrow,
  sections,
  intro,
  children,
}) {
  return (
    <Container>
      <Card className="bg-gradient-to-br from-white to-slate-50/80">
        <div className="flex flex-wrap gap-2">
          <Badge tone="blue">{eyebrow}</Badge>
          <Badge>Clean UI</Badge>
          <Badge tone="violet">Tailwind</Badge>
        </div>
        <AnchorList items={sections} />
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{intro}</p>
      </Card>

      <Divider />
      <div className="grid gap-4">{children}</div>
    </Container>
  );
}

export { SectionTitle, HighlightBox, Card, Badge, AnchorList, Divider };

