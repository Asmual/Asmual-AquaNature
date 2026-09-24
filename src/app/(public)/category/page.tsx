import { redirect } from "next/navigation";

export default function CategoryIndexPage() {
  // Automatically redirect to the first featured category (indoor)
  redirect("/category/indoor");
}
