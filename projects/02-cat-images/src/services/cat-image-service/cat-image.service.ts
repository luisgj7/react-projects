import { getAll } from "../abstract-base-entity-service/abstract-base-entity.service";

const CAT_IMAGE_ENDPOINT = 'https://cataas.com'

export const getCatImage = async (threeFirstWords: string): Promise<ImageCat> => {
    const url = `cat/says/${threeFirstWords}?size=50&color=red&json=true`
    const { data } = await getAll<ImageCat>(CAT_IMAGE_ENDPOINT, url);
    return data;
}

export interface ImageCat {
    tags: string[];
    createdAt: string;
    updatedAt: string;
    mimetype: string;
    size: number;
    _id: string;
}
