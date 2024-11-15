import { sql } from '@vercel/postgres'

export default async (req, res) => {
    if (req.method === 'GET') {
        try {
            const result = await sql`SELECT * FROM leaderboard ORDER BY ovr DESC`
            res.status(200).json(result.rows)
        } catch (error) {
            console.error('Error fetching leaderboard data:', error)
            res.status(500).json({ error: 'Internal Server Error' })
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' })
    }
}