import { useDebounce, useSearch } from "../../hooks";
import "./search.component.css";
import { ChangeEvent, FormEvent, FunctionComponent, useEffect } from "react";

export const Search: FunctionComponent<SearchProps> = ({
  placeHolder,
  ms = 500,
  hideSearchButton = false,
  useTypeAhead = false,
  onSearchChange,
}) => {
  const { search, setSearch, error } = useSearch();
  const debouncedSearch = useDebounce<string>(search, ms);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value: string = event.target.value;
    if (value.startsWith(" ")) return;
    setSearch(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (error) return;
    
    onSearchChange(search);
  };

  useEffect(() => {
    if (!useTypeAhead) return;

    if (debouncedSearch && !error) {
      onSearchChange(debouncedSearch);
    }
  }, [ useTypeAhead, search, debouncedSearch, error ]);

  return (
    <div className="search">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className={error ? "input-error" : ""}
          onChange={handleChange}
          value={search}
          name="query"
          type="text"
          autoComplete="off"
          placeholder={!search ? placeHolder : ""}
        />
        {!hideSearchButton && <button type="submit"> Search </button>}
      </form>
      {error && <p className="error"> {error} </p>}
    </div>
  );
};

export interface SearchProps {
  placeHolder: string;
  ms?: number;
  hideSearchButton?: boolean;
  useTypeAhead?: boolean;
  onSearchChange: (search: string) => void;
}
