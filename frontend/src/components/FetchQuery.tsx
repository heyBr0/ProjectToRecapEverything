import { useState } from "react";

type Result = {
  id: string;
  urls: {
    small: string;
  };
  alt_description: string;
};

const API_KEY = "dmAlJoRYTf-jLJ0fMbaMpPBw_5RhhJ1psyJuoau3Yuo";
const API_ENDPOINT = "https://api.unsplash.com/search/photos";

export const FetchQuery = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Result[]>([]);

  const handleSearch = async (event: any) => {
    event.preventDefault();

    const url = `${API_ENDPOINT}?query=${query}&client_id=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Unsplash Image Viewer</h1>
      <form onSubmit={handleSearch}>
        <label htmlFor="query">Search query:</label>
        <input
          type="text"
          id="query"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="e.g. over a million views"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {results.map((result) => (
          <img
            key={result.id}
            src={result.urls.small}
            alt={result.alt_description}
          />
        ))}
      </div>
    </div>
  );
};
