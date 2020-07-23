let criminals = [];

export const useCriminals = () => criminals.slice();

export const getCriminals = () => {
  return fetch('https://criminals.glassdale.us/criminals')
    .then(res => res.json())
    .then(criminalsData => criminals = criminalsData);
};