import React from 'react'

const Splash = () => {
  return (
    <div className="flex-col p-8 items-center text-center">
        <div className="text-center w-1/2 justify-self-center">
            <h1 className="text-4xl font-bold self-center mb-2">Welcome to SimNFL Fantasy Draft</h1>
            <p className="text-xl text-wrap mb-2">Enter your username and start drafting. Good luck!</p>
            <p className="text-sm italic text-wrap">Disclaimer: If you don't know who Matt Howard is then you're in the wrong place.</p>
        </div>
    </div>
  )
}

export default Splash