import React,{ Component } from 'react'
import Header from '@/components/Header'
import Title from '@/components/Title'

import { Button,List,Radio,Toast} from 'antd-mobile'
import { createForm } from 'rc-form'
import homeAPI from '@/api/home'

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
	    this.setState({
	      value,
	    });
	}
	submit = ()=>{
		this.props.form.validateFields(async (err,value)=>{
			switch (this.state.value) {
				case 0:
					value.strInsuranceOffice = 'intChinaLife'
					break;
				case 1:
					value.strInsuranceOffice = 'intPingan'
					break;
				case 2:
					value.strInsuranceOffice = 'intCpic'
					break;
				case 3:
					value.strInsuranceOffice = 'intChinaContinentInsurancr'
					break;
				default:
					value.strInsuranceOffice = 'intChinaLife'
					break;
			}
			value.strWorkNum = this.props.location.query
			let data = await homeAPI.workOfficeData(value)
			if(data.ret==='0000'){
				this.props.history.push({pathname:'/home/upload',query:data.data.content})
			}else{
				Toast.fail(data.msg)
			} 
			
		})
	}
	componentDidMount() {
		if(!this.props.location.query){
			Toast.fail('申请失败，请重新填写！')
			this.props.history.push('/')
		}
	}
	render(){
		const { getFieldProps } = this.props.form

		return(
			<div className='coverage'>
				<Header title='选择保险公司'/>
				<Title>请选择保险公司</Title>

				<List>
				  {data.map(i => (
		           <RadioItem 
		           	{...getFieldProps('strInsuranceOffice')}
		           	key={i.value} 
		           	checked={this.state.value === i.value} 
		           	onChange={() => this.onChange(i.value)}>
		             {i.label}
		           </RadioItem>
		         ))}
				</List>
				
            	<div  className='button-box'>
            		<Button type="primary" onClick={this.submit}>下一步</Button>
            	</div>

			</div>
		)
	}
}

export default createForm()(Company)