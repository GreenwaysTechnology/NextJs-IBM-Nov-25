import Image from "next/image"

export default function ImageGallery() {
    const images = [
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    ]

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold mb-6 text-center">Image Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((src, idx) => (
                    <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={src}
                            alt={`Image ${idx + 1}`}
                            className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
