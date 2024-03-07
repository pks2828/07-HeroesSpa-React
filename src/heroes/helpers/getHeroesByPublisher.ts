import { heroes } from "../data/heroes";

console.log(heroes);


export const getHeroesByPublisher = (publisher: string) => {
    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" not found`);
    }
    return heroes.filter((hero) => hero.publisher === publisher);
};
