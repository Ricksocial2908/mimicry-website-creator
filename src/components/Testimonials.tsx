import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";
import EditableText from "./EditableText";
import EditableImage from "./EditableImage";

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
          <EditableText
            id="testimonials-chip"
            defaultContent="TESTIMONIAL"
            className="chip mb-6"
          />
          <h2 className="heading-lg mb-6">
            <EditableText
              id="testimonials-title-1"
              defaultContent="What our "
              className="inline"
            />
            <span className="text-primary">
              <EditableText
                id="testimonials-title-2"
                defaultContent="students say"
                className="inline"
              />
            </span>
            <EditableText
              id="testimonials-title-3"
              defaultContent=" about the course"
              className="inline"
            />
          </h2>
          <EditableText
            id="testimonials-description"
            defaultContent="Discover how our course has helped students elevate their video editing skills and open new career opportunities."
            className="body-lg max-w-2xl mx-auto"
          />
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
                      <EditableImage
                        id={`testimonial-${index}-image`}
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div>
                        <EditableText
                          id={`testimonial-${index}-text`}
                          defaultContent={testimonial.text}
                          className="text-lg mb-4"
                        />
                        <EditableText
                          id={`testimonial-${index}-name`}
                          defaultContent={testimonial.name}
                          className="font-medium"
                        />
                        <EditableText
                          id={`testimonial-${index}-company`}
                          defaultContent={testimonial.company}
                          className="text-sm text-muted-foreground"
                        />
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