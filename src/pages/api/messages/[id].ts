/* eslint-disable @typescript-eslint/no-unused-vars */
// pages/api/messages/[id].ts
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const id = parseInt(req.query.id as string);

    if (req.method === "DELETE") {
        try {
            await prisma.message.delete({ where: { id } });
            return res.status(200).json({ message: "Pesan berhasil dihapus" });
        } catch (error) {
            return res.status(500).json({ message: "Gagal menghapus pesan" });
        }
    }

    return res.status(405).json({ message: "Method not allowed" });
}
