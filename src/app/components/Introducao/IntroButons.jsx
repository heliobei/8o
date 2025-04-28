import React from 'react'
import { CgWebsite } from "react-icons/cg";

function IntroButons() {
  const sites = [
    { name: 'Site 2', url: 'https://8oano-2.beieducacaopedagogico.com/' },
    { name: 'Site 3', url: 'https://8oano-3.beieducacaopedagogico.com/' },
    { name: 'Site 4', url: 'https://8oano-4.beieducacaopedagogico.com/' }
  ];
  return (
    <>
        <h1 className="text-3xl font-bold p-8 text-center">Acesso aos sites</h1>
        <div className="flex justify-center space-x-16 pb-8">
        {sites.map((site) => (
          <button
            key={site.name}
            className="flex items-center justify-center btn btn-primary text-white"
            onClick={() => openWebsite(site.url)}
          >
            <CgWebsite size={24} className="mr-2" />
            {site.name}
          </button>
        ))}
        </div>


    </>
  )
}

export default IntroButons
