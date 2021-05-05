/**
 * 基础模块
 */
import MonthMaxday from "./getMonthMaxday.js"
import FirstdayWeeknum from "./getFirstdayWeeknum.js";
import FirstdayWeekTimes from "./getFirstdayWeekTimes.js";
class Base{
	constructor() {
	    this.MonthMaxday = new MonthMaxday();
		this.FirstdayWeeknum = new FirstdayWeeknum();
		this.FirstdayWeekTimes = new FirstdayWeekTimes();
		
		this.initPage();
		this.initEvent();
	}
	//填充单元格
	fillTds(year,month){
		this.tds = $('.box table tbody tr td');
		$('.currDate').text(year
		+"年"
		+((month + 1)>9?(month + 1):'0'+(month + 1))
		+"日");
		//当前月份第一天的周次
		let weekTime = this.FirstdayWeekTimes.getFirstdayWeekTimes(year,month);
		// console.log(weekTime);
		//清空所有的单元格
		this.tds.empty();
		//填充周次
		for (let i = 0;i<6;i++){
			this.tds.eq(i * 8).text(parseInt(weekTime) + i);
		}
		//获得第一天是周几
		let weekNum = this.FirstdayWeeknum.getFirstdayWeeknum(year,month);
		if (weekNum == 0){
			weekNum = 7;
		}
		//获得当前月份的最大天数
		let monthMaxday = this.MonthMaxday.getMonthMaxday(year,month);
		//填充单元格
		let n = 0;//计数器   遇到8的倍数加1
		for(let i = weekNum;i<monthMaxday +weekNum + n;i++){				
			if (i%8 == 0)
			{
				n++;
			} else {
				this.tds.eq(i).removeClass("txtColor");
				this.tds.eq(i).text(i - weekNum + 1 - n);
			}
		}
		//填充左边的空格
		//获得上个月的最大天数
		let prevMonthMaxday = this.MonthMaxday.getMonthMaxday(year,month - 1);
		for (let i = 1;i < weekNum;i++){
			this.tds.eq(weekNum - i).removeClass("txtColor");
			this.tds.eq(weekNum - i).addClass('txtColor');
			this.tds.eq(weekNum - i).text(prevMonthMaxday - (i - 1));
		}
		//继续填写后面的空格
		for (let i = monthMaxday +weekNum + n;i < this.tds.length;i++){
			if (i%8 == 0)
			{
				n++;
			} else {
				this.tds.eq(i).removeClass("txtColor");
				this.tds.eq(i).addClass('txtColor');
				this.tds.eq(i).text(i - (monthMaxday +weekNum + n) + 1);
			}
		}
	}
	//初始化界面
	initPage(){
		let currDate = new Date();
		this.year = currDate.getFullYear();
		this.month = currDate.getMonth();
		this.fillTds(this.year,this.month);
	}
	// 初始化事件
	initEvent(){
		//上一年
		$('.leftYear').on('click',()=>{
			this.year--;			
			this.fillTds((new Date(this.year,this.month,1)).getFullYear(),(new Date(this.year,this.month,1)).getMonth());
		});
		//上一月
		$('.leftMonth').on('click',()=>{
			this.month--;
			this.fillTds((new Date(this.year,this.month,1)).getFullYear(),(new Date(this.year,this.month,1)).getMonth());
		});
		//下一年
		$('.rightYear').on('click',()=>{
			this.year++;			
			this.fillTds((new Date(this.year,this.month,1)).getFullYear(),(new Date(this.year,this.month,1)).getMonth());
		});
		//下一月
		$('.rightMonth').on('click',()=>{
			this.month++;
			this.fillTds((new Date(this.year,this.month,1)).getFullYear(),(new Date(this.year,this.month,1)).getMonth());
		});
	}
}
export default Base;