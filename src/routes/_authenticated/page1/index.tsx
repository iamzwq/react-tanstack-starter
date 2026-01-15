import { createFileRoute } from "@tanstack/react-router";
import { Page1 } from "@/features/page1";

export const Route = createFileRoute("/_authenticated/page1/")({
  component: Page1,
});
