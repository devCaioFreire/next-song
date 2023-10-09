import { BarMusic } from "../components/Bar_music"
import { Header } from "../components/Header"
import { Templates } from "../components/Templates"

export const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header title="Home" />
      <div className="grid grid-cols-layout gap-8 h-[89%]">
        <Templates className="h-full">1</Templates>

        <div className="flex flex-col justify-between gap-10">

          <Templates className="h-full">
            <div className="flex flex-col h-full justify-between gap-8">
              <div className="flex-grow">
                <div className="flex items-center gap-4">
                  <img src="https://images.pexels.com/photos/2079169/pexels-photo-2079169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-32 h-32 rounded-full border-2 border-black bg-cover" />
                  <div>
                    <h1 className="text-2xl font-medium">Caio Freire</h1>
                    <span className="text-xl">22 anos</span>
                  </div>
                </div>

                <span className="pt-6 line-clamp-5">
                  Vindo de algum lugar do Brasil, esse cantor fictício faz o que mais ama, cantando em diversos estabelecimentos por todo o Brasil.
                  Vindo de algum lugar do Brasil, esse cantor fictício faz o que mais ama, cantando em diversos estabelecimentos por todo o Brasil.
                  Vindo de algum lugar do Brasil, esse cantor fictício faz o que mais ama, cantando em diversos estabelecimentos por todo o Brasil.
                  Vindo de algum lugar do Brasil, esse cantor fictício faz o que mais ama, cantando em diversos estabelecimentos por todo o Brasil.
                  Vindo de algum lugar do Brasil, esse cantor fictício faz o que mais ama, cantando em diversos estabelecimentos por todo o Brasil.
                </span>
              </div>

              <button className="bg-[#D9D9D9] block p-2 w-full border border-black rounded-lg shadow-custom transition-all font-medium hover:bg-[#cecece]">Ver mais</button> {/* Este botão será sempre empurrado para a parte inferior */}
            </div>
          </Templates>

          <Templates className="flex flex-col gap-8 overflow-auto max-h-96 scrollbar-thumb-dark-gray scrollbar-thin">
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">Tocando Agora</h1>
              <BarMusic title="Precisei Te Esquecer" artist="Mc Olanda" />
            </div>

            <div className="flex flex-col gap-4 max-w-[490px]">
              <h1 className="sticky text-xl font-medium">Próximas Músicas</h1>
              <BarMusic title="Who Want Smoke??" artist="Nardo Wick" />
              <BarMusic title="Imperfection" artist="Pop Smoke" />
              <BarMusic title="My Boys" artist="Young Thug" />
              <BarMusic title="Paranoia" artist="Pop Smoke" />
              <BarMusic title="ImperfectionImperfectionImperfectionImperfectionImperfectionImperfectionImperfectionImperfectionImperfectionImperfection" artist="Pop Smoke" />
              <BarMusic title="Imperfection" artist="Pop Smoke" />
              <BarMusic title="Imperfection" artist="Pop Smoke" />
              <BarMusic title="Imperfection" artist="Pop Smoke" />
              <BarMusic title="Imperfection" artist="Pop Smoke" />
            </div>
          </Templates>

        </div>
      </div>
    </div>
  )
}
