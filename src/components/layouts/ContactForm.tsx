// components/ContactForm.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/messages", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });


            if (res.ok) {
                setForm({ name: "", subject: "", message: "" });
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <div className="">
            <h2 className="text-3xl mb-5 mt-10">Keep In Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl shadow">
                <Input
                    name="name"
                    placeholder="Nama Anda"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="border-primary/40 focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <Input
                    name="subject"
                    placeholder="Subjek"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="border-primary/40 focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <Textarea
                    name="message"
                    placeholder="Pesan"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="border-primary/40 focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <Button type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
                </Button>

                {status === "success" && <p className="text-green-600">Pesan berhasil dikirim!</p>}
                {status === "error" && <p className="text-red-600">Terjadi kesalahan. Coba lagi.</p>}
            </form>
        </div>
    );
}
