const skills = [
  { name: "Python", level: 80 },
  { name: "C", level: 75 },
  { name: "C++", level: 70 },
  { name: "Problem Solving", level: 75 },
  { name: "AI & ML Fundamentals", level: 50 }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <h2 className="text-center text-4xl font-bold mb-12">
        Skills
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg"
          >
            <div className="flex justify-between mb-3">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="h-3 bg-gray-700 rounded-full">
              <div
                className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}