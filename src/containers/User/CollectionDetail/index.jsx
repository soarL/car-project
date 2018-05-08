import React,{ Component } from 'react'
import Header from '@/components/Header'
import './index.less'
import { Flex,Button} from 'antd-mobile'
import Title from '@/components/Title'
import userInfoAPI from '@/api/userInfo'


const data =[
	{
		title:'逾期记录',data:[
		{title:'逾期记录',value:'3期'},
		{title:'实还日期',value:'2017-10-10'},
		{title:'拖欠本金',value:'500元'},
		{title:'拖欠利息',value:'13元'},
	]},
	{
		title:'催收记录1',data:[
		{title:'催收方式',value:'上门'},
		{title:'催收人员',value:'催收员A'},
		{title:'催收时间',value:'2018-05-02'},
		{title:'催收结果',value:'客户答应下午3点前还款'},
	]},
	{
		title:"催收记录2",data:[
		{title:'催收方式',value:'上门'},
		{title:'催收人员',value:'催收员D'},
		{title:'催收时间',value:'2018-05-02'},
		{title:'催收结果',value:'客户答应下午3点前还款'},
	]},
	{
		title:"催收记录3",data:[
		{title:'催收方式',value:'上门'},
		{title:'催收人员',value:'催收员F'},
		{title:'催收时间',value:'2018-05-02'},
		{title:'催收结果',value:'客户答应下午3点前还款'},
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

class CollectionDetail extends Component{
	constructor(props) {
		super(props);
		this.state={
			data:data,
			name:"",
			phone:'',
			faceScr:""
		}

	}
	async componentDidMount(){
		let oddNumber = this.props.match.params.oddNumber
		let intPeriod = this.props.match.params.intPeriod
		let data = await userInfoAPI.workUserCollect({oddNumber,intPeriod})
		console.log(data)
		this.setState({
			name:data.name,
			phone:data.phone,
			faceScr:data.faceScr,
		})
	}

	render(){
		return(
			<div className='apply-details'>
				<Header title='催收记录详情'/>
					<Flex className='face-img-box'>
						<Flex.Item>
							<Flex justify='center'>
								<div className='img-box'>
									<img src={this.state.faceSrc ? this.state.faceSrc :require('./asset/idcar.svg')} alt="touxiang"/>
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
							data.map((value,key)=><ItemGroup title={value.title} data={value.data} key={key}/>)
						}
					</div>
		
					<div  className='button-box'>
						<Button type="primary" onClick={()=>{this.props.history.push('/addcollection')}}>填写催收记录</Button>
					</div>
					<div className='heights'></div>
			</div>
		)
	}
}

export default CollectionDetail