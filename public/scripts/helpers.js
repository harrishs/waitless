const formatPhoneNumber = (phoneNumber) => {
  phoneNumber = phoneNumber.toString();
  const left = phoneNumber.substring(0,3);
  const middle = phoneNumber.substring(3,6);
  const right = phoneNumber.substring(6);
  return `(${left}) ${middle}-${right}`;
}

module.exports = {
  formatPhoneNumber
};
