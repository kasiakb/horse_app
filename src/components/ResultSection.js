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
  columnVector,
  matrix,
  transformArr,
  removeElements,
  matrixForm,
  averageOfResults,
  solveEquations,
  equations,
} from '../components/ResultCalculation-functions'

const Handle = Slider.Handle;


class ResultSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliders: {},
    };

    this.passChange = this.passChange.bind(this);
  }

  marks = {
    0: "0 kg",
    2: "2 kg"
  }

  handle = (props) => {
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
  };

  passChange(defaultValue, title) {
    this.setState({
      [title]: defaultValue,
    })
  }

  smallSlidersValues(checkboxes) {
    // console.log('handle', this.handle) 
    const sliders = checkboxes.reduce((arrayWithSlidersValues, sliderName) => {
      arrayWithSlidersValues.push(
        <SmallSlider
          key={sliderName}
          title={sliderName}
          defaultValue={0}
          marks={this.marks}
          minCapacity={0}
          maxCapacity={2}
          handle={this.handle}
          passChange={this.passChange}
        />
      )
      return arrayWithSlidersValues
    }, []);
    return sliders
  }

  // columnVector(compose){
  //     const nutritionObj = nutritionStandards(this.props.workValue, this.props.weightValue, nutritrionData.nutritrionData)
  //     const vectors = compose([
  //       matrixForm, 
  //       removeElements, 
  //       transformArr, 
  //     ])
  //   return vectors
  // } 
  
  
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

  // finalResult(matrix, vector) {
  //   if(matrix[0].length > )
  //   return _.flowRight([
  //     averageOfResults,
  //     solveEquations,
  //     equations
  //   ])(matrix, vector)
  // }
  

  componentWillMount() {
    // console.log('vector', this.columnVector())
  }
  
  render() {
  // console.log(this.props.selectedCheckboxes)
  // console.log('state:', this.state)
  console.log('hello', this.sliders)
  console.log(this.state)
  console.log('vector', this.columnVector(this.props.workValue, this.props.weightValue, nutritrionData.nutritrionData))
  console.log('matrix', this.matrix(this.props.selectedCheckboxes, forageData.forageData))
  // console.log('result',this.finalResult(this.matrix(this.props.selectedCheckboxes, forageData.forageData), this.columnVector(this.props.workValue, this.props.weightValue, nutritrionData.nutritrionData)))
  console.log('props', this.props)
    return (
      <div>
        <Title
          titleValue={resulSectionTitle(this.props.selectedCheckboxes, formsData.resultTitle)}
        />
        {this.smallSlidersValues(this.props.selectedCheckboxes)}
      </div>
    );
  }
}

export default ResultSection;