import React from 'react'

const RosterPlayerCard = (props) => {
    const { ID, POS, FIRSTNAME, LASTNAME, OVR, LOGO, ICON, ARCH } = props

    const cardClass = [
        'player-card', 
        'p-2', 
        'border-2', 
        'border-gray-300', 
        'rounded-lg', 
        'shadow-md', 
        'flex', 
        'flex-col', 
        'items-center', 
        OVR >= 80 ? 'bg-shiny-gold text-white' : 'bg-shiny-dark-blue text-white'
    ].join(' ')

    return (
        <div className={cardClass} style={{ width: '160px', height: '210px', margin: '6px' }}>
            <div className="text-xl font-bold mb-1 p-3 w-16 h-16 rounded-full bg-[#0f172a] text-white text-outline-black flex flex-col items-center justify-center">
                {OVR}
                <span className="text-xs">OVR</span>
            </div>
            <div className="text-center flex flex-col justify-center min-h-[3rem]">
                <h3 className="text-base font-semibold text-outline-black sm:text-sm md:text-base lg:text-base">{POS} {FIRSTNAME} {LASTNAME}</h3>
                <p className="text-sm text-outline-black sm:text-xs md:text-sm lg:text-sm">{ARCH}</p>
            </div>
            <div className="flex mt-2 justify-center items-center space-x-1">
                {LOGO && <img src={`/public/logos/${LOGO}`} alt={`${FIRSTNAME} ${LASTNAME} Team Logo`} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />}
                {ICON && <img src={ICON} alt={`${POS} Icon`} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />}
            </div>
        </div>
    )
}

export default RosterPlayerCard