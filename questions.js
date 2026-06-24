const questions = [

// -------- 5 EASY QUESTIONS --------

{question:"20% of 500 = ?", options:["50","100","150","200"], answer:"100", solution:"20/100 × 500 = 100"},

{question:"CP = 1000, SP = 1200. Profit %?", options:["10%","15%","20%","25%"], answer:"20%", solution:"Profit = 200, Profit% = 20%"},

{question:"SI on ₹5000 at 10% for 2 years?", options:["500","1000","1500","2000"], answer:"1000", solution:"5000×10×2/100"},

{question:"Ratio of 24 and 36?", options:["2:3","3:4","4:5","1:2"], answer:"2:3", solution:"Divide by 12"},

{question:"Average of 10, 20, 30?", options:["15","20","25","30"], answer:"20", solution:"(10+20+30)/3"},

// -------- 45 PLACEMENT QUESTIONS --------

{question:"A number increased by 25% and then decreased by 20%. Net change?", options:["No change","5% increase","5% decrease","10% increase"], answer:"No change", solution:"100→125→100"},

{question:"A TV price decreases from ₹40000 to ₹34000. Percentage decrease?", options:["10%","12%","15%","20%"], answer:"15%", solution:"6000/40000×100"},

{question:"A trader marks an item 25% above CP and gives 10% discount. Profit %?", options:["10%","12.5%","15%","20%"], answer:"12.5%", solution:"1.25×0.9=1.125"},

{question:"A shopkeeper uses 800g instead of 1kg and gains 20% on CP. Actual profit %?", options:["40%","50%","60%","70%"], answer:"50%", solution:"1200/800=1.5"},

{question:"CI on ₹10000 at 10% for 2 years?", options:["2000","2050","2100","2200"], answer:"2100", solution:"10000×1.21-10000"},

{question:"Difference between CI and SI for 2 years at 10% is ₹100. Principal?", options:["5000","8000","10000","12000"], answer:"10000", solution:"P×100/10000=100"},

{question:"If A:B=3:5 and B:C=10:7, then A:C=?", options:["3:7","5:7","6:7","7:6"], answer:"6:7", solution:"3:5=6:10"},

{question:"Two numbers are in ratio 5:7 and sum is 144. Find smaller number.", options:["50","55","60","65"], answer:"60", solution:"5/12 × 144"},

{question:"Average of 12 numbers is 18. First 7 average 16. Remaining 5 average?", options:["18","19.2","20.8","22"], answer:"20.8", solution:"(216-112)/5"},

{question:"Teacher joins 30 students, average rises from 40 to 41. Teacher's age?", options:["61","65","71","75"], answer:"71", solution:"31×41-30×40"},

{question:"Milk:Water = 5:3. Milk percentage?", options:["50%","55%","62.5%","75%"], answer:"62.5%", solution:"5/8×100"},

{question:"Rice worth ₹80 mixed with ₹50 to get ₹62. Ratio?", options:["2:3","3:2","4:3","5:2"], answer:"3:2", solution:"Alligation"},

{question:"A can do work in 12 days, B in 18 days. Together?", options:["6","7.2","8","9"], answer:"7.2", solution:"216/30"},

{question:"15 men complete work in 24 days. Men required in 18 days?", options:["18","20","22","24"], answer:"20", solution:"15×24/18"},

{question:"A train 240m long crosses a 360m platform in 30 sec. Speed?", options:["54 km/h","60 km/h","72 km/h","90 km/h"], answer:"72 km/h", solution:"600/30=20 m/s"},

{question:"Boat covers 30 km downstream in 2 hr and upstream in 3 hr. Stream speed?", options:["2","2.5","3","3.5"], answer:"2.5", solution:"(15-10)/2"},

{question:"A man walks at 6 km/h and is 10 min late. At 8 km/h he is 5 min early. Distance?", options:["4 km","5 km","6 km","8 km"], answer:"6 km", solution:"Difference 15 min"},

{question:"A can do work in 15 days and B in 10 days. Together for 3 days. Remaining work?", options:["1/2","1/3","3/10","2/5"], answer:"1/2", solution:"3×1/6=1/2 done"},

{question:"A sum becomes ₹13310 in 3 years at 10% CI. Principal?", options:["9000","9500","10000","10500"], answer:"10000", solution:"13310/1.331"},

{question:"A car travels equal distances at 40 and 60 km/h. Average speed?", options:["45","48","50","52"], answer:"48", solution:"2xy/(x+y)"},

{question:"A train 150m long at 54 km/h crosses a pole in?", options:["8 sec","10 sec","12 sec","15 sec"], answer:"10 sec", solution:"54 km/h = 15 m/s"},

{question:"Two trains 80 and 60 km/h opposite direction. Relative speed?", options:["20","60","120","140"], answer:"140", solution:"80+60"},

{question:"A mixture has milk and water 4:3. Add 14 L water to make 1:1. Original quantity?", options:["70","84","98","112"], answer:"98", solution:"4x=3x+14"},

{question:"A's salary is 25% more than B's. B is what % less than A?", options:["20%","22%","25%","30%"], answer:"20%", solution:"100→125"},

{question:"Population increases 20% then decreases 20%. Net change?", options:["0%","4% decrease","4% increase","2% decrease"], answer:"4% decrease", solution:"100→120→96"},

{question:"A can do work in 20 days. After 5 days he leaves. Remaining work?", options:["1/4","1/2","3/4","4/5"], answer:"3/4", solution:"5×1/20"},

{question:"Two numbers are in ratio 8:11 and differ by 24. Smaller number?", options:["56","64","72","80"], answer:"64", solution:"3x=24"},

{question:"Average of first 5 even numbers?", options:["4","5","6","8"], answer:"6", solution:"2,4,6,8,10"},

{question:"A boat speed in still water is 15 km/h and stream 3 km/h. Upstream speed?", options:["9","10","12","18"], answer:"12", solution:"15-3"},

{question:"A train 300m long crosses a pole in 15 sec. Speed?", options:["54 km/h","60 km/h","72 km/h","90 km/h"], answer:"72 km/h", solution:"300/15=20 m/s"},

{question:"A can do work in 8 days, B in 12 days. Efficiency ratio A:B?", options:["2:3","3:2","4:3","5:3"], answer:"3:2", solution:"12:8"},

{question:"A sum doubles in 10 years at SI. It triples in?", options:["15","18","20","25"], answer:"20", solution:"Interest doubles"},

{question:"The average of 7 consecutive numbers is 50. Largest number?", options:["52","53","54","55"], answer:"53", solution:"Middle is 50"},

{question:"A trader sells two items at ₹1000 each, one at 20% profit and one at 20% loss. Overall?", options:["No profit/loss","2% loss","4% loss","4% profit"], answer:"4% loss", solution:"x²/100"},

{question:"Convert 72 km/h into m/s.", options:["18","20","22","25"], answer:"20", solution:"72×5/18"},

{question:"A train 200m long crosses a 300m platform in 25 sec. Speed?", options:["54 km/h","60 km/h","72 km/h","90 km/h"], answer:"72 km/h", solution:"500/25=20 m/s"},

{question:"Milk:Water = 7:3. Add 20L water to make 7:5. Original mixture?", options:["40","50","60","70"], answer:"50", solution:"2x=20"},

{question:"A fills a tank in 10 hr and B in 15 hr. Together?", options:["5 hr","6 hr","7.5 hr","8 hr"], answer:"6 hr", solution:"150/25"},

{question:"The average of 20 numbers is 35. Replacing 50 by 70 changes average to?", options:["35.5","36","36.5","37"], answer:"36", solution:"Increase by 20/20"},

{question:"A train 180m long crosses a pole in 12 sec. Speed?", options:["45 km/h","54 km/h","60 km/h","72 km/h"], answer:"54 km/h", solution:"180/12=15 m/s"},

{question:"A vessel contains 80L milk. 20L removed and replaced with water. Milk left?", options:["50","55","60","65"], answer:"60", solution:"80×3/4"},

{question:"The ratio of boys and girls is 4:5 and total students are 270. Girls?", options:["120","135","150","160"], answer:"150", solution:"5/9 × 270"},

{question:"A can do work in 10 days and B in 15 days. Together?", options:["5","6","7.5","8"], answer:"6", solution:"150/25"},

{question:"The SI on a sum for 4 years at 12% is ₹2400. Principal?", options:["4000","5000","6000","7000"], answer:"5000", solution:"2400×100/(12×4)"},

{question:"A train 180m long crosses a 220m platform in 20 sec. Speed?", options:["54 km/h","60 km/h","72 km/h","80 km/h"], answer:"72 km/h", solution:"400/20=20 m/s"},

{question:"A boat takes 3 hr for 24 km downstream and 4 hr upstream. Boat speed?", options:["6","7","8","9"], answer:"7", solution:"(8+6)/2"},

{question:"A can do work in 12 days and B in 18 days. After working together for 4 days, remaining work?", options:["1/9","2/9","1/6","1/3"], answer:"1/9", solution:"4×5/36=20/36"},

{question:"A sum of ₹8400 is divided in ratio 2:3:7. Largest share?", options:["2800","3500","4200","4900"], answer:"4900", solution:"7/12 × 8400"},

{question:"A train moving at 90 km/h crosses a pole in 18 sec. Length?", options:["350 m","400 m","450 m","500 m"], answer:"450 m", solution:"25×18"},

{question:"A car travels 100 km at 40 km/h and 100 km at 60 km/h. Average speed?", options:["45","48","50","52"], answer:"48", solution:"2xy/(x+y)"},

{question:"A can do work in 20 days and B in 30 days. B leaves after 6 days. A finishes in how many more days?", options:["6","7","8","9"], answer:"8", solution:"Remaining 2/5, A=1/20"},

{question:"A train 250m and 150m moving opposite at 54 and 36 km/h. Crossing time?", options:["12 sec","14 sec","16 sec","18 sec"], answer:"16 sec", solution:"400/25"},

{question:"The average age of A, B, C is 24 and B+C average 20. A's age?", options:["28","30","32","34"], answer:"32", solution:"72-40"},

{question:"A dishonest shopkeeper uses 900g instead of 1kg and sells at cost price. Profit %?", options:["9.11%","10%","11.11%","12.5%"], answer:"11.11%", solution:"1000/900"},

{question:"A train 300m long crosses a bridge in 40 sec and a pole in 15 sec. Bridge length?", options:["400","500","600","700"], answer:"500", solution:"Speed=20 m/s"},

{question:"A man covers half distance at 40 km/h and remaining half at 60 km/h. Average speed?", options:["45","48","50","52"], answer:"48", solution:"2xy/(x+y)"},

{question:"A boat travels 48 km downstream in 4 hr and upstream in 6 hr. Stream speed?", options:["1","2","3","4"], answer:"2", solution:"(12-8)/2"},

{question:"The ratio of present ages of father and son is 7:2. After 10 years it becomes 17:7. Father's present age?", options:["28","35","42","49"], answer:"35", solution:"7x+10 / 2x+10 = 17/7"},

{question:"A train moving at 72 km/h crosses a pole in 15 sec. Length?", options:["250","280","300","320"], answer:"300", solution:"20×15"},

{question:"A number is increased by 10% and then decreased by 10%. Net change?", options:["0%","1% decrease","1% increase","2% decrease"], answer:"1% decrease", solution:"100→110→99"}

];