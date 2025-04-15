import React from 'react'
import ReactPlayer from 'react-player'

function MatSistemaMonetario() {
  return (
    <>
      <div className='max-w-screen-xl mx-auto p-4 bg-primary'>
        <h1 className='font-bold text-3xl py-4 text-center text-white'>Medidas de capacidade e Notação Científica</h1>
        <p className='text-white py-4'>Para medir o volume de blocos retangulares, a professora Gis traz um exemplo prático, medindo a capacidade de uma piscina real. Já o Professor Sandro Curió mostra alguns exemplos de notação científica, um conceito importante para interpretar números muito grandes ou números muito pequenos. </p>
      </div>
      <div className="max-w-screen-xl mx-auto bg-primary pb-12 p-4 mb-12 lg:mb-0 flex space-x-8 flex-col md:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
            <ReactPlayer url='https://youtu.be/6khvqiJFdX8' width="100%" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
            <ReactPlayer url='https://youtu.be/-e2ExUbZ-8M?list=TLGGGUOUPjuzEEgzMTAxMjAyNA' width="100%" />
          </div>
        </div>
      </div>
    </>
  )
}

export default MatSistemaMonetario