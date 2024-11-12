import React, { useState, useEffect, useRef } from 'react'

const Draft = () => {
    const [players, setPlayers] = useState([])
    const [selectedPlayer, setSelectedPlayer] = useState(null)
    const [position, setPosition] = useState('qb')
    const [selectedPlayers, setSelectedPlayers] = useState([])
    const [wrCount, setWrCount] = useState(0)
    const [olCount, setOlCount] = useState(0)
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
                duplicateCheck.set(selectedPlayer.id, true)
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
    return (
        <div>
            <button onClick={fetchPlayers}>Fetch Players</button>
            <div>
                <h3>Selected Players:</h3>
                <p>{JSON.stringify(players, null, 2)}</p>
            </div>
        </div>
    )


}

export default Draft