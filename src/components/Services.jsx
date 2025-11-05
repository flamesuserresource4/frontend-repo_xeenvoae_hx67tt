import { Bug, Droplets, Stethoscope, Sun } from "lucide-react";

const services = [
  {
    title: "Disease Diagnosis",
    desc: "Upload leaf photos for instant AI insights and actionable treatment plans.",
    icon: Stethoscope,
  },
  {
    title: "Irrigation Advisory",
    desc: "Get water scheduling based on crop stage, soil, and recent weather.",
    icon: Droplets,
  },
  {
    title: "Pest Forecasting",
    desc: "Stay ahead with pest risk maps and preventive spray recommendations.",
    icon: Bug,
  },
  {
    title: "Sunlight & Nutrition",
    desc: "Monitor sunlight exposure and optimize nutrient application.",
    icon: Sun,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-white to-green-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Smart Services</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Everything you need to protect crops and boost yield, tailored to your farm.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
              <button className="mt-4 text-sm font-semibold text-green-700 hover:text-green-800">Learn more →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
