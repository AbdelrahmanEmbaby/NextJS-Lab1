import { getCommentsByPostId, getPostById } from '@/utils/posts.util'
import { getUserById } from '@/utils/users.util'
export default async function page({ params }) {
    const { id } = await params
    const post = await getPostById(id)
    if (!post) {
        throw new Error('404: Post not found')
    }
    const comments = await getCommentsByPostId(id)
    const user = await getUserById(post.userId)
    return (
        <article className='min-h-[calc(100vh-9.5rem)] py-6 px-18 flex flex-col justify-center gap-4'>
            <div>
                <h1 className='text-3xl font-bold capitalize'>{post.title}</h1>
                <p className='text-gray-300 text-sm'>
                    <span>{user.name} -</span>
                    <span> {user.email} -</span>
                    <span className='link-parent'><a href={user.website} className='animate-link after:bg-gray-300'>{user.website}</a></span>
                </p>
            </div>
            <p>{post.shortDescription}</p>
            <p>{post.body}</p>
            <section className='flex flex-col gap-2'>
                <h2 className='text-2xl font-bold'>Comments</h2>
                <ul className='flex flex-col gap-4'>
                    {comments.map((comment) => (
                        <li key={comment.id}>
                            <p className='w-fit font-semibold link-parent'>
                                <a href={`mailto:${comment.email}`} className='animate-link after:bg-base-content'>
                                    {comment.email}
                                </a>
                            </p>
                            <p>{comment.body}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    )
}
