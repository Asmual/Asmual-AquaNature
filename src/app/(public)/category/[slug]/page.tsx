import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { 
  getCategoryById, 
  getItemsByCategory, 
  CATEGORIES_META 
} from "@/data/categories";
import CategoryShowcaseClient from "@/components/category/CategoryShowcaseClient";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES_META.map((cat) => ({
    slug: cat.id,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryById(slug);

  if (!category) {
    return {
      title: "Category Not Found | Asmual AquaNature",
    };
  }

  return {
    title: `${category.name} (${category.bengaliName}) | Asmual AquaNature`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryById(slug);

  if (!category) {
    notFound();
  }

  const items = getItemsByCategory(category.id);

  return (
    <CategoryShowcaseClient
      category={category}
      items={items}
    />
  );
}
