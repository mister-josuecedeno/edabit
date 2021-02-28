const pad = (str) => {
  return `0${str}`.slice(-2);
};

const weekAfter = (str) => {
  const [d, m, y] = str.split('/');
  const today = new Date(+y, +m - 1, +d);
  today.setDate(today.getDate() + 7);

  const dd = pad(today.getDate());
  const mm = pad(today.getMonth() + 1);
  const yy = today.getFullYear();

  return `${dd}/${mm}/${yy}`;
};

// Tests
console.log(weekAfter('12/03/2020'), '19/03/2020');
console.log(weekAfter('21/12/1989'), '28/12/1989');
console.log(weekAfter('01/01/2000'), '08/01/2000');
console.log(weekAfter('24/09/1924'), '01/10/1924');
console.log(weekAfter('21/07/1964'), '28/07/1964');
console.log(weekAfter('14/07/2085'), '21/07/2085');
console.log(weekAfter('25/04/1953'), '02/05/1953');
console.log(weekAfter('02/01/2200'), '09/01/2200');
console.log(weekAfter('06/01/2007'), '13/01/2007');
console.log(weekAfter('07/04/2195'), '14/04/2195');
console.log(weekAfter('04/09/2094'), '11/09/2094');
console.log(weekAfter('20/08/1910'), '27/08/1910');
console.log(weekAfter('12/12/1894'), '19/12/1894');
console.log(weekAfter('02/11/2094'), '09/11/2094');
console.log(weekAfter('22/12/1955'), '29/12/1955');
console.log(weekAfter('18/04/1859'), '25/04/1859');
console.log(weekAfter('17/03/1847'), '24/03/1847');
console.log(weekAfter('17/03/2142'), '24/03/2142');
console.log(weekAfter('26/01/2145'), '02/02/2145');
console.log(weekAfter('03/12/1959'), '10/12/1959');
console.log(weekAfter('01/06/1947'), '08/06/1947');
console.log(weekAfter('26/12/1853'), '02/01/1854');
console.log(weekAfter('27/10/2068'), '03/11/2068');
console.log(weekAfter('05/05/2080'), '12/05/2080');
console.log(weekAfter('22/12/2144'), '29/12/2144');
console.log(weekAfter('12/05/1870'), '19/05/1870');
console.log(weekAfter('07/01/1882'), '14/01/1882');
console.log(weekAfter('16/06/2032'), '23/06/2032');
console.log(weekAfter('02/10/2007'), '09/10/2007');
console.log(weekAfter('24/03/1871'), '31/03/1871');
console.log(weekAfter('19/08/1847'), '26/08/1847');
console.log(weekAfter('24/07/2157'), '31/07/2157');
console.log(weekAfter('28/12/1848'), '04/01/1849');
console.log(weekAfter('20/07/1951'), '27/07/1951');
console.log(weekAfter('14/11/2071'), '21/11/2071');
console.log(weekAfter('07/12/2170'), '14/12/2170');
console.log(weekAfter('01/03/2080'), '08/03/2080');
console.log(weekAfter('28/04/1906'), '05/05/1906');
console.log(weekAfter('15/06/2023'), '22/06/2023');
console.log(weekAfter('11/08/1950'), '18/08/1950');
console.log(weekAfter('15/11/2103'), '22/11/2103');
console.log(weekAfter('23/11/1852'), '30/11/1852');
console.log(weekAfter('08/01/1928'), '15/01/1928');
console.log(weekAfter('14/11/2118'), '21/11/2118');
console.log(weekAfter('11/10/2096'), '18/10/2096');
console.log(weekAfter('02/12/1816'), '09/12/1816');
console.log(weekAfter('10/10/1937'), '17/10/1937');
console.log(weekAfter('28/11/1959'), '05/12/1959');
console.log(weekAfter('27/05/2133'), '03/06/2133');
console.log(weekAfter('28/04/1932'), '05/05/1932');
console.log(weekAfter('23/02/2050'), '02/03/2050');
console.log(weekAfter('23/05/2146'), '30/05/2146');
console.log(weekAfter('24/07/2167'), '31/07/2167');
// Author : Joshua Señoron
