import { ImAppleinc } from 'react-icons/im'
import { PiGoogleLogoBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'

import LoginBG from '../../assets/loginBG.mp4'

export const Login = () => {
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

          <h1 className='text-xl font-medium'>Peça suas músicas de forma fácil!</h1>

          <form className='flex flex-col gap-4 justify-around h-full'>

            <div className='flex gap-4'>
              <div className='flex flex-col gap-3'>
                <label>E-mail</label>
                <input type="email" className='bg-transparent border-b py-1 outline-none' />
              </div>

              <div className='flex flex-col gap-3'>
                <label>Senha</label>
                <input type="password" className='bg-transparent border-b py-1 outline-none' />
              </div>
            </div>

            <div className='flex items-center justify-center gap-14'>
              <PiGoogleLogoBold className="w-14 h-14 transition-all hover:text-zinc-300" />
              <ImAppleinc className="w-12 h-12 transition-all hover:text-zinc-300" />
            </div>

            <button
              className='w-full bg-[#EBEBEB] p-1 text-black font-medium transition-all rounded-md shadow-xl
            hover:bg-zinc-300'>
              Entrar
            </button>

          </form>

          <span className='text-center'>Ainda não tem uma conta? <Link to={'/signup'} className='cursor-pointer font-medium'>Registre-se aqui!</Link></span>
        </div>
      </div>

    </>
  )
}
