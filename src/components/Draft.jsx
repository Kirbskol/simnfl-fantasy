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
            const playerResponse = await fetch('{position}.json')
            const iconResponse = await fetch('positionIcons.json')
            const playerData =  await playerResponse.json()
            const iconData = await iconResponse.json()
            const duplicateCheck = new Map()
            for (selectedPlayer of selectedPlayers) {
                duplicateCheck.set(selectedPlayer.id, true)
            }
            const filteredPlayers = playerData.filter(item => !duplicateCheck.has(item.id))
            const selectablePlayers = filteredPlayers.sort(() => 0.5 - Math.random()).slice(0, 3)
            setPlayers(selectablePlayers)
            isFetching.current = false
        } catch(error) {
            console.error("Error when fetching players", error)
            isFetching.current = false
        }
    }


}

export default Draft