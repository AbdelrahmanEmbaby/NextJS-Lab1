'use client'
export default function error({ error }) {
  return (
    <div className="h-[calc(100vh-9.5rem)] flex justify-center items-center">
      <p className="text-6xl font-black text-wrap text-center p-6">{error.message}</p>
    </div>
  )
}
