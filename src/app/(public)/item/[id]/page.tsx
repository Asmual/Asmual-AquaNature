import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { 
  getItemById, 
  getRelatedItems,
  CATEGORY_ITEMS,
  getSpecimenDisplayTitle,
  getSpecimenScientificName
} from "@/data/categories";
import SpecimenDetailClient from "@/components/item/SpecimenDetailClient";

interface SpecimenPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return CATEGORY_ITEMS.map((item) => ({
    id: item.id,
  }));
}

export async function generateMetadata({
  params,
}: SpecimenPageProps): Promise<Metadata> {
  const { id } = await params;
  const item = getItemById(id);

  if (!item) {
    return {
      title: "Specimen Not Found | Asmual AquaNature",
    };
  }

  const titleInfo = getSpecimenDisplayTitle(item);
  const scientific = getSpecimenScientificName(item);

  return {
    title: `${titleInfo.fullTitle} (${scientific}) | Asmual AquaNature`,
    description: item.description,
  };
}

export default async function SpecimenPage({ params }: SpecimenPageProps) {
  const { id } = await params;
  const item = getItemById(id);

  if (!item) {
    notFound();
  }

  const related = getRelatedItems(item.categoryId, item.id, 4);

  return (
    <SpecimenDetailClient
      item={item}
      relatedItems={related}
    />
  );
}
