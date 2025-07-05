// pages/pesan.tsx
"use client";

import { useEffect, useState } from "react";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";

type Message = {
    id: number;
    name: string;
    subject: string;
    message: string;
    created_at: string;
};


export default function PesanPage() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        const res = await fetch("/api/messages");
        const data = await res.json();
        console.log("Fetched messages:", data); // Tambahkan log ini
        setMessages(data);
        setLoading(false);
    };

    const deleteMessage = async (id: number) => {
        const confirm = window.confirm("Yakin ingin menghapus pesan ini?");
        if (!confirm) return;

        await fetch(`/api/messages/${id}`, {
            method: "DELETE",
        });

        await fetchMessages();
    };

    const filteredMessages = messages.filter(
        (msg) =>
            msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            msg.subject.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Pesan Masuk</h1>

            <Input
                placeholder="Cari nama atau subjek..."
                className="max-w-md mb-4"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {loading ? (
                <p>Memuat pesan...</p>
            ) : (
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>No</TableHead>
                                <TableHead>Nama</TableHead>
                                <TableHead>Subjek</TableHead>
                                <TableHead>Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredMessages.map((msg, index) => (
                                <TableRow key={msg.id}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{msg.name}</TableCell>
                                    <TableCell>{msg.subject}</TableCell>
                                    <TableCell className="space-x-2">
                                        {/* Tombol Detail */}
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    onClick={() => setSelectedMessage(msg)}
                                                    className="text-black"
                                                >
                                                    Detail
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogTitle>Detail Pesan</DialogTitle>
                                                <p>
                                                    <strong>Nama:</strong> {selectedMessage?.name}
                                                </p>
                                                <p>
                                                    <strong>Subjek:</strong> {selectedMessage?.subject}
                                                </p>
                                                <p>
                                                    <strong>Pesan:</strong><br />{selectedMessage?.message}
                                                </p>
                                                <p>
                                                    <strong>Dikirim:</strong>{" "}
                                                    {new Date(selectedMessage?.created_at || "").toLocaleString("id-ID")}
                                                </p>
                                            </DialogContent>
                                        </Dialog>

                                        {/* Tombol Hapus */}
                                        <Button
                                            size="sm"
                                            variant="destructive"
                                            onClick={() => deleteMessage(msg.id)}
                                        >
                                            Hapus
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    {filteredMessages.length === 0 && (
                        <p className="text-center mt-4">Tidak ada pesan ditemukan.</p>
                    )}
                </div>
            )}
        </div>
    );
}
