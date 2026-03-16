import { Component } from "react";
import './filterButton.css'

class FilterButton extends Component {
  render() {
    return(
      <button className="filter_button">{this.props.children}</button>
    )
  }
}

export default FilterButton