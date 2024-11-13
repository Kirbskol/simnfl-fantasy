import React, { useState, useEffect, useRef } from 'react'
import { Navigate, useNavigate } from "react-router-dom"
import PlayerCard from './PlayerCard'

const Draft = () => {
    const [players, setPlayers] = useState([])
    const [selectedPlayer, setSelectedPlayer] = useState(null)
    const [position, setPosition] = useState('qb')
    const [selectedPlayers, setSelectedPlayers] = useState([])
    const isFetching = useRef(false)
    const manualPositionIndex = useRef(0)
    const manualPositionQueue = [
        "qb", "rb", "te", "wr", "wr", "wr", "ol",
        "ol", "ol", "ol", "ol", "k", "def"
    ]

    const fetchPlayers = async () => {
        if (isFetching.current) return
            isFetching.current = true
        try {
            const playerResponse = await fetch(`/${position}.json`)
            const iconResponse = await fetch('/positionIcons.json')
            const playerData =  await playerResponse.json()
            const iconData = await iconResponse.json()
            const playersArray = playerData[position]
            if (!playersArray){
                console.error(`No players found for position: ${position}`)
                isFetching.current = false
                return
            }
            const duplicateCheck = new Map()
            for (let selectedPlayer of selectedPlayers) {
                duplicateCheck.set(selectedPlayer.ID, true)
            }
            const filteredPlayers = playersArray.filter(item => !duplicateCheck.has(item.id))
            const selectablePlayers = filteredPlayers.sort(() => 0.5 - Math.random()).slice(0, 3)
            setPlayers(selectablePlayers)
            isFetching.current = false
        } catch(error) {
            console.error("Error when fetching players", error)
            isFetching.current = false
        }
    }

    useEffect(() => {
        fetchPlayers()
    },[position])

    const navigate = useNavigate()

    const handlePlayerSelect = (player) => {
        setSelectedPlayer(player)
        setSelectedPlayers(prevSelectedPlayers => [...prevSelectedPlayers, player])
        if (selectedPlayers.length + 1 === 11){
            navigate("/roster")
            return
        }
        manualPositionIndex.current = manualPositionIndex.current + 1
        const nextPosition = manualPositionQueue[manualPositionIndex.current]
        setPosition(nextPosition)
        setPlayers([])
    }

    return (
        <div>
            <div className="flex justify-center">
                <div>
                    <h3 className="text-xl font-bold mb-4">Previous Selected Player: </h3>
                    <div className="flex flex-wrap justify-center">
                        {players.map(player => (
                            <PlayerCard
                                key={player.ID}
                                handlePlayerSelect={() => handlePlayerSelect(player)}
                                ID={player.ID}
                                POS={player.POS}
                                FIRSTNAME={player.FIRSTNAME}
                                LASTNAME={player.LASTNAME}
                                EXP={player.EXP}
                                ARCH={player.ARCH}
                                OVR={player.OVR}
                                LOGO={player.LOGO}
                                ICON={player.ICON}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Draft