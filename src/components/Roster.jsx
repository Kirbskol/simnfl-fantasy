import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PlayerCard from './PlayerCard'

const Roster = () => {
    

    return(
        <div className="grid grid-cols-7 grid-rows-3 gap-3">
            <div >1</div>
            <div >2</div>
            <div >3</div>
            <div >4</div>
            <div >5</div>
            <div className="col-start-7">6</div>
            <div className="row-start-2">7</div>
            <div className="row-start-2">8</div>
            <div className="col-start-4 row-start-2">9</div>
            <div className="col-start-5 row-start-2">10</div>
            <div className="col-start-7 row-start-2">11</div>
            <div className="col-start-2 row-start-3">12</div>
            <div className="col-start-3 row-start-3">13</div>
            <div className="col-start-7 row-start-3">14</div>
        </div>
    )
}

export default Roster