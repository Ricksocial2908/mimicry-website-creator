import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import EditableText from "./EditableText";

const faqs = [
  {
    question: "What types of video editing courses are available?",
    answer: "We offer courses for all levels, from beginner basics to advanced techniques, covering editing software, color grading, sound design, and more."
  },
  {
    question: "What can I expect from live Q&A sessions?",
    answer: "Live Q&A sessions provide direct interaction with industry experts, allowing you to ask questions, get feedback on your work, and learn from other students' questions."
  },
  {
    question: "Do I need prior experience to join these courses?",
    answer: "No prior experience is needed. Our courses are designed to accommodate both beginners and experienced editors, with a structured curriculum that builds from the basics."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6">
            <EditableText
              id="faq-title-1"
              defaultContent="Frequently asked "
              className="inline"
            />
            <span className="text-primary">
              <EditableText
                id="faq-title-2"
                defaultContent="questions"
                className="inline"
              />
            </span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-lg overflow-hidden"
            >
              <button
                className="w-full p-6 flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <EditableText
                  id={`faq-question-${index}`}
                  defaultContent={faq.question}
                  className="text-lg font-medium text-left"
                />
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary" />
                ) : (
                  <Plus className="w-5 h-5 text-primary" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <EditableText
                    id={`faq-answer-${index}`}
                    defaultContent={faq.answer}
                    className="body-base"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;