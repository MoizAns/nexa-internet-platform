export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">
            Nexa Internet
          </h3>

          <p className="text-slate-400 mt-2">
            Unlimited Speed. Unlimited Possibilities.
          </p>
        </div>

        <div className="mt-6 md:mt-0 text-slate-400 text-sm">
          © {new Date().getFullYear()} Nexa Internet.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}