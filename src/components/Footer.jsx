import { Leaf, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-green-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 text-green-700 font-semibold">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-green-600 text-white">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="text-lg">VANMITRA</span>
          </div>
          <p className="mt-4 text-sm text-gray-600 max-w-sm">
            Empowering farmers with intelligent plant healthcare — diagnostics, advisory,
            and monitoring in one simple platform.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-gray-600">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-green-700" /> +1 (555) 123-4567</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-green-700" /> hello@vanmitra.ag</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-green-700" /> Pune, India</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900">Stay updated</h4>
          <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full rounded-lg border border-green-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-green-100 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} VANMITRA. All rights reserved.
      </div>
    </footer>
  );
}
