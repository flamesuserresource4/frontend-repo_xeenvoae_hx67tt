import { Leaf, Phone, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-green-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-green-700 font-semibold tracking-tight">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-green-600 text-white">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="text-lg">VANMITRA</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#services" className="hover:text-green-700">Services</a>
          <a href="#benefits" className="hover:text-green-700">Benefits</a>
          <a href="#contact" className="hover:text-green-700">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-green-200 px-3 py-2 text-sm font-medium text-green-700 hover:bg-green-50">
            <Phone className="h-4 w-4" />
            Get Support
          </a>
          <button className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            <User className="h-4 w-4" />
            Sign in
          </button>
        </div>
      </nav>
    </header>
  );
}
