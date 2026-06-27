import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Remote Developer",
    review:
      "Nexa Internet has completely transformed my work-from-home experience. The speed is incredibly consistent.",
    rating: 5,
  },
  {
    name: "Priya Verma",
    role: "Content Creator",
    review:
      "Streaming and uploading videos is now effortless. Excellent service and support.",
    rating: 5,
  },
  {
    name: "Aman Gupta",
    role: "Gamer",
    review:
      "Very low latency and stable connections. Perfect for competitive gaming.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 px-6 bg-surface-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          What Our Customers Say
        </h2>

        <p className="text-center text-slate-400 mb-12">
          Trusted by families, businesses, gamers, and creators.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-surface-glass border border-surface-glassBorder rounded-2xl p-6 backdrop-blur-md hover:scale-105 transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <p className="text-slate-300 mb-6">
                "{item.review}"
              </p>

              <div>
                <h4 className="font-semibold text-white">
                  {item.name}
                </h4>
                <p className="text-sm text-slate-400">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}