// pages/api/track-visitor.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const MOCKAPI_URL = 'https://68541b605470323abe94b9d1.mockapi.io/visitors'
const OPENCAGE_API_KEY = process.env.OPENCAGE_API_KEY

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return res.status(405).end()

    const { latitude, longitude } = req.body

    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    const userAgent = req.headers['user-agent'] || ''
    const referer = req.headers['referer'] || ''

    let city = 'Unknown'
    let country = 'Unknown'
    let state = ''
    let postcode = ''
    let formatted = ''

    if (latitude && longitude && OPENCAGE_API_KEY) {
        try {
            const geoResponse = await axios.get(`https://api.opencagedata.com/geocode/v1/json`, {
                params: {
                    q: `${latitude},${longitude}`,
                    key: OPENCAGE_API_KEY,
                    language: 'en',
                    pretty: 1
                }
            })

            const result = geoResponse.data?.results?.[0]
            if (result) {
                city = result.components.city || result.components.town || result.components.village || 'Unknown'
                country = result.components.country || 'Unknown'
                state = result.components.state || ''
                postcode = result.components.postcode || ''
                formatted = result.formatted || ''
            }
        } catch (err) {
            console.error('OpenCage error:', err)
        }
    }

    const visitorData = {
        ip_address: ip?.toString(),
        country,
        city,
        user_agent: userAgent,
        referer,
        visited_at: new Date().toISOString(),
        latitude,
        longitude,
        formatted_address: formatted,
        state,
        postcode
    }

    try {
        await axios.post(MOCKAPI_URL, visitorData)
        res.status(200).json({ message: 'Visitor tracked with OpenCage' })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        res.status(500).json({ error: 'Failed to track visitor' })
    }
}
