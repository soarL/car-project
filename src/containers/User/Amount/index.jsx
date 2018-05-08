import React,{ Component } from 'react'
import Header from '@/components/Header'
import './index.less'
import Title from '@/components/Title'
import userInfoAPI from '@/api/userInfo'

class Item extends Component{
	render(){
		return(
			<div className='item'>
				<img src={this.props.src} alt={this.props.src}/>
			</div>
		)
	}
}

class Amount extends Component{
	  constructor(props) {
	    super(props);
	    this.state = {
	      idCar:[],
	      car:[],
	      other:[],
	    };
	  }
	 async componentDidMount() {
	    let strWorkNum = this.props.match.params.strWorkNum
	    let data = await userInfoAPI.oddIdimg({strWorkNum:strWorkNum});
	    this.setState({
	      idCar:data[0].list,
	      car:data[1].list,
	      other:data[2].list
	    })
	}

	render(){
		return(
			<div className='amount-details'>
				<Header title='证件清单'/>
	
				<Title>身份证</Title>
					{
						this.state.idCar.map((value,key)=><Item src={value.imgSrc} key={key}/>)
					}
				<Title>行驶证</Title>
					{
						this.state.car.map((value,key)=><Item src={value.imgSrc} key={key}/>)
					}
				<Title>其他证件</Title>
					{
						this.state.other.map((value,key)=><Item src={value.imgSrc} key={key}/>)
					}
			</div>
		)
	}
}

export default Amount