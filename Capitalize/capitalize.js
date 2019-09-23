const capitalize = (str) => {
  let cap = str.split('');
  cap[0] = cap[0].toUpperCase();
  cap = cap.join('');
  return cap;
};

export default capitalize;
