export async function drinks() {
  const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
  const json = res.json();
  return json.drinks;
}
