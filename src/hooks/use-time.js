import useSWR from 'swr';

async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  const json = await response.json();
  return json;
}

function useTime(ENDPOINT) {
  const { data } = useSWR(ENDPOINT, fetcher);
  console.log(data);

  return {
    dayofyear: data?.day_of_year,
    dayofweek: data?.day_of_week,
    weeknumber: data?.week_number,
    timezone: data?.abbreviation,
    time: data?.datetime.substr(11, 5),
    hour: data?.datetime.substr(11, 2),
  };
}

export default useTime;
