import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface Experience {
    company: string
    role: string
    period: string
    technologies: string[]
    description: string
  }
  
  export function Experiences() {
    const { t } = useTranslation();
    const experiences: Experience[] = [
      {
        company: "VERT Capital",
        role: t('experiences.vert.role'),
        period: t('experiences.vert.period'),
        technologies: ["Python", "Golang", "Django", "PostgreSQL"],
        description: t('experiences.vert.description')
      },
      {
        company: "Elife",
        role: t('experiences.elife.role'),
        period: t('experiences.elife.period'),
        technologies: ["Node.js", "Express", "MongoDB", "React.js"],
        description: t('experiences.elife.description')
      },
      {
        company: "LIVE - Laboratório de Inovação",
        role: t('experiences.live.role'),
        period: t('experiences.live.period'),
        technologies: ["Python", "Node"],
        description: t('experiences.live.description')
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
        <h1 className="text-3xl sm:text-4xl mt-8 sm:mt-12 font-bold text-center text-lime-300 mb-12">{t('experiences.title')}</h1>
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    )
  }
  
  function ExperienceCard({ experience }: { experience: Experience }) {
    return (
      <div
        className="bg-zinc-900 shadow-lg rounded-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-md duration-300"
        >
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