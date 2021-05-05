/**
 * 计算周次
 */
class WeekTime{
	
	getWeekTime(z){
		let day11=Date.parse(z);
		day11=new Date(day11);
		day11.setMonth(0);
		day11.setDate(1);
		day11.setHours(0);
		day11.setMinutes(0);
		day11.setSeconds(0);//到这里就得到该年的一月一日
	 
		let day11mill=day11.getTime();
		let ori_day=day11.getDay();//该年的一月一日是星期几
		let fill1=0;//与星期日相隔的毫秒数
		if(ori_day!==0){
			fill1=ori_day*60*60*24*1000;
		}
			
		let now=Date.parse(z);
		now=new Date(now);
		now.setHours(0);
		now.setMinutes(0);
		now.setSeconds(0);
		let nowmill=now.getTime();
		let now_day=now.getDay();
		let fill2=0;
		if(now_day!==0){
			fill2=(7-now_day)*60*60*24*1000;
		}
	 
		let cha2=(nowmill-day11mill+fill1+fill2)/(60*60*24*1000);
		let week=Math.ceil(cha2/7);
		if(week<10){
			week="0"+week;
		}
		let year=now.getFullYear().toString();
		year=year.substring(2); 
		return week;
	}
}
export default WeekTime;