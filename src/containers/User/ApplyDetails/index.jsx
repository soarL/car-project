import React,{ Component } from 'react'
import Header from '@/components/Header'
import './index.less'
import { Flex ,WhiteSpace,Button} from 'antd-mobile'
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

class ApplyDetails extends Component{
	  constructor(props) {
	    super(props);
	    this.state = {

	      user_src:"",
	      phone:"",
	      name:"",
	      oddNumber:"",
	      data:[]
	    };
	  }

	 async componentDidMount() {
	    let strWorkNum = this.props.match.params.strWorkNum
	    let newData = []
	    let data = await userInfoAPI.applyDetails({strWorkNum:strWorkNum})
	    newData.push(data.car)
	    newData.push(data.insurance)
	    newData.push(data.addition)
	    newData.push(data.business)
	    this.setState({
	      data:newData,
	      user_src:data.user_src,
	      phone:data.phone,
	      name:data.name,
	      oddNumber:data.oddNumber,
	    })

	}

	render(){
		return(
			<div className='apply-details'>
				<Header title='申请详情'/>

					<Flex className='face-img-box'>
						<Flex.Item>
							<Flex justify='center'>
								<div className='img-box'>
									<img src={this.state.user_src ? this.state.user_src:require('./asset/idcar.svg')} alt="touxiang"/>
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
							this.state.data.map((value,key)=><ItemGroup title={value.title} data={value.list} key={key}/>)
						}
					</div>
					<Title href={'/amount/' + this.state.oddNumber}>证件清单</Title>

					<WhiteSpace/>

					<Title href={'/paymenthistory/' + this.state.oddNumber}>还款详情</Title>
					<div  className='button-box'>
						<Button type="primary" >确定</Button>
						<WhiteSpace/>
						<Button type="default" >取消</Button>
					</div>
			</div>
		)
	}
}

export default ApplyDetails