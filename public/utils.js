function capitalize(mot) {
  if (!mot || typeof mot !== "string") {
    return mot; 
  }
  const premierCaractere = mot.charAt(0).toUpperCase();
  const resteDuMot = mot.slice(1);
  return premierCaractere + resteDuMot;
}

module.exports = {capitalize}