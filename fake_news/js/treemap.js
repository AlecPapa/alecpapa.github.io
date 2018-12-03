var dom = document.getElementById("chartContainer7");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    series: [{
        type: 'treemap',
        data: [{
            name: 'Evil Democrats', // First tree
            value: 29.23,
            children: [{
                name: 'California Governor Jerry Brown In the Middle of a Corruption Investigation', // First leaf of first tree
                value: 0.705161992,
            }, {
                name: 'Democrat Principle Defecates In Front Of Students During Pledge of Allegiance', // Second leaf of first tree
                value: 0.19198936,
            }, {
                name: 'Nancy Pelosi s Son Arrested for Murder', // Second leaf of first tree
                value: 0.035361043,
            }, {
                name: 'Nancy Pelosi s Daughters Arrested For Trafficking Cocaine', // Second leaf of first tree
                value: 0.021257803,
            }, {
                name: 'Senator Elizabeth Warren Performed Nude Pagan Rituals in College', // Second leaf of first tree
                value: 0.017088597,
            }, {
                name: 'Texas Church Shooter was an Atheist on the DNC Payroll', // Second leaf of first tree
                value: 0.013434108,
            }, {
                name: 'DEA Raids a United States Senator. Dems in a Panic.', // Second leaf of first tree
                value: 0.008132525,
            }, {
                name: 'Anthony Weiner Placed in Protective Custody - Will Turn State s Evidence Against Hillary', // Second leaf of first tree
                value: 0.003587576,
            }, {
                name: 'Bernie Sanders Proposes A Bill Forcing Christian Office Holders to Wear A Scarlet Cross', // Second leaf of first tree
                value: 0.002722852,
            }, {
                name: 'Morgan Freeman: "Jailing Hilary" best way to restore "Public Faith in Government"', // Second leaf of first tree
                value: 0.0010912,
            }, {
                name: 'Nancy Pelosi Arrested', // Second leaf of first tree
                value: 0.000152356,
            }, {
                name: 'California Christians Must Register Bibles as Assault Weapons', // Second leaf of first tree
                value: 2.05887E-05,
            }]
        }, {
            name: 'Clinton', // Second tree
            value: 14.82,
            children: [{
                name: 'Clinton / Lynch Pilot Breaks His Silence on What Was Said', // Granson of first tree
                value: 0.645838707,
            }, {
                name: 'Hillary Clinton s Assistant J.W.McGill Found Dead', // Second leaf of first tree
                value: 0.186846418,
            }, {
                name: 'Clinton Foundation Cargo Ship Raided at Port of Baltimore Reveals "Sick Secret"', // Second leaf of first tree
                value: 0.065294699,
            }, {
                name: 'Mandalay Bay Security Guard on Clinton Foundation payroll ', // Second leaf of first tree
                value: 0.046813152,
            }, {
                name: 'Trey Gowdy Forced Into Protective Custody After Two Investigators Go Missing', // Second leaf of first tree
                value: 0.045696135,
            }, {
                name: 'Trey Gowdy s Son Found Dead in a Dumpster ', // Second leaf of first tree
                value: 0.007951127,
            }, {
                name: 'Two Clinton Employees Arrested for Destroying Uranium Probe Evidence ', // Second leaf of first tree
                value: 0.000691535,
            }, {
                name: 'Trey Gowdy Orders Clinton Associate Vince Foster s Body Exhumed ', // Second leaf of first tree
                value: 0.000431575,
            }, {
                name: 'Steel Barrel Graves Uncovered on Clinton Estate  ', // Second leaf of first tree
                value: 0.000411265,
            }, {
                name: 'Bill Clinton Files for Divorce ', // Second leaf of first tree
                value: 0.000411265,
            }]
        }, {
            name: 'Immigrants',
            value: 11.81,
            children: [{
                name: 'Illegal immigrants started California Wildfires ',
                value: 0.752578632,
            }, {
                name: 'celand Pays Women $5000 Per Month to Marry Immigrants',
                value: 0.212657583,
            }, {
                name: 'Key Muslim Figure Demands Pork-free Menus in the United States',
                value: 0.012
            }, {
                name: '"Muslim Refugee" Kills Texas County Deputy ',
                value: 0.011740736
            }, {
                name: '"Muslim Refugee" Shoots 15 People in Ohio Nightclub ',
                value: 0.010454603
            }, {
                name: 'Texas Church Shooter was a Muslim Convert Named "Samir Al Hajeed" ',
                value: 3.31084E-05
            }, {
                name: 'Sarah Palin Blames "Mexican Muslim" Immigrant for Fort Lauderdale Shooting ',
                value: 3.05616E-05
            }]
        }, {
            name: 'Obama',
            value: 9.87,
            children: [{
                name: 'Obama and Michelle to Divorce',
                value: 0.606666626,
            }, {
                name: 'Malia Obama Busted Buying 6 Pounds of Marijuana in Chicago ',
                value: 0.122552756,
            }, {
                name: 'Queen Elizabeth Removes Obamas From Royal Wedding Guest List ',
                value: 0.083530983,
            }, {
                name: 'Obamas Sued by Malia & Sasha s Biological Father  ',
                value: 0.049844218,
            }, {
                name: 'FBI Issues Warrant for Obama s Arrest After Confirming Illegal Trump Tower Wiretap   ',
                value: 0.049234503,
            }, {
                name: 'Obama Orders Life-Sized Bronze Statue of Himself Installed in White House ',
                value: 0.047557786,
            }, {
                name: 'Malia Obama Expelled from Harvard ',
                value: 0.014938022,
            }, {
                name: 'Malia Obama Arrested in Drugs Bust ',
                value: 0.009877386,
            }, {
                name: 'Search Warrant Executed at Obama Residence',
                value: 0.007270854,
            }, {
                name: 'Trump "Humiliates" Obama after White House Cleaning Staff Find "Secret Stash" of Drugs ',
                value: 0.004511892,
            }, {
                name: 'Denzel Washington Calls Obama The "Criminal-in-Chief"',
                value: 0.003246733,
            }, {
                name: 'Obama Makes Millions from ObamaCare Royalties',
                value: 0.000388693,
            }, {
                name: 'Malia Obama Fired from Internship at Spanish Embassy for Smoking Pot',
                value: 0.000249983,
            }, {
                name: 'Barack Obama says "Country Owes Me a Debt of Gratitude"',
                value: 7.31658E-05,
            }, {
                name: 'Barack Obama s Daughters Arrested in Hawaii ',
                value: 5.63987E-05,
            }]
        }, {
            name: 'Race',
            value: 8.4,
            children: [{
                name: 'Black Lives Matter "Thugs" Blocked Emergency Crews from Reaching Hurricane Victims ',
                value: 0.998115657,
            }, {
                name: 'Man Arrested After Police Find 19 Female Bodies with "Black Lives Matter" Carved Into Their Skin ',
                value: 0.0010141,
            }, {
                name: 'Richmond Begins Mass Relocation of Low Income Blacks to Decrease City Poverty Rate ',
                value: 0.000870243
            }]
        }, {
            name: 'America Haters',
            value: 7.20,
            children: [{
                name: 'NFL Fines Pittsburgh Steelers $1M Each for Skipping National Anthem ',
                value: 0.473805051,
            }, {
                name: 'NFL Owners Orders His Players to Stand During Anthem?',
                value: 0.184303903,
            }, {
                name: 'Flight Crew Take a Knee, leaving New Orleans Saints Straned on Runway',
                value: 0.117929451
            }, {
                name: 'Florida s Sheriff s Office Will Not Escort Miami Dolphins Until They Stand For National Anthem ',
                value: 0.105823419
            }, {
                name: 'Celine Dion says: "I can not even Look at an American Flag Because I Hate This Country ',
                value: 0.072218743
            }, {
                name: 'Ohio Cemetery Begins Exhuming Bodies of Confederate Soldiers',
                value: 0.045919432
            }]
        }, {
            name: 'Trump',
            value: 6.53,
            children: [{
                name: 'Barron Trump Wins National Academic Award ',
                value: 0.343443005,
            }, {
                name: 'Trump s Health Deteriorating as White House Pressure Mounts ',
                value: 0.292733299,
            }, {
                name: 'Trump Revokes Press Credentials for Six News Outlets',
                value: 0.101188912
            }, {
                name: 'Trump Mocks Trudeau for Celebrating Thanksgiving Six Weeks Early ',
                value: 0.056472172
            }, {
                name: 'President Trump closed US Airspace for 4th of July',
                value: 0.047021727
            }, {
                name: 'Melania Trump Bans Monsanto Products from the White House',
                value: 0.039876268
            }, {
                name: 'Ex-Wife Ivana Claims Donald Trump is Addicted to Penis Englargement Pills',
                value: 0.02927333
            }, {
                name: 'Trump s Unsecured Android Device Source of Recent White House Leaks',
                value: 0.027890338
            }, {
                name: 'No More Child Support After 2017',
                value: 0.021044528
            }, {
                name: 'President Trump Calls Mexican Senator Antonion Trillanes IV a "Little Narco"',
                value: 0.018785641
            }, {
                name: 'Trump: "If You Tell People a lie Three Times, They Will Believe You"',
                value: 0.017563998
            }, {
                name: 'Trump Wants to Deport American Indians to India',
                value: 0.002328036
            }, {
                name: 'Donald Trump: "Being an Atheist Gives Me A Business Edge" ',
                value: 0.00179789
            }, {
                name: 'Trump Organization Wins Lucrative Contract to Rebuild Syrian Airport ',
                value: 0.000184399
            }, {
                name: 'Buzz Aldrin: "Not Punching Donald Trump was My Greatest Achievement"',
                value: 0.000108334
            }, {
                name: 'President Trump Reverses President Obama s Turkey Pardons ',
                value: 0.000108334
            }, {
                name: 'Trump Calls Trudeau "Leader of The Igloo People" ',
                value: 9.68094E-05
            }, {
                name: 'Trump Announces $612 Credit for "Deserving Americans"',
                value: 4.84047E-05
            }, {
                name: 'Russsian Prostitute: "Donald Trump is Poorly Endowed"',
                value: 3.45748E-05
            }]
        }, {
            name: 'Random',
            value: 3.98,
            children: [{
                name: 'Only 60 of 1,566 Churches in Houston Opened to Help Hurricane Harvey Victims',
                value: 0.47218812,
            }, {
                name: 'Pope Francis: "God Has Instructed Me To Revise the Ten Commandments"',
                value: 0.216073284,
            }, {
                name: 'LGBT is Adding a "P" for Pedosexual',
                value: 0.111814147
            }, {
                name: 'Mass Grave of Dozens of Tortured Black Men Found in Deceased KKK Leader s Estate ',
                value: 0.066861838
            }, {
                name: 'Russian Scientists Discover Cure for Homosexuality',
                value: 0.064973085
            }, {
                name: 'EPolice Raid & Burn A Standing Rock Protest Camp',
                value: 0.054773822
            }, {
                name: 'CNN Stages A Hurricane Harvey Rescue Video ',
                value: 0.013183492
            }, {
                name: 'Planned Parenthood Employee Charged with Using Aborted Babies as Halloween Prop ',
                value: 0.000132213
            }]
        }, {
            name: 'Dumb Republicans',
            value: 1.94,
            children: [{
                name: 'Betsy Devos: "40 Percent is More Than Half" ',
                value: 0.466716367,
            }, {
                name: 'Kellyanne Conway: Liberal Women Hate Me Because of "Striking Beauty & Intellect" ',
                value: 0.274127916,
            }, {
                name: 'Paul Ryan: "Women Who Use Birth Control Are Committing Murder" ',
                value: 0.224427671
            }, {
                name: 'John McCain "accidentally" voted no on Affordable Care Act Repeal  ',
                value: 0.029742491
            }, {
                name: 'Stephen Bannon: "No blame for Beating Your Wife If It s Out of Love"  ',
                value: 0.003898363
            }, {
                name: 'US Health Secretary, Tom Price: "It is Better if Cancer Patients Die More Quickly" ',
                value: 0.000939645
            }, {
                name: 'Betsy Devos: "History Textbooks Should Be Based on the Bible" ',
                value: 0.000147548
            }]
        }, {
            name: 'Conspiracy',
            value: 5.97,
            children: [{
                name: 'FBI Raids CDC for Data on Vaccines & Autism ',
                value: 0.547288777,
            }, {
                name: 'CIA AGent Confesses on Deathbed: "We Blew up WTC7 on 9/11"',
                value: 0.238839849,
            }, {
                name: 'Trump Enacts 90-day Ban on Childhood Vaccinations',
                value: 0.213871375
            }]
        }, {
            name: 'Mass shooting',
            value: 2.73,
            children: [{
                name: 'Mandalay Bay Security Guard "vanished" ',
                value: 0.99741004,
            }, {
                name: 'Upstate Murder-Suicide linked to Las Vegas Mass Shooting',
                value: 0.00258996,
            }]
        }, {
            name: 'Liberals',
            value: 9.25,
            children: [{
                name: 'Samantha Bees Husband Fighting to Keep Poor People Out of His Child s School',
                value: 0.266840221
            }, {
                name: 'Bill O Reilly in Critical Condition After Being Attacked by "Tolerant" Liberals',
                value: 0.20175724,
            }, {
                name: 'Brad Pitt: "Elite Hollywood Pedophiles Control America"',
                value: 0.188740644
            }, {
                name: 'Johny Depp to be Charged And Held Under the Patriot Act',
                value: 0.135535308
            }, {
                name: 'Jennifer Anniston Starts A "Celebrities for Trump Group',
                value: 0.130979499
            }, {
                name: 'Whoopi Goldberg: "Military Widows Love Their 15 Minutes in the Spotlight" ',
                value: 0.074845428
            }, {
                name: 'Jay Z Says "Satan is Our True Lord" and "Only Idiots Believe in Jesus"',
                value: 0.000504393
            }, {
                name: 'Liberal Hero Amy Schumer Jailed After Threatening Trump on Live TV',
                value: 0.000455581
            }, {
                name: 'S. Illinois University at Carbondale Closing Down Thanks to "Social Justice Warriors"',
                value: 0.000195249
            }, {
                name: 'Atheist Iceland Issues A Travel Ban Against White Southern Baptist ',
                value: 0.000146437
            }]
        }]
    }]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}