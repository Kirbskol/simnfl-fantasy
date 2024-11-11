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

}

export default Draft