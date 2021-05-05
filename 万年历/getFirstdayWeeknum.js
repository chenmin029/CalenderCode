/**
 * 获得第一天是周几
 */
class FirstdayWeeknum{
	
	getFirstdayWeeknum(year,month){
		let targetDate = new Date(year,month,1);
		return targetDate.getDay();
	}
}
export default FirstdayWeeknum;