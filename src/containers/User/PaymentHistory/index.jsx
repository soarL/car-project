import React,{ Component } from 'react'
import Header from '@/components/Header'
import './index.less'
import List from '@/components/List'



const data =[
	{name:'类',faceUrl:'https://asset.91hc.com/src/images/index/new-center-1.png',periods:'24',borrow:'6000'},
	{name:'类',faceUrl:'https://asset.91hc.com/src/images/index/new-center-1.png',periods:'24',borrow:'6000'},
	{name:'类',faceUrl:'https://asset.91hc.com/src/images/index/new-center-1.png',periods:'24',borrow:'6000'},
	{name:'类',faceUrl:'https://asset.91hc.com/src/images/index/new-center-1.png',periods:'24',borrow:'6000'},
	{name:'类',faceUrl:'https://asset.91hc.com/src/images/index/new-center-1.png',periods:'24',borrow:'6000'},
	{name:'类',faceUrl:'https://asset.91hc.com/src/images/index/new-center-1.png',periods:'24',borrow:'6000'},
]


class PaymentHistory extends Component{
	render(){
		return(
			<div className='amount-details'>
				<Header title='还款详情'/>
				{
					data.map((value,key)=><List faceUrl={value.faceUrl} name={value.name} periods={value.periods} borrow={value.borrow} key={key}/>)
				}
			</div>
		)
	}
}

export default PaymentHistory