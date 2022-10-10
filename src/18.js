// El sistema operativo de Santa Claus
export function fixFiles(files) {
  return files.map((file, i) => {
    if (files.filter(f => f === file).length > 1) {
      const currentRep = files.slice(0, i).filter(f => f === file).length;
      return currentRep === 0 ? file : `${file}(${currentRep})`;
    }
    return file;
  });
}
