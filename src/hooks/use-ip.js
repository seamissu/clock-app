import useSWR from 'swr';

async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  const json = await response.json();
  return json;
}

function useIP(ENDPOINT) {
  const { data } = useSWR(ENDPOINT, fetcher);

  return {
    continent: data?.data.location.continent.name,
    country: data?.data.location.country.alpha2,
    city: data?.data.location.city.name,
  };
}

export default useIP;
