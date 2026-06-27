export default function WhyNexa() {
  const reasons = [
    "Fast Installation",
    "Affordable Pricing",
    "Enterprise Grade Infrastructure",
    "Dedicated Customer Support",
    "High Reliability",
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Nexa?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="p-6 rounded-xl border border-slate-700 bg-slate-900 text-center"
            >
              {reason}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}