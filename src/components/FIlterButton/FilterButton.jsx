import { Component } from "react";
import "./filterButton.css";

class FilterButton extends Component {
  render() {
    return (
      <button
        onClick={() => this.props.handleFilter(this.props.children)}
        className="filter_button"
      >
        {this.props.children}
      </button>
    );
  }
}

export default FilterButton;
