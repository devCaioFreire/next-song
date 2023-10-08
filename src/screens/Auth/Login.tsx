
import LoginBG from '../../assets/loginBG.mp4'
import Logo from '../../assets/Logo.svg'

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
        <div className='bg-[#1B1B1B] shadow-2xl flex flex-col items-center justify-between gap-8 w-full h-full p-4 max-w-[500px] max-h-[400px] rounded-xl text-zinc-50'>
          <img src={Logo} className='w-10 h-10 self-center' draggable={false} />
          <h1>Peça suas músicas de forma fácil!</h1>
          <form className='flex flex-col gap-4'>

            <div className='flex gap-4'>
              <div className='flex flex-col gap-3'>
                <label>E-mail</label>
                <input type="email" className='bg-transparent border-b py-1' />
              </div>

              <div className='flex flex-col gap-3'>
                <label>Senha</label>
                <input type="password" className='bg-transparent border-b py-1' />
              </div>
            </div>

            <button
              className='w-full bg-[#EBEBEB] p-1 text-black font-medium transition-all rounded-md
            hover:bg-zinc-300'>
              Entrar
            </button>

          </form>

        </div>
      </div>

    </>
  )
}
