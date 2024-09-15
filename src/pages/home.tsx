import profileImg  from '../assets/profile.jpg'
import resume from '../assets/cv_eduardo_pt.pdf'
import { FaFileDownload } from 'react-icons/fa'
import { MapPin } from 'lucide-react'
import { Socials } from '../components/socials'


export function Home() {
    return (
        <div className="min-h-screen bg-pattern bg-no-repeat bg-center from-gray-100 to-white flex flex-col items-center justify-center p-4 sm:p-8">
          <div className="max-w-4xl w-full space-y-6 sm:space-y-8 text-center">
            <div className="relative w-32 h-32 sm:w-48 sm:h-48 mx-auto rounded-full overflow-hidden shadow-lg">
              <img
                src={profileImg}
                alt="Profile picture"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-lime-300">Eduardo Luiz</h1>
            <div className="flex items-center justify-center text-xl sm:text-xl text-zinc-300">
                <MapPin className="mr-2" />
                Recife, Brasil
            </div>
            <p className="text-lg sm:text-xl text-zinc-200 px-4 sm:px-0">
              Engenheiro de Software | Apaixonado por criar aplicações modernas e eficientes.
            </p>
            <div className="space-y-4 px-4 sm:px-8 md:px-12">
              <p className="text-sm sm:text-base text-zinc-400 text-justify">
                Olá! Eu sou um engenheiro de software com 6 anos de experiência em criar aplicações web e também de machine learning. 
                Minha stack atual é composta por tecnologias como Python, Golang, Django e React. Quando não estou programando, gosto de futebol e conhecer novos lugares.
              </p>
            </div>
            <Socials />
            <div className="mt-6">
            <a
                href={resume}
                download="Eduardo_Luiz_Curriculo.pdf"
                className="inline-flex items-center px-6 py-3 bg-lime-300 text-gray-900 font-bold rounded-lg hover:bg-lime-400 transition-colors"
            >
                <FaFileDownload className="mr-2" />
                Download CV
            </a>
            </div>
          </div>
        </div>
      )
}
