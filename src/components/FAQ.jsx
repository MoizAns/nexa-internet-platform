const faqs = [
  {
    question: "How long does installation take?",
    answer: "Most installations are completed within 24-48 hours.",
  },
  {
    question: "Is the data truly unlimited?",
    answer: "Yes, all Nexa Internet plans include unlimited data usage.",
  },
  {
    question: "Do you provide business connections?",
    answer: "Yes, we offer dedicated broadband solutions for businesses.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Absolutely. You can upgrade anytime without service interruption.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-700 rounded-xl p-5"
            >
              <h3 className="font-semibold text-lg mb-2">
                {faq.question}
              </h3>

              <p className="text-slate-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}