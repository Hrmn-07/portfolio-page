import Image from "next/image";
import { GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react";
import profilePic from "@/components/airport1.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-700"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-white">
            Hermanus Rumapea
          </h1>
          <h2 className="text-4xl text-blue-400 mb-6">Full Stack Developer</h2>
          <p className="text-xl max-w-lg mx-auto md:mx-0 mb-8 text-white">
            I'm a Web Developer based in Batam, Indonesia. I'm very passionate
            in making sleek, functional, and user-friendly websites and
            applications (also coffee sometimes). Let's create awesome things
            together!
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://github.com/Hrmn-07"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors text-white"
            >
              <GitHub size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors text-white"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:hermanus.rmp@gmail.com"
              className="hover:text-blue-400 transition-colors text-white"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-400">
            <Image
              src={profilePic}
              alt="Hermanus Rumapea"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
