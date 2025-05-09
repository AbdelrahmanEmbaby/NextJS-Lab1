import posts from '../../../assets/data/posts.json'
import categories from '../../../assets/data/categories.json'
import Link from 'next/link'

export default async function PostsPage({ searchParams }) {
    const { category } = await searchParams
    const selectedCategory = category?categories.find((cat) => cat.id === category):{id:'all',name:'All Posts'}

    const filteredPosts = selectedCategory.id === 'all' ? posts : posts.filter((post) => post.category === selectedCategory.id)
    return (
        <div className='p-6'>
            <h1 className="text-3xl font-bold mb-6">{selectedCategory.name}</h1>
            <ul className="flex flex-col gap-4 px-4">
                {filteredPosts.map((post) => (
                    <li
                        key={post.id}
                        className=''
                    >
                        <div
                            className='w-fit link-parent'
                        >
                            <Link
                                href={`/posts/${post.id}`}
                            >
                                <h2 className="text-xl font-semibold animate-link">{post.title}</h2>
                            </Link>
                        </div>
                        <p>{post.shortDescription}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
