interface TemplateProps {
  children: React.ReactNode;
  className?: string;
}

export const Templates = (props: TemplateProps) => {
  return (
    <div className={`text-black rounded-xl p-4 h-full w-full bg-zinc-300 ${props.className}`}>
      {props.children}
    </div>
  )
}
