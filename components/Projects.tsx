import Link from "next/link";
import { ViewIcon } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "GoJek Clone",
    description: "A clone of the landing page of the Gojek Super App.",
    // image: "/placeholder.svg?height=200&width=300",
    link: "https://github.com/Hrmn-07/gojek-clone",
  },
  {
    id: 2,
    title: "Portfolio Webpage",
    description: "This website you are currently looking at right now.",
    // image: "/placeholder.svg?height=200&width=300",
    link: "https://portfolio-page-herman.vercel.app/",
  },
  {
    id: 3,
    title: "ToDo List App",
    description:
      "A Todo list app for making and editing a list of things to do.",
    // image: "/placeholder.svg?height=200&width=300",
    link: "https://todo-list-app-herman.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-700">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          -✨- My Projects -✨-
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              {/* <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="w-full"
              /> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-900 mb-4">{project.description}</p>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ViewIcon className="mr-2" size={20} />
                  Take a look
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
