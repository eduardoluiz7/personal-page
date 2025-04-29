import profileImg  from '../assets/profile.png'
import resume from '../assets/eduardo_luiz_cv.pdf'
import { FaFileDownload } from 'react-icons/fa'
import { MapPin } from 'lucide-react'
import { Socials } from '../components/socials'
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function Home() {
  const { t } = useTranslation();

    return (
        <motion.div 
          className="min-h-screen bg-pattern bg-no-repeat bg-center from-gray-100 to-white flex flex-col items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          >
          <div className="max-w-4xl w-full space-y-6 sm:space-y-8 text-center">
            <div className="relative w-32 h-32 sm:w-48 sm:h-48 mx-auto rounded-full overflow-hidden shadow-lg">
              <img
                src={profileImg}
                alt="Profile picture"
                className="w-full h-full"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-lime-300">Eduardo Luiz</h1>
            <div className="flex items-center justify-center text-xl sm:text-xl text-zinc-300">
                <MapPin className="mr-2" />
                {t('home.location')}
            </div>
            <p className="text-lg sm:text-xl text-zinc-200 px-4 sm:px-0">
              {t('home.subtitle')}
            </p>
            <div className="space-y-4 px-4 sm:px-8 md:px-12">
              <p className="text-sm sm:text-base text-zinc-400 text-justify">
                {t('home.description')}
              </p>
            </div>
            <Socials />
           {
            /* 
             <div className="mt-6">
            <a
                href={resume}
                download="Eduardo_Luiz_CV.pdf"
                className="inline-flex items-center px-6 py-3 bg-lime-300 text-gray-900 font-bold rounded-lg hover:bg-lime-400 transition-colors"
            >
                <FaFileDownload className="mr-2" />
                Download CV
            </a>
            </div>
            */
           }
          </div>
        </motion.div>
      )
}
