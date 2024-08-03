export type PriceRangeSelect = {
  min: number;
  max: number;
};

export function getPriceRange(values: string[]): PriceRangeSelect {
  if (values.length === 0) {
    return { min: 0, max: 0 };
  }

  if (values.length === 1) {
    const [min, max] = values[0].split('_');
    return { min: parseInt(min, 10), max: parseInt(max, 10) };
  }

  const [min] = values[0].split('_');
  const [, max] = values[values.length - 1].split('_');
  return { min: parseInt(min, 10), max: parseInt(max, 10) };
}
