import Image from "next/image"

// Local images
export default function ImagesPage() {
    return <div className="m-40">
        <Image src="/next.svg" alt="This is Next logo" height={100} width={100} />
        <Image src="/window.svg" alt="This is Next logo" height={100} width={100} />
    </div>
}