import "./SearchBlock.css";
import FilterButton from "../FIlterButton/FilterButton";
import products from '@assets/data.json';
import { useContext, useState } from "react";
import { Context } from "@context/FilteredItemsContext";

const SearchBlock = () => {
  const {setFilteredItems} = useContext(Context)

  const [activeFilter, setActiveFilter] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilter = (type) => {
    if (type === "all" || activeFilter === type) {
      setFilteredItems(products);
      setActiveFilter(null);
    } else {
      const filtered = products.filter((product) => product.country === type);
      setFilteredItems(filtered);
      setActiveFilter(type);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    const filtered = products.filter((product) =>
      product.country.toLowerCase().includes(value.toLowerCase()),
    );
    setSearchTerm(value);
    setFilteredItems(filtered);
  };

  return (
    <div className="search_filter_container flex">
      <div className="search_container flex">
        <p className="search_title">Lookiing for</p>
        <input
          className="search_input"
          type="text"
          placeholder="start typing here..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="filter_main_container flex">
        <p className="filter_title">Or filter</p>
        <div className="filter_button_container flex">
          <FilterButton handleFilter={handleFilter} activeFilter={activeFilter}>
            Brazil
          </FilterButton>
          <FilterButton handleFilter={handleFilter} activeFilter={activeFilter}>
            Kenya
          </FilterButton>
          <FilterButton handleFilter={handleFilter} activeFilter={activeFilter}>
            Columbia
          </FilterButton>
        </div>
      </div>
    </div>
  );
};

export default SearchBlock;
