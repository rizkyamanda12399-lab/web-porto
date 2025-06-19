// pages/visitor.tsx
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, CardContent } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Skeleton } from '@/components/ui/skeleton'
import { Trash2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
type Visitor = {
    id: string
    ip_address: string
    city: string
    country: string
    state?: string
    postcode?: string
    user_agent: string
    referer: string
    visited_at: string
    latitude?: string
    longitude?: string
    formatted_address?: string
}

export default function VisitorPage() {
    const [visitors, setVisitors] = useState<Visitor[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
            .get('https://68541b605470323abe94b9d1.mockapi.io/visitors') // Ganti URL ini dengan endpoint MockAPI kamu
            .then((res) => {
                setVisitors(res.data.reverse()) // urutkan dari terbaru
            })
            .catch((err) => {
                console.error(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])
    const { toast } = useToast()
    const handleDelete = async (id: string) => {
        const confirmDelete = confirm('Yakin ingin menghapus data ini?')
        if (!confirmDelete) return
        toast({
            description: "Menghapus Data...",
        })
        try {
            await axios.delete(`https://68541b605470323abe94b9d1.mockapi.io/visitors/${id}`) // Ganti URL sesuai endpoint MockAPI kamu
            setVisitors((prev) => prev.filter((v) => v.id !== id)) // Hapus dari state lokal
            toast({
                description: "Data Berhasil dihapus",
            })
        } catch (error) {
            console.error('Gagal menghapus data:', error)
            alert('Gagal menghapus data')
            toast({
                description: "Gagal menghapus data",
            })
        }
    }

    return (
        <main className="max-w-6xl mx-auto py-10 px-4">
            <h1 className="text-2xl font-bold mb-6">📊 Visitor Logs</h1>

            <Card>
                <CardContent className="overflow-x-auto p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>IP</TableHead>
                                <TableHead>Lokasi</TableHead>
                                <TableHead>Koordinat</TableHead>
                                <TableHead>Referer</TableHead>
                                <TableHead>Dikunjungi Pada</TableHead>
                                <TableHead>Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {loading ? (
                                Array.from({ length: 5 }).map((_, i) => (
                                    <TableRow key={i}>
                                        <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                                        <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                                        <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                                        <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                                        <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                                    </TableRow>
                                ))
                            ) : visitors.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center py-6">
                                        Tidak ada data pengunjung.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                visitors.map((v) => (
                                    <TableRow key={v.id}>
                                        <TableCell>{v.ip_address}</TableCell>
                                        <TableCell>{v.formatted_address || `${v.city}, ${v.country}`}</TableCell>
                                        <TableCell>
                                            {v.latitude && v.longitude ? (
                                                <a
                                                    href={`https://maps.google.com/?q=${v.latitude},${v.longitude}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 underline"
                                                >
                                                    {v.latitude}, {v.longitude}
                                                </a>
                                            ) : (
                                                '-'
                                            )}
                                        </TableCell>
                                        <TableCell>{v.referer || '-'}</TableCell>
                                        <TableCell>{new Date(v.visited_at).toLocaleString('id-ID')}</TableCell>
                                        <TableCell>
                                            <button
                                                onClick={() => handleDelete(v.id)}
                                                className="text-red-600 hover:underline text-sm"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </main>
    )
}
