export interface SearchProps {
  placeHolder: string;
  ms: number;
  hideSearchButton: boolean;
  useTypeAhead: boolean;
  onSearchChange: (search: string) => void;
}