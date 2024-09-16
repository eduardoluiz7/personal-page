import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa'
import { SiTypescript, SiDjango, SiPostgresql, SiGo, SiMongodb } from 'react-icons/si'
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface Skill {
  name: string
  icon: React.ReactNode
  experience: string
  description: string
}

export function Skills() {
  const { t } = useTranslation();
  const skills: Skill[] = [
    {
        name: "Python",
        icon: <FaPython className="text-yellow-500" />,
        experience: t('skills.python.experience'),
        description: t('skills.python.description')
    },
    {
        name: "Django",
        icon: <SiDjango className="text-green-950" />,
        experience: t('skills.django.experience'),
        description: t('skills.django.description')
    },
    {
      name: "Golang",
      icon: <SiGo className="text-blue-700" />,
      experience: t('skills.golang.experience'),
      description: t('skills.golang.description')
  },
  {
    name: "React",
    icon: <FaReact className="text-blue-500" />,
    experience: t('skills.react.experience'),
    description: t('skills.react.description')
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500" />,
    experience: t('skills.node.experience'),
    description: t('skills.node.description')
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-700" />,
    experience: t('skills.typescript.experience'),
    description: t('skills.typescript.description')
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-500" />,
    experience: t('skills.postgres.experience'),
    description: t('skills.postgres.description')
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500" />,
    experience: t('skills.mongodb.experience'),
    description: t('skills.mongodb.description')
  }
]

  return (
    <motion.div 
      className="min-h-screen bg-pattern bg-no-repeat bg-center flex flex-col items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      >
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        >
        <h2 className="text-4xl font-bold text-center text-lime-300 mb-12">{t('skills.title')}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

function SkillCard({ skill }: { skill: Skill }) {
    return (
      <div
        className="bg-zinc-900 shadow-lg rounded-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-md duration-300"
        >
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