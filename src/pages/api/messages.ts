/* eslint-disable @typescript-eslint/no-unused-vars */
// pages/api/messages.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        // Ambil semua pesan
        try {
            const messages = await prisma.message.findMany({
                orderBy: { createdAt: "desc" },
            });
            return res.status(200).json(messages);
        } catch (error) {
            return res.status(500).json({ message: "Gagal mengambil data pesan" });
        }
    }

    if (req.method === "POST") {
        // Simpan pesan baru
        const { name, subject, message } = req.body;

        if (!name || !subject || !message) {
            return res.status(400).json({ message: "Semua field wajib diisi." });
        }

        try {
            await prisma.message.create({
                data: { name, subject, message },
            });
            return res.status(200).json({ message: "Pesan berhasil disimpan!" });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Gagal menyimpan pesan" });
        }
    }

    // Jika method bukan GET/POST
    return res.status(405).json({ message: "Method not allowed" });
}
