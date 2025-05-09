import categories from "../../assets/data/categories.json";
import Link from "next/link";

export default async function CategoriesPage() {
    return (
        <div className="h-[calc(100vh-9.5rem)] flex justify-center items-center text-6xl font-black">
            <div>
                <h1 className="text-3xl font-bold mb-6">Categories</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/posts?category=${category.id}`}
                            className="flex items-center justify-center border p-4 rounded-lg hover:bg-gray-50 transition link-parent"
                        >
                            <h2 className="text-xl font-semibold animate-link">{category.name}</h2>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
