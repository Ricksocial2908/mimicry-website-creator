import { motion } from "framer-motion";
import EditableText from "./EditableText";

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <EditableText
              id="about-chip"
              defaultContent="ABOUT US"
              className="chip mb-6"
            />
            <h2 className="heading-lg mb-6">
              <EditableText
                id="about-title-1"
                defaultContent="Discover "
                className="inline"
              />
              <span className="text-primary">
                <EditableText
                  id="about-title-2"
                  defaultContent="the art of video editing"
                  className="inline"
                />
              </span>
              <EditableText
                id="about-title-3"
                defaultContent=" with us"
                className="inline"
              />
            </h2>
            <EditableText
              id="about-description"
              defaultContent="At Edclip, we offer comprehensive video editing courses designed for all major software – from Adobe Premiere to Final Cut Pro. Master the skills to create stunning visuals, regardless of the tools you use."
              className="body-base mb-6"
            />
            <div className="glass-card p-6 rounded-lg">
              <EditableText
                id="about-quote"
                defaultContent="Editing isn't just technical, it's creative. Our courses empower you to tell impactful stories through any editing platform."
                className="text-lg font-medium mb-2"
              />
              <EditableText
                id="about-quote-author"
                defaultContent="- Founder"
                className="text-sm text-muted-foreground"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/lovable-uploads/7370e3f9-ec7e-4382-a024-05264abfd60c.png"
              alt="Video editing workspace"
              className="rounded-lg w-full object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;