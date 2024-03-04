export default function createIteratorObject(report) {
  const array = [];
  for (const lvl1 of Object.keys(report.allEmployees)) {
    for (const lvl2 of report.allEmployees[lvl1]) {
      array.push(lvl2);
    }
  }
  return array;
}
