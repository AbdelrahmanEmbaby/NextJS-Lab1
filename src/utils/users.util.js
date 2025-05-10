export const getAllUsers = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!res.ok) {
            throw new Error('Failed to fetch users')
        }
        const data = await res.json()
        return data
    } catch (error) {
        console.error('Error fetching users:', error)
        return []
    }
}

export const getUserById = async (userId) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        if (!res.ok) {
            throw new Error('Failed to fetch user')
        }
        const data = await res.json()
        return data
    } catch (error) {
        console.error('Error fetching user:', error)
        return null
    }
}