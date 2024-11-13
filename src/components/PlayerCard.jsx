import React from 'react'

const PlayerCard = (props) => {
    const { ID, POS, FIRSTNAME, LASTNAME, EXP, ARCH, OVR, LOGO, ICON } = props

    const cardClass = [
        'player-card', 
        'p-4', 
        'border-2', 
        'border-gray-300', 
        'rounded-lg', 
        'shadow-md', 
        'flex', 
        'flex-col', 
        'items-center', 
        OVR >= 80 ? 'bg-shiny-gold text-white' : 'bg-shiny-dark-blue text-white', 
        'flex-grow'
    ].join(' ')

    return (
        <div className={cardClass} style={{ width: 'calc(33.333% - 10px)', margin: '5px' }} onClick={props.handlePlayerSelect}>
            <div className="text-3xl font-bold mb-2 p-4 w-24 h-24 rounded-full bg-[#0f172a] text-white text-outline-black flex flex-col items-center justify-center">
                {OVR}
                <span className="text-xs">OVR</span>
            </div>
            <div className="responsive-font-size text-center flex flex-col justify-center min-h-[4.5rem]">
                <h3 className="text-xl font-semibold text-outline-black sm:text-base md:text-lg lg:text-xl">{POS} {FIRSTNAME} {LASTNAME}</h3>
                <p className="text-base text-outline-black sm:text-sm md:text-base lg:text-lg">{ARCH}</p>
            </div>
            <div className="flex mt-4 justify-center items-center space-x-2">
                <img src={`/public/logos/${LOGO}`} alt={`${FIRSTNAME} ${LASTNAME} Team Logo`} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
                <img src={ICON} alt={`${POS} Icon`} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
            </div>
        </div>
    )
}

export default PlayerCard