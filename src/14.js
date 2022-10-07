// En busca del reno perdido
export function missingReindeer(ids) {
  // Sort the ids, then find the first ocurrence where index does not
  // match value. If there is no jump in values (-1), then the id is
  // the next one in the consecutive count (ids.length)
  const sortIds = ids.sort((a, b) => a - b);
  const result = sortIds.indexOf(
    sortIds.filter((id, index) => id !== index)[0]
  );
  return result === -1 ? sortIds.length : result;
}
