import { getPostsByUserId, getAllPosts } from '@/utils/posts.util'
import { getUserById } from '@/utils/users.util'
import Link from 'next/link'

export default async function PostsPage({ searchParams }) {
    const { user } = await searchParams
    const userData = await getUserById(user)
    if (user && !userData) {
        throw new Error('404: User not found')
    }
    const posts = user ? await getPostsByUserId(user) : await getAllPosts()


    return (
        <div className='p-6'>
            <h1 className="text-3xl font-bold mb-6">{userData ? userData.name : 'All'} Posts</h1>
            <ul className="flex flex-col gap-4 px-4">
                {posts.map((post) => (
                    <li
                        key={post.id}
                    >
                        <div
                            className='w-fit link-parent py-1'
                        >
                            <Link
                                href={`/posts/${post.id}`}
                            >
                                <h2 className="text-w text-xl font-semibold animate-link after:bg-base-content">{post.title}</h2>
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
