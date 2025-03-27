import React from "react";
import PriceRangeSlider from "./PriceRangeSlider";

export default function UrnFilters({
  searchQuery,
  onSearchChange,
  priceRange,
  onPriceRangeChange,
  sortBy,
  onSortByChange,
}) {
  const commonFieldClasses = "border rounded px-3 py-2 text-sm h-10";

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-6 flex-wrap">
      {/* 🔍 Hledání */}
      <input
        type="text"
        placeholder="Hledat urnu..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className={`${commonFieldClasses} w-full lg:w-[25%] placeholder:text-gray-400`}
      />

      {/* 💰 Cenový slider */}
      <div className="w-full lg:w-[40%]">
        <PriceRangeSlider values={priceRange} onChange={onPriceRangeChange} />
      </div>

      {/* ↕️ Třídění */}
      <select
        value={sortBy}
        onChange={(e) => onSortByChange(e.target.value)}
        className={`${commonFieldClasses} w-full lg:w-[20%] self-center lg:self-auto`}
      >
        <option value="bestsellers">Nejprodávanější</option>
        <option value="price_asc">Cena: Nejnižší</option>
        <option value="price_desc">Cena: Nejvyšší</option>
        <option value="name_asc">Název: A–Z</option>
        <option value="name_desc">Název: Z–A</option>
      </select>
    </div>
  );
}
