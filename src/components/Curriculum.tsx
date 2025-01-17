import { motion } from "framer-motion";
import EditableText from "./EditableText";
import EditableImage from "./EditableImage";

const chapters = [
  {
    number: "CHAPTER 1",
    videos: "84 VIDEOS",
    duration: "28 HOURS",
    title: "Introduction to AI Video Generation",
    description: "Build a strong foundation in AI video generation, covering essential tools, software setup, and workflow basics.",
    image: "/lovable-uploads/8d624ca8-e7a5-4395-b42b-73afa2843bd6.png"
  },
  {
    number: "CHAPTER 2",
    videos: "105 VIDEOS",
    duration: "36 HOURS",
    title: "AI Generation fundamentals",
    description: "Learn core techniques like prompt engineering, model selection, and enhancing video quality with AI.",
    image: "/lovable-uploads/8d624ca8-e7a5-4395-b42b-73afa2843bd6.png"
  }
];

const Curriculum = () => {
  return (
    <section id="curriculum" className="section-padding">
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
              id="curriculum-title-1"
              defaultContent="Complete video editing curriculum to "
              className="inline"
            />
            <span className="text-primary">
              <EditableText
                id="curriculum-title-2"
                defaultContent="build skills"
                className="inline"
              />
            </span>
            <EditableText
              id="curriculum-title-3"
              defaultContent=" and "
              className="inline"
            />
            <span className="text-primary">
              <EditableText
                id="curriculum-title-4"
                defaultContent="launch your career"
                className="inline"
              />
            </span>
          </h2>
        </motion.div>
        
        <div className="space-y-8">
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-lg"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex gap-4 mb-4">
                    <EditableText
                      id={`curriculum-chapter-${index}-number`}
                      defaultContent={chapter.number}
                      className="chip"
                    />
                    <EditableText
                      id={`curriculum-chapter-${index}-videos`}
                      defaultContent={chapter.videos}
                      className="chip"
                    />
                    <EditableText
                      id={`curriculum-chapter-${index}-duration`}
                      defaultContent={chapter.duration}
                      className="chip"
                    />
                  </div>
                  <h3 className="heading-md mb-4">
                    <EditableText
                      id={`curriculum-chapter-${index}-title`}
                      defaultContent={chapter.title}
                      className="inline"
                    />
                  </h3>
                  <EditableText
                    id={`curriculum-chapter-${index}-description`}
                    defaultContent={chapter.description}
                    className="body-base"
                  />
                </div>
                <div>
                  <EditableImage
                    id={`curriculum-chapter-${index}-image`}
                    src={chapter.image}
                    alt={chapter.title}
                    className="rounded-lg w-full object-cover aspect-video"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;