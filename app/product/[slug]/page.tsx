import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PRODUCTS, getProductBySlug } from "@/lib/products";
import { ProductDetailClient } from "./ProductDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    return {
      title: "Product Not Found | Raiyaan Luxury",
    };
  }

  return {
    title: product.seoTitle,
    description: product.seoDescription,
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      images: [
        {
          url: product.images.primary,
          alt: product.images.alt,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  // Related products from same family or category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.slug !== product.slug && (p.fragranceFamily === product.fragranceFamily || p.category === product.category)
  ).slice(0, 3);

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
}
