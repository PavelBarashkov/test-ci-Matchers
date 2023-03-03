// TODO: write your code here
export default function sortArr(arr) {
  return arr.sort((a, b) => (a.health < b.health ? 1 : -1));
}
