import React, { useEffect, useState } from 'react'

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([])

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const response = await fetch('/leaderboard.json')
                const data = await response.json()
                setLeaderboard(data)
            } catch (error) {
                console.error('Error fetching leaderboard:', error)
            }
        }

        fetchLeaderboard()
    }, [])

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b-2 border-gray-300">Rank</th>
                        <th className="py-2 px-4 border-b-2 border-gray-300">Username</th>
                        <th className="py-2 px-4 border-b-2 border-gray-300">Avg OVR</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard.map((team, index) => (
                        <tr key={index}>
                            <td className="py-2 px-4 border-b">{index + 1}</td>
                            <td className="py-2 px-4 border-b">{team.Username}</td>
                            <td className="py-2 px-4 border-b">{team.OVR.toFixed(1)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Leaderboard