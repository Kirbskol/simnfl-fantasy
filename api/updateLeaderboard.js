import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default async (req, res) => {
    if (req.method === 'PUT') {
        try {
            const filePath = join(__dirname, '..', 'public', 'leaderboard.json')
            let data = ''
            req.on('data', chunk => {
                data += chunk.toString()
            })
            req.on('end', () => {
                const leaderboardData = JSON.parse(data)
                if (!Array.isArray(leaderboardData)) {
                    return res.status(400).json({ error: 'Invalid data format' })
                }
                writeFileSync(filePath, JSON.stringify(leaderboardData, null, 2))

                res.status(200).json({ message: 'Leaderboard updated successfully' })
            })
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' })
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' })
    }
}