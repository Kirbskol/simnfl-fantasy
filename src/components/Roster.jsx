import React from 'react'
import { useLocation } from 'react-router-dom'
import RosterGrid from './ui/RosterGrid.jsx'
import html2canvas from 'html2canvas'

const Roster = () => {
    const location = useLocation()
    const { selectedPlayers, userName } = location.state || { selectedPlayers: [], userName: '' }
    const orderedPlayers = []
    const positionsOrder = ["OL", "TE", "DEF", "WR", "QB", "RB", "FB", "K"]
    const totalOVR = selectedPlayers.reduce((sum, player) => sum + player.OVR, 0)
    const avgOVR = Math.round(totalOVR / selectedPlayers.length)

    positionsOrder.forEach(pos => {
        selectedPlayers.forEach(player => {
            if (player.POS === pos) {
                orderedPlayers.push(player)
            }
        })
    })

    const getRoster = () => {
        const element = document.getElementById("myRoster")
        if (!element) {
            return
        }
        
        element.style.backgroundImage = "url('/rosterbg.png')"
        element.style.backgroundSize = "cover"

        html2canvas(element).then((canvas) => {
            let image = canvas.toDataURL("image/png")
            const a = document.createElement("a")
            a.href = image
            a.download = `${userName}Roster.png`
            a.click()
        }).catch(error=> {
            console.error("We cannot take image of your roster")
        })
        element.style.backgroundImage = ""
        element.style.backgroundSize = ""
    }

    return (
        <div id="myRoster" className="p-4 bg-slate-800 text-right">
            <button onClick={getRoster} className="border-2 border-gray-300 bg-shiny-dark-blue hover:bg-shiny-gold hover:text-blue-950 text-white text-sm font-bold mt-0 py-2 px-4 rounded-xl">Export</button>
            <div className="flex items-center -mt-10 justify-center">
                <div className={`text-2xl font-bold border-2 border-gray-300 mb-2 p-3 w-32 h-26 rounded-xl ${avgOVR >= 80 ? 'bg-shiny-gold text-white' : 'bg-shiny-dark-blue text-white'} text-outline-black flex items-center justify-center`}>
                    <div className="text-2xl font-bold mb-2 p-3 w-16 h-16 text-white text-outline-black flex flex-col items-center justify-center">
                        HC
                        <span className="text-xs">{userName}</span>
                    </div>
                    <div className="text-2xl font-bold mb-2 p-3 w-16 h-16 text-white text-outline-black flex flex-col items-center justify-center">
                        {avgOVR}
                        <span className="text-xs">OVR</span>
                    </div>
                </div>
            </div>
            <RosterGrid orderedPlayers={orderedPlayers} />
        </div>
    )    
}

export default Roster