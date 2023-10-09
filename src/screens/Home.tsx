import { Header } from "../components/Header"
import { Templates } from "../components/Templates"

export const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header title="Home" />
      <div className="grid grid-cols-layout gap-8 h-[89%]">
        <Templates className="h-full">1</Templates>

        <div className="flex flex-col justify-between gap-10">
          <Templates>2</Templates>
          <Templates>3</Templates>

        </div>
      </div>
    </div>
  )
}
