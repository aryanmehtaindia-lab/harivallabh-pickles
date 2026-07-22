import { categories } from "@/data/products";
import CategoryClient from "./CategoryClient";

export function generateStaticParams() {
  return categories.map((c) => ({ id: c.id }));
}

export default function CategoryPage() {
  return <CategoryClient />;
}
