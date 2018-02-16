import React from 'react';
import Title from './Title';
import formsData from '../formsData.json';
import SmallSlider from './SmallSlider';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';


class ResultSection extends React.Component {

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

    return (
      <div>
        <Title
          titleValue={this.result(this.props.selectedCheckboxes)}
        />
        <SmallSlider
        selectedCheckboxes={this.props.selectedCheckboxes}
        />
      </div>
    );
  }
}

export default ResultSection;