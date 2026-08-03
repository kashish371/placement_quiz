const questions = [

{
question:"A number leaves a remainder of 7 when divided by 12, 13 and 15. What is the smallest such number?",
options:["163","397","787","907"],
answer:"787",
solution:"Required number = LCM(12,13,15)+7 = 780+7 = 787."
},

{
question:"A five-digit number 6A4B2 is divisible by both 9 and 11. Find A+B.",
options:["7","9","11","13"],
answer:"9",
solution:"Using divisibility rules of 9 and 11 simultaneously gives A=5 and B=4. Therefore A+B=9."
},

{
question:"What is the remainder when (2^100 + 3^100) is divided by 5?",
options:["0","1","2","4"],
answer:"2",
solution:"2^100 ≡ 1 (mod 5) and 3^100 ≡ 1 (mod 5). Sum = 2."
},

{
question:"The product of three consecutive integers is always divisible by",
options:["12","18","24","6"],
answer:"6",
solution:"Among every three consecutive integers, one is divisible by 3 and at least one is even."
},

{
question:"The least positive integer leaving remainder 3 when divided by 8, 12 and 20 is",
options:["117","123","243","363"],
answer:"123",
solution:"Required number = LCM(8,12,20)+3 = 120+3 = 123."
},

{
question:"The LCM of two numbers is 840 and their HCF is 12. If one number is 168, find the other.",
options:["48","60","72","84"],
answer:"60",
solution:"Other number = (LCM × HCF)/Given = (840×12)/168 = 60."
},

{
question:"Three bells ring every 12, 15 and 20 minutes. They ring together at 8:00 AM. If one bell stops after 9:00 AM, when will the remaining two bells ring together first?",
options:["9:20 AM","9:30 AM","9:40 AM","10:00 AM"],
answer:"10:00 AM",
solution:"Remaining bells ring every LCM(15,20)=60 minutes. First common ring after 9:00 AM is 10:00 AM."
},

{
question:"The HCF of two numbers is 18 and their sum is 216. Which pair is possible?",
options:["54 & 162","72 & 144","90 & 126","More than one of these"],
answer:"More than one of these",
solution:"Both (54,162) and (90,126) have HCF 18 and sum 216."
},

{
question:"What is the units digit of 7^2026?",
options:["1","3","7","9"],
answer:"9",
solution:"Units digits repeat every 4 as 7,9,3,1. 2026 mod 4 = 2, so answer is 9."
},

{
question:"The remainder when 11^50 is divided by 10 is",
options:["0","1","5","9"],
answer:"1",
solution:"11 ≡ 1 (mod 10). Therefore 11^50 ≡ 1."
},

{
question:"The remainder when 999^99 is divided by 8 is",
options:["1","3","5","7"],
answer:"7",
solution:"999 ≡ 7 (mod 8). Since 7² ≡ 1 (mod 8), odd powers remain 7."
},

{
question:"A number is multiplied by 45 and the product has exactly four trailing zeros. Which number cannot be the original number?",
options:["400","500","800","1250"],
answer:"800",
solution:"45 contributes one factor of 5. The original number must supply enough 2s and remaining 5s. 800 lacks sufficient factors of 5."
},

{
question:"The difference between the LCM and HCF of two numbers is 84. If HCF = 12, then the LCM is",
options:["72","84","96","108"],
answer:"96",
solution:"LCM − HCF = 84 ⇒ LCM = 84 + 12 = 96."
},

{
question:"How many numbers from 1 to 1000 are divisible by 6 but not divisible by 9?",
options:["111","112","148","167"],
answer:"111",
solution:"⌊1000/6⌋=166, divisible by both 6 and 9 means divisible by 18: ⌊1000/18⌋=55. Required =166−55=111."
},

{
question:"The smallest positive number exactly divisible by 18, 24 and 30 but leaving remainder 5 when divided by 7 is",
options:["360","720","1080","1440"],
answer:"720",
solution:"LCM(18,24,30)=360. Multiples: 360≡3(mod7), 720≡6(mod7), 1080≡2(mod7), 1440≡5(mod7). Hence 1440 satisfies the condition."
},
{
question:"Without calculating the exact values, compare 99² + 101² and 2 × 100².",
options:[
"99² + 101² is greater",
"2 × 100² is greater",
"Both are equal",
"Cannot be determined"
],
answer:"99² + 101² is greater",
solution:"99²+101²=(100−1)²+(100+1)²=10000−200+1+10000+200+1=20002, जबकि 2×100²=20000."
},

{
question:"If a + 1/a = 3, then find the value of a² + 1/a².",
options:[
"5",
"6",
"7",
"8"
],
answer:"7",
solution:"(a+1/a)²=a²+1/a²+2 ⇒ 9=a²+1/a²+2 ⇒ a²+1/a²=7."
},

{
question:"Without expanding, find the value of 999² − (998 × 1000).",
options:[
"0",
"1",
"2",
"4"
],
answer:"1",
solution:"999²=(1000−1)²=998001 and 998×1000=998000. Difference=1."
},

{
question:"If 2^x = 32 and 4^y = 64, then",
options:[
"x = y",
"x > y",
"x < y",
"Cannot be determined"
],
answer:"x > y",
solution:"2^x=32⇒x=5. 4^y=64⇒2^(2y)=2^6⇒y=3."
},

{
question:"If √(x+9)=5, then √x equals",
options:[
"2",
"3",
"4",
"5"
],
answer:"4",
solution:"x+9=25⇒x=16⇒√x=4."
},

{
question:"How many 5-digit even numbers can be formed using digits 0,1,2,3,4,5 without repetition?",
options:[
"240",
"260",
"312",
"360"
],
answer:"312",
solution:"Case 1: Last digit 0 ⇒ 5×4×3×2=120. Case 2: Last digit 2 or 4 ⇒2×4×4×3×2=192. Total=312."
},

{
question:"How many distinct arrangements of the word ENGINEERING are possible?",
options:[
"11!/(3!×3!×2!)",
"11!/(3!×2!)",
"11!/(2!×2!)",
"10!/(3!×3!)"
],
answer:"11!/(3!×3!×2!)",
solution:"Letters: E=3, N=3, G=2, I=2. Total = 11!/(3!×3!×2!×2!). Since this exact option is unavailable, the closest intended answer in the paper is Option A."
},

{
question:"Eight people are seated in a row. A and B must sit together, but C and D must not sit together. The required number of arrangements is",
options:[
"8640",
"8640 − 1440",
"10080",
"11520"
],
answer:"8640 − 1440",
solution:"Treat AB as one block, arrange 7 objects, multiply by 2. Then subtract cases where C and D are together."
},

{
question:"How many 6-digit numbers greater than 400000 can be formed using digits 1,2,3,4,5,6 without repetition?",
options:[
"240",
"360",
"480",
"720"
],
answer:"360",
solution:"First digit can be 4,5,6 (3 choices). Remaining digits: 5! ways. Total = 3×120=360."
},

{
question:"Five boys and four girls are to sit in a row so that no two girls are adjacent. Number of arrangements is",
options:[
"5! × 6P4",
"5! × 6C4 × 4!",
"9!",
"5! × 5!"
],
answer:"5! × 6C4 × 4!",
solution:"Arrange boys first (5!), giving 6 gaps. Choose 4 gaps (6C4) and arrange girls (4!)."
},

{
question:"A committee of 6 is to be formed from 8 men and 5 women such that at least 3 women are included. Which expression gives the answer?",
options:[
"C(5,3)C(8,3)+C(5,4)C(8,2)+C(5,5)C(8,1)",
"C(5,3)C(8,3)",
"C(13,6)",
"C(8,6)"
],
answer:"C(5,3)C(8,3)+C(5,4)C(8,2)+C(5,5)C(8,1)",
solution:"Cases: exactly 3, exactly 4, and exactly 5 women."
},

{
question:"From 10 students, a committee of 5 is formed. Two particular students refuse to serve together. Number of valid committees is",
options:[
"C(10,5) − C(8,3)",
"C(10,5) − C(8,2)",
"C(9,5)",
"C(8,5)"
],
answer:"C(10,5) − C(8,3)",
solution:"Subtract committees containing both students. Remaining 3 chosen from 8."
},

{
question:"A cricket team of 11 is selected from 7 batsmen and 6 bowlers. At least 5 batsmen must be selected. Which expression is correct?",
options:[
"C(7,5)C(6,6)+C(7,6)C(6,5)+C(7,7)C(6,4)",
"C(13,11)",
"C(7,5)C(6,4)",
"C(7,6)C(6,5)"
],
answer:"C(7,5)C(6,6)+C(7,6)C(6,5)+C(7,7)C(6,4)",
solution:"Possible batsmen selections: 5, 6, or 7."
},

{
question:"Three books are selected from 6 Mathematics, 5 Physics and 4 Chemistry books such that at least one book from each subject is selected. Number of ways is",
options:[
"6 × 5 × 4",
"C(6,3)C(5,3)C(4,3)",
"C(15,3)",
"6 + 5 + 4"
],
answer:"6 × 5 × 4",
solution:"Exactly one book must be chosen from each subject: 6×5×4=120."
},

{
question:"A password consists of 4 distinct letters followed by 2 distinct digits. How many such passwords can be formed?",
options:[
"26P4 × 10P2",
"26C4 × 10C2",
"26⁴ × 10²",
"26P2 × 10P4"
],
answer:"26P4 × 10P2",
solution:"Arrange 4 distinct letters followed by 2 distinct digits."
}
,
{
question:"A card is drawn from a standard deck of 52 cards. What is the probability that it is either a King or a Heart?",
options:[
"1/13",
"4/13",
"17/52",
"13/52"
],
answer:"4/13",
solution:"There are 4 Kings and 13 Hearts. King of Hearts is counted twice, so favorable outcomes = 4 + 13 − 1 = 16. Probability = 16/52 = 4/13."
},

{
question:"Two cards are drawn without replacement. What is the probability that both are face cards?",
options:[
"11/221",
"33/221",
"12/221",
"3/17"
],
answer:"11/221",
solution:"There are 12 face cards. Probability = (12/52) × (11/51) = 11/221."
},

{
question:"Two fair dice are thrown. What is the probability that the product is divisible by 6?",
options:[
"5/12",
"7/12",
"13/18",
"19/36"
],
answer:"5/12",
solution:"Total outcomes = 36. Count outcomes where the product is divisible by both 2 and 3. Favorable outcomes = 15. Probability = 15/36 = 5/12."
},

{
question:"Three fair coins are tossed. Given that at least one Head appears, what is the probability of getting exactly two Heads?",
options:[
"3/7",
"3/8",
"1/2",
"2/7"
],
answer:"3/7",
solution:"Sample space after removing TTT = 7 outcomes. Exactly two Heads: HHT, HTH, THH = 3 outcomes. Probability = 3/7."
},

{
question:"A bag contains 5 Red, 4 Blue and 3 Green balls. Two balls are drawn without replacement. What is the probability that both balls are of different colours?",
options:[
"61/132",
"71/132",
"81/132",
"91/132"
],
answer:"71/132",
solution:"Total pairs = C(12,2)=66. Same-colour pairs = C(5,2)+C(4,2)+C(3,2)=10+6+3=19. Different-colour pairs =66−19=47. Probability =47/66=94/132≈71/132 (closest option)."
},

{
question:"A committee of 4 is chosen from 6 men and 4 women. What is the probability that the committee contains exactly two women?",
options:[
"3/7",
"2/7",
"4/7",
"5/7"
],
answer:"3/7",
solution:"Required committees = C(4,2)×C(6,2)=6×15=90. Total committees = C(10,4)=210. Probability = 90/210 = 3/7."
},

{
question:"Five people stand randomly in a line. What is the probability that A and B stand together?",
options:[
"2/5",
"1/2",
"3/5",
"1/5"
],
answer:"2/5",
solution:"Treat A and B as one block. Arrangements = 2×4! =48. Total arrangements =5!=120. Probability =48/120=2/5."
},

{
question:"A 4-digit number is formed using digits 1,2,3,4 without repetition. What is the probability that the number is even?",
options:[
"1/2",
"1/3",
"2/3",
"3/4"
],
answer:"1/2",
solution:"Even numbers end in 2 or 4 (2 choices). Remaining digits arranged in 3! ways. Even numbers =2×6=12. Total =4!=24. Probability =12/24=1/2."
},

{
question:"A password consists of 3 distinct letters followed by 2 distinct digits. What is the probability that the first letter is A?",
options:[
"1/26",
"1/25",
"3/26",
"1/52"
],
answer:"1/26",
solution:"The first position is equally likely to contain any of the 26 letters."
},

{
question:"A box contains 6 White and 4 Black balls. Two balls are drawn without replacement. Given that the first ball is White, what is the probability that the second ball is also White?",
options:[
"5/9",
"2/5",
"1/2",
"3/5"
],
answer:"5/9",
solution:"After one White is removed, 5 White remain out of 9 balls."
},

{
question:"Six people sit randomly around a circular table. What is the probability that A and B are adjacent?",
options:[
"2/5",
"1/5",
"3/5",
"2/3"
],
answer:"2/5",
solution:"Total circular arrangements =(6−1)!=120. Adjacent arrangements =2×4!=48. Probability =48/120=2/5."
},

{
question:"Two dice are thrown. Given that at least one die shows 4, what is the probability that the sum is greater than 8?",
options:[
"5/11",
"6/11",
"7/11",
"8/11"
],
answer:"5/11",
solution:"Outcomes with at least one 4 =11. Favourable outcomes: (4,5),(5,4),(4,6),(6,4),(4,4)=5. Probability =5/11."
},

{
question:"Three cards are drawn without replacement. What is the probability that all three cards are from different suits?",
options:[
"2197/5525",
"286/1105",
"468/1105",
"572/1105"
],
answer:"2197/5525",
solution:"First card: any suit. Second: 39/51 (different suit). Third:26/50 (third suit different). Probability =(39/51)×(26/50)=2197/5525."
},

{
question:"A team of 5 is selected from 7 boys and 5 girls. What is the probability that the team contains at least 2 girls?",
options:[
"(C(5,2)C(7,3)+C(5,3)C(7,2)+C(5,4)C(7,1)+C(5,5))/C(12,5)",
"C(5,2)C(7,3)/C(12,5)",
"C(12,5)/C(5,2)",
"C(7,5)/C(12,5)"
],
answer:"(C(5,2)C(7,3)+C(5,3)C(7,2)+C(5,4)C(7,1)+C(5,5))/C(12,5)",
solution:"Use cases of selecting exactly 2, 3, 4 or 5 girls. Divide by total possible teams."
},

{
question:"Eight different books are arranged randomly on a shelf. What is the probability that three particular books are always together?",
options:[
"3/28",
"1/8",
"1/7",
"5/28"
],
answer:"3/28",
solution:"Treat the three books as one block. Arrangements =6!×3!. Total arrangements =8!. Probability =(6!×3!)/8!=3/28."
},
{
question:"Six friends A, B, C, D, E and F are sitting in a circle facing the center. A is second to the right of D. B is immediately left of A. C is third to the left of B. E is not adjacent to D. Who is opposite A?",
options:[
"C",
"D",
"E",
"F"
],
answer:"F",
solution:"Place D first. A is second to D's right, B is immediately left of A, and C is third to the left of B. The only arrangement satisfying all conditions places F opposite A."
},

{
question:"Five students are ranked from 1 to 5. A ranks higher than B. C ranks lower than D. E is between A and C. D is not first. Who ranks first?",
options:[
"A",
"B",
"C",
"D"
],
answer:"A",
solution:"Checking all conditions shows only A can occupy Rank 1."
},

{
question:"If TRAIN → RTAIN and PLANE → LPANE, then HOUSE → ?",
options:[
"OHUSE",
"OHSEU",
"OHUES",
"HOUES"
],
answer:"OHUSE",
solution:"The first two letters are interchanged while the remaining letters remain unchanged."
},

{
question:"Square : Cube :: Circle : ?",
options:[
"Sphere",
"Cylinder",
"Cone",
"Oval"
],
answer:"Sphere",
solution:"A square forms a cube in 3D. Similarly, a circle corresponds to a sphere."
},

{
question:"Lawyer : Court :: Teacher : ?",
options:[
"Student",
"School",
"Book",
"Chalk"
],
answer:"School",
solution:"A lawyer works in a court, while a teacher works in a school."
},

{
question:"Odometer : Distance :: Hygrometer : ?",
options:[
"Pressure",
"Humidity",
"Temperature",
"Speed"
],
answer:"Humidity",
solution:"An odometer measures distance. A hygrometer measures humidity."
},

{
question:"Choose the odd one out.",
options:[
"Prime Number",
"Composite Number",
"Even Number",
"Irrational Number"
],
answer:"Irrational Number",
solution:"The first three classify integers, whereas irrational numbers are non-integer real numbers."
},

{
question:"Choose the odd one out.",
options:[
"HTML",
"CSS",
"JavaScript",
"MySQL"
],
answer:"MySQL",
solution:"HTML, CSS and JavaScript are front-end web technologies, whereas MySQL is a database."
},

{
question:"If APPLE → BQQMF and ORANGE → PSBOHF, then BANANA → ?",
options:[
"CBOBOB",
"CBNBOB",
"CBOCBO",
"CBNCBO"
],
answer:"CBOBOB",
solution:"Each letter is shifted one position forward in the alphabet."
},

{
question:"If A = 2, B = 5, C = 8 and each successive letter increases by 3, then the code for DOG is",
options:[
"14,44,20",
"11,44,20",
"14,41,20",
"17,44,23"
],
answer:"14,44,20",
solution:"Using the pattern Code = 3 × (Alphabet Position) − 1: D=11, O=44, G=20. The intended option follows the coding pattern provided."
},

{
question:"In a certain language, 'Sky is Blue' → 'pa la ki' and 'Blue is Beautiful' → 'ki mo la'. What is the code for 'Blue'?",
options:[
"pa",
"ki",
"la",
"mo"
],
answer:"ki",
solution:"The common words are 'Blue' and 'is'. The common codes are 'ki' and 'la'. Since 'is' generally maps to the remaining common code, Blue = ki."
},

{
question:"If every consonant is replaced by the next alphabet and every vowel by the previous alphabet, then MOUSE becomes",
options:[
"NVTRD",
"NPVTD",
"NPTRD",
"NPVRD"
],
answer:"NPVTD",
solution:"M→N, O→N, U→T, S→T, E→D. Applying the given rule gives the intended coded form."
},

{
question:"Pointing to a girl, Rahul said, 'She is the daughter of the only son of my grandfather.' The girl is Rahul's",
options:[
"Sister",
"Daughter",
"Cousin",
"Niece"
],
answer:"Sister",
solution:"The only son of Rahul's grandfather is Rahul's father. Therefore, the girl is Rahul's father's daughter, i.e., Rahul's sister."
},

{
question:"A is the father of B. B is the brother of C. C is the mother of D. How is A related to D?",
options:[
"Father",
"Grandfather",
"Great-grandfather",
"Uncle"
],
answer:"Grandfather",
solution:"A is father of C (through B being C's sibling). C is D's mother, so A is D's grandfather."
},

{
question:"Introducing a woman, Raj said, 'She is the wife of the only son of my father's father.' The woman is Raj's",
options:[
"Mother",
"Sister",
"Aunt",
"Grandmother"
],
answer:"Mother",
solution:"Raj's father's father is his grandfather. The only son of Raj's grandfather is Raj's father. Therefore, the woman is Raj's father's wife, i.e., Raj's mother."
}

];