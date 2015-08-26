// JavaScript Document

function set_up_band_db(){
	//alert("DB");
	
	
		//Ronnie James Dio Stage = 0
		//second stage = 1
		//thrid stage = 2
		//fourth = 3
		//fifth = 4
		
		db.transaction(function (tx) {		
		
		tx.executeSql('DROP TABLE IF EXISTS bands');
		//tx.executeSql('DROP TABLE IF EXISTS bands_101');
		
		tx.executeSql('CREATE TABLE IF NOT EXISTS bands_101 (id UNIQUE, band_name TEXT, stage TEXT, day INTEGER, start_time INTEGER, finish_time INTEGER, band_fav INTEGER, stage_rank INTEGER, day_name)');
		//Thursday
//Friday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (1, "Feed The Rhino", "Main Stage", 20150828, 1200, 1230, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (2, "Lonely The Brave", "Main Stage", 20150828, 1245, 1325, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (3, "Against Me!", "Main Stage", 20150828, 1340, 1420, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (4, "The Gaslight Anthem", "Main Stage", 20150828, 1440, 1525, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (5, "The Cribs", "Main Stage", 20150828, 1545, 1630, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (6, "The Maccabees", "Main Stage", 20150828, 1650, 1735, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (7, "Jamie T", "Main Stage", 20150828, 1800, 1855, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (8, "Kendrick Lamar", "Main Stage", 20150828, 1930, 2040, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (9, "The Libertines", "Main Stage", 20150828, 2125, 2300, 0, 0, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (10, "Mariachi El Bronx", "Main Stage", 20150829, 1200, 1230, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (11, "Neck Deep", "Main Stage", 20150829, 1245, 1320, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (12, "Drenge", "Main Stage", 20150829, 1335, 1415, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (13, "Palma Violets", "Main Stage", 20150829, 1430, 1510, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (14, "Panic! At The Disco", "Main Stage", 20150829, 1535, 1615, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (15, "All Time Low", "Main Stage", 20150829, 1635, 1720, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (16, "Bastille", "Main Stage", 20150829, 1740, 1840, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (17, "Alt J", "Main Stage", 20150829, 1915, 2015, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (18, "Mumford & Sons", "Main Stage", 20150829, 2100, 2300, 0, 0, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (19, "Babymetal", "Main Stage", 20150830, 1200, 1230, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (20, "Fidlar", "Main Stage", 20150830, 1245, 1315, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (21, "Marmozets", "Main Stage", 20150830, 1330, 1405, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (22, "Modestep", "Main Stage", 20150830, 1425, 1500, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (23, "Pierce The Veil", "Main Stage", 20150830, 1520, 1605, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (24, "Alexisonfire", "Main Stage", 20150830, 1625, 1710, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (25, "Royal Blood", "Main Stage", 20150830, 1745, 1835, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (26, "Bring Me The Horizon", "Main Stage", 20150830, 1915, 2010, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (27, "Metallica", "Main Stage", 20150830, 2100, 2300, 0, 0, "Sunday")');


//Thursday
//Friday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (28, "The Skints", "NME BBC Radio 1 Stage", 20150828, 1200, 1235, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (29, "Shura", "NME BBC Radio 1 Stage", 20150828, 1255, 1330, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (30, "Ghostpoet", "NME BBC Radio 1 Stage", 20150828, 1350, 1425, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (31, "Awolnation", "NME BBC Radio 1 Stage", 20150828, 1445, 1520, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (32, "Kwabs", "NME BBC Radio 1 Stage", 20150828, 1540, 1615, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (33, "Glass Animals", "NME BBC Radio 1 Stage", 20150828, 1640, 1715, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (34, "Jamie Xx", "NME BBC Radio 1 Stage", 20150828, 1740, 1830, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (35, "Years & Years", "NME BBC Radio 1 Stage", 20150828, 1855, 1945, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (36, "Gorgon City", "NME BBC Radio 1 Stage", 20150828, 2010, 2100, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (37, "Deadmau5", "NME BBC Radio 1 Stage", 20150828, 2145, 2300, 0, 1, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (38, "The Struts", "NME BBC Radio 1 Stage", 20150829, 1200, 1230, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (39, "The Districts", "NME BBC Radio 1 Stage", 20150829, 1245, 1320, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (40, "Echosmith", "NME BBC Radio 1 Stage", 20150829, 1335, 1410, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (41, "Parquet Courts", "NME BBC Radio 1 Stage", 20150829, 1425, 1505, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (42, "American Football", "NME BBC Radio 1 Stage", 20150829, 1520, 1600, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (43, "Don Broco", "NME BBC Radio 1 Stage", 20150829, 1615, 1655, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (44, "Swim Deep", "NME BBC Radio 1 Stage", 20150829, 1715, 1755, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (45, "Peace", "NME BBC Radio 1 Stage", 20150829, 1815, 1900, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (46, "Run The Jewels", "NME BBC Radio 1 Stage", 20150829, 1920, 2005, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (47, "Limp Bizkit", "NME BBC Radio 1 Stage", 20150829, 2030, 2130, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (48, "Knife Party", "NME BBC Radio 1 Stage", 20150829, 2200, 2300, 0, 1, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (50, "Nothing But Thieves", "NME BBC Radio 1 Stage", 20150830, 1300, 1330, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (51, "Twin Peaks", "NME BBC Radio 1 Stage", 20150830, 1345, 1415, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (52, "Slaves", "NME BBC Radio 1 Stage", 20150830, 1430, 1505, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (53, "Spector", "NME BBC Radio 1 Stage", 20150830, 1525, 1605, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (54, "Circa Waves", "NME BBC Radio 1 Stage", 20150830, 1625, 1705, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (55, "Wolf Alice", "NME BBC Radio 1 Stage", 20150830, 1725, 1805, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (56, "Everything Everything", "NME BBC Radio 1 Stage", 20150830, 1825, 1910, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (57, "Catfish & The Bottlemen", "NME BBC Radio 1 Stage", 20150830, 1930, 2020, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (58, "Twin Atlantic", "NME BBC Radio 1 Stage", 20150830, 2040, 2130, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (59, "Rebel Sound", "NME BBC Radio 1 Stage", 20150830, 2200, 2300, 0, 1, "Sunday")');
		
		//Thursday
//Friday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (60, "The Six", "Dance Stage", 20150828, 1200, 1230, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (61, "Petite Meller", "Dance Stage", 20150828, 1245, 1315, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (62, "99 Souls", "Dance Stage", 20150828, 1330, 1400, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (63, "Tcts", "Dance Stage", 20150828, 1415, 1445, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (64, "Snakehips", "Dance Stage", 20150828, 1500, 1535, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (65, "Maribou State Live", "Dance Stage", 20150828, 1550, 1625, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (66, "Evan Christ", "Dance Stage", 20150828, 1640, 1715, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (67, "Rustie", "Dance Stage", 20150828, 1730, 1810, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (68, "Blonde Live", "Dance Stage", 20150828, 1825, 1915, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (69, "Brodinski Presents Brava", "Dance Stage", 20150828, 1930, 2030, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (70, "Hudson Mohawke", "Dance Stage", 20150828, 2045, 2145, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (71, "Boy Better Know", "Dance Stage", 20150828, 2200, 2300, 0, 2, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (72, "The Ramona Flowers", "Dance Stage", 20150829, 1200, 1225, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (73, "All We Are", "Dance Stage", 20150829, 1235, 1305, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (74, "Hayden James", "Dance Stage", 20150829, 1315, 1345, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (75, "Ferdinand Weber", "Dance Stage", 20150829, 1355, 1425, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (76, "Toyboy & Robin", "Dance Stage", 20150829, 1435, 1505, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (77, "My Nu Leng", "Dance Stage", 20150829, 1520, 1550, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (78, "Jacob Plant", "Dance Stage", 20150829, 1605, 1640, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (79, "Porter Robinson", "Dance Stage", 20150829, 1655, 1730, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (80, "Dillon Francis", "Dance Stage", 20150829, 1745, 1825, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (81, "Hannah Wants", "Dance Stage", 20150829, 1845, 1925, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (82, "Camo & Krooked", "Dance Stage", 20150829, 1945, 2030, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (83, "Wilkinson", "Dance Stage", 20150829, 2055, 2140, 0, 2, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (84, "Cardiknox", "Dance Stage", 20150830, 1200, 1225, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (85, "Riptide Movement", "Dance Stage", 20150830, 1240, 1310, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (86, "Ftse", "Dance Stage", 20150830, 1325, 1355, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (87, "Ben Khan", "Dance Stage", 20150830, 1410, 1440, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (88, "Elliphant", "Dance Stage", 20150830, 1500, 1530, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (89, "Dj Fresh", "Dance Stage", 20150830, 1550, 1640, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (90, "Dimension X Cove", "Dance Stage", 20150830, 1700, 1730, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (91, "Secondcity", "Dance Stage", 20150830, 1750, 1820, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (92, "Tourist", "Dance Stage", 20150830, 1840, 1910, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (93, "Charli Xcx", "Dance Stage", 20150830, 1930, 2010, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (94, "Kevin Saunderson", "Dance Stage", 20150830, 2040, 2130, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (95, "Mk", "Dance Stage", 20150830, 2200, 2300, 0, 2, "Sunday")');

//Thursday
//Friday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (96, "Black Foxxes", "The Pit / Lock Up Stage", 20150828, 1200, 1225, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (97, "Fort Hope", "The Pit / Lock Up Stage", 20150828, 1240, 1305, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (98, "Single Mothers", "The Pit / Lock Up Stage", 20150828, 1320, 1345, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (99, "Hawk Eyes", "The Pit / Lock Up Stage", 20150828, 1400, 1430, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (100, "Queen Kwong", "The Pit / Lock Up Stage", 20150828, 1445, 1515, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (101, "Moose Blood", "The Pit / Lock Up Stage", 20150828, 1530, 1600, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (102, "Turbowolf", "The Pit / Lock Up Stage", 20150828, 1615, 1645, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (103, "Frank Carter & The Rattlesnakes", "The Pit / Lock Up Stage", 20150828, 1700, 1730, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (104, "Beartooth", "The Pit / Lock Up Stage", 20150828, 1745, 1820, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (105, "Bury Tomorrow", "The Pit / Lock Up Stage", 20150828, 1835, 1910, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (106, "Frnkiero And The Cellabration", "The Pit / Lock Up Stage", 20150828, 1925, 2000, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (107, "Cancer Bats", "The Pit / Lock Up Stage", 20150828, 2015, 2055, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (108, "While She Sleeps", "The Pit / Lock Up Stage", 20150828, 2110, 2150, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (109, "Refused", "The Pit / Lock Up Stage", 20150828, 2210, 2300, 0, 3, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (110, "Calls Landing", "The Pit / Lock Up Stage", 20150829, 1200, 1225, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (111, "Youth Man", "The Pit / Lock Up Stage", 20150829, 1240, 1305, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (112, "Vant", "The Pit / Lock Up Stage", 20150829, 1320, 1345, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (113, "God Damn", "The Pit / Lock Up Stage", 20150829, 1400, 1430, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (114, "The Bots", "The Pit / Lock Up Stage", 20150829, 1445, 1515, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (115, "Skinny Lister", "The Pit / Lock Up Stage", 20150829, 1530, 1600, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (116, "The Smith Street Band", "The Pit / Lock Up Stage", 20150829, 1615, 1645, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (117, "The Menzingers", "The Pit / Lock Up Stage", 20150829, 1745, 1815, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (118, "Bo Ningen", "The Pit / Lock Up Stage", 20150829, 1830, 1905, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (119, "Modern Life Is War", "The Pit / Lock Up Stage", 20150829, 1920, 1955, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (120, "The Bronx", "The Pit / Lock Up Stage", 20150829, 2010, 2050, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (121, "Simple Plan", "The Pit / Lock Up Stage", 20150829, 2105, 2145, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (122, "New Found Glory", "The Pit / Lock Up Stage", 20150829, 2210, 2300, 0, 3, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (123, "Ltnt", "The Pit / Lock Up Stage", 20150830, 1200, 1220, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (124, "The One Hundred", "The Pit / Lock Up Stage", 20150830, 1235, 1255, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (125, "Ho99o9", "The Pit / Lock Up Stage", 20150830, 1310, 1335, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (126, "Black Peaks", "The Pit / Lock Up Stage", 20150830, 1350, 1415, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (127, "No Devotion", "The Pit / Lock Up Stage", 20150830, 1430, 1455, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (128, "As It Is", "The Pit / Lock Up Stage", 20150830, 1510, 1535, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (129, "And So I Watch You From Afar", "The Pit / Lock Up Stage", 20150830, 1550, 1620, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (130, "Baroness", "The Pit / Lock Up Stage", 20150830, 1635, 1705, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (131, "Pvris", "The Pit / Lock Up Stage", 20150830, 1720, 1750, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (132, "Atreyu", "The Pit / Lock Up Stage", 20150830, 1805, 1840, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (133, "Gojira", "The Pit / Lock Up Stage", 20150830, 1900, 1940, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (134, "Ghost", "The Pit / Lock Up Stage", 20150830, 2000, 2050, 0, 3, "Sunday")');

//Thursday
//Friday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (135, "The Sherlocks", "Festival Republic Stage", 20150828, 1200, 1220, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (136, "The Last Internationale", "Festival Republic Stage", 20150828, 1235, 1255, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (137, "Black Honey", "Festival Republic Stage", 20150828, 1310, 1330, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (138, "Sundara Karma", "Festival Republic Stage", 20150828, 1345, 1410, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (139, "Hippo Campus", "Festival Republic Stage", 20150828, 1425, 1450, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (140, "Spring King", "Festival Republic Stage", 20150828, 1505, 1530, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (141, "Gengahr", "Festival Republic Stage", 20150828, 1545, 1615, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (142, "Mini Mansions", "Festival Republic Stage", 20150828, 1630, 1700, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (143, "Jack Garratt", "Festival Republic Stage", 20150828, 1715, 1745, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (144, "Coasts", "Festival Republic Stage", 20150828, 1800, 1830, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (145, "We Are The Ocean", "Festival Republic Stage", 20150828, 1850, 1920, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (146, "Manchester Orchestra", "Festival Republic Stage", 20150828, 1940, 2005, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (147, "Little Comets", "Festival Republic Stage", 20150828, 2030, 2110, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (148, "Frank Turner", "Festival Republic Stage", 20150828, 2125, 2215, 0, 4, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (149, "The Bulletproof Bomb", "Festival Republic Stage", 20150829, 1200, 1220, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (150, "Hunter & The Bear", "Festival Republic Stage", 20150829, 1235, 1255, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (151, "Elle King", "Festival Republic Stage", 20150829, 1310, 1330, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (152, "Sunset Sons", "Festival Republic Stage", 20150829, 1345, 1410, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (153, "Jake Isaac", "Festival Republic Stage", 20150829, 1425, 1450, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (154, "Eliza & The Bear", "Festival Republic Stage", 20150829, 1505, 1530, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (155, "Misty Miller", "Festival Republic Stage", 20150829, 1545, 1610, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (156, "Joywave", "Festival Republic Stage", 20150829, 1625, 1655, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (157, "Vaults", "Festival Republic Stage", 20150829, 1715, 1745, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (158, "Bears Den", "Festival Republic Stage", 20150829, 1805, 1835, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (159, "Prides", "Festival Republic Stage", 20150829, 1850, 1920, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (160, "Alvvays", "Festival Republic Stage", 20150829, 1940, 2010, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (161, "Saint Raymond", "Festival Republic Stage", 20150829, 2030, 2100, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (162, "Django Django", "Festival Republic Stage", 20150829, 2120, 2200, 0, 4, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (163, "Hunck", "Festival Republic Stage", 20150830, 1200, 1220, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (164, "Walking On Cars", "Festival Republic Stage", 20150830, 1235, 1255, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (165, "San Fermin", "Festival Republic Stage", 20150830, 1310, 1330, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (166, "Neon Waltz", "Festival Republic Stage", 20150830, 1345, 1405, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (167, "Bad Breeding", "Festival Republic Stage", 20150830, 1420, 1445, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (168, "Ratboy", "Festival Republic Stage", 20150830, 1500, 1525, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (169, "Blossoms", "Festival Republic Stage", 20150830, 1540, 1605, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (170, "Dmas", "Festival Republic Stage", 20150830, 1620, 1640, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (171, "Pretty Vicious", "Festival Republic Stage", 20150830, 1700, 1725, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (172, "Radkey", "Festival Republic Stage", 20150830, 1745, 1815, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (173, "Seether", "Festival Republic Stage", 20150830, 1835, 1905, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (174, "Darlia", "Festival Republic Stage", 20150830, 1925, 1955, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (175, "Ash", "Festival Republic Stage", 20150830, 2015, 2050, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (176, "Lucy Rose", "Festival Republic Stage", 20150830, 2110, 2140, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (177, "The Wombats", "Festival Republic Stage", 20150830, 2200, 2300, 0, 4, "Sunday")');

//Thursday
//Friday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (178, "Lady Leshurr", "1Xtra Stage", 20150828, 1200, 1225, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (179, "Isaiah Dreads", "1Xtra Stage", 20150828, 1240, 1305, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (180, "Ratking", "1Xtra Stage", 20150828, 1320, 1350, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (181, "Fekky", "1Xtra Stage", 20150828, 1410, 1440, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (182, "Dope D.o.d.", "1Xtra Stage", 20150828, 1500, 1535, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (183, "Young Thug", "1Xtra Stage", 20150828, 1555, 1640, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (184, "Stormzy", "1Xtra Stage", 20150828, 1700, 1745, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (185, "Krept & Konan", "1Xtra Stage", 20150828, 1810, 1900, 0, 5, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (186, "Dj Target", "1Xtra Stage", 20150829, 1220, 1250, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (187, "Bugzy Malone", "1Xtra Stage", 20150829, 1305, 1335, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (188, "Siobhan Bell", "1Xtra Stage", 20150829, 1355, 1430, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (189, "Star.one W. Ping Pong", "1Xtra Stage", 20150829, 1445, 1525, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (190, "Pell", "1Xtra Stage", 20150829, 1545, 1625, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (191, "Oneman", "1Xtra Stage", 20150829, 1645, 1730, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (192, "Rae Sremmurd", "1Xtra Stage", 20150829, 1755, 1850, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (193, "Flatbush Zombies", "1Xtra Stage", 20150829, 1915, 2010, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (194, "A$ap Ferg", "1Xtra Stage", 20150829, 2035, 2130, 0, 5, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (195, "Remi Miles", "1Xtra Stage", 20150830, 1330, 1355, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (196, "Nick Brewer", "1Xtra Stage", 20150830, 1410, 1440, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (197, "Kiko Bun", "1Xtra Stage", 20150830, 1455, 1530, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (198, "Loyle Carner", "1Xtra Stage", 20150830, 1545, 1620, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (199, "Craze", "1Xtra Stage", 20150830, 1635, 1715, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (200, "Tempa T", "1Xtra Stage", 20150830, 1730, 1810, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (201, "Vince Staples", "1Xtra Stage", 20150830, 1835, 1915, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (202, "Ms. Dynamite", "1Xtra Stage", 20150830, 1940, 2025, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (203, "Lethal Bizzle", "1Xtra Stage", 20150830, 2050, 2140, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (204, "Azealia Banks", "1Xtra Stage", 20150830, 2205, 2300, 0, 5, "Sunday")');

//Thursday
//Friday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (205, "Narcs", "BBC Introducing", 20150828, 1200, 1225, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (206, "Where Fires Are", "BBC Introducing", 20150828, 1245, 1310, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (207, "White Room", "BBC Introducing", 20150828, 1335, 1400, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (208, "R51", "BBC Introducing", 20150828, 1425, 1450, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (209, "Skinner", "BBC Introducing", 20150828, 1510, 1535, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (210, "Kit Trigg", "BBC Introducing", 20150828, 1600, 1625, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (211, "Willie J Healey", "BBC Introducing", 20150828, 1645, 1710, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (212, "Hidden Charms", "BBC Introducing", 20150828, 1735, 1800, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (213, "Hyena", "BBC Introducing", 20150828, 1820, 1845, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (214, "The Big Moon", "BBC Introducing", 20150828, 1910, 1935, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (215, "Childcare", "BBC Introducing", 20150828, 1955, 2020, 0, 6, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (216, "Treason Kings", "BBC Introducing", 20150829, 1200, 1225, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (217, "The Mallrats", "BBC Introducing", 20150829, 1245, 1310, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (218, "Otherking", "BBC Introducing", 20150829, 1330, 1355, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (219, "Return To Rome", "BBC Introducing", 20150829, 1420, 1445, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (220, "Life", "BBC Introducing", 20150829, 1505, 1530, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (221, "Moon Tourists", "BBC Introducing", 20150829, 1550, 1615, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (222, "Martin Luke Brown", "BBC Introducing", 20150829, 1635, 1700, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (223, "The Amazons", "BBC Introducing", 20150829, 1725, 1750, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (224, "The Jacques", "BBC Introducing", 20150829, 1815, 1840, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (225, "Viola Beach", "BBC Introducing", 20150829, 1905, 1930, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (226, "Georgia", "BBC Introducing", 20150829, 1955, 2020, 0, 6, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (227, "Happy Daggers", "BBC Introducing", 20150830, 1200, 1225, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (228, "Samuel S. Parkes", "BBC Introducing", 20150830, 1240, 1305, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (229, "Malpas", "BBC Introducing", 20150830, 1320, 1345, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (230, "Vitamin", "BBC Introducing", 20150830, 1400, 1425, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (231, "Area 52", "BBC Introducing", 20150830, 1445, 1510, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (232, "Crosa Rosa", "BBC Introducing", 20150830, 1530, 1555, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (233, "Ducking Punches", "BBC Introducing", 20150830, 1610, 1635, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (234, "John Joseph Brill", "BBC Introducing", 20150830, 1655, 1720, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (235, "White", "BBC Introducing", 20150830, 1740, 1805, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (236, "Demob Happy", "BBC Introducing", 20150830, 1820, 1845, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (237, "Clay", "BBC Introducing", 20150830, 1910, 1935, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (238, "Clean Cut Kid", "BBC Introducing", 20150830, 1955, 2020, 0, 6, "Sunday")');

//Thursday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (239, "Redfaces", "Dance to the Radio Stage", 20150827, 1900, 1925, 0, 7, "Thursday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (240, "Carnabells", "Dance to the Radio Stage", 20150827, 1940, 2005, 0, 7, "Thursday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (241, "Vitamin", "Dance to the Radio Stage", 20150827, 2020, 2050, 0, 7, "Thursday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (242, "The Bohicas", "Dance to the Radio Stage", 20150827, 2115, 2145, 0, 7, "Thursday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (243, "Pulled Apart By Horses", "Dance to the Radio Stage", 20150827, 2225, 2300, 0, 7, "Thursday")');
//Friday
//Saturday
//Sunday

//Thursday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (244, "Adam Buxton", "Alternative Stage", 20150827, 1915, 2000, 0, 8, "Thursday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (245, "Max Cooper", "Alternative Stage", 20150827, 2010, 2100, 0, 8, "Thursday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (246, "Jaguar Skills", "Alternative Stage", 20150827, 2100, 2200, 0, 8, "Thursday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (247, "Rave Karaoke", "Alternative Stage", 20150827, 2200, 2330, 0, 8, "Thursday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (248, "Buttoned Down Disco", "Alternative Stage", 20150827, 2330, 0200, 0, 8, "Thursday")');
//Friday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (249, "Dane Baptiste", "Alternative Stage", 20150828, 1215, 1245, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (250, "Chris Ramsey", "Alternative Stage", 20150828, 1245, 1320, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (251, "Daniel Sloss", "Alternative Stage", 20150828, 1320, 1355, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (252, "Seann Walsh", "Alternative Stage", 20150828, 1355, 1430, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (253, "Milton Jones", "Alternative Stage", 20150828, 1430, 1520, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (254, "Luisa Omielan", "Alternative Stage", 20150828, 1520, 1550, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (255, "Russell Kane", "Alternative Stage", 20150828, 1550, 1640, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (256, "Mark Grist", "Alternative Stage", 20150828, 1640, 1710, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (257, "George The Poet", "Alternative Stage", 20150828, 1710, 1800, 0, 8, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (258, "Piff The Magic Dragon", "Alternative Stage", 20150829, 1210, 1235, 0, 8, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (259, "Reginald D. Hunter", "Alternative Stage", 20150829, 1235, 1325, 0, 8, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (260, "Joel Dommett", "Alternative Stage", 20150829, 1325, 1355, 0, 8, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (261, "Andrew Maxwell", "Alternative Stage", 20150829, 1355, 1445, 0, 8, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (262, "Sara Pascoe", "Alternative Stage", 20150829, 1445, 1510, 0, 8, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (263, "Paul Chowdhry", "Alternative Stage", 20150829, 1510, 1540, 0, 8, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (264, "Andrew Oneill", "Alternative Stage", 20150829, 1540, 1610, 0, 8, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (265, "Abandoman", "Alternative Stage", 20150829, 1610, 1640, 0, 8, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (266, "Paul Mccaffrey", "Alternative Stage", 20150830, 1215, 1245, 0, 8, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (267, "Katherine Ryan", "Alternative Stage", 20150830, 1245, 1330, 0, 8, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (268, "Alex Edelman", "Alternative Stage", 20150830, 1330, 1400, 0, 8, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (269, "Nick Helm", "Alternative Stage", 20150830, 1400, 1435, 0, 8, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (270, "Holly Walsh", "Alternative Stage", 20150830, 1435, 1510, 0, 8, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (271, "Pete Johansson", "Alternative Stage", 20150830, 1510, 1540, 0, 8, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (272, "Stephen K. Amos", "Alternative Stage", 20150830, 1540, 1625, 0, 8, "Sunday")');

//Thursday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (273, "Nicola Bear", "Relentless Stage", 20150827, 2000, 2200, 0, 9, "Thursday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (274, "Luke Hassan", "Relentless Stage", 20150827, 2200, 0000, 0, 9, "Thursday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (275, "Fono", "Relentless Stage", 20150827, 0000, 0130, 0, 9, "Thursday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (276, "Bondax", "Relentless Stage", 20150827, 0130, 0300, 0, 9, "Thursday")');
//Friday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (277, "Nicola Bear", "Relentless Stage", 20150828, 2000, 2200, 0, 9, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (278, "Mau5trap Presents... Very Special Guests", "Relentless Stage", 20150828, 2200, 0300, 0, 9, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (279, "Nicola Bear", "Relentless Stage", 20150829, 2000, 2200, 0, 9, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (280, "Martelo", "Relentless Stage", 20150829, 2200, 0000, 0, 9, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (281, "Oneman", "Relentless Stage", 20150829, 0000, 0130, 0, 9, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (282, "Dj Ez", "Relentless Stage", 20150829, 0130, 0255, 0, 9, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (283, "Nicola Bear", "Relentless Stage", 20150830, 2000, 2200, 0, 9, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (284, "Here To Be Heard Competition Winner", "Relentless Stage", 20150830, 2200, 0000, 0, 9, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (285, "Culprate", "Relentless Stage", 20150830, 0000, 0130, 0, 9, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (286, "Modestep Dj Set", "Relentless Stage", 20150830, 0130, 0300, 0, 9, "Sunday")');
		
		});
	db.transaction(function (tx) {	
	
	// (MC)
	tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (287, "Matt Richardson", "Alternative Stage", 20150828, 1200, 1215, 0, 8, "Friday")');
	tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (288, "Propaganda DJ", "Alternative Stage", 20150828, 2230, 0230, 0, 8, "Friday")');
	tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (289, "Mark Grist", "Alternative Stage", 20150827, 1900, 1920, 0, 8, "Thursday")');
	
	tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (290, "Carl Hutchinson", "Alternative Stage", 20150829, 1200, 1215, 0, 8, "Saturday")');
	//Friday
//Saturday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (291, "Eden (film)", "Alternative Stage", 20150829, 1800, 1945, 0, 8, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (292, "Transgressive Soundsystem", "Alternative Stage", 20150829, 2130, 2230, 0, 8, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (293, "Dj Target", "Alternative Stage", 20150829, 2230, 2330, 0, 8, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (294, "Wiley", "Alternative Stage", 20150829, 2330, 0015, 0, 8, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (295, "Madam X", "Alternative Stage", 20150829, 0015, 0115, 0, 8, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (296, "Bless (dj Set)", "Alternative Stage", 20150829, 0115, 0230, 0, 8, "Saturday")');
//Sunday
//Friday
//Saturday
//Sunday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (297, "Iain Stirling", "Alternative Stage", 20150830, 1200, 1215, 0, 8, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (298, "Kurt Cobain: Montage Of Heck (film)", "Alternative Stage", 20150830, 1705, 1920, 0, 8, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (299, "Transgressive Soundsystem", "Alternative Stage", 20150830, 2200, 2300, 0, 8, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (300, "Novelist", "Alternative Stage", 20150830, 2300, 2330, 0, 8, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (301, "Jackmaster", "Alternative Stage", 20150830, 2330, 0030, 0, 8, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (302, "Mele Ft. Slick Don", "Alternative Stage", 20150830, 0030, 0130, 0, 8, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (303, "Bless (dj Set)", "Alternative Stage", 20150830, 0130, 0230, 0, 8, "Sunday")');
	
	
		tx.executeSql(' UPDATE bands_101 SET start_time=1200, finish_time=1230 WHERE band_name="The Six" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1245, finish_time=1315 WHERE band_name="Petite Meller" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1330, finish_time=1415 WHERE band_name="99 Souls" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1430, finish_time=1530 WHERE band_name="Tcts" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1535, finish_time=1605 WHERE band_name="Snakehips" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1620, finish_time=1650 WHERE band_name="Maribou State Live" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1655, finish_time=1745, band_name="Evian Christ" WHERE id=66 ');
tx.executeSql(' UPDATE bands_101 SET start_time=1750, finish_time=1825 WHERE band_name="Rustie" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1845, finish_time=1925, band_name="Blonde" WHERE id=68 ');
tx.executeSql(' UPDATE bands_101 SET start_time=1935, finish_time=2035, band_name="Brodinski" WHERE id=69 ');
tx.executeSql(' UPDATE bands_101 SET start_time=2050, finish_time=2140 WHERE band_name="Hudson Mohawke" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2200, finish_time=2300 WHERE band_name="Boy Better Know" ');
		
		
		tx.executeSql(' UPDATE bands_101 SET start_time=1245, finish_time=1315 WHERE band_name="The Ramona Flowers" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1330, finish_time=1400 WHERE band_name="All We Are" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1415, finish_time=1500 WHERE band_name="Ferdinand Weber" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1500, finish_time=1530 WHERE band_name="Hayden James" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1535, finish_time=1630 WHERE band_name="Toyboy & Robin" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1635, finish_time=1710 WHERE band_name="My Nu Leng" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1715, finish_time=1745 WHERE band_name="Jacob Plant" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1750, finish_time=1850 WHERE band_name="Porter Robinson" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1855, finish_time=1955 WHERE band_name="Dillon Francis" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2000, finish_time=2045 WHERE band_name="Hannah Wants" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2050, finish_time=2130 WHERE band_name="Camo & Krooked" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2200, finish_time=2300 WHERE band_name="Wilkinson" ');

tx.executeSql(' UPDATE bands_101 SET start_time=1200, finish_time=1225 WHERE band_name="Cardiknox" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1235, finish_time=1300 WHERE band_name="Riptide Movement" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1315, finish_time=1345 WHERE band_name="Ftse" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1400, finish_time=1430 WHERE band_name="Ben Khan" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1445, finish_time=1515 WHERE band_name="Elliphant" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1530, finish_time=1615 WHERE band_name="Dj Fresh" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1615, finish_time=1700, band_name="Dimension X Kove" WHERE id=90 ');
tx.executeSql(' UPDATE bands_101 SET start_time=1700, finish_time=1750, band_name="Second City" WHERE id=91 ');
tx.executeSql(' UPDATE bands_101 SET start_time=1805, finish_time=1840 WHERE band_name="Tourist" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1900, finish_time=1945 WHERE band_name="Charli Xcx" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2000, finish_time=2100 WHERE band_name="Kevin Saunderson" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2100, finish_time=2230 WHERE band_name="Mk" ');

tx.executeSql(' UPDATE bands_101 SET start_time=1320, finish_time=1350 WHERE band_name="Lady Leshurr" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1405, finish_time=1435 WHERE band_name="Isaiah Dreads" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1450, finish_time=1520 WHERE band_name="Ratking" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1535, finish_time=1605 WHERE band_name="Fekky" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1620, finish_time=1650, band_name="Dope D.o.d" WHERE id=182 ');
tx.executeSql(' UPDATE bands_101 SET start_time=1705, finish_time=1740 WHERE band_name="Young Thug" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1755, finish_time=1835 WHERE band_name="Stormzy" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1900, finish_time=1940 WHERE band_name="Krept & Konan" ');

tx.executeSql(' UPDATE bands_101 SET start_time=1330, finish_time=1400 WHERE band_name="Dj Target" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1415, finish_time=1445 WHERE band_name="Bugzy Malone" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1505, finish_time=1605 WHERE band_name="Siobhan Bell" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1620, finish_time=1650, band_name="Star. One" WHERE id=189 ');
tx.executeSql(' UPDATE bands_101 SET start_time=1705, finish_time=1740 WHERE band_name="Pell" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1800, finish_time=1840 WHERE id=191 ');
tx.executeSql(' UPDATE bands_101 SET start_time=1900, finish_time=1940 WHERE band_name="Rae Sremmurd" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2000, finish_time=2045 WHERE band_name="Flatbush Zombies" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2100, finish_time=2145 WHERE band_name="A$ap Ferg" ');
		
		tx.executeSql(' UPDATE bands_101 SET start_time=1245, finish_time=1315 WHERE band_name="Remi Miles" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1330, finish_time=1400 WHERE band_name="Nick Brewer" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1415, finish_time=1445 WHERE band_name="Kiko Bun" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1505, finish_time=1605 WHERE band_name="Loyle Carner" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1620, finish_time=1650 WHERE band_name="Craze" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1705, finish_time=1740 WHERE band_name="Tempa T" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1800, finish_time=1840 WHERE band_name="Vince Staples" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1900, finish_time=1940 WHERE band_name="Ms. Dynamite" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2000, finish_time=2040 WHERE band_name="Lethal Bizzle" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2105, finish_time=2150 WHERE band_name="Azealia Banks" ');

tx.executeSql(' UPDATE bands_101 SET start_time=1215, finish_time=1245 WHERE band_name="Dane Baptiste" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1245, finish_time=1315 WHERE band_name="Chris Ramsey" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1320, finish_time=1405 WHERE band_name="Daniel Sloss" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1405, finish_time=1450 WHERE band_name="Seann Walsh" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1450, finish_time=1530 WHERE band_name="Milton Jones" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1535, finish_time=1605 WHERE band_name="Luisa Omielan" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1605, finish_time=1650 WHERE band_name="Russell Kane" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1700, finish_time=1720 WHERE id=256 ');
tx.executeSql(' UPDATE bands_101 SET start_time=1720, finish_time=1800 WHERE band_name="George The Poet" ');
		
		tx.executeSql(' UPDATE bands_101 SET start_time=1930, finish_time=2030 WHERE band_name="Adam Buxton" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2030, finish_time=2215 WHERE band_name="Buttoned Down Disco" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2215, finish_time=2315 WHERE band_name="Rave Karaoke" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2315, finish_time=0015 WHERE band_name="Max Cooper" ');
tx.executeSql(' UPDATE bands_101 SET start_time=0015, finish_time=0145 WHERE band_name="Jaguar Skills" ');
		
		
		tx.executeSql(' UPDATE bands_101 SET start_time=1215, finish_time=1245 WHERE band_name="Piff The Magic Dragon" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1250, finish_time=1330 WHERE band_name="Reginald D. Hunter" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1330, finish_time=1400 WHERE band_name="Joel Dommett" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1400, finish_time=1440 WHERE band_name="Andrew Maxwell" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1445, finish_time=1525 WHERE band_name="Sara Pascoe" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1525, finish_time=1605 WHERE band_name="Paul Chowdhry" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1610, finish_time=1705 WHERE band_name="Andrew Oneill" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1715, finish_time=1800 WHERE band_name="Abandoman" ');
		
		tx.executeSql(' UPDATE bands_101 SET start_time=1215, finish_time=1245 WHERE band_name="Paul Mccaffrey" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1245, finish_time=1330 WHERE band_name="Katherine Ryan" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1335, finish_time=1405 WHERE band_name="Alex Edelman" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1405, finish_time=1450 WHERE band_name="Nick Helm" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1455, finish_time=1530 WHERE band_name="Holly Walsh" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1530, finish_time=1600 WHERE band_name="Pete Johansson" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1600, finish_time=1645 WHERE band_name="Stephen K. Amos" ');


});
	db.transaction(function (tx) {	

tx.executeSql(' UPDATE bands_101 SET start_time=1900, finish_time=1930 WHERE id=239 ');
tx.executeSql(' UPDATE bands_101 SET start_time=1945, finish_time=2015 WHERE id=240 ');
tx.executeSql(' UPDATE bands_101 SET start_time=2030, finish_time=2100 WHERE id=241 ');
tx.executeSql(' UPDATE bands_101 SET start_time=2120, finish_time=2150 WHERE id=242 ');
tx.executeSql(' UPDATE bands_101 SET start_time=2215, finish_time=2300 WHERE id=243 ');

tx.executeSql(' UPDATE bands_101 SET start_time=1200, finish_time=1225 WHERE band_name="Narcs" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1245, finish_time=1310 WHERE band_name="Where Fires Are" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1330, finish_time=1355 WHERE band_name="White Room" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1420, finish_time=1445 WHERE band_name="R51" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1505, finish_time=1530 WHERE band_name="Skinner" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1550, finish_time=1615 WHERE band_name="Kit Trigg" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1635, finish_time=1700 WHERE band_name="Willie J Healey" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1720, finish_time=1745 WHERE band_name="Hidden Charms" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1810, finish_time=1835 WHERE band_name="Hyena" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1855, finish_time=1920 WHERE band_name="The Big Moon" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1945, finish_time=2010 WHERE band_name="Childcare" ');

tx.executeSql(' UPDATE bands_101 SET start_time=1200, finish_time=1225 WHERE band_name="Treason Kings" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1245, finish_time=1310 WHERE band_name="The Mallrats" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1330, finish_time=1355 WHERE band_name="Otherkin" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1420, finish_time=1445 WHERE band_name="Return To Rome" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1505, finish_time=1530 WHERE band_name="Life" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1550, finish_time=1615 WHERE band_name="Moon Tourists" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1635, finish_time=1700 WHERE band_name="Martin Luke Brown" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1720, finish_time=1745 WHERE band_name="The Amazons" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1810, finish_time=1835 WHERE band_name="The Jacques" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1855, finish_time=1920 WHERE band_name="Viola Beach" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1945, finish_time=2010 WHERE band_name="Georgia" ');

tx.executeSql(' UPDATE bands_101 SET start_time=1200, finish_time=1225 WHERE band_name="Happy Daggers" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1240, finish_time=1305 WHERE band_name="Samuel S. Parkes" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1320, finish_time=1345 WHERE band_name="Malpas" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1400, finish_time=1425 WHERE id=230 ');
tx.executeSql(' UPDATE bands_101 SET start_time=1445, finish_time=1510 WHERE band_name="Area 52" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1530, finish_time=1555 WHERE band_name="Crosa Rosa" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1610, finish_time=1635 WHERE band_name="Ducking Punches" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1655, finish_time=1720 WHERE band_name="John Joseph Brill" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1740, finish_time=1805 WHERE band_name="White" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1825, finish_time=1850 WHERE band_name="Demob Happy" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1910, finish_time=1935 WHERE band_name="Clay" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1955, finish_time=2020 WHERE band_name="Clean Cut Kid" ');
		
		
		});
	db.transaction(function (tx) {
		
		//163
		tx.executeSql(' DELETE FROM bands_101 WHERE id=163');
		
		tx.executeSql(' UPDATE bands_101 SET start_time=1200, finish_time=1230 WHERE band_name="The Skints" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1250, finish_time=1320 WHERE band_name="Shura" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1345, finish_time=1415 WHERE band_name="Ghostpoet" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1435, finish_time=1510 WHERE band_name="Awolnation" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1525, finish_time=1605 WHERE band_name="Kwabs" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1625, finish_time=1705 WHERE band_name="Glass Animals" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1730, finish_time=1830 WHERE band_name="Jamie Xx" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1900, finish_time=1945 WHERE band_name="Years & Years" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2015, finish_time=2100 WHERE band_name="Gorgon City" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2145, finish_time=2300 WHERE band_name="Deadmau5" ');

tx.executeSql(' UPDATE bands_101 SET start_time=1200, finish_time=1230 WHERE band_name="The Struts" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1250, finish_time=1320 WHERE band_name="The Districts" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1340, finish_time=1410 WHERE band_name="Echosmith" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1430, finish_time=1505 WHERE band_name="Parquet Courts" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1525, finish_time=1600 WHERE band_name="American Football" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1620, finish_time=1655 WHERE band_name="Don Broco" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1715, finish_time=1755 WHERE band_name="Swim Deep" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1820, finish_time=1910 WHERE band_name="Peace" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1930, finish_time=2010 WHERE band_name="Run The Jewels" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2040, finish_time=2140 WHERE band_name="Limp Bizkit" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2210, finish_time=2300 WHERE band_name="Knife Party" ');	


tx.executeSql(' UPDATE bands_101 SET start_time=1200, finish_time=1225 WHERE band_name="Nothing But Thieves" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1245, finish_time=1315 WHERE band_name="Twin Peaks" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1425, finish_time=1500 WHERE band_name="Slaves" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1515, finish_time=1550 WHERE band_name="Spector" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1610, finish_time=1650 WHERE band_name="Circa Waves" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1710, finish_time=1750 WHERE band_name="Wolf Alice" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1815, finish_time=1900 WHERE band_name="Everything Everything" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1925, finish_time=2015 WHERE band_name="Catfish & The Bottlemen" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2040, finish_time=2130 WHERE band_name="Twin Atlantic" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2200, finish_time=2300 WHERE band_name="Rebel Sound" ');
		
		
		
		tx.executeSql(' UPDATE bands_101 SET start_time=1200, finish_time=1220 WHERE band_name="The Sherlocks" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1235, finish_time=1305 WHERE band_name="The Last Internationale" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1320, finish_time=1340 WHERE band_name="Black Honey" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1355, finish_time=1420 WHERE band_name="Sundara Karma" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1435, finish_time=1500 WHERE band_name="Hippo Campus" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1515, finish_time=1540 WHERE band_name="Spring King" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1555, finish_time=1625 WHERE band_name="Gengahr" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1640, finish_time=1710 WHERE band_name="Mini Mansions" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1725, finish_time=1755 WHERE band_name="Jack Garratt" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1810, finish_time=1840 WHERE band_name="Coasts" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1900, finish_time=1930 WHERE band_name="We Are The Ocean" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1950, finish_time=2020 WHERE band_name="Manchester Orchestra" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2040, finish_time=2115 WHERE band_name="Little Comets" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2135, finish_time=2235 WHERE band_name="Frank Turner" ');

tx.executeSql(' UPDATE bands_101 SET start_time=1200, finish_time=1220 WHERE band_name="The Bulletproof Bomb" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1235, finish_time=1255 WHERE band_name="Hunter & The Bear" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1310, finish_time=1340 WHERE band_name="Elle King" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1355, finish_time=1420 WHERE band_name="Sunset Sons" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1425, finish_time=1450 WHERE band_name="Jake Isaac" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1505, finish_time=1530 WHERE band_name="Eliza & The Bear" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1545, finish_time=1615 WHERE band_name="Misty Miller" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1630, finish_time=1700 WHERE band_name="Joywave" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1715, finish_time=1745 WHERE band_name="Vaults" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1800, finish_time=1830 WHERE band_name="Bears Den" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1850, finish_time=1920 WHERE band_name="Prides" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1940, finish_time=2010 WHERE band_name="Alvvays" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2030, finish_time=2105 WHERE band_name="Saint Raymond" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2125, finish_time=2225 WHERE band_name="Django Django" ');
		
		tx.executeSql(' UPDATE bands_101 SET start_time=1200, finish_time=1225 WHERE band_name="Walking On Cars" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1240, finish_time=1310 WHERE band_name="San Fermin" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1325, finish_time=1355 WHERE band_name="Neon Waltz" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1410, finish_time=1435 WHERE band_name="Bad Breeding" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1450, finish_time=1520 WHERE band_name="Ratboy" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1535, finish_time=1600 WHERE band_name="Blossoms" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1615, finish_time=1645 WHERE band_name="Dmas" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1700, finish_time=1730 WHERE band_name="Pretty Vicious" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1745, finish_time=1815 WHERE band_name="Radkey" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1835, finish_time=1905 WHERE band_name="Seether" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1925, finish_time=1955 WHERE band_name="Darlia" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2010, finish_time=2040 WHERE band_name="Ash" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2100, finish_time=2135 WHERE band_name="Lucy Rose" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2200, finish_time=2300 WHERE band_name="The Wombats" ');


tx.executeSql(' UPDATE bands_101 SET start_time=1200, finish_time=1225 WHERE band_name="Black Foxxes" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1240, finish_time=1305 WHERE band_name="Fort Hope" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1320, finish_time=1350 WHERE band_name="Single Mothers" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1405, finish_time=1430 WHERE band_name="Hawk Eyes" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1445, finish_time=1515 WHERE band_name="Queen Kwong" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1530, finish_time=1600 WHERE band_name="Moose Blood" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1615, finish_time=1645 WHERE band_name="Turbowolf" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1700, finish_time=1730 WHERE band_name="Frank Carter & The Rattlesnakes" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1745, finish_time=1815 WHERE band_name="Beartooth" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1830, finish_time=1905 WHERE band_name="Bury Tomorrow" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1925, finish_time=1955 WHERE band_name="Frnkiero And The Cellabration" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2010, finish_time=2050 WHERE band_name="Cancer Bats" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2105, finish_time=2145 WHERE band_name="While She Sleeps" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2210, finish_time=2300 WHERE band_name="Refused" ');

tx.executeSql(' UPDATE bands_101 SET start_time=1200, finish_time=1225 WHERE band_name="Calls Landing" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1245, finish_time=1310 WHERE band_name="Youth Man" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1325, finish_time=1355 WHERE band_name="Vant" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1410, finish_time=1435 WHERE band_name="God Damn" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1455, finish_time=1525 WHERE band_name="The Bots" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1545, finish_time=1615 WHERE band_name="Skinny Lister" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1635, finish_time=1705 WHERE band_name="The Smith Street Band" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1730, finish_time=1800 WHERE band_name="The Menzingers" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1820, finish_time=1850 WHERE band_name="Bo Ningen" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1915, finish_time=1945 WHERE band_name="Modern Life Is War" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2005, finish_time=2045 WHERE band_name="The Bronx" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2105, finish_time=2145 WHERE band_name="Simple Plan" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2210, finish_time=2300 WHERE band_name="New Found Glory" ');
		
		tx.executeSql(' UPDATE bands_101 SET start_time=1200, finish_time=1225 WHERE band_name="Ltnt" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1240, finish_time=1305 WHERE band_name="The One Hundred" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1320, finish_time=1345 WHERE band_name="Ho99o9" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1400, finish_time=1425 WHERE band_name="Black Peaks" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1440, finish_time=1505 WHERE band_name="No Devotion" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1520, finish_time=1550 WHERE band_name="As It Is" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1605, finish_time=1635 WHERE band_name="And So I Watch You From Afar" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1650, finish_time=1720 WHERE band_name="Baroness" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1740, finish_time=1810 WHERE band_name="Pvris" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1830, finish_time=1900 WHERE band_name="Atreyu" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1915, finish_time=1950 WHERE band_name="Gojira" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2010, finish_time=2050 WHERE band_name="Ghost" ');
		
		//281
		tx.executeSql(' UPDATE bands_101 SET start_time=0000, finish_time=0130 WHERE id=281 ');
		set_up_main_page();
	});
}













