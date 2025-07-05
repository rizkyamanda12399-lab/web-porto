/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/api/messages/[id].ts
import { supabase } from '@/lib/supabase';

export default async function handler(req: any, res: any) {
    const { id } = req.query;

    if (req.method === 'DELETE') {
        const { error } = await supabase
            .from('Message')
            .delete()
            .eq('id', id);

        if (error) return res.status(500).json({ error: error.message });
        return res.status(204).end();
    }

    res.status(405).json({ error: 'Method not allowed' });
}
