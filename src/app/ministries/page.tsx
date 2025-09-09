import { Metadata } from "next";
import MinistriesClient from "./ui/MinistriesClient";

export const metadata: Metadata = { title: "Pelayanan • GPdI Church" };

export default function MinistriesPage() {
  return <MinistriesClient />;
}


