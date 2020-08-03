let witnesses = [];

export const useWitnesses = () => witnesses.slice();

export const getWitnesses = () => {
  return fetch('https://criminals.glassdale.us/witnesses')
    .then(res => res.json())
    .then(witnessData => witnesses = witnessData);
};