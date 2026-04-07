import "./FilterButton.css";

const FilterButton = ({handleFilter, activeFilter, children}) => {
  return (
    <button
      onClick={() => handleFilter(children)}
      className={activeFilter === children ? "filter_button active_filter" : "filter_button"}
    >
      {children}
    </button>
  );
};

export default FilterButton;
