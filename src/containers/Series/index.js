import React, { Component } from "react";
import SeriesList from "../../components/SeriesList";
import Loader from "../../Loader";
import Intro from "../../components/Intro";

class Series extends Component {
  state = {
    series: [],
    seriesName: "",
    isFetching: false
  };

  // const series = ["silicon valley", "game of thrones", "euthoria", "grownish"];
  // setTimeout(() => {
  //   this.setState({
  //     series
  //   });
  // }, 2000);

  onSeriesInput = e => {
    this.setState({ seriesName: e.target.value, isFetching: true });
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(Response => Response.json())
      .then(json => this.setState({ series: json, isFetching: false }));
  };

  render() {
    const { series, seriesName, isFetching } = this.state;
    return (
      <div>
        <Intro message="Here you can find all of your most loved series" />

        <div>
          <input value={seriesName} type="text" onChange={this.onSeriesInput} />
        </div>

        {!isFetching && series.length === 0 && seriesName.trim() === "" && (
          <p>please enter series name into the input</p>
        )}
        {!isFetching && series.length === 0 && seriesName.trim() !== "" && (
          <p>No Tv Series have been found with this name</p>
        )}
        {isFetching && <Loader />}
        {!isFetching && <SeriesList list={this.state.series} />}
      </div>
    );
  }
}

export default Series;
