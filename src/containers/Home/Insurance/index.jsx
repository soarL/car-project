import React,{ Component } from 'react'
import Header from '@/components/Header'
import Title from '@/components/Title'
import { List, DatePicker ,Switch ,Picker,Button,Toast} from 'antd-mobile'
import { createForm } from 'rc-form'
import homeAPI from '@/api/home'

import './index.less'


class Insurance extends Component{
	constructor(props){
		super(props)
		this.state={
			date: new Date(Date.now()),
			businessData: new Date(Date.now()),
			businessDisabled:false,
			visible:false,
			pickerValue:'340000'
		}
	}

	submit = ()=>{
		this.props.form.validateFields(async (err,value)=>{
			value.strWorkNum = this.props.location.query
			value.strCompulsoryInsurance = new Date().getTime(this.state.date)
			value.strCommercialInsurance = new Date().getTime(this.state.businessData)
			let data = await homeAPI.workInsuranceData(value)
			if(data.ret==='0000'){
				this.props.history.push({pathname:'/home/company',query:data.data.content})
			}else{
				Toast.fail(data.msg)
			}
		})
	}
	render(){
		const { getFieldProps } = this.props.form
		return(
			<div className='coverage'>
				<Header title='险种选择'/>
				<Title>交强险（含车船税）</Title>
				<List>
					<DatePicker
						{...getFieldProps('strCompulsoryInsurance')}
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
		    			{...getFieldProps('strCommercialInsurance')}
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
                        {...getFieldProps('tCommercialInsuranceEffectiveTime', {
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
		        	    {...getFieldProps('strLossInsurance', {
		        	      initialValue: false,
		        	      valuePropName: 'checked',
		        	    })}
		        	    color = '#165ca7'
		        	  />}
		        	>车辆损失险</List.Item>
		        </List>
		  
		        <Picker extra="请选择"
		          data={[
		        		{value:'5万',label:"5万"},
		        		{value:'10万',label:"10万"},
		        		{value:'15万',label:"15万"},
		        		{value:'20万',label:"20万"},
		        		{value:'30万',label:"30万"},
		        		{value:'50万',label:"50万"},
		        		{value:'100万',label:"100万"},
		        		{value:'150万',label:"150万"},
		        		{value:'200万',label:"200万"},
		        	]}
		          cols={1}
		          title="选择金额"
		          {...getFieldProps('strThirdPartyInsurance', {
		            initialValue: ['5万'],
		          })}
		        >
		          <List.Item arrow="horizontal">第三责任险</List.Item>
		        </Picker>

		        <List>
		        	<List.Item
		        	  extra={<Switch
		        	    {...getFieldProps('strTheftInsurance', {
		        	      initialValue: false,
		        	      valuePropName: 'checked',
		        	    })}
		        	    color = '#165ca7'
		        	  />}
		        	>全车强盗险</List.Item>
		        </List>

		        <Picker extra="请选择"
		          data={[
		        		{value:'1万/人',label:"1万/人"},
		        		{value:'2万/人',label:"2万/人"},
		        		{value:'3万/人',label:"3万/人"},
		        		{value:'4万/人',label:"4万/人"},
		        		{value:'5万/人',label:"5万/人"},
		        		{value:'10万/人',label:"10万/人"},
		        		{value:'20万/人',label:"20万/人"},
		        	]}
		          cols={1}
		          title="选择金额"
		          {...getFieldProps('strDriverLiabilityInsurance', {
		            initialValue: ['1万/人'],
		          })}
		        >
		          <List.Item arrow="horizontal">司机责任险</List.Item>
		        </Picker>

		        <List>
			        <Picker extra="请选择"
			          data={[
			        		{value:'1万/人',label:"1万/人"},
			        		{value:'2万/人',label:"2万/人"},
			        		{value:'3万/人',label:"3万/人"},
			        		{value:'4万/人',label:"4万/人"},
			        		{value:'5万/人',label:"5万/人"},
			        		{value:'8万/人',label:"8万/人"},
			        		{value:'10万/人',label:"10万/人"},
			        		{value:'20万/人',label:"20万/人"},
			        		{value:'30万/人',label:"30万/人"},
			        		{value:'40万/人',label:"40万/人"},
			        		{value:'50万/人',label:"50万/人"},
		        		]}
			          cols={1}
			          title="选择金额"
			          {...getFieldProps('strPassengerLiabilityInsurance', {
			            initialValue: ['1万/人'],
			          })}
			        >
			          <List.Item arrow="horizontal">乘客责任险</List.Item>
			        </Picker>
		        </List>

		        <Title>
		        	商业附加险
		        </Title>

                
    	        <Picker extra="请选择"
    	          data={[
			        		{value:'国产',label:"国产"},
			        		{value:'进口',label:"进口"},
		        		]}
    	          cols={1}
    	          title="选择金额"
    	          {...getFieldProps('strGlassInsurance', {
    	            initialValue: ['国产'],
    	          })}
    	        >
    	          <List.Item arrow="horizontal">玻璃破碎险</List.Item>
    	        </Picker>
        	    <List>
                	<List.Item
                	  extra={<Switch
                	    {...getFieldProps('intSelfignitingLossInsurance', {
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
                	    {...getFieldProps('strWadingInsurance', {
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
	            	  data={[
			        		{value:'2000',label:"2000"},
			        		{value:'5000',label:"5000"},
			        		{value:'10000',label:"10000"},
			        		{value:'20000',label:"20000"},
		        		]}
	            	  cols={1}
	            	  title="选择金额"
	            	  {...getFieldProps('strScratchInsurance', {
	            	    initialValue: ['2000'],
	            	  })}
	            	>
	            	  <List.Item arrow="horizontal">划痕险</List.Item>
	            	</Picker>
            	</List>

            	<List.Item
            	  extra={<Switch
            	    {...getFieldProps('strExcessInsurance', {
            	      initialValue: false,
            	      valuePropName: 'checked',
            	    })}
            	    color = '#165ca7'
            	  />}
            	>不记免赔率险</List.Item>


            	<div  className='button-box'>
            		<Button type="primary" onClick={this.submit}>下一步</Button>
            	</div>
			</div>
		)
	}
}

export default createForm()(Insurance)