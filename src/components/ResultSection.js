import React from 'react';
import Title from './Title';
import SmallSliderTitle from './SmallSliderTitle'
import formsData from '../formsData.json';

class ResultSection extends React.Component {

  sliderTitle(selectedCheckboxes) {
    return selectedCheckboxes.map((sliderTitle) => {
      return (
        <div key={sliderTitle}> 
          <label>
            {/* <input 
              name = {sliderTitle}
            /> */}
            {sliderTitle}
          </label>
        </div>
      )
    })
  }

  result = (selectedCheckboxes) => {
    let desc
    if (selectedCheckboxes === [0] || selectedCheckboxes.length === 0 ) {
      desc = null
    }else{
      desc = formsData.resultTitle
    }
    return desc
  }

  render() {
    console.log(this.sliderTitle(this.props.selectedCheckboxes))
    return (
      <div>
        <Title
          titleValue={this.result(this.props.selectedCheckboxes)}
        />
        <SmallSliderTitle
          smallSliderTitleValue={this.sliderTitle(this.props.selectedCheckboxes)}
        />
        {this.props.input}
      </div>
    );
  }
}

export default ResultSection;