import { getAll } from "../abstract-base-entity-service/abstract-base-entity.service";
const CAT_FACT_ENDPOINT = 'https://catfact.ninja';

export const getCatFact = async(): Promise<Fact> => {
  const { data } = await getAll<Fact>(CAT_FACT_ENDPOINT, 'fact');
  return Object.keys(data ?? {}).length ? data : { fact: "", length: 0 };
}

interface Fact {
  fact: string;
  length: number;
}
