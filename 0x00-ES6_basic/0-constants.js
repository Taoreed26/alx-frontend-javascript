export function taskFirst() {
  const task = 'I always prefer const when I have capacities';
  return task;
}

export function getLast() {
  return ' it is good';
}

export function taskNext() {
  let combination = 'once in a while let';
  combination += getLast();

  return combination;
}
