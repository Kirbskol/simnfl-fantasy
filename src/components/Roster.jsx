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
    const rawAvgOVR = (totalOVR / selectedPlayers.length).toFixed(2)

    positionsOrder.forEach(pos => {
        selectedPlayers.forEach(player => {
            if (player.POS === pos) {
                orderedPlayers.push(player)
            }
        })
    })

    const updateLeaderboard = async () => {
        try {
            const response = await fetch('/leaderboard.json')
            let leaderboard = await response.json()
            leaderboard.push({ Username: userName, OVR: parseFloat(rawAvgOVR) })
            leaderboard.sort((a, b) => b.OVR - a.OVR)
            const top10 = leaderboard.slice(0, 10)
            await fetch('/api/updateLeaderboard', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(top10)
            })
        } catch(error) {
            console.error("Error updating leaderboard:", error)
        }
    }    

    const getRoster = () => {
        const element = document.getElementById("myRoster")
        if (!element) {
            return
        }
        
        element.style.backgroundImage = "url('/rosterBg.png')"
        element.style.backgroundSize = "cover"
        element.style.border = "10px solid #afb9c5"
        const logoElement = document.getElementById("exportLogo")
        if (logoElement) logoElement.style.display = "block"

        html2canvas(element).then((canvas) => {
            let image = canvas.toDataURL("image/png")
            const a = document.createElement("a")
            a.href = image
            a.download = `${userName}sRoster.png`
            a.click()
            updateLeaderboard()
        }).catch(error=> {
            console.error("We cannot take image of your roster")
        })
        element.style.backgroundImage = ""
        element.style.backgroundSize = ""
        element.style.border = ""
        if (logoElement) logoElement.style.display = "none"
    }

    return (
        <div id="myRoster" className="p-4 bg-slate-800 text-center">
            <div className="flex items-center justify-between">
                <div></div>
                <div id="exportLogo" style={{ display: "none", position: "absolute"}}>
                    <img src="/rosterLogo.png" alt="SimFBA logo" style={{ width: "180px" }} />
                </div>
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
                <button onClick={getRoster} className="border-2 border-gray-300 bg-shiny-dark-blue hover:bg-shiny-gold hover:text-blue-950 text-white text-sm self-start font-bold mt-0 py-2 px-4 rounded-xl">Export</button>
            </div>
            <RosterGrid orderedPlayers={orderedPlayers} />
        </div>
    )    
}

export default Roster