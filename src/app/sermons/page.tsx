import { Metadata } from "next";
import SermonsClient from "./ui/SermonsClient";

export const metadata: Metadata = { title: "Khotbah • GPdI Church" };

export default function SermonsPage() {
  return <SermonsClient />;
}


