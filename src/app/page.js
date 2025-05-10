import { getAllUsers } from "@/utils/users.util";
import Link from "next/link";

export default async function CategoriesPage() {
    const users = await getAllUsers()
    return (
        <div className="h-[calc(100vh-9.5rem)] flex justify-center items-center text-6xl font-black">
            <div className="p-6">
                <h1 className="text-3xl font-bold mb-6">Content Creators</h1>
                <div className="flex flex-wrap gap-4">
                    {users.map((user) => (
                        <Link
                            key={user.id}
                            href={`/posts?user=${user.id}`}
                            className="flex items-center justify-center border p-4 rounded-lg transition link-parent"
                        >
                            <h2 className="text-xl font-semibold animate-link after:bg-base-content">{user.name}</h2>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
