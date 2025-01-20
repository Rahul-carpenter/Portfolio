import React from "react";
// import { motion, useInView } from "framer-motion";
import { GitBranch } from "lucide-react";
import { FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Skills = () => {
  //   const ref = useRef(null);
  //   const head1ref = useRef(null);
  //   const head2ref = useRef(null);
  //   const htmlref = useRef(null);
  //   const cssref = useRef(null);
  //   const javascriptref = useRef(null);
  //   const bootstrapref = useRef(null);
  //   const tailwindref = useRef(null);
  //   const reactref = useRef(null);
  //   const noderef = useRef(null);
  //   const expressref = useRef(null);
  //   const mongoref = useRef(null);
  //   const gitref = useRef(null);
  //   const githubref = useRef(null);
  //   const vercelref = useRef(null);
  //   const netlifyref = useRef(null);
  //   const webref = useRef(null);
  //   const depref = useRef(null);
  //   const isInView = useInView(ref, { once: true });
  //   const isHead1InView = useInView(head1ref, { once: true });
  //   const isHead2InView = useInView(head2ref, { once: true });
  //   const isHtmlInView = useInView(htmlref, { once: true });
  //   const isCssInView = useInView(cssref, { once: true });
  //   const isJavascriptInView = useInView(javascriptref, { once: true });
  //   const isBootstrapInView = useInView(bootstrapref, { once: true });
  //   const isTailwindInView = useInView(tailwindref, { once: true });
  //   const isReactInView = useInView(reactref, { once: true });
  //   const isNodeInView = useInView(noderef, { once: true });
  //   const isExpressInView = useInView(expressref, { once: true });
  //   const isMongoInView = useInView(mongoref, { once: true });
  //   const gitInView = useInView(gitref, { once: true });
  //   const isGithubInView = useInView(githubref, { once: true });
  //   const isVercelInView = useInView(vercelref, { once: true });
  //   const isNetlifyInView = useInView(vercelref, { once: true });
  //   const isWebInView = useInView(webref, { once: true });
  //   const isDepInView = useInView(depref, { once: true });
  const technologies = [
    {
      category: "Frontend",
      items: [
        {
          name: "HTML5",
          icon: "./img/iconhtml.svg",
        },
        {
          name: "CSS3",
          icon: "./img/iconcss.svg",
        },
        {
          name: "JavaScript",
          icon: "./img/iconjavascript.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "./img/icontailwind.svg",
        },
        {
          name: "React.js",
          icon: "img/iconreactjs.svg",
        },
      ],
    },
    {
      category: "Backend",
      items: [
        {
          name: "Node.js",
          icon: "./img/iconnodejs.svg",
        },
        {
          name: "Express.js",
          icon: "./img/iconexpressjs.svg",
        },
        {
          name: "MongoDB",
          icon: "./img/iconmongodb.svg",
        },
      ],
    },
    {
      category: "Other Tools",
      items: [
        {
          name: "Git",
          icon: <GitBranch className="w-12 h-12" />,
        },
        {
          name: "GitHub",
          icon: <FaGithub className="w-12 h-12" />,
        },
        {
          name: "Figma",
          icon: <FaFigma className="w-12 h-12" />,
        },
        {
          name: "Netlify",
          icon: "./img/iconnetlify.svg",
        },
      ],
    },
  ];
  return (
    <section
      id="skills"
      className="max-w-[1200px] mx-auto rounded-3xl h-max bg-white py-5 my-5 relative"
    >
      <div className="bg-white text-black rounded-3xl p-4 sm:p-8">
        <h2 className="text-5xl font-bold text-gray-300 mb-8 text-center">
          TECH STACK
        </h2>
        <div className="space-y-5">
          {technologies.map((category) => (
            <div key={category.category} className="space-y-4">
              <h3 className="text-2xl font-bold text-center">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors w-full text-center"
                  >
                    {typeof tech.icon === "string" ? (
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-12 h-12"
                      />
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
