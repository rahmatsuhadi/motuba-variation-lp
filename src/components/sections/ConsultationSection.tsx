import { ConsultationForm } from "@/components/sections/ConsultationForm";
import { WORKSHOP_PROFILE } from "@/data/workshop";

export function ConsultationSection() {
  return (
    <section
      id="keluhan"
      aria-labelledby="keluhan-heading"
      className="border-y border-ink bg-surface py-12 sm:py-16 lg:py-[88px]"
    >
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="lg:col-span-5">
          <div className="border-t-2 border-ink pt-4">
            <h2
              id="keluhan-heading"
              className="font-display text-[clamp(1.75rem,3vw+0.85rem,2.75rem)] font-bold leading-[1.08] text-ink"
            >
              Tanya Keluhan Dulu Sebelum Meluncur
            </h2>
          </div>

          <p className="mt-4 max-w-[52ch] text-[clamp(1rem,0.25vw+0.94rem,1.0625rem)] leading-[1.65] text-ink">
            {WORKSHOP_PROFILE.scheduleSummary}
          </p>

          <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-ink-muted sm:text-base">
            Karena pengerjaan mobil tua sering menyesuaikan kondisi unit di
            garasi, kirim ringkasan keluhan dulu agar mekanik bisa memastikan
            waktu luang dan ketersediaan ruang kerja.
          </p>

          <div className="mt-6 rounded-[4px] border border-ink-muted bg-canvas p-4">
            <h3 className="font-display text-lg font-bold text-ink">
              Ketentuan Layanan Jemput Unit
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
              {WORKSHOP_PROFILE.pickupPolicy}
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
}
