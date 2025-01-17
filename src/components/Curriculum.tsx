import { motion } from "framer-motion";

const chapters = [
  {
    number: "CHAPTER 1",
    videos: "84 VIDEOS",
    duration: "28 HOURS",
    title: "Introduction to video editing",
    description: "Build a strong foundation in video editing, covering essential tools, software setup, and workflow basics.",
    image: "/lovable-uploads/8d624ca8-e7a5-4395-b42b-73afa2843bd6.png"
  },
  {
    number: "CHAPTER 2",
    videos: "105 VIDEOS",
    duration: "36 HOURS",
    title: "Editing fundamentals",
    description: "Learn core techniques like timeline organization, cutting, trimming, and adding smooth transitions.",
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
            Complete video editing curriculum to{" "}
            <span className="text-primary">build skills</span> and{" "}
            <span className="text-primary">launch your career</span>
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
                    <span className="chip">{chapter.number}</span>
                    <span className="chip">{chapter.videos}</span>
                    <span className="chip">{chapter.duration}</span>
                  </div>
                  <h3 className="heading-md mb-4">{chapter.title}</h3>
                  <p className="body-base">{chapter.description}</p>
                </div>
                <div>
                  <img
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