import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager at Stripe",
    image: "/professional-woman-dark-hair.png",
    review:
      "This platform has completely transformed how our team collaborates. The intuitive interface and powerful features have boosted our productivity by 40%.",
  },
  {
    name: "Michael Roberts",
    role: "CTO at Vercel",
    image: "/professional-bearded-man.png",
    review:
      "The best investment we've made this year. Setup took minutes, and the ROI was visible within the first week. Highly recommend to any growing team.",
  },
  {
    name: "Emily Watson",
    role: "Founder at Acme Inc",
    image: "/professional-blonde-woman-smiling.png",
    review:
      "Outstanding support and a product that actually delivers on its promises. Our customers love the seamless experience it provides.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Loved by teams worldwide</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See what our customers have to say about their experience with our platform.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="
                group p-8 rounded-2xl bg-[#111] border border-gray-700 shadow-md 
                transition-all duration-500 ease-out
                hover:-translate-y-2 hover:shadow-orange-500/30 hover:border-orange-500
              "
            >
              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                "{t.review}"
              </p>

              <div className="flex items-center gap-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="
                    rounded-full object-cover ring-2 ring-transparent 
                    group-hover:ring-orange-500 transition-all duration-300
                  "
                />
                <div>
                  <h4 className="font-semibold text-white">{t.name}</h4>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
