// https://edabit.com/challenge/mti3rGTDLyk4woxCi

// YYYYMMDDHHmmSS
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  const second = date.getSeconds().toString().padStart(2, '0');
  return year + month + day + hour + minute + second;
};

// Tests

console.log(formatDate(new Date(2020, 6, 4, 8, 0, 0)), '20200704080000');
console.log(formatDate(new Date(2019, 11, 31, 23, 59, 59)), '20191231235959');
console.log(formatDate(new Date(1970, 0, 1, 00, 00, 00)), '19700101000000');
console.log(formatDate(new Date(2020, 6, 4)), '20200704000000');
