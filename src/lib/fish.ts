import data from "@/data/fish.json";

export type FishItem = {
  id: string;
  name: string;
  category: string;
  price: string;
  unit_info: string;
  /** Filename inside `public/img/fish/`. Empty string means no image. */
  image_path: string;
  in_stock: boolean;
  sort_order: number;
};

export const CATEGORIES = [
  "Ikan Laut",
  "Ikan Air Tawar",
  "Cumi-Cumi",
  "Udang",
  "Kerang Tahu",
  "Lain Lain",
] as const;

export type Category = (typeof CATEGORIES)[number];

const CATEGORY_ORDER = new Map(CATEGORIES.map((c, i) => [c as string, i]));

export const FISH_ITEMS: FishItem[] = (data as FishItem[])
  .slice()
  .sort(
    (a, b) =>
      (CATEGORY_ORDER.get(a.category) ?? CATEGORIES.length) -
        (CATEGORY_ORDER.get(b.category) ?? CATEGORIES.length) ||
      a.sort_order - b.sort_order
  );

export function getFishItems({ inStockOnly = false } = {}): FishItem[] {
  return inStockOnly ? FISH_ITEMS.filter((f) => f.in_stock) : FISH_ITEMS;
}

export function fishImageUrl(path: string) {
  return `/img/fish/${path}`;
}
