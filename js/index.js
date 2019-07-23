var index=new Vue({
	el:"#page",
	data:{
		slideList:[],
		seckillList:[]
	},
	computed:{
		
	},
	mounted:function(){
		this.$nextTick(function(){
			this.init();
			this.swiper();
			this.test();
			setTimeout(function(){
				
			},3000)
		})
		
		
	},
	filters:{
		formatMoney:function(value){
			return "￥"+parseFloat(value).toFixed(1);
		}
	},
	methods:{
		init:function(){
			this.$http.get("data/index.json").then(function(res){
				if(res.data.status == "1"){
					this.slideList = res.data.result.slide;
					this.seckillList = res.data.result.seckill;
					console.log(res.data);
				}else{
					console.log(res.data.message);
				}
			},function(){
				
			});
		},
		swiper:function(){
			//swiper
			var swiper = new Swiper('.coursole-swiper', {
		        pagination: '.coursole-pagination',
		        paginationClickable: true
		   	})
		},
		test:function(){
			this.$http.get("http://zhihuishequ.idc.xianqigu.cn/city/callback?user_id=81").then(function(res){
				console.log(res.data.num);
			},function(res){
				console.log(res);
			});
		}
		
	}
});
