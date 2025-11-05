import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <section id="benefits" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-green-100 bg-green-50/60 p-8">
              <div className="grid md:grid-cols-3 gap-6">
                {["Reduce losses", "Save resources", "Maximize yield"].map((b) => (
                  <div key={b} className="rounded-xl bg-white p-6 border border-green-100 shadow-sm">
                    <p className="text-lg font-semibold text-gray-900">{b}</p>
                    <p className="mt-2 text-sm text-gray-600">
                      Data-driven insights help you make timely, confident decisions in the field.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
