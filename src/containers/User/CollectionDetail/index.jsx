import React,{ Component } from 'react'
import Header from '@/components/Header'
import './index.less'
import { Flex,Button} from 'antd-mobile'
import Title from '@/components/Title'
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

class CollectionDetail extends Component{
	constructor(props) {
		super(props);
		this.state={
			data:[],
			name:"",
			phone:'',
			faceScr:"",
			url:"/"
		}

	}
	async componentDidMount(){

		let oddNumber = this.props.match.params.oddNumber
		let intPeriod = this.props.match.params.intPeriod
		let data = await userInfoAPI.workUserCollect({oddNumber,intPeriod})

		let url = {
			pathname:`/addcollection/${this.props.match.params.oddNumber}/${this.props.match.params.intPeriod}`,
			query:{
				data:[data.data[0]],
				faceSrc:data.avatar,
				name:data.nickName,
				phone:data.strPhone,
			}
		}

		this.setState({
			data:data.data,
			name:data.nickName,
			phone:data.strPhone,
			faceScr:data.avatar,
			url,
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
							this.state.data.map((value,key)=><ItemGroup title={value.title} data={value.data} key={key}/>)
						}
					</div>
		
					<div  className='button-box'>
						<Button type="primary" onClick={()=>{this.props.history.push(this.state.url)}}>填写催收记录</Button>
					</div>
					<div className='heights'></div>
			</div>
		)
	}
}

export default CollectionDetail