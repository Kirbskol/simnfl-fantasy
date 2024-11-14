import React, { useState, useEffect, useRef } from 'react'
import { Navigate, useNavigate } from "react-router-dom"
import PlayerCard from './PlayerCard'

const Draft = ({ userName }) => {
    const [players, setPlayers] = useState([])
    const [selectedPlayer, setSelectedPlayer] = useState(null)
    const [position, setPosition] = useState('qb')
    const [selectedPlayers, setSelectedPlayers] = useState([])
    const isFetching = useRef(false)
    const manualPositionIndex = useRef(0)
    const manualPositionQueue = [
        "qb", "rb", "te", "wr1", "wr2", "wr3", "ol1",
        "ol2", "ol3", "ol4", "ol5", "k", "def"
    ]

    const fetchPlayers = async () => {
        if (isFetching.current) return
            isFetching.current = true
        try {
            const basePosition = position.replace(/\d+$/, '')
            const playerResponse = await fetch(`/${basePosition}.json`)
            const iconResponse = await fetch('/positionIcons.json')
            const playerData =  await playerResponse.json()
            const iconData = await iconResponse.json()
            const playersArray = playerData[basePosition]
            if (!playersArray){
                console.error(`No players found for position: ${basePosition}`)
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
        return () => {
            isFetching.current = false
        }
    },[position])

    const navigate = useNavigate()
    useEffect(() => {
        if (selectedPlayers.length === 13){
            navigate("/roster", { state: { selectedPlayers, userName } })
        }
    }, [selectedPlayers, navigate, userName])

    const handlePlayerSelect = (player) => {
        setSelectedPlayer(player)
        setSelectedPlayers(prevSelectedPlayers => [...prevSelectedPlayers, player])
        setPlayers([])
        setTimeout(() => {
            manualPositionIndex.current = manualPositionIndex.current + 1
            const nextPosition = manualPositionQueue[manualPositionIndex.current]
            setPosition(nextPosition)
        }, 1000)
    }

    return (
        <div className="flex-col p-8 items-center text-center">
            <h2 className="text-2xl font-semibold mt-4 mb-2">
                {selectedPlayer 
                    ? `Selected: ${selectedPlayer.POS} ${selectedPlayer.FIRSTNAME} ${selectedPlayer.LASTNAME} (${selectedPlayer.TEAM})`
                    : 'Selected: ---'}
            </h2>
            <div className="flex justify-center">
                <div>
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