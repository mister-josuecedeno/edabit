// calculate six sleep zones based on time provided

const sleepZones = () => {

  let now = moment();
  let zones = [];
  let zone;

  for (let i = 1; i < 7; i++) {
    zone = moment(now).add((90 * i + 15), 'm');
    zones.push(zone);
  }

  console.log(now.format("LT"));
  console.log(zones[5].format("LT"));
}

// Tests

console.log(sleepZones());