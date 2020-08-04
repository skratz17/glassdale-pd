let criminals = [];

export const useCriminals = () => criminals.slice();

export const useAssociates = criminalId => {
  return criminals
    .find(criminal => criminal.id === criminalId)
    .known_associates
    .slice()
};

export const getCriminals = () => {
  return fetch('https://criminals.glassdale.us/criminals')
    .then(res => res.json())
    .then(criminalsData => criminals = criminalsData);
};