import { redirect } from "next/navigation";
import { routes } from "@/data/routes";

export default function HomePage() {
  redirect(routes.bio);
}
