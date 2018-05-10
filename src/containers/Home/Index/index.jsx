import React,{ Component } from 'react'
import Header from '@/components/Header'
import Carousel from '@/components/Carousel'
import Title from '@/components/Title'
import './index.less'

import { List, InputItem ,Picker, Button,Toast,Modal} from 'antd-mobile'
import { createForm } from 'rc-form'
import homeAPI from '@/api/home'

const alert = Modal.alert

class Index extends Component{

	constructor(props){
		super(props)
		this.state={
			strCarNumber:"未上牌",
			data:[],
			strTravelAdder:['350000','350100','350102'],
		}
	}
	async componentDidMount() {
		let backData = await homeAPI.goToTable()
		if(backData){

	       alert('您好', '您有未完成的表单是否继续填写？', [
	         { text: '重新填写', onPress:()=>false},
	         { text: '继续', onPress: () => {this.props.history.push(backData)} },
	       ])
			
			return
		}

		let data = await homeAPI.city()
		this.setState({
			data
		})
	}

	submit = ()=>{
		this.props.form.validateFields( async (err,value)=>{
			if(!value.strRealName){
				Toast.fail('请填写姓名！')
				return
			}
			if(!value.strPhone || (value.strPhone.length !== 11)){
				Toast.fail('请填写11位手机号！')
				return
			}
			value.strCarNumber = this.state.strCarNumber
			let data = await homeAPI.workUserData(value)

			if(data.ret==='0000'){
				this.props.history.push({pathname:'/home/insurance',query:data.data.content})
			}else{
				Toast.fail(data.msg)
			}

		})
	}
	render(){
		const { getFieldProps } = this.props.form
		return(
			<div className='home-index'>
				<Header title='车险客户管理'/>
				<Carousel/>
				<Title>个人信息</Title>
				<List>
					<InputItem
						{...getFieldProps('strRealName')}
			            placeholder="必填"
			            clear
			            moneyKeyboardAlign="left"
			          >姓名：</InputItem>
			    </List>
	        	<List>
	        		<InputItem
	  		      		{...getFieldProps('strPhone')}
	                    placeholder="必填"
	                    type='text'
	                    clear
	                    moneyKeyboardAlign="left"
	                  >手机号码：</InputItem>
	        	</List>
                <Title>车辆信息</Title>
            	<Picker extra="请选择(可选)"
            	  data={this.state.data}
            	  title="选择城市"
            	  {...getFieldProps('strTravelAdder', {
            	    initialValue:['350000','350100','350102'],
            	  })}
            	  onChange={(e)=>{this.setState({strTravelAdder:e})}}
            	  value={this.state.strTravelAdder}
            	>
            	  <List.Item arrow="horizontal">行驶城市：</List.Item>
            	</Picker>
				<List className='car-num'>
					<InputItem
						{...getFieldProps('strCarNumber')}
			            placeholder="请写车牌号"
			            clear
			            moneyKeyboardAlign="left"
			            value={this.state.strCarNumber}
			            onChange={(e)=>{this.setState({strCarNumber:e})}}
			          >车牌号：</InputItem>
			          <Button type="primary" size="small" inline className='car-num-but' onClick={()=>{this.setState({strCarNumber:"未上牌"})}}>未上牌</Button>
			    </List>
			    <div  className='button-box'>
			    	<Button type="primary" onClick={this.submit}>下一步</Button>
			    </div>
			</div>
		)
	}
}

export default createForm()(Index)