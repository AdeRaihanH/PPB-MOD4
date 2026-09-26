export function filterGuns(guns, query) {
  const q = query.trim().toLowerCase()
  if (!q) return guns
  return guns.filter((gun) =>
    [gun.name, gun.type, gun.caliber].some((field) => field.toLowerCase().includes(q)),
  )
}
