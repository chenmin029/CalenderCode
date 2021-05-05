/**
 * 获得月的最大天数
 */
class MonthMaxday{
	getMonthMaxday(year,month){
		var targetDate = new Date(year,month + 1,0);
		return targetDate.getDate();
	}
}
export default MonthMaxday;