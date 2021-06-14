module.exports = {
  isIsoDate: (str) => {
    console.log(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{3}Z/.test(str), str);
    if (/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z/.test(str)) {
      return true;
    }
    if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(str)) return false;
    const d = new Date(str);
    return d.toISOString() === str;
  },

  isValidCodeFormat: (code) => {
    return /[A-Z]{2}-[A-Z]{3}-[0-9]{2}/.test(code);
  },
};
