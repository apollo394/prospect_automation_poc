import BlueprintClient from "./Client";

export default async function BlueprintPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <BlueprintClient id={id} />;
}
