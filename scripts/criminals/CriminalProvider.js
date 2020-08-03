let criminals = [];

export const useCriminals = () => criminals.slice();

export const useAssociates = criminalId => {
  return criminals
    .slice()
    .find(criminal => criminal.id === criminalId)
    .known_associates
};

export const getCriminals = () => {
  return fetch('https://criminals.glassdale.us/criminals')
    .then(res => res.json())
    .then(criminalsData => criminals = criminalsData);
};