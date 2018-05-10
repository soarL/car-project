import React,{ Component } from 'react'
import Header from '@/components/Header'
import './index.less'
import { Flex,Button ,InputItem ,List ,DatePicker,TextareaItem,WhiteSpace} from 'antd-mobile'
import Title from '@/components/Title'
import { createForm } from 'rc-form';
import userInfoAPI from '@/api/userInfo'

class ItemGroup extends Component{
	render(){
		return(
			<div>
				<Title>{this.props.title}</Title>
				{
					this.props.data.map((value,key)=><Item title={value.title} value={value.value} key={key}/>)
				}
			</div>
		)
	}
}

class Item extends Component{
	render(){
		return(
			<div className='item'>
				{this.props.title}：<span>{this.props.value}</span>
			</div>
		)
	}
}

class AddCollection extends Component{
	constructor(props){
		super(props)
		this.state={
			date:new Date(Date.now()),
			faceSrc:'',
			name:'',
			phone:'',
			data:[]
		}
	}
	submit=(e)=>{
		this.props.form.validateFields((err, values) => {

			function time(e){
				var d = new Date(e);  
				var youWant=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(); 
				return youWant
			}

			values.tCreateTime = time(this.state.date)
			values.oddNumber = this.props.match.params.oddNumber
			values.intPeriod = this.props.match.params.intPeriod
		    userInfoAPI.addCollection(values)
		})
	}
	componentDidMount() {
		if(this.props.location.query){
		let data = this.props.location.query
			this.setState({
				faceSrc:data.faceSrc,
				name:data.name,
				phone:data.phone,
				data:data.data
			})
		}
	}
	render(){
		const { getFieldProps } = this.props.form
		return(
			<div className='apply-details'>
				<Header title='新增催收记录'/>
				<Flex className='face-img-box'>
					<Flex.Item>
						<Flex justify='center'>
							<div className='img-box'>
								<img src={this.state.faceSrc ? this.state.faceSrc : require('./asset/idcar.svg')} alt="touxiang"/>
							</div>				
						</Flex>
					</Flex.Item> 
					<Flex.Item className='user-name'>
						<p>{this.state.name}</p>
						<p>手机：{this.state.phone}</p>
					</Flex.Item>
				</Flex>
				<div className='details'>
					{
						this.state.data.map((value,key)=><ItemGroup title={value.title} data={value.data} key={key}/>)
					}
				</div>
				<WhiteSpace size='lg'/>
				<List>
					<InputItem
					 {...getFieldProps('strWay')}
					  type='text'
					  placeholder="必填!"
					  clear
					>催收方式：</InputItem>
					<InputItem
					 {...getFieldProps('strUser')}
					  type='text'
					  placeholder="必填!"
					  clear
					>催收人员：</InputItem>

					<DatePicker
					      mode="date"
					      title="选择日期"
					      extra="Optional"
					      value={this.state.date}
					      onChange={date => this.setState({ date })}
					    >
					    <List.Item arrow="horizontal">催收时间：</List.Item>
					</DatePicker>

					<TextareaItem
			        {...getFieldProps('strCollectResults')}
			        placeholder='必填！'
			        rows={5}
			        count={999}
			      />
				</List>

				<div  className='button-box'>
					<Button type="primary" onClick={this.submit}>提交</Button>
				</div>
			</div>
		)
	}
}

export default createForm()(AddCollection)