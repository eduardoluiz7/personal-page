import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa'
import { SiTypescript, SiDjango, SiPostgresql, SiGo, SiMongodb } from 'react-icons/si'

interface Skill {
  name: string
  icon: React.ReactNode
  experience: string
  description: string
}

const skills: Skill[] = [
    {
        name: "Python",
        icon: <FaPython className="text-yellow-500" />,
        experience: "6 years",
        description: "Desenvolvimento backend, Análise de Dados, Scripting e Machine Learning com Python."
    },
    {
        name: "Django",
        icon: <SiDjango className="text-green-950" />,
        experience: "3 years",
        description: "Designing and implementing efficient Web Applications."
    },
    {
      name: "Golang",
      icon: <SiGo className="text-blue-700" />,
      experience: "3 years",
      description: "Desenvolvimento de RESTful APIs e Microsserviços"
  },
  {
    name: "React",
    icon: <FaReact className="text-blue-500" />,
    experience: "2 years",
    description: "Desenvolvimento e manutenção de Interfaces de Usuário eficientes e responsivas usando React."
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500" />,
    experience: "3 years",
    description: "Desenvolvimento de RESTful APIs e Webhooks com Node.js e Express."
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-700" />,
    experience: "3 years",
    description: "Melhorando o desenvolvimento JavaScript com tipagem estática e funcionalidades avançadas."
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-500" />,
    experience: "3 years",
    description: "Gerenciando e realizando queries em bancos de dados relacionais."
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500" />,
    experience: "2 years",
    description: "Criando e mantendo bancos de dados não relacionais."
  }
]

export function Skills() {
  return (
    <div className="min-h-screen bg-pattern bg-no-repeat bg-center flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-lime-300 mb-12">Linguagens e Ferramentas</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  )
}

function SkillCard({ skill }: { skill: Skill }) {
    return (
      <div className="bg-zinc-900 shadow-lg rounded-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
        <div className="p-6 flex items-center">
          <div className="flex-shrink-0 mr-4">
            <div className="w-12 h-12 flex items-center justify-center text-3xl">
              {skill.icon}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-lime-300 mb-1">{skill.name}</h3>
            <p className="text-sm text-gray-400 mb-2">{skill.experience}</p>
            <p className="text-gray-300 text-sm">{skill.description}</p>
          </div>
        </div>
      </div>
    )
  }