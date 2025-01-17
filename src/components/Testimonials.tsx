import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "William Jones",
    company: "MediaX",
    image: "/lovable-uploads/04235364-c0e5-4648-906d-9f33c1e6adef.png",
    text: "Learning from real industry experts made a huge difference. I now understand advanced editing techniques in much greater depth."
  },
  {
    name: "Ethan Roberts",
    company: "PixelCo",
    image: "/lovable-uploads/04235364-c0e5-4648-906d-9f33c1e6adef.png",
    text: "The support and constructive feedback from the instructors were top-notch throughout. I've grown so much as an editor thanks to this course."
  },
  {
    name: "John Davis",
    company: "CineCraft",
    image: "/lovable-uploads/04235364-c0e5-4648-906d-9f33c1e6adef.png",
    text: "This course exceeded all my expectations. The lessons were practical and easy to follow, helping me to become a confident editor."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="chip mb-6">TESTIMONIAL</div>
          <h2 className="heading-lg mb-6">
            What our <span className="text-primary">students say</span> about the course
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            Discover how our course has helped students elevate their video editing skills and open new career opportunities.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `${-currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex"
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-full px-4"
                >
                  <div className="glass-card p-8 rounded-lg max-w-3xl mx-auto">
                    <div className="flex items-start gap-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-lg mb-4">{testimonial.text}</p>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;