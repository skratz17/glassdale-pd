let criminals = [];

export const useCriminals = () => criminals.slice();

export const useCriminalsAlphabetized = () => (
  criminals
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
);

export const useAssociates = criminalId => {
  return criminals
    .find(criminal => criminal.id === criminalId)
    .known_associates
    .slice()
};

export const useCriminalById = criminalId => {
  return criminals.find(criminal => criminal.id === parseInt(criminalId))
}

/**
 * Get criminals from glassdale API if not already loaded into application state.
 * @param {boolean} force Set to true to force reloading criminals from external API, otherwise function will first check if criminals already loaded from API and will not reload if already loaded in.
 */
export const getCriminals = (force = false) => {
  if(criminals.length && force !== true) {
    return Promise.resolve(); // to allow .then() chaining to still work with this function
  }
  return fetch('https://criminals.glassdale.us/criminals')
    .then(res => res.json())
    .then(criminalsData => criminals = criminalsData);
};