// La locura de enviar paquetes en esta época
export function countPackages(carriers, carrierID) {
  // First store how many packages has a carrier and their subcarriers
  const carriersObj = {};
  carriers.forEach(carrier => {
    carriersObj[carrier[0]] = { packages: carrier[1], subs: carrier[2] };
  });
  // Initialize packages to the packages of the carrierID
  let packages = carriersObj[carrierID].packages;
  // Recursive function that counts the packages of the carrierID subcarriers
  function countSubPackages(carrierID) {
    for (const carrier of carriersObj[carrierID].subs) {
      packages += carriersObj[carrier].packages;
      if (carriersObj[carrier].subs.length > 0) countSubPackages(carrier);
    }
  }
  countSubPackages(carrierID);
  return packages;
}
