import { Metadata } from "next";
import EventsClient from "./ui/EventsClient";

export const metadata: Metadata = { title: "Acara • GPdI Church" };

export default function EventsPage() {
  return <EventsClient />;
}


