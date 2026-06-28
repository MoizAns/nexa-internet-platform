export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-surface-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Get In Touch
            </h3>

            <p className="mb-3">
              📞 +91 9323111463
            </p>

            <p className="mb-3">
              ✉️ support@nexainternet.com
            </p>

            <p>
              📍 Bhiwandi, Maharashtra, India
            </p>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700"
            />

            <textarea
              rows="5"
              placeholder="Message"
              className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700"
            />

            <button
              className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}