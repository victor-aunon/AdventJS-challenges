// ¿Puedes reconfigurar las fábricas para no parar de crear regalos?
export function canReconfigure(from, to) {
  if (from.length !== to.length) return false
  const configurationMap = new Map()
  for (let c = 0; c < from.length; c++) {
    if (configurationMap.has(from[c]) && configurationMap.get(from[c]) !== to[c]) return false
    if (!configurationMap.has(from[c]) && [...configurationMap.values()].includes(to[c])) return false
    configurationMap.set(from[c], to[c]) 
  }
  return true
}
