import React from 'react';
import Title from './Title';
import formsData from '../formsData.json';
import SmallSlider from './SmallSlider';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import { resulSectionTitle } from './App-functions';
import _ from 'lodash'
import nutritrionData from '../nutritrionData.json';
import forageData from '../forageData.json';
import {
  nutritionStandards,
  forageStandards,
  transformArr,
  removeElements,
  matrixForm,
  dataForSmallSliders,
} from '../components/Calculations-functions'

const Handle = Slider.Handle;

class ResultSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliders: this.slidersValuesParser(props)
    };

    this.passChange = this.passChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.slidersValuesParser(nextProps) !== (this.state.sliders)) {
      this.setState({
        sliders: this.slidersValuesParser(nextProps)
      })
    }
  }

  columnVector(workValue, weightValue, nutritrionData){
    return _.flowRight([
      matrixForm, 
      removeElements, 
      transformArr, 
      nutritionStandards
    ])(workValue, weightValue, nutritrionData)
  } 

  matrix(selectedCheckboxes, foragenData){
    return _.flowRight([
      matrixForm, 
      removeElements, 
      transformArr, 
      forageStandards
    ])(selectedCheckboxes, foragenData)
  } 

  slidersValuesParser(props) {
    const results = dataForSmallSliders(
      this.matrix(props.selectedCheckboxes, forageData.forageData),
      this.columnVector(props.workValue, props.weightValue, nutritrionData.nutritrionData), 
      props.weightValue, 
      props.selectedCheckboxes)
    const sliders = results.reduce((slidersObject, sliderValues) => {
      this.passChange(sliderValues[2], sliderValues[0])
      slidersObject[sliderValues[0]] = {
        maxValue: sliderValues[1],
        currentValue: sliderValues[2],
      }
      return slidersObject
    }, {})
    return sliders
  }

  passChange(newValue, title) {
    this.setState((prevState, props) => {
      if(prevState.sliders[title] && title != 'Siano') {
        return prevState.sliders[title].currentValue = newValue
      }
    })
  }

  handle(props) {
    const { value, dragging, index, ...restProps } = props;
    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={`${value} kg`}
        visible={true}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </Tooltip>
    );
  }

  marks(number) {
    const roundNum = Math.round(number, 1)
    const properties = [0, roundNum]
    const values = ["0 kg", `${roundNum} kg`]
    const marks = _.zipObject(properties, values)
    return marks
  }
    
  smallSlidersValues() {
    const sliders = Object.keys(this.state.sliders).reduce((slidersArray, sliderTitle) => {
      slidersArray.push(
        <SmallSlider
          key={sliderTitle}
          title={sliderTitle}
          defaultValue={this.state.sliders[sliderTitle].currentValue}
          marks={this.marks(this.state.sliders[sliderTitle].maxValue)}
          minCapacity={0}
          maxCapacity={Math.round(this.state.sliders[sliderTitle].maxValue)}
          handle={this.handle}
          passChange={this.passChange}
        />
      )
      return slidersArray
    }, [])
    return sliders
  }
  
  render() {
    return (
      <div>
        <Title
          titleValue={resulSectionTitle(this.props.selectedCheckboxes, formsData.resultTitle)}
        />
        {this.smallSlidersValues()}
      </div>
    );
  }
}

export default ResultSection;