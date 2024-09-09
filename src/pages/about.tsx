import profileImg  from '../assets/profile.jpg'

export function About() {
  

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
        <img 
            src={profileImg} 
            alt='Eduardo Luiz' 
            className='w-60 h-60 rounded-full aspect-square object-cover'
            />
        <div className='flex items-center gap-4'>
            <div className="max-w-3xl w-full px-6 text-center space-y-10">
                <div className='flex flex-col items-center gap-3'>
                    <h2 className='text-4xl font-bold text-zinc-200 sm:text-5xl md:text-6xl'>Sobre mim</h2>
                    <p className='text-lg text-zinc-400 leading-relaxed sm:text-xl md:text-2xl'>
                        Moro em Recife-PE e sou formado em Ciência da Computação pela Universidade Federal de Pernambuco. Atualmente, trabalho como Engenheiro de Software na VERT Capital, com foco no desenvolvimento backend. Além do desenvolvimento web, tenho experiência em inteligência artificial, uma área que continua sendo uma das minhas grandes paixões.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

