import { SkillCard } from "../components/skillCard";
import { DiReact, DiGo, DiDjango, DiPostgresql, DiPython, DiNodejs, DiMongodb } from 'react-icons/di';


export function Skills() {
    return (
        <>
            <div className="h-screen flex flex-col items-center justify-center bg-pattern bg-no-repeat bg-center">
                <div className="container mx-auto px-4 py-2 max-w-4xl">
                    <h1 className="text-4xl font-bold text-lime-300 text-center mb-8">Habilidades</h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
                        <div className="w-full h-full">
                            <SkillCard 
                                title="Python"
                                description="Aplicações Web e Inteligência Artificial" 
                                time="7 anos"
                                icon={DiPython}
                            />
                        </div>
                        <div className="w-full h-full">
                            <SkillCard 
                                title="Django Framework"
                                description="Desenvolvimento de aplicações web" 
                                time="3 anos"
                                icon={DiDjango}
                            />
                        </div>
                        <div className="w-full h-full">
                            <SkillCard 
                                title="Golang"
                                description="Desenvolvimento de aplicações web" 
                                time="3 anos"
                                icon={DiGo}
                            />
                        </div>
                        <div className="w-full h-full">
                            <SkillCard 
                                title="Node"
                                description="Framework para aplicações web" 
                                time="3 anos"
                                icon={DiNodejs}
                            />
                        </div>
                        <div className="w-full h-full">
                            <SkillCard 
                                title="PostgreSQL"
                                description="Banco de dados relacional" 
                                time="3 anos"
                                icon={DiPostgresql}
                            />
                        </div>
                        <div className="w-full h-full">
                            <SkillCard 
                                title="React"
                                description="Desenvolvimento de aplicações web" 
                                time="3 anos"
                                icon={DiReact}
                            />
                        </div>
                        <div className="w-full h-full">
                            <SkillCard 
                                title="MongoDB"
                                description="Banco de dados não relacional" 
                                time="2 anos"
                                icon={DiMongodb}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
  }