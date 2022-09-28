const stats = [
  { name: 'Projects', stat: '34' },
  { name: 'Rooms Designed', stat: '102' },
  { name: 'Happy Clients', stat: '38' },
]

export default function Stats() {
  return (
    <div className="bg-gray-50 py-10">
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}