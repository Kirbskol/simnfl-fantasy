import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import RosterPlayerCard from './PlayerCard'

const Roster = () => {
    const location = useLocation()
    const { selectedPlayers, userName } = location.state || { selectedPlayers: [], userName: '' }

    return(
        <div className="grid grid-cols-8 grid-rows-3 gap-3">
            <div >OL</div>
            <div >OL</div>
            <div >OL</div>
            <div >OL</div>
            <div >OL</div>
            <div >TE</div>
            <div className="col-start-8">HC</div>
            <div className="row-start-2">WR</div>
            <div className="row-start-2">WR</div>
            <div className="col-start-6 row-start-2">WR</div>
            <div className="col-start-8 row-start-2">DEF</div>
            <div className="col-start-3 row-start-3">RB</div>
            <div className="col-start-4 row-start-3">QB</div>
            <div className="col-start-8 row-start-3">K</div>
        </div>
    )
}

export default Roster