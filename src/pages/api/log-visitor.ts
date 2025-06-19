import type { NextApiRequest, NextApiResponse } from 'next'
import geoip from 'geoip-lite'
import { supabase } from '@/lib/SupabaseClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const ip =
        req.headers['x-forwarded-for']?.toString().split(',')[0] ||
        req.socket.remoteAddress ||
        ''

    const geo = geoip.lookup(ip || '') as geoip.Lookup | null || null

    const data = {
        ip_address: ip,
        country: geo?.country || '',
        city: geo?.city || '',
        user_agent: req.headers['user-agent'] || '',
        referer: req.headers['referer'] || '',
        page: req.headers['x-page-path'] || '',
    }

    const { error } = await supabase.from('visitors').insert([data])

    if (error) {
        console.error(error)
        return res.status(500).json({ success: false })
    }

    res.status(200).json({ success: true })
}
