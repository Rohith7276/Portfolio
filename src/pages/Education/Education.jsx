import React, { useState } from "react";
import EducationLoader from "@/components/ui/EducationLoader";
import Mongo from "../../assets/images/mongo.jpg";
import codingCompetition from "../../assets/images/codingCompetition.png"
import LogoMaking from "../../assets/images/logoMaking.jpg";
import Psol from "../../assets/images/problemSolving.jpg";
import intern from "../../assets/images/intern.jpeg"
import gcem from "../../assets/images/gcem.jpeg"
import gopalan from "../../assets/images/gopalan.jpeg"
 
import { motion } from "framer-motion"; 

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
  
    {
      img: gcem,
      achievements: [],
      skills: [],
      description:
        "",
    },
    {
      img: codingCompetition,
      achievements: [],
      skills: [],
      description:
        "",
    },
      {
      img: Psol,
      achievements: [],
      skills: [],
      description:
        "",
    },
    {
      img: LogoMaking,
      achievements: [],
      skills: [],
      description:
        "",
    },
    {
      img: gopalan,
      achievements: [],
      skills: [],
      description:
        "",
    },
    {
      img: Mongo,
      achievements: [],
      skills: [],
      description:
        "",
    },
      {
      img: intern,
      achievements: [],
      skills: [],
      description:
        "",
    },

  
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Certifications and Awards
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            I have completed various certifications and received awards that showcase my dedication to continuous learning and excellence in my field. <br /> Here are some of the highlights:
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border justify-center items-center flex rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${hoveredIndex === index
                  ? "border-teal-500 scale-[1.02]"
                  : "border-blue-400/20"
                }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6 ">

                <img src={edu.img} alt="" />

                
              </div>
            </motion.div>
          ))}




        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
