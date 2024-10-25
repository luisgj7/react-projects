import "./search.component.css";
import { useDebounce, useSearchValidation } from "../../hooks";
import { SearchProps } from "../../models";
import {
  ChangeEvent,
  FC,
  FormEvent,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { FiltersContext } from "../../contexts/filters.context";

export const Search: FC<SearchProps> = ({
  placeHolder,
  ms = 500,
  hideSearchButton = false,
  useTypeAhead = false,
  onSearchChange,
}): ReactElement => {
  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounce(search, ms);
  const { query, error } = useSearchValidation(debouncedSearch);
  const { setFilters } = useContext(FiltersContext);

  useEffect(() => {
    if (!useTypeAhead || error || !query) return;

    setFilters({ search: query });
    onSearchChange(query);
  }, [error, query, useTypeAhead]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value: string = event.target.value;
    if (value.startsWith(" ")) return;
    setSearch(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (error || !query) return;

    setFilters({ search: query });
    onSearchChange(query);
  };

  return (
    <div className="search-content">
      <form onSubmit={handleSubmit}>
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
