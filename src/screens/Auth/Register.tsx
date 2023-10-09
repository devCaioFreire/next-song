import { Link } from 'react-router-dom'

import LoginBG from '../../assets/loginBG.mp4'

export const Register = () => {
  return (
    <>
      <video
        src={LoginBG}
        autoPlay={true}
        muted
        className="bg-[#010001] absolute w-auto min-w-full min-h-full h-screen">
      </video>

      <div className='relative flex justify-center items-center h-screen'>
        <div className='shadow-2xl flex flex-col items-center gap-8 w-full h-full p-4 max-w-[500px] max-h-[500px] rounded-xl text-zinc-50'>
          <h1 className='text-xl font-medium text-center px-4'>Registre-se e começe a pedir suas músicas de uma jeito fácil e prático</h1>

          <form className='grid grid-cols-2 grid-rows-2 mt-4 gap-4 h-full w-full'>

            <div className='flex flex-col gap-3 w-full'>
              <label>Nome</label>
              <input type="text" className='bg-transparent border-b py-1 outline-none' />
            </div>

            <div className='flex flex-col gap-3 w-full'>
              <label>Sobrenome</label>
              <input type="text" className='bg-transparent border-b py-1 outline-none' />
            </div>

            <div className='flex flex-col gap-3 w-full'>
              <label>E-mail</label>
              <input type="email" className='bg-transparent border-b py-1 outline-none' />
            </div>

            <div className='flex flex-col gap-3 w-full'>
              <label>Senha</label>
              <input type="password" className='bg-transparent border-b py-1 outline-none' />
            </div>

            <button
              className='col-span-2 w-full bg-[#EBEBEB] p-1 text-black font-medium transition-all rounded-md shadow-xl
            hover:bg-zinc-300'>
              Registrar
            </button>

          </form>

          <Link to={'/signin'}>Já tenho uma conta</Link>
        </div>
      </div >

    </>
  )
}
