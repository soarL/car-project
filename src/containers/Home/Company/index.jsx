import React,{ Component } from 'react'
import Header from '@/components/Header'
import Title from '@/components/Title'

import { Button,List,Radio} from 'antd-mobile'
import { createForm } from 'rc-form'

import './index.less'

const RadioItem = Radio.RadioItem

const data = [
  { value: 0, label: '平安车险' },
  { value: 1, label: '人保车险' },
  { value: 2, label: '太平洋车险' },
  { value: 3, label: '国寿财车险' }
]

class Company extends Component{
	constructor(props){
		super(props)
		this.state={
			value:0
		}
	}
	onChange = (value) => {
	    console.log('checkbox');
	    this.setState({
	      value,
	    });
	  }
	render(){

		return(
			<div className='coverage'>
				<Header title='选择保险公司'/>
				<Title>请选择保险公司</Title>

				<List>
				  {data.map(i => (
		           <RadioItem key={i.value} checked={this.state.value === i.value} onChange={() => this.onChange(i.value)}>
		             {i.label}
		           </RadioItem>
		         ))}
				</List>
				
            	<div  className='button-box'>
            		<Button type="primary" onClick={()=>{this.props.history.push('/home/company')}}>下一步</Button>
            	</div>

			</div>
		)
	}
}

export default createForm()(Company)