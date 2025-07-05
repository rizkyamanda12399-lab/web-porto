/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/api/messages.ts
import { supabase } from "@/lib/supabase";

export default async function handler(req: any, res: any) {
    if (req.method === "GET") {
        const { data, error } = await supabase
            .from("Message")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            console.error("GET error:", error.message);
            return res.status(500).json({ error: error.message });
        }

        return res.status(200).json(data);
    }

    if (req.method === "POST") {
        const { name, subject, message } = req.body;
        const { data, error } = await supabase
            .from("Message")
            .insert([{ name, subject, message }]);

        if (error) {
            console.error("POST error:", error.message);
            return res.status(500).json({ error: error.message });
        }

        return res.status(201).json(data);
    }

    return res.status(405).json({ error: "Method not allowed" });
}
