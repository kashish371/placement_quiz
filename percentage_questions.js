const questions = [
  {
    question: "If A's salary is 25% more than B's salary, then by what percentage is B's salary less than A's salary?",
    options: [
      "20%",
      "25%",
      "16.67%",
      "33.33%"
    ],
    answer: "20%",
    solution: "Let B's salary = 100. Then A's salary = 125. B is less than A by [(125 - 100) / 125] * 100 = (25 / 125) * 100 = 20%."
  },
  {
    question: "If the price of petrol increases by 20%, by what percentage must a driver reduce consumption so that total expenditure remains unchanged?",
    options: [
      "20%",
      "16.67%",
      "25%",
      "15%"
    ],
    answer: "16.67%",
    solution: "Reduction % = [r / (100 + r)] * 100 = [20 / 120] * 100 = 100 / 6 = 16.67%."
  },
  {
    question: "The length of a rectangle is increased by 20% and its breadth is decreased by 10%. What is the net percentage change in its area?",
    options: [
      "8% increase",
      "8% decrease",
      "10% increase",
      "12% increase"
    ],
    answer: "8% increase",
    solution: "Net change = a + b + (ab / 100) = 20 + (-10) + (20 * -10) / 100 = 10 - 2 = +8% (8% increase)."
  },
  {
    question: "A candidate needs 35% marks to pass an exam. He gets 145 marks and fails by 30 marks. What are the maximum marks?",
    options: [
      "400",
      "450",
      "500",
      "550"
    ],
    answer: "500",
    solution: "Passing marks = 145 + 30 = 175. Since 35% of Total = 175, Total Marks = (175 / 35) * 100 = 500."
  },
  {
    question: "In an election between two candidates, the winner secures 62% of the votes and wins by a majority of 1,440 votes. What is the total number of votes polled?",
    options: [
      "5,000",
      "6,000",
      "7,200",
      "8,000"
    ],
    answer: "6,000",
    solution: "Winner = 62%, Loser = 38%. Majority margin = 62% - 38% = 24%. Total votes = (1440 / 24) * 100 = 6,000."
  },
  {
    question: "The population of a city grows by 5% each year. If the current population is 1,85,220, what was the population 3 years ago?",
    options: [
      "1,50,000",
      "1,60,000",
      "1,70,000",
      "1,65,000"
    ],
    answer: "1,60,000",
    solution: "Population 3 years ago = 185220 / (1 + 5/100)^3 = 185220 / (1.05)^3 = 185220 / 1.157625 = 1,60,000."
  },
  {
    question: "A person spends 30% of their income on food, 20% on rent, and 50% of the remaining on other expenses. If they save Rs. 6,000, what is their total income?",
    options: [
      "Rs. 20,000",
      "Rs. 24,000",
      "Rs. 25,000",
      "Rs. 30,000"
    ],
    answer: "Rs. 24,000",
    solution: "Spent on food + rent = 50%. Remaining = 50%. Other expenses = 50% of 50% = 25%. Final savings = 25% of total income. Total Income = (6000 / 25) * 100 = Rs. 24,000."
  },
  {
    question: "A student multiplied a number by 4/5 instead of 5/4. What is the percentage error in the calculation?",
    options: [
      "36%",
      "40%",
      "56.25%",
      "64%"
    ],
    answer: "36%",
    solution: "Let number = 20. Correct value = 20 * (5/4) = 25. Calculated value = 20 * (4/5) = 16. Error = 25 - 16 = 9. % Error = (9 / 25) * 100 = 36%."
  },
  {
    question: "If the radius of a circle increases by 20%, by what percentage does the area of the circle increase?",
    options: [
      "40%",
      "44%",
      "20%",
      "48%"
    ],
    answer: "44%",
    solution: "Area is proportional to r^2. Net increase = 20 + 20 + (20 * 20) / 100 = 40 + 4 = 44%."
  },
  {
    question: "Two numbers are respectively 30% and 60% more than a third number. What percentage is the first number of the second number?",
    options: [
      "75%",
      "80%",
      "81.25%",
      "85%"
    ],
    answer: "81.25%",
    solution: "Let third number = 100. First = 130, Second = 160. Percentage = (130 / 160) * 100 = 81.25%."
  },
  {
    question: "A reduction of 10% in the price of sugar enables a homemaker to obtain 2 kg more for Rs. 360. What is the reduced price per kg?",
    options: [
      "Rs. 18",
      "Rs. 20",
      "Rs. 16",
      "Rs. 22"
    ],
    answer: "Rs. 18",
    solution: "10% of Rs. 360 = Rs. 36. This savings buys 2 kg extra. Reduced price = 36 / 2 = Rs. 18 per kg."
  },
  {
    question: "Fresh watermelon contains 90% water. After sitting in the sun, it contains 85% water. If the original weight was 20 kg, what is its current weight?",
    options: [
      "12 kg",
      "13.33 kg",
      "15 kg",
      "16.67 kg"
    ],
    answer: "13.33 kg",
    solution: "Solid pulp in fresh watermelon = (100 - 90)% of 20 = 2 kg. In dry condition, pulp is 15%. 0.15 * New Weight = 2 kg => New Weight = 2 / 0.15 = 13.33 kg."
  },
  {
    question: "In an examination, 70% candidates passed in English, 80% passed in Mathematics, and 10% failed in both. If 144 candidates passed in both, what is the total number of candidates?",
    options: [
      "200",
      "240",
      "300",
      "320"
    ],
    answer: "240",
    solution: "Candidates passed in at least one subject = 100% - 10% = 90%. Passed in both = 70% + 80% - 90% = 60%. Total candidates = (144 / 60) * 100 = 240."
  },
  {
    question: "If 8% of x is the same as 4% of y, then 20% of x is equal to what percentage of y?",
    options: [
      "10%",
      "16%",
      "40%",
      "5%"
    ],
    answer: "10%",
    solution: "0.08x = 0.04y => 2x = y => x = y/2. Therefore, 20% of x = 0.20 * (y / 2) = 0.10y = 10% of y."
  },
  {
    question: "The value of an asset drops by 20% in the first year and by 15% in the second year. What is the cumulative percentage depreciation over the 2 years?",
    options: [
      "35%",
      "32%",
      "30%",
      "28%"
    ],
    answer: "32%",
    solution: "Net change = -20 + (-15) + [(-20) * (-15)] / 100 = -35 + 3 = -32% (32% depreciation)."
  },
  {
    question: "If the numerator of a fraction is increased by 140% and the denominator is decreased by 20%, the resultant fraction is 12/7. What was the original fraction?",
    options: [
      "4/7",
      "3/7",
      "5/7",
      "2/7"
    ],
    answer: "4/7",
    solution: "(x * 2.4) / (y * 0.8) = 12/7 => 3 * (x/y) = 12/7 => x/y = (12/7) * (1/3) = 4/7."
  },
  {
    question: "In an exam, Rahul scored 28% and failed by 14 marks, while Priya scored 42% and got 28 marks above the pass mark. What are the maximum marks?",
    options: [
      "250",
      "300",
      "350",
      "400"
    ],
    answer: "300",
    solution: "Difference in percentage = 42% - 28% = 14%. Difference in marks = 28 - (-14) = 42. Total marks = (42 / 14) * 100 = 300."
  },
  {
    question: "A company gives a 10% discount on a listed price, but then adds an 8% sales tax. What is the net percentage change relative to the original list price?",
    options: [
      "2% decrease",
      "2.8% decrease",
      "1.8% decrease",
      "No change"
    ],
    answer: "2.8% decrease",
    solution: "Net factor = 0.90 * 1.08 = 0.972. Percentage decrease = (1 - 0.972) * 100 = 2.8% decrease."
  },
  {
    question: "In a class of 60 students, 45% are girls. How many boys are in the class?",
    options: [
      "27",
      "30",
      "33",
      "36"
    ],
    answer: "33",
    solution: "Boys percentage = 100% - 45% = 55%. Number of boys = 55% of 60 = 0.55 * 60 = 33."
  },
  {
    question: "If A is 40% of B, and B is 25% of C, what percentage of C is A?",
    options: [
      "10%",
      "15%",
      "20%",
      "65%"
    ],
    answer: "10%",
    solution: "A = 0.40 * B and B = 0.25 * C. Thus, A = 0.40 * 0.25 * C = 0.10 * C = 10% of C."
  },
  {
    question: "When the side of a cube is increased by 10%, by what percentage does its volume increase?",
    options: [
      "30%",
      "33.1%",
      "31.3%",
      "36.3%"
    ],
    answer: "33.1%",
    solution: "Volume multiplier = (1.10)^3 = 1.331. Percentage increase = (1.331 - 1) * 100 = 33.1%."
  },
  {
    question: "A batsman scored 110 runs which included 3 boundaries (4s) and 8 sixes. What percentage of his total score did he make by running between the wickets?",
    options: [
      "45.45%",
      "50%",
      "54.54%",
      "55%"
    ],
    answer: "45.45%",
    solution: "Runs from boundaries/sixes = (3 * 4) + (8 * 6) = 12 + 48 = 60. Runs scored by running = 110 - 60 = 50. Percentage = (50 / 110) * 100 = 45.45%."
  },
  {
    question: "An alloy contains 36% copper, 40% zinc, and the rest nickel. How much nickel is present in 250 kg of the alloy?",
    options: [
      "50 kg",
      "60 kg",
      "65 kg",
      "70 kg"
    ],
    answer: "60 kg",
    solution: "Nickel % = 100% - (36% + 40%) = 24%. Weight of nickel = 24% of 250 = 0.24 * 250 = 60 kg."
  },
  {
    question: "If the price of an article is increased by 20% and its sales decrease by 15%, what is the net impact on revenue?",
    options: [
      "2% increase",
      "2% decrease",
      "5% increase",
      "5% decrease"
    ],
    answer: "2% increase",
    solution: "Net change = 20 + (-15) + [20 * (-15)] / 100 = 5 - 3 = +2% (2% increase)."
  },
  {
    question: "In an election between two candidates, 10% of voters did not cast their vote, and 10% of votes polled were declared invalid. The winning candidate got 54% of valid votes and won by 1,620 votes. Find the total number of enrolled voters.",
    options: [
      "20,000",
      "25,000",
      "30,000",
      "22,500"
    ],
    answer: "25,000",
    solution: "Let enrolled voters = V. Polled = 0.9V, Valid = 0.9 * 0.9V = 0.81V. Margin = (54% - 46%) = 8% of valid votes. 0.08 * 0.81V = 1620 => 0.0648V = 1620 => V = 25,000."
  },
  {
    question: "A mixture of 40 liters of milk and water contains 10% water. How much water must be added to make water 20% of the new mixture?",
    options: [
      "4 liters",
      "5 liters",
      "6 liters",
      "8 liters"
    ],
    answer: "5 liters",
    solution: "Pure milk = 90% of 40 = 36 L. In new mixture, milk is 80%. 0.80 * New Total = 36 => New Total = 45 L. Water added = 45 - 40 = 5 liters."
  },
  {
    question: "If 60% of A's income is equal to 75% of B's income, and B's income is x% of A's income, what is the value of x?",
    options: [
      "75",
      "80",
      "85",
      "90"
    ],
    answer: "80",
    solution: "0.60 * A = 0.75 * B => B / A = 60 / 75 = 4 / 5 = 0.80. Thus, B is 80% of A (x = 80)."
  },
  {
    question: "A person's salary was first increased by 10% and subsequently decreased by 10%. How does the final salary compare to the original salary?",
    options: [
      "No change",
      "1% increase",
      "1% decrease",
      "0.5% decrease"
    ],
    answer: "1% decrease",
    solution: "Net change = 10 - 10 - (10 * 10) / 100 = -1% (1% decrease)."
  },
  {
    question: "Due to a 25% price drop on pens, a customer can buy 4 more pens for Rs. 60. What was the original price of one pen?",
    options: [
      "Rs. 3.75",
      "Rs. 5.00",
      "Rs. 4.50",
      "Rs. 6.00"
    ],
    answer: "Rs. 5.00",
    solution: "Reduced price = (25% of 60) / 4 = 15 / 4 = Rs. 3.75. Original price = Reduced / (1 - 0.25) = 3.75 / 0.75 = Rs. 5.00."
  },
  {
    question: "In a college election, 20% of students did not vote. Out of the votes cast, candidate A received 60% and candidate B received 40%. If candidate A got 960 votes, what is the total number of students in the college?",
    options: [
      "1,800",
      "2,000",
      "2,200",
      "2,400"
    ],
    answer: "2,000",
    solution: "Let total students = S. Votes cast = 0.80S. A's votes = 0.60 * 0.80S = 0.48S. 0.48S = 960 => S = 960 / 0.48 = 2,000."
  }
];