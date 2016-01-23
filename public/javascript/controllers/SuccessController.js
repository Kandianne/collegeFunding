
(function() {
	// 'use strict';
	angular.module('app')
	.controller('SuccessController', SuccessController);

	function SuccessController() {
		var vm = this;

			vm.successes = ['Allegheny College', 'Assumption College', 'Azusa Pacific University','Bard College','Baylor University','Boston University','California Lutheran University','California State University - Long Beach','Carroll College','Case Western Reserve University','Chapman University','Claremont McKenna College','College of the Holy Cross','DePaul University','Dickinson University','Drexel University','Evergreen State College','George Washington University','Gonzaga University','Graceland University','Green Mountain College','Johns Hopkins University','Lewis & Clark College','Liberty University','Loyola Marymount','Manhattan College','Menlo College','Mills College','New School (NY)','New York university','Northern Arizona University','Notre Dame De Namur University','Occidental College','Pace University','Pacific Lutheran University','Pepperdine University','Post University','Prescott College','Purdue University West Lafayette','University of Dallas','Santa Clara University','Seton Hall University','St. John University','St. Mary\'s College of California','SUNY College of Environmental Science & Forestry','Texas Christian University','The American Musical and Dramatic Academy','Tulane University','Unity College','University of California - Los Angeles','University of California - San Diego','University of California - Santa Barbara','University of California - Davis','University of California - Irvine','University of California - Merced','University of California - Riverside','University of Colorado-Boulder','University of Denver','University of La Verne','University of Miami'];
			vm.offers = ['39,565', '21,500', '22,558', '46,200','30,000','61,540','38,258','15,467','20,821','55,436','38,008','45,832','15,350','14,500','54,330','31,495','11,500','39,700','23,570','10,000','32,250','49,900','37,662','16,200','34,900','20,500','31,508','25,200','48,809','40,150','24,500','15,500','23,300','17,500','28,192','28,896','32,300','13,750','15,500','12,000','59,655','28,000','24,500','18,500','29,030','22,400','11,500','22,500','23,520','14,581','30,979','32,417','24,300','28,834','33,344','15,350','20,000','20,500','35,000','10,000'];
			vm.projections = ['158,260', '86,000', '90,232', '184,800','120,000','246,160','153,032','61,868','83,284','221,744','152,032','183,328','61,400','58,000','217,320','125,980','46,000','158,800','94,280','40,000','129,000','199,600','150,648','64,800','139,600','82,000','126,032','100,800','195,236','160,600','98,000','62,000','93,200','70,000','112,768','115,584','129,200','55,000','62,000','48,000','238,620','112,000','98,000','74,000','116,120','89,600','46,000','90,000','94,080','58,324','123,916','129,668','97,200','115,336','133,376','61,400','80,000','82,000','140,000','40,000'];
		
			vm.trial = [{prop1: "firstProp", prop2: "secondProp", prop3: "thirdProp"}, {prop1: "firstProp", prop2: "secondProp", prop3: "thirdProp"}, {prop1: "firstProp", prop2: "secondProp", prop3: "thirdProp"}];

			console.log(vm.trial);




		
	}
})();