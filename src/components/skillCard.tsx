import { IconType } from 'react-icons';

interface SkillCardProps {
    title: string;
    description: string;
    time: string;
    icon: IconType;
}

export function SkillCard({ title, description, time, icon: Icon }: SkillCardProps) {
    return (
      <div className="bg-zinc-900 flex flex-col justify-between h-full p-6 max-w-sm rounded-lg overflow-hidden shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl text-lime-300">
            <Icon />
          </div>
          <div className="text-sm text-gray-400">{time}</div>
        </div>
        <div className="mb-4">
          <div className="text-lime-300 font-bold text-xl">{title}</div>
          <p className="text-gray-300 text-base">
            {description}
          </p>
        </div>
      </div>
    );
  }

