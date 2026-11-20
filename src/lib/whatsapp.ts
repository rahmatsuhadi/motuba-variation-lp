import type {
  ConsultationArrival,
  ConsultationDay,
  ConsultationNeed,
} from "@/data/workshop";

export interface ConsultationPayload {
  customerName?: string;
  carModel: string;
  need: ConsultationNeed;
  arrival: ConsultationArrival;
  plannedDay: ConsultationDay;
  notes: string;
}

export function buildGeneralWhatsAppUrl(
  phoneE164: string,
  greeting = "Halo Mas, mau tanya jadwal dan konsultasi bengkel Motuba Variation Workshop di Poncosari.",
): string {
  const cleanText = greeting.trim();
  return `https://wa.me/${phoneE164}?text=${encodeURIComponent(cleanText)}`;
}

export function formatConsultationMessage(
  payload: ConsultationPayload,
): string {
  const customerName = payload.customerName?.trim() ?? "";
  const carModel = payload.carModel.trim();
  const notes = payload.notes.trim();

  const lines = [
    "Halo Mas, mau konsultasi / janjian bengkel Motuba Variation Workshop.",
    "",
  ];

  if (customerName.length > 0) {
    lines.push(`Nama: ${customerName}`);
  }

  lines.push(
    `Mobil & tahun: ${carModel}`,
    `Kebutuhan: ${payload.need}`,
    `Kedatangan: ${payload.arrival}`,
    `Rencana hari: ${payload.plannedDay}`,
    `Catatan keluhan: ${notes}`,
  );

  return lines.join("\n");
}

export function buildConsultationWhatsAppUrl(
  phoneE164: string,
  payload: ConsultationPayload,
): { url: string; message: string } {
  const message = formatConsultationMessage(payload);
  return {
    message,
    url: `https://wa.me/${phoneE164}?text=${encodeURIComponent(message)}`,
  };
}
