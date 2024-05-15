export const BASE_URL = "https://dummyjson.com/";
export async function fetchFunction(url) {
  const response = await fetch(`${BASE_URL}${url}`);
  const answer = await response.json();
  return answer;
}


