"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";
import { CopyButton } from "@/components/ui/CopyButton";
import {
  CONSULTATION_ARRIVAL_OPTIONS,
  CONSULTATION_DAY_OPTIONS,
  CONSULTATION_NEED_OPTIONS,
  type ConsultationArrival,
  type ConsultationDay,
  type ConsultationNeed,
  SERVICE_SLUG_TO_CONSULTATION,
  type ServiceSlug,
  WORKSHOP_PROFILE,
} from "@/data/workshop";
import { buildConsultationWhatsAppUrl } from "@/lib/whatsapp";

interface FormErrors {
  carModel?: string;
  notes?: string;
}

interface SubmittedResult {
  url: string;
  message: string;
}

export function ConsultationForm() {
  const [customerName, setCustomerName] = useState("");
  const [carModel, setCarModel] = useState("");
  const [need, setNeed] = useState<ConsultationNeed>(
    CONSULTATION_NEED_OPTIONS[0],
  );
  const [arrival, setArrival] = useState<ConsultationArrival>(
    CONSULTATION_ARRIVAL_OPTIONS[0],
  );
  const [plannedDay, setPlannedDay] = useState<ConsultationDay>(
    CONSULTATION_DAY_OPTIONS[0],
  );
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [preselectNotice, setPreselectNotice] = useState<string | null>(null);
  const [submittedResult, setSubmittedResult] =
    useState<SubmittedResult | null>(null);

  const carModelInputRef = useRef<HTMLInputElement | null>(null);
  const notesInputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    function handleServiceSelect(event: Event) {
      const customEvent = event as CustomEvent<{ serviceSlug?: ServiceSlug }>;
      const slug = customEvent.detail?.serviceSlug;
      if (!slug || !(slug in SERVICE_SLUG_TO_CONSULTATION)) {
        return;
      }

      const mapped = SERVICE_SLUG_TO_CONSULTATION[slug];
      setNeed(mapped.need);
      if (mapped.arrival) {
        setArrival(mapped.arrival);
      }

      setPreselectNotice(
        mapped.arrival
          ? `Opsi disesuaikan untuk pertanyaan jemput unit. Lengkapi data mobil dan titik lokasi di bawah.`
          : `Kebutuhan otomatis dipilih ke "${mapped.need}". Lengkapi tipe mobil dan catatan keluhan.`,
      );

      requestAnimationFrame(() => {
        carModelInputRef.current?.focus();
      });
    }

    window.addEventListener("motuba:select-service", handleServiceSelect);
    return () => {
      window.removeEventListener("motuba:select-service", handleServiceSelect);
    };
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: FormErrors = {};
    if (carModel.trim().length === 0) {
      nextErrors.carModel =
        "Perlu diisi: sebutkan merek, model, dan tahun mobil.";
    }
    if (notes.trim().length === 0) {
      nextErrors.notes =
        "Perlu diisi: tuliskan gejala, bagian yang ingin dirapikan, atau lokasi jemput unit.";
    }

    if (nextErrors.carModel || nextErrors.notes) {
      setErrors(nextErrors);
      setSubmittedResult(null);
      requestAnimationFrame(() => {
        if (nextErrors.carModel) {
          carModelInputRef.current?.focus();
        } else if (nextErrors.notes) {
          notesInputRef.current?.focus();
        }
      });
      return;
    }

    setErrors({});
    const { url, message } = buildConsultationWhatsAppUrl(
      WORKSHOP_PROFILE.whatsappE164,
      {
        customerName,
        carModel,
        need,
        arrival,
        plannedDay,
        notes,
      },
    );

    // Call window.open synchronously inside submit handler so mobile browsers do not block it.
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmittedResult({
      url,
      message,
    });
  }

  const errorCount = [errors.carModel, errors.notes].filter(Boolean).length;

  return (
    <div className="rounded-[4px] border-2 border-ink bg-canvas p-5 sm:p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-rule pb-4">
        <h3 className="font-display text-2xl font-bold text-ink">
          Formulir Cek Keluhan Cepat
        </h3>
        <span className="font-mono text-xs font-medium text-ink-muted">
          Tujuan WA: {WORKSHOP_PROFILE.phoneDisplay}
        </span>
      </div>

      {preselectNotice ? (
        <p
          aria-live="polite"
          className="mt-4 rounded-[2px] border border-ink-muted bg-surface px-3.5 py-2.5 text-sm font-medium text-ink"
        >
          {preselectNotice}
        </p>
      ) : null}

      {errorCount > 0 ? (
        <div
          role="alert"
          className="mt-4 rounded-[2px] border-2 border-accent bg-surface px-4 py-3 text-sm text-ink"
        >
          <p className="font-bold text-accent">
            Masih ada {errorCount} kolom wajib yang belum diisi:
          </p>
          <ul className="mt-1 list-disc pl-5 text-ink">
            {errors.carModel ? <li>{errors.carModel}</li> : null}
            {errors.notes ? <li>{errors.notes}</li> : null}
          </ul>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-5">
        <div>
          <label
            htmlFor="customer-name"
            className="block text-sm font-semibold text-ink"
          >
            Nama Anda{" "}
            <span className="font-normal text-ink-muted">(opsional)</span>
          </label>
          <input
            id="customer-name"
            name="customerName"
            type="text"
            autoComplete="name"
            value={customerName}
            onChange={(event) => setCustomerName(event.target.value)}
            placeholder="Misal: Pak Budi"
            className="mt-1.5 min-h-11 w-full rounded-[2px] border border-ink-muted bg-field px-3.5 py-2.5 text-base text-ink placeholder:text-ink-muted"
          />
        </div>

        <div>
          <label
            htmlFor="car-model"
            className="block text-sm font-semibold text-ink"
          >
            Mobil &amp; Tahun{" "}
            <span className="font-semibold text-accent">(wajib)</span>
          </label>
          <input
            ref={carModelInputRef}
            id="car-model"
            name="carModel"
            type="text"
            required
            aria-invalid={Boolean(errors.carModel)}
            aria-describedby={
              errors.carModel
                ? "car-model-hint car-model-error"
                : "car-model-hint"
            }
            value={carModel}
            onChange={(event) => {
              const nextValue = event.target.value;
              setCarModel(nextValue);
              if (errors.carModel && nextValue.trim().length > 0) {
                setErrors((prev) => ({ ...prev, carModel: undefined }));
              }
            }}
            placeholder="Misal: Corolla GL 1984 atau Kijang Super 1992"
            className={`mt-1.5 min-h-11 w-full rounded-[2px] border bg-field px-3.5 py-2.5 text-base text-ink placeholder:text-ink-muted ${
              errors.carModel ? "border-2 border-accent" : "border-ink-muted"
            }`}
          />
          <p id="car-model-hint" className="mt-1 text-xs text-ink-muted">
            Tulis merek, tipe, dan perkiraan tahun agar mekanik langsung paham
            basis mesin/bodinya.
          </p>
          {errors.carModel ? (
            <p
              id="car-model-error"
              role="alert"
              className="mt-1.5 text-sm font-semibold text-accent"
            >
              {errors.carModel}
            </p>
          ) : null}
        </div>

        <fieldset>
          <legend className="text-sm font-semibold text-ink">
            Kebutuhan Utama
          </legend>
          <div className="mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {CONSULTATION_NEED_OPTIONS.map((option) => {
              const checked = need === option;
              return (
                <label
                  key={option}
                  className={`flex min-h-11 items-center gap-2.5 rounded-[4px] border px-3.5 py-2.5 text-sm transition-colors duration-150 ${
                    checked
                      ? "border-2 border-ink bg-surface font-semibold text-ink"
                      : "border-ink-muted bg-field font-medium text-ink hover:border-ink"
                  }`}
                >
                  <input
                    type="radio"
                    name="need"
                    value={option}
                    checked={checked}
                    onChange={() => setNeed(option)}
                    className="h-4 w-4 shrink-0 accent-accent"
                  />
                  <span>{option}</span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-semibold text-ink">
            Cara Kedatangan
          </legend>
          <div className="mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {CONSULTATION_ARRIVAL_OPTIONS.map((option) => {
              const checked = arrival === option;
              return (
                <label
                  key={option}
                  className={`flex min-h-11 items-center gap-2.5 rounded-[4px] border px-3.5 py-2.5 text-sm transition-colors duration-150 ${
                    checked
                      ? "border-2 border-ink bg-surface font-semibold text-ink"
                      : "border-ink-muted bg-field font-medium text-ink hover:border-ink"
                  }`}
                >
                  <input
                    type="radio"
                    name="arrival"
                    value={option}
                    checked={checked}
                    onChange={() => setArrival(option)}
                    className="h-4 w-4 shrink-0 accent-accent"
                  />
                  <span>{option}</span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-semibold text-ink">
            Rencana Hari
          </legend>
          <div className="mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {CONSULTATION_DAY_OPTIONS.map((option) => {
              const checked = plannedDay === option;
              return (
                <label
                  key={option}
                  className={`flex min-h-11 items-center gap-2.5 rounded-[4px] border px-3.5 py-2.5 text-sm transition-colors duration-150 ${
                    checked
                      ? "border-2 border-ink bg-surface font-semibold text-ink"
                      : "border-ink-muted bg-field font-medium text-ink hover:border-ink"
                  }`}
                >
                  <input
                    type="radio"
                    name="plannedDay"
                    value={option}
                    checked={checked}
                    onChange={() => setPlannedDay(option)}
                    className="h-4 w-4 shrink-0 accent-accent"
                  />
                  <span>{option}</span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <div>
          <label
            htmlFor="complaint-notes"
            className="block text-sm font-semibold text-ink"
          >
            Catatan Keluhan{" "}
            <span className="font-semibold text-accent">(wajib)</span>
          </label>
          <textarea
            ref={notesInputRef}
            id="complaint-notes"
            name="notes"
            rows={4}
            required
            aria-invalid={Boolean(errors.notes)}
            aria-describedby={
              errors.notes ? "notes-hint notes-error" : "notes-hint"
            }
            value={notes}
            onChange={(event) => {
              const nextValue = event.target.value;
              setNotes(nextValue);
              if (errors.notes && nextValue.trim().length > 0) {
                setErrors((prev) => ({ ...prev, notes: undefined }));
              }
            }}
            placeholder="Jelaskan keluhan mesin, bagian bodi yang ingin dirapikan, atau patokan lokasi bila tanya jemput unit."
            className={`mt-1.5 w-full rounded-[2px] border bg-field px-3.5 py-2.5 text-base text-ink placeholder:text-ink-muted ${
              errors.notes ? "border-2 border-accent" : "border-ink-muted"
            }`}
          />
          <p id="notes-hint" className="mt-1 text-xs text-ink-muted">
            Jika masih ragu atau butuh cek fisik, nanti bisa lanjut kirim foto
            dan video langsung di chat WhatsApp.
          </p>
          {errors.notes ? (
            <p
              id="notes-error"
              role="alert"
              className="mt-1.5 text-sm font-semibold text-accent"
            >
              {errors.notes}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-[4px] bg-accent px-6 py-3 text-base font-semibold text-on-accent transition-colors duration-150 hover:bg-accent-hover active:bg-accent-hover sm:w-auto"
        >
          Kirim ke WhatsApp
        </button>
      </form>

      {submittedResult ? (
        <div
          aria-live="polite"
          className="mt-6 rounded-[4px] border border-ink bg-surface p-4"
        >
          <p className="text-sm font-bold text-ink">
            Pesan WhatsApp sudah disiapkan untuk {WORKSHOP_PROFILE.phoneDisplay}
            .
          </p>
          <p className="mt-1 text-sm text-ink-muted">
            Tab WhatsApp sudah dipicu. Jika belum terbuka otomatis di browser
            atau perangkat ini, klik tombol buka manual atau salin teks pesan di
            bawah.
          </p>

          <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded-[2px] border border-ink-muted bg-canvas p-3 font-mono text-xs leading-relaxed text-ink">
            {submittedResult.message}
          </pre>

          <div className="mt-3 flex flex-wrap items-start gap-3">
            <a
              href={submittedResult.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-[4px] bg-accent px-4 py-2 text-sm font-semibold text-on-accent transition-colors duration-150 hover:bg-accent-hover"
            >
              Buka WhatsApp secara manual
            </a>
            <CopyButton
              value={submittedResult.message}
              label="Salin teks pesan"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
