/**
 * 获得第一天的周次
 */
import CalculaterWeekTime from "./calculaterWeekTime.js";
class FirstdayWeekTimes{
	constructor() {
	    this.cal = new CalculaterWeekTime();
	}
	getFirstdayWeekTimes(year,month){
		let date = new Date(year,month,1);
		return this.cal.getWeekTime(date);
	}
}
export default FirstdayWeekTimes;