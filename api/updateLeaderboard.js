import { sql } from '@vercel/postgres'

export default async (req, res) => {
    if (req.method === 'PUT') {
        let data = ''

        req.on('data', chunk => {
            data += chunk.toString()
        })

        req.on('end', async () => {
            try {
                const leaderboardData = JSON.parse(data)

                if (!Array.isArray(leaderboardData)) {
                    return res.status(400).json({ error: 'Invalid data format' })
                }

                await sql.begin(async transaction => {
                    for (const entry of leaderboardData) {
                        await transaction.query(
                            'INSERT INTO leaderboard (username, ovr, date) VALUES ($1, $2, $3) ON CONFLICT (username) DO UPDATE SET ovr = $2, date = $3',
                            [entry.username, entry.ovr, new Date(entry.date)]
                        )
                    }
                })

                res.status(200).json({ message: 'Leaderboard updated successfully' })
            } catch (error) {
                console.error('Error updating leaderboard data:', error)
                res.status(400).json({ error: 'Invalid JSON data' })
            }
        });
    } else {
        res.status(405).json({ error: 'Method Not Allowed' })
    }
}