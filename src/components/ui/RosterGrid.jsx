import React from 'react'
import RosterPlayerCard from '../RosterPlayerCard'

const RosterGrid = ({ orderedPlayers }) => {
    return (
        <div className="grid grid-cols-9 grid-rows-2 gap-1">
            <div className="col-start-2">
                <RosterPlayerCard {...orderedPlayers[0]} />
            </div>
            <div className="col-start-3">
                <RosterPlayerCard {...orderedPlayers[1]} />
            </div>
            <div className="col-start-4">
                <RosterPlayerCard {...orderedPlayers[2]} />
            </div>
            <div className="col-start-5">
                <RosterPlayerCard {...orderedPlayers[3]} />
            </div>
            <div className="col-start-6">
                <RosterPlayerCard {...orderedPlayers[4]} />
            </div>
            <div className="col-start-7">
                <RosterPlayerCard {...orderedPlayers[5]} />
            </div>
            <div className="col-start-9">
                <RosterPlayerCard {...orderedPlayers[6]} />
            </div>
            <div className="row-start-2">
                <RosterPlayerCard {...orderedPlayers[7]} />
            </div>
            <div className="row-start-2">
                <RosterPlayerCard {...orderedPlayers[8]} />
            </div>
            <div className="col-start-4 row-start-2">
                <RosterPlayerCard {...orderedPlayers[10]} />
            </div>
            <div className="col-start-5 row-start-2">
                <RosterPlayerCard {...orderedPlayers[11]} />
            </div>
            <div className="col-start-7 row-start-2">
                <RosterPlayerCard {...orderedPlayers[9]} />
            </div>
            <div className="col-start-9 row-start-2">
                <RosterPlayerCard {...orderedPlayers[12]} />
            </div>
        </div>
    )
}

export default RosterGrid