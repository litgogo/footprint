import { cities } from "@/data/cities";
import { notFound } from "next/navigation";
import CityDetailClient from "./CityDetailClient";

export function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }));
}

export default async function CityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);

  if (!city) {
    notFound();
  }

  return <CityDetailClient city={city} />;
}
