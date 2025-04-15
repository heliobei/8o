import React from 'react'
import ReactPlayer from 'react-player'

function MatSistemaNumeracao() {
  return (
    <>
      <div className='max-w-screen-xl mx-auto p-4'>
        <h1 className='font-bold text-3xl py-4 text-center text-gray-700'>Princípio multiplicativo da contagem</h1>
        <p className='text-gray-700 py-4'>Para ilustrar o princípio multiplicativo da contagem, escolhemos um vídeo inicial, com exemplo de uso desse saber, uma breve explicação do tema e quando podemos usar. A seguir a professora Belissa traz alguns exemplos simples para ilustrar esse assunto.</p>
      </div>
      <div className="max-w-screen-xl mx-auto p-4 pb-12 mb-12 lg:mb-0 flex space-x-8 flex-col md:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
            <ReactPlayer url='https://youtu.be/bU3A-HAGcqA?list=TLGGU6oVk0tKJ5gzMTAxMjAyNA' width="100%" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
            <ReactPlayer url='https://youtu.be/FNneYa5og14?list=TLGG2vQAtwgFCywzMTAxMjAyNA' width="100%" />
          </div>
        </div>
      </div>
    </>
  )
}

export default MatSistemaNumeracao

