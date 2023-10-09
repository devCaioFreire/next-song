import { PiPlay } from "react-icons/pi";

interface BarMusicProps {
  title?: string;
  artist?: string;
  time?: number;
  icon?: React.ReactNode;
}

// PiPlay

export const BarMusic = (props: BarMusicProps) => {
  return (
    <div className="bg-dark-gray text-zinc-50 flex w-full items-center gap-3 p-2 rounded-md shadow-custom">
      <PiPlay className="flex-shrink-0" />
      <span className="flex-grow truncate">{props.title} - {props.artist}</span>
    </div>
  )
}
