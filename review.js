names = ["Jimmy", "Beth", "Bob"];
lunchItems = ["Rice", "Pizza", "Sandwich"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const recommendation = (person, food) => {
  for (let i = 0; i < person.length; i++) {
    console.log(`${names[i]} should have ${food[getRandomInt(food.length)]}`);
  }
};

recommendation(names, lunchItems);
