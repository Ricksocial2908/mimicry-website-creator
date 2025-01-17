import { motion } from "framer-motion";
import EditableText from "./EditableText";
import EditableImage from "./EditableImage";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <EditableText
            id="about-chip"
            defaultContent="ABOUT US"
            className="text-sm text-muted-foreground uppercase tracking-wider mb-8"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="heading-lg">
              <EditableText
                id="about-title-1"
                defaultContent="Discover "
                className="inline"
              />
              <span className="text-primary">
                <EditableText
                  id="about-title-2"
                  defaultContent="the art of AI video generation"
                  className="inline"
                />
              </span>
              <EditableText
                id="about-title-3"
                defaultContent=" with us"
                className="inline"
              />
            </h2>

            <div className="glass-card p-8 rounded-2xl">
              <EditableText
                id="about-description"
                defaultContent="At Edclip, we offer comprehensive AI video generation courses designed for cutting-edge tools and platforms. Master the skills to create stunning AI-generated videos using the latest technology."
                className="text-lg leading-relaxed"
              />
              <button className="mt-6 px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-black/80 transition-colors">
                JOIN NOW
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="relative">
              <EditableImage
                id="about-founder-image"
                src="/lovable-uploads/47624442-fbb5-4f4e-bd81-7296d0517f9e.png"
                alt="Founder"
                className="w-full h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute top-4 right-4">
                <EditableText
                  id="about-founder-label"
                  defaultContent="FOUNDER"
                  className="text-sm text-white/70 uppercase tracking-wider"
                />
              </div>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <EditableText
                id="about-quote"
                defaultContent="AI video generation isn't just technical, it's creative. Our courses empower you to tell impactful stories through advanced AI tools."
                className="text-lg font-medium"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <EditableText
            id="about-footer"
            defaultContent="Comprehensive courses designed for all skill levels, adaptable to your preferred AI video generation tools and creative goals."
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;