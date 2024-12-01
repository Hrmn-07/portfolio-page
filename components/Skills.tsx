const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Golang",
  "Python",
  "PostgreSQL",
  "REST APIs",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Git",
  "Docker",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-700">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          -⚡️- My Skills -⚡️-
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-400 text-white px-3 py-1 rounded-full text-xl"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
