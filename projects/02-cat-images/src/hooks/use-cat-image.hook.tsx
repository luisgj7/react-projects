import { useState, useEffect } from "react";
import { getCatImage } from "../services";

const CAT_PREFIX = "https://cataas.com/cat/";

export function useCatImage({ fact }: { fact: string }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!fact) return;
    const firstThreeWords = fact.split(" ", 3);

    getCatImage(firstThreeWords.join(",")).then(({ _id }) => {
      setImageUrl(`${CAT_PREFIX}${_id}/says/${firstThreeWords.join(" ")}`);
    });
  }, [fact]);

  return { imageUrl };
}
