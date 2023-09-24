// = {}: aloitus arvo on tyhjä
// () :T: T on palautusarvo, se ota <T>:sta
const fetchData = async <T>(url: string, options: RequestInit = {}): Promise<T> => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Error ${response.status} occured`);
  }
  const json = response.json();
  return json;
};

export {fetchData};
