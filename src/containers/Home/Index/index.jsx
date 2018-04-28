import React,{ Component } from 'react'
import Header from '@/components/Header'
import Carousel from '@/components/Carousel'
import Title from '@/components/Title'
import './index.less'

import { List, InputItem ,Picker, Button} from 'antd-mobile'
import { createForm } from 'rc-form'


const data =[
	{value:'340000',label:'福建',children:[{value:'340010',label:'宁德',children:[{value:'34005',label:'二都'}]}]},
	{value:'340300',label:'江西',children:[{value:'340010',label:'赣州',children:[{value:'34005',label:'景德镇'}]}]},
]

class Index extends Component{
	render(){
		const { getFieldProps } = this.props.form
		return(
			<div className='home-index'>
				<Header title='车险客户管理'/>
				<Carousel/>
				<Title>个人信息</Title>
				<List>
					<InputItem
			            placeholder="必填"
			            clear
			            moneyKeyboardAlign="left"
			          >姓名：</InputItem>
			    </List>
	        	<List>
	        		<InputItem
	                    placeholder="必填"
	                    type='phone'
	                    clear
	                    moneyKeyboardAlign="left"
	                  >手机号码：</InputItem>
	        	</List>
                <Title>车辆信息</Title>
            	<Picker extra="请选择(可选)"
            	  data={data}
            	  title="选择城市"
            	  {...getFieldProps('district', {
            	    initialValue: ['340000', '340010', '34005'],
            	  })}
            	  onOk={e => console.log('ok', e)}
            	  onDismiss={e => console.log('dismiss', e)}
            	>
            	  <List.Item arrow="horizontal">行驶城市：</List.Item>
            	</Picker>
				<List className='car-num'>
					<InputItem
			            placeholder="请写车牌号"
			            clear
			            moneyKeyboardAlign="left"
			          >车牌号：</InputItem>
			          <Button type="primary" size="small" inline className='car-num-but'>未上牌</Button>
			    </List>
			    <div  className='button-box'>
			    	<Button type="primary" onClick={()=>{this.props.history.push('/home/insurance')}}>下一步</Button>
			    </div>
			</div>
		)
	}
}

export default createForm()(Index)