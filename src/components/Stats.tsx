import { motion } from "framer-motion";
import EditableText from "./EditableText";

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
            <EditableText
              id="stats-title-1"
              defaultContent="Why choose our "
              className="inline"
            />
            <span className="text-primary">
              <EditableText
                id="stats-title-2"
                defaultContent="video editing course"
                className="inline"
              />
            </span>
            <EditableText
              id="stats-title-3"
              defaultContent="?"
              className="inline"
            />
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
              <EditableText
                id={`stats-number-${index}`}
                defaultContent={stat.number}
                className="text-4xl font-bold text-primary mb-4"
              />
              <EditableText
                id={`stats-description-${index}`}
                defaultContent={stat.description}
                className="body-base"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;