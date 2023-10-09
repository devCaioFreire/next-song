interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <div className="flex bg-[#1B1B1B] my-4 p-4 rounded-lg shadow-lg">
      <h1>{title}</h1>
    </div>
  )
}
