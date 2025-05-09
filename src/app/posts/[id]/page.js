import posts from '../../../../assets/data/posts.json'
import categories from '../../../../assets/data/categories.json'
export default async function page({ params }) {
    const {id} = await params
    const post = posts.find((post) => post.id === +id)
    if(!post) {
        throw new Error('404: Post not found')
    }
    const category = categories.find((cat) => cat.id === post.category)
    return (
        <div className='min-h-[calc(100vh-9.5rem)] py-6 px-18 flex flex-col justify-center gap-4'>
            <div>
                <h1 className='text-3xl font-bold'>{post.title}</h1>
                <p className='text-gray-700 text-sm'>
                    <span>{category.name} -</span>
                    <span> {post.author} -</span>
                    <span> {new Date(post.createdAt).toDateString()}</span>
                </p>
            </div>
            <p>{post.shortDescription}</p>
            <p>{post.body}</p>
        </div>
    )
}
