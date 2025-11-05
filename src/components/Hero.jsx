import { ArrowRight, ShieldCheck, Sprout } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-white to-white pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-700 mb-4">
              <ShieldCheck className="h-4 w-4" />
              Plant Health, Simplified
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              VANMITRA — Your Companion for Healthy, Thriving Crops
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Diagnose plant issues, get expert recommendations, and monitor fields with
              confidence. We blend agronomy expertise with modern AI to safeguard your yield.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-white font-semibold shadow hover:bg-green-700">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#benefits" className="inline-flex items-center gap-2 rounded-lg border border-green-200 px-5 py-3 text-green-700 font-semibold hover:bg-green-50">
                Learn More
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Sprout className="h-5 w-5 text-green-600" />
                <span>AI-driven diagnostics</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-green-600" />
                <span>Secure farm data</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 p-1 shadow-inner">
              <div className="h-full w-full rounded-xl bg-white p-6 grid grid-cols-2 gap-4">
                {[
                  { label: "Leaf Spot", percent: 82 },
                  { label: "Nutrient Def.", percent: 67 },
                  { label: "Root Rot", percent: 45 },
                  { label: "Pest Risk", percent: 29 },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg border border-green-100 p-4">
                    <div className="flex items-center justify-between text-sm font-medium text-gray-700">
                      <span>{item.label}</span>
                      <span className="text-green-700">{item.percent}%</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-green-100">
                      <div
                        className="h-2 rounded-full bg-green-600"
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
                <div className="col-span-2 rounded-lg border border-green-100 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Field Health Index</p>
                      <p className="text-xs text-gray-500">Updated 5 mins ago</p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                      7.9 / 10
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-green-100">
                    <div className="h-2 rounded-full bg-green-600" style={{ width: "79%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
