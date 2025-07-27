import React from "react";
import { FaDocker, FaAws, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiKubernetes, SiJenkins, SiMysql, SiFlask, SiTerraform, SiAnsible, SiStreamlit } from "react-icons/si";

const Skills = () => {
  const technologies = [
    {
      category: "Languages & Frameworks",
      items: [
        { name: "Python", icon: "./img/iconpython.svg" },
        { name: "Flask", icon: <SiFlask className="w-12 h-12" /> },
        { name: "Streamlit", icon: <SiStreamlit className="w-12 h-12" /> },
        { name: "MySQL", icon: <SiMysql className="w-12 h-12" /> },
      ],
    },
    {
      category: "DevOps & Cloud",
      items: [
        { name: "Docker", icon: <FaDocker className="w-12 h-12" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="w-12 h-12" /> },
        { name: "Jenkins", icon: <SiJenkins className="w-12 h-12" /> },
        { name: "AWS", icon: <FaAws className="w-12 h-12" /> },
        { name: "Terraform", icon: <SiTerraform className="w-12 h-12" /> },
        { name: "Ansible", icon: <SiAnsible className="w-12 h-12" /> },
      ],
    },
    {
      category: "Tools & Collaboration",
      items: [
        { name: "Git", icon: <FaGitAlt className="w-12 h-12" /> },
        { name: "GitHub", icon: <FaGithub className="w-12 h-12" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="max-w-[1200px] mx-auto rounded-3xl h-max py-5 my-5 relative
                 bg-white dark:bg-[#090e16] transition-colors duration-500"
    >
      <div className="bg-white dark:bg-transparent text-black dark:text-gray-200 rounded-3xl p-4 sm:p-8 transition-colors duration-500">
        <h2 className="text-5xl font-bold mb-8 text-center gradient-text">
          TECH STACK
        </h2>
        <div className="space-y-5">
          {technologies.map((category) => (
            <div key={category.category} className="space-y-4">
              <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl
                               hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer w-full text-center"
                  >
                    {typeof tech.icon === "string" ? (
                      <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
                    ) : (
                      tech.icon
                    )}
                    <span className="font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
