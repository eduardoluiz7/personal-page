interface Experience {
    company: string
    role: string
    period: string
    technologies: string[]
    description: string
  }
  
  const experiences: Experience[] = [
    {
      company: "VERT Capital",
      role: "Software Engineer",
      period: "Jun 2022 - Present",
      technologies: ["Python", "Golang", "Django", "PostgreSQL"],
      description: "Atuo no desenvolvimento de soluções inovadoras, focando em aplicações web de alta performance com tecnologias modernas."
    },
    {
      company: "Elife",
      role: "Full Stack Developer",
      period: "Jul 2021 - Mai 2022",
      technologies: ["Node.js", "Express", "MongoDB", "React.js"],
      description: "Desenvolvi e mantive assistentes virtuais como chatbots para diversas empresas de diferentes áreas de atuação."
    },
    {
      company: "LIVE - Laboratório de Inovação",
      role: "AI Developer",
      period: "Abr 2019 - Dez 2020",
      technologies: ["Python", "Node", "Otimização"],
      description: "Conduzi pesquisas e implementei soluções de inteligência artificial para melhorar a mobilidade urbana em cidades inteligentes."
    }
  ]
  
  export function Experiences() {
    return (
      <div className="min-h-screen bg-pattern bg-no-repeat bg-center flex flex-col items-center justify-center p-4 sm:p-8">
        <h1 className="text-4xl font-bold text-center text-lime-300 mb-12">Experiências</h1>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  function ExperienceCard({ experience }: { experience: Experience }) {
    return (
      <div className="bg-zinc-900 shadow-lg rounded-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-lime-300 mb-2">{experience.company}</h3>
          <p className="text-gray-200 mb-1">{experience.role}</p>
          <p className="text-sm text-gray-400 mb-4">{experience.period}</p>
          <p className="text-gray-300 mb-4">{experience.description}</p>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-600 text-gray-200 text-xs font-medium rounded-full hover:bg-lime-400 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }