import { Component } from "react";
import "./searchBlock.css";
import FilterButton from "../FIlterButton/FilterButton";

class SearchBlock extends Component {
  render() {
    return (
      <div className="search_filter_container flex">
        <div className="search_container flex">
          <p className="search_title">Lookiing for</p>
          <input
            className="search_input"
            type="text"
            placeholder="start typing here..."
            value={this.props.searchTerm}
            onChange={this.props.handleSearch}
          />
        </div>
        <div className="filter_main_container flex">
          <p className="filter_title">Or filter</p>
          <div className="filter_button_container flex">
            <FilterButton handleFilter={this.props.handleFilter}>
              Brazil
            </FilterButton>
            <FilterButton handleFilter={this.props.handleFilter}>
              Kenya
            </FilterButton>
            <FilterButton handleFilter={this.props.handleFilter}>
              Columbia
            </FilterButton>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBlock;
