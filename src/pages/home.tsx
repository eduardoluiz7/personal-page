import profileImg  from '../assets/profile.jpg'

export function Home() {
  

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center pt-16">
        <img 
                src={profileImg} 
                alt='Eduardo Luiz' 
                className='w-60 h-60 rounded-full aspect-square object-cover'
            />
        <div className='flex items-center gap-4'>
            <div className="max-w-3xl w-full px-6 text-center space-y-10">
                <div className='flex flex-col items-center gap-3'>
                    <h1 className='text-4xl font-bold text-zinc-200 sm:text-5xl md:text-6xl'>Eduardo Luiz</h1>
                    <h2 className='text-xl font-medium text-lime-300 sm:text-2xl md:text-3xl'>Software Engineer</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

