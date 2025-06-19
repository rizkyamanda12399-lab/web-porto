// pages/api/track-visitor.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const MOCKAPI_URL = 'https://68541b605470323abe94b9d1.mockapi.io/visitors' // ganti dengan URL kamu

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return res.status(405).end()

    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    const userAgent = req.headers['user-agent'] || ''
    const referer = req.headers['referer'] || ''

    // OPTIONAL: Ambil data lokasi berdasarkan IP (pakai layanan gratis seperti ipapi)
    const geo = await fetch(`https://ipapi.co/json/`).then(res => res.json()).catch(() => null)

    const visitorData = {
        ip_address: ip?.toString(),
        country: geo?.country_name || 'Unknown',
        city: geo?.city || 'Unknown',
        user_agent: userAgent,
        referer,
        visited_at: new Date().toISOString()
    }

    try {
        await axios.post(MOCKAPI_URL, visitorData)
        res.status(200).json({ message: 'Visitor tracked' })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        res.status(500).json({ error: 'Failed to track visitor' })
    }
}
