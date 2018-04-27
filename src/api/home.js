import Server from '@/api/server'

class Home extends Server{
	async getData(){
		let data = await this.POST('/api/index/article/host',{'limit':3})
		return data
	}
}

export default new Home()