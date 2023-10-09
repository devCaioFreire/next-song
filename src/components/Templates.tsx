interface TemplateProps {
  children: React.ReactNode;
}

export const Templates = (props: TemplateProps) => {
  return (
    <div className="">
      {props.children}
    </div>
  )
}
