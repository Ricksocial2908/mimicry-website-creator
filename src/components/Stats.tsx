import { motion } from "framer-motion";

const stats = [
  {
    number: "100+",
    description: "Hours of in-depth, comprehensive video editing content"
  },
  {
    number: "500+",
    description: "Thriving and satisfied students from around the world"
  },
  {
    number: "200+",
    description: "Hands-on, real-world practical exercises to master skills"
  },
  {
    number: "50+",
    description: "Exclusive, professional insider tips from industry experts"
  }
];

const Stats = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6">
            Why choose our <span className="text-primary">video editing course</span>?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-lg text-center"
            >
              <h3 className="text-4xl font-bold text-primary mb-4">{stat.number}</h3>
              <p className="body-base">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;