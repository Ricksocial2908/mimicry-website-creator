import { motion } from "framer-motion";
import { useState } from "react";
import EditableText from "./EditableText";
import EditableImage from "./EditableImage";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <EditableText
              id="contact-chip"
              defaultContent="JOIN"
              className="chip mb-6"
            />
            <h2 className="heading-lg mb-6">
              <EditableText
                id="contact-title-1"
                defaultContent="Master video editing and "
                className="inline"
              />
              <span className="text-primary">
                <EditableText
                  id="contact-title-2"
                  defaultContent="launch your creative career"
                  className="inline"
                />
              </span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <EditableText
                  id="contact-name-label"
                  defaultContent="Name"
                  className="block text-sm mb-2"
                />
                <input
                  type="text"
                  className="w-full p-3 bg-background rounded-lg border border-white/10"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <EditableText
                  id="contact-email-label"
                  defaultContent="Email"
                  className="block text-sm mb-2"
                />
                <input
                  type="email"
                  className="w-full p-3 bg-background rounded-lg border border-white/10"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <EditableText
                  id="contact-phone-label"
                  defaultContent="Phone Number"
                  className="block text-sm mb-2"
                />
                <input
                  type="tel"
                  className="w-full p-3 bg-background rounded-lg border border-white/10"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <EditableText
                  id="contact-plan-label"
                  defaultContent="Plan"
                  className="block text-sm mb-2"
                />
                <select
                  className="w-full p-3 bg-background rounded-lg border border-white/10"
                  value={formData.plan}
                  onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                >
                  <option value="">Select...</option>
                  <option value="professional">Professional</option>
                  <option value="elite">Elite</option>
                </select>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-4 bg-primary text-white rounded-lg font-medium"
              >
                <EditableText
                  id="contact-submit-button"
                  defaultContent="SUBMIT"
                  className="inline"
                />
              </motion.button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card p-8 rounded-lg h-full">
              <EditableText
                id="contact-testimonial-chip"
                defaultContent="STUDENT"
                className="chip mb-4"
              />
              <EditableImage
                id="contact-testimonial-image"
                src="/lovable-uploads/bde4078d-fa2e-48f3-b7a6-2e64a2355196.png"
                alt="Student testimonial"
                className="w-full rounded-lg mb-6"
              />
              <EditableText
                id="contact-testimonial-quote"
                defaultContent="This course transformed my editing skills, enabling me to craft stories that truly captivate and engage audiences."
                className="text-xl font-medium mb-4"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;