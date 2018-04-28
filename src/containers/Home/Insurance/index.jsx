import React,{ Component } from 'react'
import Header from '@/components/Header'
import Title from '@/components/Title'

import { List, DatePicker ,Switch ,Picker,Button} from 'antd-mobile'
import { createForm } from 'rc-form'

import './index.less'


const data =[
	{value:'340000',label:'5万'},
	{value:'340300',label:'10万'},
]

class Insurance extends Component{
	constructor(props){
		super(props)
		this.state={
			data: new Date(Date.now()),
			businessData: new Date(Date.now()),
			businessDisabled:false,
			visible:false,
			pickerValue:'340000'
		}
	}
	render(){
		const { getFieldProps } = this.props.form
		return(
			<div className='coverage'>
				<Header title='险种选择'/>
				<Title>交强险（含车船税）</Title>
				<List>
					<DatePicker
			          mode="date"
			          title="选择日期"
			          extra="选择生效日期"
			          value={this.state.date}
			          onChange={date => this.setState({ date })}
			        >
			          <List.Item arrow="horizontal">交强险+车船税</List.Item>
			        </DatePicker>
			    </List>
		    	<List className='business'>
		    		<DatePicker
		              mode="date"
		              title="选择日期"
		              extra="选择生效日期"
		              value={this.state.businessData}
		              onChange={date => this.setState({ date })}
		              disabled={this.state.businessDisabled}
		            >
		              <List.Item arrow="horizontal">商业险

		              </List.Item>
		            </DatePicker>
		              <Switch
                        {...getFieldProps('Switch', {
                          initialValue: true,
                          valuePropName: 'checked',
                        })}
                        color = '#165ca7'
                        onClick={(checked) => { this.setState({businessDisabled:!checked}) }}
                        className='switch'
                      />
		        </List>

		        <div className='description'>
		        	提示：以上生效日期为保单预计生效日期，我们将尽量满足您的要求，但保单实际生效日期以最终出单日期为准！
		        </div>

		        <Title>商业主险</Title>

		        <List>
		        	<List.Item
		        	  extra={<Switch
		        	    {...getFieldProps('Switch2', {
		        	      initialValue: false,
		        	      valuePropName: 'checked',
		        	    })}
		        	    color = '#165ca7'
		        	    onClick={(checked) => { console.log(checked); }}
		        	  />}
		        	>车辆损失险</List.Item>
		        </List>

		        <Picker extra="请选择"
		          data={data}
		          cols={1}
		          title="选择金额"
		          {...getFieldProps('city', {
		            initialValue: ['340000'],
		          })}
		          onOk={e => console.log('ok', e)}
		          onDismiss={e => console.log('dismiss', e)}
		        >
		          <List.Item arrow="horizontal">第三责任险</List.Item>
		        </Picker>

		        <List>
		        	<List.Item
		        	  extra={<Switch
		        	    {...getFieldProps('Switch3', {
		        	      initialValue: false,
		        	      valuePropName: 'checked',
		        	    })}
		        	    color = '#165ca7'
		        	    onClick={(checked) => { console.log(checked); }}
		        	  />}
		        	>全车强盗险</List.Item>
		        </List>

		        <Picker extra="请选择"
		          data={data}
		          cols={1}
		          title="选择金额"
		          {...getFieldProps('zeren', {
		            initialValue: ['340000'],
		          })}
		          onOk={e => console.log('ok', e)}
		          onDismiss={e => console.log('dismiss', e)}
		        >
		          <List.Item arrow="horizontal">司机责任险</List.Item>
		        </Picker>

		        <List>
			        <Picker extra="请选择"
			          data={data}
			          cols={1}
			          title="选择金额"
			          {...getFieldProps('chengke', {
			            initialValue: ['340000'],
			          })}
			          onOk={e => console.log('ok', e)}
			          onDismiss={e => console.log('dismiss', e)}
			        >
			          <List.Item arrow="horizontal">乘客责任险</List.Item>
			        </Picker>
		        </List>

		        <Title>
		        	商业附加险
		        </Title>

                
    	        <Picker extra="请选择"
    	          data={data}
    	          cols={1}
    	          title="选择金额"
    	          {...getFieldProps('boli', {
    	            initialValue: ['340000'],
    	          })}
    	          onOk={e => console.log('ok', e)}
    	          onDismiss={e => console.log('dismiss', e)}
    	        >
    	          <List.Item arrow="horizontal">玻璃破碎险</List.Item>
    	        </Picker>
        	    <List>
                	<List.Item
                	  extra={<Switch
                	    {...getFieldProps('Switch4', {
                	      initialValue: false,
                	      valuePropName: 'checked',
                	    })}
                	    color = '#165ca7'
                	    onClick={(checked) => { console.log(checked); }}
                	  />}
                	>自燃损失险</List.Item>
                </List>
                <List>
                	<List.Item
                	  extra={<Switch
                	    {...getFieldProps('Switch5', {
                	      initialValue: false,
                	      valuePropName: 'checked',
                	    })}
                	    color = '#165ca7'
                	    onClick={(checked) => { console.log(checked); }}
                	  />}
                	>发动机涉水</List.Item>
                </List>

            	<List>
	            	<Picker extra="请选择"
	            	  data={data}
	            	  cols={1}
	            	  title="选择金额"
	            	  {...getFieldProps('bolis', {
	            	    initialValue: ['340000'],
	            	  })}
	            	  onOk={e => console.log('ok', e)}
	            	  onDismiss={e => console.log('dismiss', e)}
	            	>
	            	  <List.Item arrow="horizontal">划痕险</List.Item>
	            	</Picker>
            	</List>

            	<List.Item
            	  extra={<Switch
            	    {...getFieldProps('Switch6', {
            	      initialValue: false,
            	      valuePropName: 'checked',
            	    })}
            	    color = '#165ca7'
            	    onClick={(checked) => { console.log(checked); }}
            	  />}
            	>不记免赔率险</List.Item>


            	<div  className='button-box'>
            		<Button type="primary" onClick={()=>{this.props.history.push('/home/company')}}>下一步</Button>
            	</div>
			</div>
		)
	}
}

export default createForm()(Insurance)