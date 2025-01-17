import { motion } from "framer-motion";
import { useState } from "react";

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
            <div className="chip mb-6">JOIN</div>
            <h2 className="heading-lg mb-6">
              Master video editing and{" "}
              <span className="text-primary">launch your creative career</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-3 bg-background rounded-lg border border-white/10"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 bg-background rounded-lg border border-white/10"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full p-3 bg-background rounded-lg border border-white/10"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Plan</label>
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
                SUBMIT
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
              <div className="chip mb-4">STUDENT</div>
              <img
                src="/lovable-uploads/bde4078d-fa2e-48f3-b7a6-2e64a2355196.png"
                alt="Student testimonial"
                className="w-full rounded-lg mb-6"
              />
              <p className="text-xl font-medium mb-4">
                "This course transformed my editing skills, enabling me to craft stories that truly captivate and engage audiences."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;