const projects = [
  {
    title:"AI/ML Project (Coming Soon)",
    desc:"Upcoming machine learning project showcasing practical AI concepts.",
    tech:"Python, ML"
  },
  {
    title:"Python Automation Project",
    desc:"Automation tools for improving productivity and workflow.",
    tech:"Python"
  },
  {
    title:"C++ Application",
    desc:"Learning-focused software project built with C++.",
    tech:"C++"
  },
  {
    title:"Personal Learning Projects",
    desc:"Collection of mini-projects and coding experiments.",
    tech:"Python, C, C++"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">

      <h2 className="text-center text-4xl font-bold mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {projects.map((project) => (
          <div
            key={project.title}
            className="group bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:scale-105 transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {project.desc}
            </p>

            <p className="text-cyan-400 mb-4">
              {project.tech}
            </p>

            <button className="px-5 py-2 rounded-lg border border-cyan-400">
              GitHub Repository
            </button>

          </div>
        ))}
      </div>
    </section>
  );
}