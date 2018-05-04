import React,{ Component } from 'react'
import Header from '@/components/Header'
import './index.less'
import { Flex,Button ,InputItem ,List ,DatePicker,TextareaItem,WhiteSpace} from 'antd-mobile'
import Title from '@/components/Title'
import { createForm } from 'rc-form';


const data =[
	{
		title:'逾期记录',data:[
		{title:'逾期记录',value:'3期'},
		{title:'实还日期',value:'2017-10-10'},
		{title:'拖欠本金',value:'500元'},
		{title:'拖欠利息',value:'13元'},
	]},
]

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
			date:new Date(Date.now())
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
								<img src={require('./asset/idcar.svg')} alt="touxiang"/>
							</div>				
						</Flex>
					</Flex.Item> 
					<Flex.Item className='user-name'>
						<p>梦醒时分</p>
						<p>手机：18959333600</p>
					</Flex.Item>
				</Flex>
				<div className='details'>
					{
						data.map((value,key)=><ItemGroup title={value.title} data={value.data} key={key}/>)
					}
				</div>
				<WhiteSpace size='lg'/>
				<List>
					<InputItem
					  type='text'
					  placeholder="必填!"
					  clear
					>催收方式：</InputItem>
					<InputItem
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
			        {...getFieldProps('count')}
			        placeholder='必填！'
			        rows={5}
			        count={999}
			      />
				</List>

				<div  className='button-box'>
					<Button type="primary">提交</Button>
				</div>
			</div>
		)
	}
}

export default createForm()(AddCollection)