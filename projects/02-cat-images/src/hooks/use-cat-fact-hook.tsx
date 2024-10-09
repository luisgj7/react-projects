import { useState, useEffect } from "react";
import { getCatFact } from "../services";

export function useCatFact() {
    const [fact, setFact] = useState<string>("");
  
    const refreshFact = () => {
      getCatFact().then(({fact}) => setFact(fact));
    }
  
    useEffect(refreshFact, []);
  
    return { fact, refreshFact }
  }