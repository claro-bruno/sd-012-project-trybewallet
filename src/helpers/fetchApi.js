export default async function fetchAPI(fn) {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    fn(data);
  } catch (err) { console.log(err); }
}
