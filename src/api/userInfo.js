import Server from '@/api/server'
import { Toast } from 'antd-mobile'
class UserInfo extends Server{
	async login(params,history){
		let data = await this.POST('/index.php?r=api/user/bind',params)
		if(data.ret==='0000'){
			history.push('/user')
		}else{
			Toast.info(data.msg)
		}
		return data
	}

	async userInfo(history){
		let data = await this.POST('/index.php?r=api/user/get-user-info')
		if(data.ret==='1000'){
			history.push('/login')
		}else{
			return data.data.content
		}
	}

	async details(history){
		let data = await this.POST('/index.php?r=api/work/work-user-odd-apply-list')
		return data.data.content
	}

	async applyDetails(params){
		let data = await this.POST('/index.php?r=api/work/work-user-odd-apply',params)

		return data.data.content
	}

	async oddIdimg(params){
		let data = await this.POST('/index.php?r=api/work/work-user-odd-idimg',params)

		return data.data.content
	}

	async oddReplay(params){
		let data = await this.POST('/index.php?r=api/work/work-user-odd-replay',params)
		
		return data.data.content
	}

	async repayHistory(params){
		let data = await this.POST('/index.php?r=api/work/work-user-odd-list',params)
		
		return data.data.content
	}
	
	async workUserOdd(params){
		let data = await this.POST('/index.php?r=api/work/work-user-odd')
		
		return data.data.content
	}
	
	async workUserOddWithin(params){
		let data = await this.POST('/index.php?r=api/work/work-user-odd-within')
		
		return data.data.content
	}

	async workUserCollect(params){
		let data = await this.POST('/index.php?r=api/work/work-user-collect',params)
		
		return data.data.content
	}

	async addCollection(params){
		let data = await this.POST('/index.php?r=api/work/work-write-money',params)
		
		if(data.ret==='0000'){
			Toast.success(data.msg)
		}else{
			Toast.fail(data.msg)
		}
	}

	async getPromoter(params){
		let data = await this.POST('/index.php?r=api/user/get-promoter',params)
		
		return data.data.content
	}

	async workUserOddApply(params){
		let data = await this.POST('/index.php?r=api/work/work-promoter-odd-list',params)
		
		return data.data.content
	}

	async workUserOperat(params){
		let data = await this.POST('/index.php?r=api/work/work-user-odd-apply-operat',params)
		
		return data.data.content
	}

	async getQrcode(params){
		let data = await this.POST('/index.php?r=api/user/get-qrcode',params)
		
		return data.data.content.url
	}


}

export default new UserInfo()
