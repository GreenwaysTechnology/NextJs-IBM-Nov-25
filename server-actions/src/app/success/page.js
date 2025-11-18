'use client'
import { useSearchParams } from 'next/navigation';

export default function SuccessPage() {
    const searchParams = useSearchParams()
    const name = searchParams.get('name');
    const email = searchParams.get('email');

    return <h1 className="m-50">Welcome to {name} and {email}</h1>
}
