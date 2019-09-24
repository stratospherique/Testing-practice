const cesarShipher = (str, key) => (
  str.split('').map((item) => {
    if (item.match(/([A-Za-z])/)) {
      let newChar = item.charCodeAt(0) + key;
      if (newChar > 90 && newChar < 97) {
        newChar = 64 + (newChar - 90);
      } else if (newChar > 122) {
        newChar = 96 + (newChar - 122);
      }
      return String.fromCharCode(newChar);
    }
    return item;
  }).join('')
);

export default cesarShipher;
