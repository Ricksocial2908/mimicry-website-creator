import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "PROFESSIONAL",
    price: "$299",
    description: "For ambitious creators ready to enhance their skills.",
    features: [
      "In-depth tutorials and resources",
      "Exclusive editing tools",
      "Weekly live Q&A sessions",
      "24/7 community access",
      "Monthly project feedback",
      "Portfolio-building resources",
      "Color grading & sound design"
    ]
  },
  {
    name: "ELITE",
    price: "$499",
    description: "For experts seeking mastery in every aspect of editing.",
    features: [
      "All Professional features",
      "One-on-one mentorship",
      "Advanced masterclasses",
      "High-end effects & animations",
      "Early access to new features",
      "Priority support",
      "Career networking sessions"
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6">
            Choose Your <span className="text-primary">Perfect Plan</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            Unlock all premium features with the plan that fits your goals and elevate your editing skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`glass-card p-8 rounded-lg ${
                plan.name === "ELITE" ? "bg-primary/10" : ""
              }`}
            >
              <div className="chip mb-6">{plan.name}</div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">/ month</span>
              </div>
              <p className="body-base mb-8">{plan.description}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-lg font-medium ${
                  plan.name === "ELITE"
                    ? "bg-primary text-white"
                    : "bg-white text-black"
                }`}
              >
                GET STARTED TODAY
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;