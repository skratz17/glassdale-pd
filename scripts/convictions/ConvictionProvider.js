let convictions = [];

export const useConvictions = () => convictions.slice();

export const getConvictions = () => {
  return fetch('https://criminals.glassdale.us/crimes')
    .then(res => res.json())
    .then(convictionsData => {
      convictions = convictionsData
      convictions.sort((a, b) => a.name.localeCompare(b.name));
    });
};