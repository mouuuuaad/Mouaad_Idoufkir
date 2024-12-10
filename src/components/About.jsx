import React from "react";
import {Tilt} from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
  variants={fadeIn("", "", 0.1, 1)}
  className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
>
  I'm a skilled web developer with expertise in both front-end and back-end technologies, using 
  <span style={{ color: "#45ABF0" }}> Next.js</span>, 
  <span style={{ color: "#45ABF0" }}> React</span>, and 
  <span style={{ color: "#45ABF0" }}>Tailwind CSS</span> to build modern and user-focused web interfaces. 
  Additionally, I have extensive experience in back-end development using the 
  <span style={{ color: "#27CA84" }}> MERN Stack</span> ( 
  <span style={{ color: "#27CA84" }}> MongoDB</span>, 
  <span style={{ color: "#27CA84" }}> Express.js</span>, 
  <span style={{ color: "#45ABF0" }}> React</span>, and 
  <span style={{ color: "#27CA84" }}> Node.js</span>), 
  enabling me to create full-stack, efficient, and scalable applications. 
  As a UI/UX designer, I also focus on providing attractive, interactive user experiences. 
  I'm driven by my passion for exploring fields like 
  <span style={{ color: "#F64175" }}> Artificial Intelligence </span> 
  and 
  <span style={{ color: "#F64175" }}> Advanced Physics</span>. 
  I'm a fast learner, eager to work on innovative projects and collaborate to deliver professional solutions that meet client needs. 
  Together, we can create impactful and cutting-edge applications!
</motion.p>



      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
