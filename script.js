const rawMenuLegacy = [
  ['Polievky','polievky',[
    [1,'Ostrokyslá polievka','2 €','3, 6','Pikantná polievka s kuracím mäsom, tofu, vajíčkom, zeleninou a jarnou cibuľkou.'],[2,'Hanojský vývar','2 €','4','Hanojský vývar, kuracie mäso, ryžové rezance a cibuľka.'],[3,'Tom Yum','6 €','2, 4','Polievka s krevetami, hubami, paradajkami, tom yum pastou a koriandrom.'],[4,'Rybacia polievka','3 €','4','Jemne pikantný vývar s lososom, zeleninou, hubami, cukinou, kôprom a cibuľkou.'],[5,'Miso Shiro','3 €','6','Vegetariánsky vývar s hodvábnym tofu a riasami.'],[6,'Gyoza Soup','6 €','1, 3, 6','Silný vývar s udon rezancami a gyoza taštičkami.']
  ]],
  ['Kung Pao a Thai karí','vietnam',[
    [7,'Kung Pao – kuracie','5,50 €','2, 5, 6','Kuracie mäso so zeleninou, ázijskými hubami, arašidmi a sójovou omáčkou.'],
    [168,'Kung Pao – hovädzie','5,50 €','2, 5, 6','Hovädzie mäso so zeleninou, ázijskými hubami, arašidmi a sójovou omáčkou.'],
    [169,'Kung Pao – tofu','5,50 €','5, 6','Tofu so zeleninou, ázijskými hubami, arašidmi a sójovou omáčkou.'],
    [8,'Thai karí – kuracie','5,50 €','7','Kuracie mäso so zeleninou, ázijskými hubami, karí korením a kokosovým mliekom.'],
    [170,'Thai karí – hovädzie','5,50 €','7','Hovädzie mäso so zeleninou, ázijskými hubami, karí korením a kokosovým mliekom.'],
    [171,'Thai karí – tofu','5,50 €','6, 7','Tofu so zeleninou, ázijskými hubami, karí korením a kokosovým mliekom.']
  ]],
  ['Tenké ryžové rezance','rezance',[
    [9,'Kuracie','7 €','3'],[10,'Hovädzie','7,50 €','3'],[11,'Kačacie','7,50 €','3'],[12,'S krevetami','7,50 €','2, 3'],[13,'Kuracie s krevetami','7,50 €','2, 3'],[14,'S tofu','7 €','3, 6'],[15,'So zeleninou','3 €','3'],[16,'Chicken Grill','5,50 €','3, 6, 10, 11','Grilované kuracie prsia na špízoch, restovaná zelenina a japonská majonéza.']
  ]],
  ['Udon','rezance',[
    [17,'Kuracie','7 €','1, 3, 6'],[18,'Hovädzie','7,50 €','1, 3, 6'],[19,'Kačacie','7,50 €','1, 3, 6'],[20,'S krevetami','7,50 €','1, 2, 3, 6'],[21,'Kuracie s krevetami','7,50 €','1, 2, 3, 6'],[22,'S tofu','7 €','1, 3, 6'],[23,'So zeleninou','6 €','1, 3, 6'],[24,'Kuracie kúsky','5,50 €','1, 3, 6, 10, 11','Kuracie kúsky v jemnom cestíčku s teriyaki omáčkou.']
  ]],
  ['Pad Thai','rezance',[
    [25,'Kuracie','7 €','3, 5, 6'],[26,'Hovädzie','7,50 €','3, 5, 6'],[27,'Kačacie','7,50 €','3, 5, 6'],[28,'S krevetami','7,50 €','2, 3, 5, 6'],[29,'Kuracie s krevetami','7,50 €','2, 3, 5, 6'],[30,'S tofu','7 €','3, 5, 6'],[31,'So zeleninou','6 €','3, 5, 6']
  ]],
  ['Na šťave','vietnam',[
    [32,'Na šťave – kuracie','6 €','6, 11','Kuracie mäso s hubami, zeleninou a mungo klíčkami.'],
    [172,'Na šťave – hovädzie','6 €','6, 11','Hovädzie mäso s hubami, zeleninou a mungo klíčkami.'],
    [173,'Na šťave – krevety','6 €','2, 6, 11','Krevety s hubami, zeleninou a mungo klíčkami.'],
    [174,'Na šťave – tofu','6 €','6, 11','Tofu s hubami, zeleninou a mungo klíčkami.']
  ]],
  ['Bún bò Nam Bộ','vietnam',[
    [33,'Kurací','7 €','2, 4, 5, 6, 11'],[34,'Hovädzí','7,50 €','2, 4, 5, 6, 11'],[35,'Kačací','7,50 €','2, 4, 5, 6, 11'],[36,'S krevetami','7,50 €','2, 4, 5, 6, 11'],[37,'S tofu','7 €','2, 4, 5, 6, 11'],[38,'Ebi Tempura','6 €','1, 2, 3, 6, 10, 11','Krevety a špargľa v tempure s omáčkou Ocean, majonézou a sezamom.'],[39,'Tempurované kuracie mäso','6 €','1, 3, 6, 7, 10, 11','Kuracie prsia v tempure s omáčkou Ocean, majonézou a sezamom.']
  ]],
  ['Ramen','polievky',[[40,'Kurací','7 €','1, 2, 3, 6'],[41,'Hovädzí','7,50 €','1, 2, 3, 6'],[42,'S krevetami','7,50 €','1, 2, 3, 6'],[43,'S tofu','6 €','1, 2, 3, 6']]],
  ['Phở','vietnam polievky',[[44,'Kurací','7 €','2, 4'],[45,'Hovädzí','7,50 €','2, 4']]],
  ['Tom Yum 0,7 l','polievky',[[46,'Tom Yum, 0,7 l','7,50 €','2, 4','Veľká porcia pikantnej polievky s krevetami, hubami, paradajkami, tom yum pastou a koriandrom.']]],
  ['Rizoto','vietnam',[[47,'Kuracie','7 €','2, 3'],[48,'Hovädzie','7,50 €','2, 3'],[49,'S krevetami','7,50 €','2, 3'],[50,'S tofu','6 €','2, 3'],[51,'So zeleninou','4 €','2, 3'],[52,'Chrumkavé kura','5,50 €','1, 3, 11'],[53,'Chrumkavá kačica','6,50 €','1, 3, 4, 6, 11, 14']]],
  ['Hrubé ryžové rezance','rezance',[[54,'Kuracie','7 €','3'],[55,'Hovädzie','7,50 €','3'],[56,'Kačacie','7,50 €','3'],[57,'S krevetami','7,50 €','2, 3'],[58,'Kuracie s krevetami','7,50 €','2, 3'],[59,'S tofu','6,50 €','3, 6'],[60,'So zeleninou','6 €','3'],[61,'Jarné závitky, 3 ks','5,50 €','1, 2, 3, 4, 11','Bravčové mäso, zelenina, ázijské huby a sklenené rezance.'],[62,'Vegetarian Spring Rolls','6 €','1, 3, 11','Vegetariánske závitky vo fazuľovom obale. 7 ks.']]],
  ['Opekané vaječné rezance','rezance',[[61,'Kuracie','7 €','1, 3'],[62,'Hovädzie','7,50 €','1, 3'],[63,'Kačacie','7,50 €','1, 3'],[64,'S krevetami','7,50 €','1, 2, 3'],[65,'Kuracie s krevetami','7,50 €','1, 2, 3'],[66,'S tofu','6,50 €','1, 3, 6']]],
  ['Curry Udon','rezance',[[67,'So zeleninou','6 €','1, 3, 7, 11'],[68,'S kuracím mäsom','7 €','1, 3, 7, 11'],[69,'S tofu','6 €','1, 3, 6, 7, 11'],[70,'S krevetami','7,50 €','1, 2, 3, 7, 11'],[71,'Hovädzí','7,50 €','1, 3, 7, 11']]],
  ['Futomaki','sushi',[
    [72,'Crunchy Roll Light','16 €','1, 3, 4, 6, 7, 10, 12','Tempurovaná rolka s lososom, avokádom, uhorkou, japonskou majonézou, omáčkou Ocean, syrom Philadelphia a sezamom. 12 ks.'],
    [73,'Crunchy Roll Tuna','16 €','1, 3, 4, 6, 7, 10, 11','Tempurovaná rolka s tuniakom, avokádom, mrkvou, uhorkou, japonskou majonézou, syrom Philadelphia, omáčkou Ocean a sezamom. 12 ks.'],
    [74,'California Ebi Ten','16 €','1, 2, 3, 4, 6, 7, 10, 11','Rolka s krevetou v tempure, avokádom, mrkvou, uhorkou, šalátom a ikura kaviárom, poliata majonézou. 10 ks.'],
    [75,'Special Roll','16 €','1, 3, 4, 6, 7, 10, 11','Tempurovaná rolka s lososom, údeným úhorom, syrom Philadelphia, avokádom, omáčkou Ocean, japonskou majonézou, sezamom a kaviárom. 12 ks.'],
    [76,'Salmon','16 €','1, 3, 4, 6, 10, 11','Losos v tempure, avokádo, uhorka, japonská majonéza a omáčka Ocean. 8 ks.']
  ]],
  ['Bento','sushi',[
    [77,'Special Bento','16 €','4, 11','8 ks uramaki California s kaviárom, 3 ks nigiri, 4 ks sashimi a wakame šalát s edamame.'],
    [78,'Fish Bento','16 €','4, 7, 11','8 ks uramaki Aburi s flambovaným lososom, 6 ks maki, coleslaw šalát a crunchy maki podľa výberu.'],
    [79,'California Bento','14 €','2, 4, 7, 11','6 ks futomaki California, 2 ks kreviet v tempure s japonskou majonézou, 6 ks maki a wakame šalát s edamame.'],
    [80,'Unagi Bento','16 €','1, 3, 4, 6, 10, 11','6 ks crunchy maki, 6 ks maki a 4 ks uramaki s údeným úhorom a ryžou.'],
    [81,'Poke Bento','16 €','1, 3, 4, 7, 11','8 ks futomaki Crunchy Roll Light, 6 ks maki, 4 ks gyoza taštičiek a poke bowl šalát s lososom.'],
    [82,'Nigiri Maki Bento','14 €','4, 11','8 ks uramaki Sesame, 3 ks nigiri, 6 ks maki a wakame šalát s edamame.'],
    [83,'Chicken Grill Bento','16 €','1, 3, 4, 7, 11','170 g grilovaného kuracieho mäsa, ryža, 8 ks crunchy maki, 4 ks uramaki Marimondon a coleslaw šalát.'],
    [84,'Duck Bento','16 €','1, 3, 4, 7, 11','170 g kačice s ryžou, 4 ks uramaki Marimondon, 3 ks maki avokádo, 3 ks maki losos a zelenina.'],
    [85,'Vege Bento','14 €','1, 3, 8, 11','100 g opekaných rezancov s kešu, 6 ks vegetariánskeho futomaki, 6 ks maki a vegetariánsky poke bowl šalát.'],
    [86,'Rossa Bento','16 €','1, 3, 4, 6, 10, 11','170 g lososa s ryžou, 6 ks uramaki California, 3 ks maki tuniak, 3 ks maki losos a 4 ks sashimi losos.']
  ]],
  ['Poke Bowl','sushi salaty',[
    [87,'Poke – tofu, 500 g','8,90 €','3, 6','Ryža, mrkva, edamame, avokádo, mango, uhorka, wakame, koriander, vajíčko a sladko-pikantná omáčka.'],
    [88,'Poke – kuracie mäso, 500 g','9,90 €','3, 6','Ryža, mrkva, edamame, avokádo, mango, uhorka, wakame, koriander, vajíčko a sladko-pikantná omáčka.'],
    [89,'Poke – hovädzie mäso, 500 g','9,90 €','3, 6','Ryža, mrkva, edamame, avokádo, mango, uhorka, wakame, koriander, vajíčko a sladko-pikantná omáčka.'],
    [90,'Poke – krevety, 500 g','10,90 €','2, 3, 6','Ryža, mrkva, edamame, avokádo, mango, uhorka, wakame, koriander, vajíčko a sladko-pikantná omáčka.'],
    [175,'Poke – losos, 500 g','12,90 €','3, 4, 6','Ryža, mrkva, edamame, avokádo, mango, uhorka, wakame, koriander, vajíčko a sladko-pikantná omáčka.'],
    [176,'Poke – tuniak, 500 g','12,90 €','3, 4, 6','Ryža, mrkva, edamame, avokádo, mango, uhorka, wakame, koriander, vajíčko a sladko-pikantná omáčka.'],
    [177,'Poke – opekaný losos, 500 g','12,90 €','3, 4, 6','Ryža, mrkva, edamame, avokádo, mango, uhorka, wakame, koriander, vajíčko a sladko-pikantná omáčka.']
  ]],
  ['Sushi sety','sushi',[
    [91,'Set Ocean, 32 ks','60 €','2, 4, 7, 11','Nigiri: 2 ks losos, 2 ks avokádo a 2 ks tuniak. Maki: 3 ks losos, 3 ks tuniak a 3 ks avokádo s krémovým syrom. Hosomaki: 3 ks uhorka a 3 ks mrkva s krémovým syrom. Doplnené uramaki.'],
    [92,'Love Set, 26 ks','50 €','2, 4, 7, 11','Nigiri: 2 ks losos, 2 ks maslová ryba, 2 ks kreveta a 2 ks tuniak. Sashimi: 2 ks losos, 2 ks tuniak a 2 ks maslová ryba. Uramaki: 1 rolka podľa výberu.'],
    [93,'Uramaki Salmon Roll','12 €','2, 4, 7, 11','Sushi rolka s lososom, krabou tyčinkou, avokádom a syrom Philadelphia, obalená lososom. 8 ks.'],
    [94,'Uramaki Royal','13 €','1, 2, 3, 4, 6, 11','Losos v tempure, avokádo, uhorka, flambovaný losos, jarná cibuľka, kaviár, sezam a omáčka Ocean. 8 ks.'],
    [95,'Uramaki Rainbow','13 €','2, 4, 11','Sushi rolka s lososom a krabou tyčinkou, obalená lososom, tuniakom, maslovou rybou, úhorom, avokádom a kaviárom. 8 ks.'],
    [96,'Uramaki Marimondon','13 €','1, 3, 4, 6, 10, 11','Sushi rolka s lososom v tempure, avokádom, chilli korením, majonézou a omáčkou Ocean. 8 ks.'],
    [97,'Uramaki Aburi','13 €','4, 6, 7, 11','Rolka s lososom, avokádom, syrom Philadelphia, flambovaným lososom a omáčkou Ocean. 8 ks.']
  ]],
  ['Maki, nigiri a sashimi','sushi',[
    [98,'Maki','6 €','podľa výberu','Jednozložková maki rolka v riase nori, plnená rybou alebo zeleninou, nakrájaná na 6 kusov. Varianty: losos, tuniak, losos s avokádom, maslová ryba, kreveta, údený úhor alebo krabia tyčinka.'],
    [99,'Crunchy Maki','7 €','podľa výberu','Chrumkavá jednozložková maki rolka v riase nori, plnená rybou alebo zeleninou, nakrájaná na 6 kusov. Varianty: losos, tuniak, losos s avokádom, maslová ryba, kreveta, údený úhor alebo krabia tyčinka.'],
    [100,'Sashimi – sake / losos, 3 ks (50 g)','5,50 €','4','Plátky čerstvého lososa podávané bez ryže.'],
    [101,'Sashimi – managatsuo / maslová ryba, 3 ks (50 g)','5,50 €','4','Plátky čerstvej maslovej ryby podávané bez ryže.'],
    [178,'Sashimi – maguro / tuniak, 3 ks (50 g)','6,90 €','4','Plátky čerstvého tuniaka podávané bez ryže.'],
    [179,'Sashimi set 9 ks, 150 g','13,90 €','4','3 ks losos, 3 ks tuniak a 3 ks maslová ryba.'],
    [180,'Nigiri – avocado, 1 ks (40 g)','2,20 €','11','Sushi ryža s avokádom.'],
    [181,'Nigiri – mango, 1 ks (40 g)','2,20 €','','Sushi ryža s mangom.'],
    [182,'Nigiri – tamago / omeleta, 1 ks (40 g)','2,20 €','3','Sushi ryža s japonskou omeletou.'],
    [183,'Nigiri – kani / krabia tyčinka, 1 ks (40 g)','2,70 €','1, 2, 3, 4','Sushi ryža s krabou tyčinkou.'],
    [184,'Nigiri – managatsuo / maslová ryba, 1 ks (40 g)','2,90 €','4','Sushi ryža s maslovou rybou.'],
    [185,'Nigiri – ebi / kreveta, 1 ks (40 g)','2,90 €','2','Sushi ryža s krevetou.'],
    [186,'Nigiri – sake / losos, 1 ks (40 g)','2,90 €','4','Sushi ryža s lososom.'],
    [187,'Nigiri – maguro / tuniak, 1 ks (40 g)','3,20 €','4','Sushi ryža s tuniakom.'],
    [188,'Nigiri – unagi / úhor, 1 ks (40 g)','3,50 €','4','Sushi ryža s úhorom.'],
    [189,'Nigiri – tataki losos, 1 ks (40 g)','5,50 €','4','Sushi ryža s opekaným lososom tataki.'],
    [190,'Nigiri – tataki tuniak, 1 ks (40 g)','5,50 €','4','Sushi ryža s opekaným tuniakom tataki.'],
    [191,'Nigiri set 4 ks, 160 g','8,50 €','2, 4','Losos, tuniak, maslová ryba a kreveta.'],
    [192,'Nigiri set 10 ks, 350 g','15,90 €','2, 4','2 ks losos, 2 ks tuniak, 2 ks maslová ryba, 2 ks kreveta a 2 ks úhor.'],
    [102,'Maki vegetariánske','5,50 €','podľa výberu','Vegetariánske maki podľa výberu: avokádo, nakladaná reďkovka, uhorka, špargľa, japonská omeleta alebo tofu.'],
    [103,'Crunchy Maki vegetariánske','6,50 €','podľa výberu','Chrumkavé vegetariánske maki podľa výberu: avokádo, nakladaná reďkovka, uhorka, špargľa, japonská omeleta alebo tofu. 8 ks.'],
    [104,'Crunchy Maki Special, 8 ks','7 €','1, 2, 3, 4, 7, 11','Chrumkavá rolka s mangovou omáčkou a kaviárom. Varianty: losos, maslová ryba, tuniak, kreveta alebo krabia tyčinka.']
  ]],
  ['Uramaki','sushi',[
    [105,'Uramaki Sesame','10 €','4, 11','Sushi rolka s tuniakom, lososom, avokádom a reďkovkou, obalená sezamom. 8 ks.'],
    [106,'Uramaki Marshmallow','10 €','1, 2, 3, 4, 11','Sushi rolka s lososom v tempure a krabou tyčinkou. 8 ks.'],
    [107,'Uramaki Vegetarian','10 €','6, 11','Vegánska sushi rolka s avokádom, šalátom, zázvorom a edamame fazuľkou. 8 ks.'],
    [108,'Uramaki Duck Maki','10 €','1, 3, 11','Sushi rolka s kačacím mäsom v tempure a chilli, posypaná sezamom. 8 ks.'],
    [109,'Uramaki Chilli Roll','10 €','4, 11','Rolka s lososom, uhorkou, avokádom, kaviárom a chilli. 8 ks.'],
    [110,'Uramaki Angry Dragon','12 €','1, 2, 3, 4, 11','Rolka s mangom, krevetou v tempure a krabou tyčinkou, poliata mangovou omáčkou a doplnená kaviárom. 8 ks.'],
    [111,'Uramaki Tobikko','12 €','2, 4, 11','Rolka s krabou tyčinkou, lososom, avokádom a uhorkou, posypaná farebným kaviárom. 8 ks.'],
    [112,'Uramaki Togepi','12 €','1, 2, 3, 4, 10, 11','Rolka s krevetou v tempure a avokádom, obalená lososom, kaviárom a majonézou. 8 ks.']
  ]],
  ['Teplé jedlá Hà Nội Phố','vietnam',[
    [113,'Tofu so zeleninou','Cena na vyžiadanie','6, 14','Restované tofu, sezónna zelenina, huby, ustricová omáčka a sójová omáčka.'],
    [114,'Bún Nem','Cena na vyžiadanie','4, 6, 14','Vyprážané jarné závitky, ryžové rezance, šalát, vietnamské bylinky a sladkokyslá rybacia omáčka.'],
    [115,'Nem Cuốn Tôm','Cena na vyžiadanie','2, 4, 6','Ryžové rezance, šalát, vietnamské bylinky, krevety a zelenina zabalené v ryžovom papieri, podávané s omáčkou Hà Nội Phố.'],
    [116,'Bún Thịt Nướng','Cena na vyžiadanie','1, 4, 5, 6','Ryžové rezance, grilované bravčové mäso, čerstvá zelenina a bylinky, podávané so sladkokyslou rybacou omáčkou.'],
    [117,'Kuracie so zeleninou','7 €','6, 14','Restované kuracie mäso, sezónna zelenina, huby, ustricová omáčka a sójová omáčka.'],
    [118,'Krevety so zeleninou','7,50 €','1, 2, 6, 14','Krevety, sezónna zelenina, huby, ustricová omáčka a sójová omáčka.'],
    [119,'Vyprážaný syr','4,50 €','1, 3, 7'],
    [121,'Yakitori losos','6,50 €','4, 6, 11'],
    [122,'Hot Wok','6 €','3, 6, 10, 11']
  ]],
  ['Sety, šaláty a malé jedlá','salaty sushi',[
    [123,'Norimaki Set, 18 ks','12 €','4, 11','Maki podľa výberu: 3 ks losos, 3 ks tuniak, 3 ks maslová ryba, 3 ks avokádo, 3 ks uhorka a 3 ks reďkovka.'],
    [124,'Sunshine Set, 50 ks','68 €','podľa výberu','Futomaki: 6 ks Crunchy Roll Light a 6 ks Sashimi Rossa s kaviárom. Uramaki: 8 ks Salmon Roll a jedna rolka podľa vášho výberu.'],
    [125,'Hawaii šalát','6 €','3, 6, 10, 11','Avokádo, uhorka, mango, reďkovka, wakame, cibuľka, paprika, chilli korenie, sezamový olej, omáčka a sezam.'],
    [126,'Kurací šalát','6 €','3, 6, 10, 11','Kuracie mäso, šalát, paprika, rajčiny, omáčka a sezam.'],
    [127,'Gyoza taštičky','6,50 €','1, 3, 11','Taštičky plnené kuracím mäsom alebo zeleninou. Variant: chicken gyoza alebo vege gyoza. 5 ks.'],
    [128,'Chilli kúsky, 150 g','5,50 €','1, 3, 7, 11','Kuracie kúsky v cestíčku na sladko-pikantný spôsob so sezamom.']
  ]],
  ['Prílohy','prilohy',[
    [130,'Ryžové rezance, 150 g','3 €','3','Ryžové rezance so zeleninou a vajíčkom.'],
    [193,'Opekané zemiaky, 150 g','3 €','','Opekané zemiaky.'],
    [194,'Hranolky, 150 g','3,50 €','','Hranolky.'],
    [195,'Jasmínová ryža, 150 g','2,50 €','','Jasmínová ryža.'],
    [196,'Rezance, 150 g','3 €','1, 3','Ryžové alebo pšeničné rezance.']
  ]],
  ['Omáčky a doplnky','prilohy',[[131,'Tatárska omáčka','1,50 €','3, 7, 10'],[132,'Teriyaki omáčka','1,50 €','6, 11'],[133,'Sladkokyslá omáčka','1,50 €',''],[134,'Chilli omáčka','1,50 €',''],[135,'Sójová omáčka','1,50 €','6'],[136,'Mango omáčka','1,50 €',''],[137,'Japonská majonéza','1,50 €','3, 10'],[138,'Kokosové mlieko','1,50 €',''],[139,'Nakladaný zázvor','1,50 €',''],[140,'Čerstvé chilli','1,50 €','']]],
];

rawMenuLegacy.push(['Nápoje','napoje',[
  [141,'Coca-Cola + záloha','2 €',''],[142,'Coca-Cola Zero + záloha','2 €',''],[143,'Fanta + záloha','2 €',''],[144,'Fanta Shokata + záloha','2 €',''],[145,'Sprite + záloha','2 €',''],
  [146,'Fuze Tea jahoda + záloha','2 €',''],[147,'Fuze Tea broskyňa + záloha','2 €',''],[148,'Fuze Tea zelený citrón + záloha','2 €',''],
  [149,'Cappy pomaranč 0,5 l + záloha','2 €',''],[150,'Cappy multivitamín 0,5 l + záloha','2 €',''],[151,'Cappy pomaranč 0,3 l + záloha','1,50 €',''],[152,'Cappy multivitamín 0,3 l + záloha','1,50 €',''],
  [153,'Aloe Vera + záloha','2 €',''],[154,'Natura jemne sýtená + záloha','2 €',''],[155,'Natura nesýtená + záloha','2 €',''],[156,'Natura limetka + záloha','2 €',''],
  [157,'Cola 0,3 l','1,50 €',''],[158,'Fanta 0,3 l','1,50 €',''],[159,'Sprite 0,3 l','1,50 €',''],[160,'Soda 0,3 l','1,50 €',''],
  [161,'Cola 0,5 l','2 €',''],[162,'Fanta 0,5 l','2 €',''],[163,'Sprite 0,5 l','2 €',''],[164,'Soda 0,5 l','2 €',''],
  [165,'Kofola 0,5 l','2 €',''],[166,'Kofola 0,3 l','1,50 €',''],[167,'Kofola 0,5 l čapovaná','2 €','']
]]);

const moveSectionAfter = (sectionName, anchorName) => {
  const sectionIndex = rawMenuLegacy.findIndex(([name]) => name === sectionName);
  if (sectionIndex < 0) return;
  const [section] = rawMenuLegacy.splice(sectionIndex, 1);
  const anchorIndex = rawMenuLegacy.findIndex(([name]) => name === anchorName);
  rawMenuLegacy.splice(anchorIndex + 1, 0, section);
};

moveSectionAfter('Poke Bowl', 'Teplé jedlá Hà Nội Phố');
moveSectionAfter('Prílohy', 'Poke Bowl');

// Canonical menu order and numbering from Hà Nội Phố_Menu.pdf (July 2026).
// Descriptions are reused from the legacy data where the PDF wording matches.
const legacyItems = rawMenuLegacy.flatMap(([section, category, items]) =>
  items.map(([, name, price, allergens = '', description = '']) => ({section, category, name, price, allergens, description}))
);
const legacyByName = name => legacyItems.find(item => item.name.toLocaleLowerCase('sk') === name.toLocaleLowerCase('sk'));
const dish = (number, name, price, allergens = '', description = '') => {
  const legacy = legacyByName(name);
  return [number, name, price, allergens || legacy?.allergens || '', description || legacy?.description || ''];
};

const rawMenu = [
  ['Polievky','polievky',[
    dish(1,'Ostrokyslá polievka','2 €','3, 6'), dish(2,'Hanojský vývar','2 €','4'),
    dish(3,'Tom Yum','6 €','2, 4'), dish(4,'Rybacia polievka','3 €','4'),
    dish(5,'Miso Shiro','3 €','6'), dish(6,'Gyoza Soup','6 €','1, 3, 6')
  ]],
  ['Tenké ryžové rezance','rezance',[
    dish(7,'Kuracie','7 €','3'), dish(8,'Hovädzie','7,50 €','3'), dish(9,'Kačacie','7,50 €','3'),
    dish(10,'S krevetami','7,50 €','2, 3'), dish(11,'Kuracie s krevetami','7,50 €','2, 3'),
    dish(12,'S tofu','7 €','3, 6'), dish(13,'So zeleninou','3 €','3'), dish(14,'Chicken Grill','5,50 €','3, 6, 10, 11')
  ]],
  ['Udon','rezance',[
    dish(15,'Kuracie','7 €','1, 3, 6'), dish(16,'Hovädzie','7,50 €','1, 3, 6'), dish(17,'Kačacie','7,50 €','1, 3, 6'),
    dish(18,'S krevetami','7,50 €','1, 2, 3, 6'), dish(19,'Kuracie s krevetami','7,50 €','1, 2, 3, 6'),
    dish(20,'S tofu','7 €','1, 3, 6'), dish(21,'So zeleninou','6 €','1, 3, 6'), dish(22,'Kuracie kúsky','5,50 €')
  ]],
  ['Pad Thai','rezance',[
    dish(23,'Kuracie','7 €','3, 5, 6'), dish(24,'Hovädzie','7,50 €','3, 5, 6'), dish(25,'Kačacie','7,50 €','3, 5, 6'),
    dish(26,'S krevetami','7,50 €','2, 3, 5, 6'), dish(27,'Kuracie s krevetami','7,50 €','2, 3, 5, 6'),
    dish(28,'S tofu','7 €','3, 5, 6'), dish(29,'So zeleninou','6 €','3, 5, 6')
  ]],
  ['Na šťave','vietnam',[
    dish(30,'Na šťave','6 €','11','Hovädzie, krevety, kuracie alebo tofu. 200 g.')
  ]],
  ['Bún bò Nam Bộ','vietnam',[
    dish(31,'Kurací','7 €','2, 4, 5, 6, 11'), dish(32,'Hovädzí','7,50 €','2, 4, 5, 6, 11'),
    dish(33,'Kačací','7,50 €','2, 4, 5, 6, 11'), dish(34,'S krevetami','7,50 €','2, 4, 5, 6, 11'),
    dish(35,'S tofu','7 €','2, 4, 5, 6, 11'), dish(36,'Ebi Tempura','6 €'), dish(37,'Tempurované kuracie mäso','6 €')
  ]],
  ['Phở','vietnam polievky',[
    dish(38,'Kuracie','7 €','2, 4'), dish(39,'Hovädzie','7,50 €','2, 4'),
    dish(40,'Krevety','7,50 €','2, 4'), dish(41,'Tofu','6 €','2, 4')
  ]],
  ['Ramen','polievky',[
    dish(42,'Kurací','7 €','1, 2, 3, 6'), dish(43,'Hovädzí','7,50 €','1, 2, 3, 6')
  ]],
  ['Tom Yum 0,7 l','polievky',[
    dish(44,'Tom Yum, 0,7 l','7,50 €','2, 4')
  ]],
  ['Rizoto','vietnam',[
    dish(45,'Kuracie','7 €','2, 3'), dish(46,'Hovädzie','7,50 €','2, 3'), dish(47,'S krevetami','7,50 €','2, 3'),
    dish(48,'S tofu','6 €','2, 3'), dish(49,'So zeleninou','4 €','2, 3'), dish(50,'Chrumkavé kura','5,50 €'),
    dish(51,'Chrumkavá kačica','6,50 €')
  ]],
  ['Hrubé ryžové rezance','rezance',[
    dish(52,'Kuracie','7 €','3'), dish(53,'Hovädzie','7,50 €','3'), dish(54,'Kačacie','7,50 €','3'),
    dish(55,'S krevetami','7,50 €','2, 3'), dish(56,'Kuracie s krevetami','7,50 €','2, 3'),
    dish(57,'S tofu','6,50 €','3, 6'), dish(58,'So zeleninou','6 €','3'), dish(59,'Jarné závitky, 3 ks','5,50 €'),
    dish(60,'Vegetarian Spring Rolls','6 €')
  ]],
  ['Opekané vaječné rezance','rezance',[
    dish(61,'Kuracie','7 €','1, 3'), dish(62,'Hovädzie','7,50 €','1, 3'), dish(63,'Kačacie','7,50 €','1, 3'),
    dish(64,'S krevetami','6 €','1, 2, 3'), dish(65,'Kuracie s krevetami','4 €','1, 2, 3'), dish(66,'S tofu','5,50 €','1, 3, 6')
  ]],
  ['Curry Udon','rezance',[
    dish(67,'So zeleninou','6 €','1, 3, 7, 11'), dish(68,'S kuracím mäsom','7 €','1, 3, 7, 11'),
    dish(69,'S tofu','6 €','1, 3, 6, 7, 11'), dish(70,'S krevetami','7,50 €','1, 2, 3, 7, 11'),
    dish(71,'Hovädzí','7,50 €','1, 3, 7, 11')
  ]],
  ['Teplé jedlá Hà Nội Phố','vietnam',[
    dish(72,'Vyprážaný syr','4,50 €','1, 3, 7'), dish(73,'Tom Yum (0,7 l)','7,50 €','2, 4'),
    dish(74,'Yakitori losos','6,50 €','4, 6, 11'), dish(75,'Hot Wok','6 €','3, 6, 10, 11'),
    dish(76,'Bún Nem','Cena na vyžiadanie','4, 6, 14'), dish(77,'Nem Cuốn Tôm','Cena na vyžiadanie','2, 4, 6'),
    dish(78,'Krevety so zeleninou','Cena na vyžiadanie','1, 2, 6, 14'),
    dish(79,'Bún Thịt Nướng','Cena na vyžiadanie','1, 4, 5, 6'),
    dish(80,'Kuracie so zeleninou','Cena na vyžiadanie','6, 14')
  ]],
  ['Prílohy','prilohy',[
    dish(81,'Ryžové rezance, 150 g','3 €','3'), dish(82,'Opekané zemiaky, 180 g','3 €'),
    dish(83,'Hranolky, 150 g','3,50 €'), dish(84,'Jasmínová ryža, 150 g','2,50 €'), dish(85,'Rezance, 150 g','3 €','1, 3')
  ]],
  ['Kung Pao a Thai karí','vietnam',[
    dish(86,'Kung Pao','5,50 €','2, 5, 6, 15, 16, 17'), dish(87,'Thai karí','5,50 €','7, 15, 16, 17')
  ]],
  ['Poke','sushi salaty',[
    dish(88,'Poke – tofu, 500 g','8,90 €','3, 6'), dish(89,'Poke – kuracie mäso, 500 g','9,90 €','3, 6'),
    dish(90,'Poke – hovädzie mäso, 500 g','9,90 €','3, 6'), dish(91,'Poke – krevety, 500 g','10,90 €','2, 3, 6'),
    dish(92,'Poke – losos, 500 g','12,90 €','3, 4, 6'), dish(93,'Poke – tuniak, 500 g','12,90 €','3, 4, 6'),
    dish(94,'Poke – opekaný losos, 500 g','12,90 €','3, 4, 6')
  ]],
  ['Sashimi, nigiri a sety','sushi',[
    dish(95,'Sashimi – sake / losos, 3 ks (50 g)','5,50 €','4'),
    dish(96,'Sashimi – managatsuo / maslová ryba, 3 ks (50 g)','5,50 €','4'),
    dish(97,'Sashimi – maguro / tuniak, 3 ks (50 g)','6,90 €','4'),
    dish(98,'Sashimi set 9 ks, 150 g','3 €','4'), dish(99,'Nigiri – avocado, 1 ks (40 g)','2,20 €','11'),
    dish(100,'Nigiri – mango, 1 ks (40 g)','2,20 €'), dish(101,'Nigiri – tamago / omeleta, 1 ks (40 g)','2,20 €','3'),
    dish(102,'Nigiri – kani / krabia tyčinka, 1 ks (40 g)','2,70 €','1, 2, 3, 4'),
    dish(103,'Nigiri – managatsuo / maslová ryba, 1 ks (40 g)','2,90 €','4'),
    dish(104,'Nigiri – ebi / kreveta, 1 ks (40 g)','2,90 €','2'), dish(105,'Nigiri – sake / losos, 1 ks (40 g)','2,90 €','4'),
    dish(106,'Nigiri – maguro / tuniak, 1 ks (40 g)','3,20 €','4'), dish(107,'Nigiri – unagi / úhor, 1 ks (40 g)','3,50 €','4'),
    dish(108,'Nigiri – tataki losos, 1 ks (40 g)','5,50 €','4'), dish(109,'Nigiri – tataki tuniak, 1 ks (40 g)','5,50 €','4'),
    dish(110,'Nigiri set 4 ks, 160 g','8,50 €','2, 4'), dish(111,'Nigiri set 10 ks, 350 g','15,90 €','2, 4')
  ]],
  ['Futomaki','sushi',[
    dish(112,'Crunchy Roll Light','16 €'), dish(113,'Crunchy Roll Tuna','16 €'), dish(114,'California Ebi Ten','16 €'),
    dish(115,'Special Roll','16 €'), dish(116,'Salmon','16 €')
  ]],
  ['Bento','sushi',[
    dish(117,'Special Bento','16 €'), dish(118,'Fish Bento','16 €'), dish(119,'California Bento','14 €'),
    dish(120,'Unagi Bento','16 €'), dish(121,'Poke Bento','16 €'), dish(122,'Nigiri Maki Bento','14 €'),
    dish(123,'Chicken Grill Bento','16 €'), dish(124,'Duck Bento','16 €'), dish(125,'Vege Bento','14 €'), dish(126,'Rossa Bento','16 €')
  ]],
  ['Poke Bowl','sushi salaty',[
    dish(127,'Beef Poke Bowl','9 €','1, 3, 6, 10, 11'), dish(128,'Grill Poke Bowl','9,50 €'),
    dish(129,'Hawaii Poke Bowl','9,50 €','3, 4, 6, 10, 11'), dish(130,'Mango Poke Bowl','9,50 €','3, 4, 6, 7, 10, 11')
  ]],
  ['Sushi sety','sushi',[
    dish(131,'Hà Nội Set','60 €'), dish(132,'Love Set, 26 ks','50 €'), dish(133,'Uramaki Salmon Roll','12 €'),
    dish(134,'Uramaki Royal','13 €'), dish(135,'Uramaki Rainbow','13 €'), dish(136,'Uramaki Marimondon','13 €'),
    dish(137,'Uramaki Aburi','13 €')
  ]],
  ['Maki','sushi',[
    dish(138,'Maki','6 €','podľa výberu'), dish(139,'Crunchy Maki','7 €','podľa výberu'),
    dish(140,'Maki vegetariánske','5,50 €','podľa výberu'), dish(141,'Crunchy Maki vegetariánske','6,50 €','podľa výberu'),
    dish(142,'Crunchy Maki Special, 8 ks','7 €','1, 2, 3, 4, 7, 11')
  ]],
  ['Uramaki','sushi',[
    dish(143,'Uramaki Sesame','10 €'), dish(144,'Uramaki Marshmallow','10 €'), dish(145,'Uramaki Vegetarian','10 €'),
    dish(146,'Uramaki Duck Maki','10 €'), dish(147,'Uramaki Chilli Roll','10 €'), dish(148,'Uramaki Angry Dragon','12 €'),
    dish(149,'Uramaki Tobikko','12 €'), dish(150,'Uramaki Togepi','12 €')
  ]],
  ['Sety, šaláty a malé jedlá','salaty sushi',[
    dish(151,'Norimaki Set, 18 ks','12 €'), dish(152,'Family Set','68 €'), dish(153,'Hawaii šalát','6 €'),
    dish(154,'Kurací šalát','6 €'), dish(155,'Wakame šalát','6 €','1, 2, 6, 11','Morská riasa wakame, krabia tyčinka, edamame a avokádo. 200 g.'),
    dish(156,'Gyoza taštičky','6,50 €'), dish(157,'Chilli kúsky, 150 g','5,50 €')
  ]],
  ['Omáčky a doplnky','prilohy',[
    dish(158,'Jasmínová ryža, 150 g','2,50 €'), dish(159,'Tatárska omáčka','1,50 €'), dish(160,'Teriyaki omáčka','1,50 €'),
    dish(161,'Sladkokyslá omáčka','1,50 €'), dish(162,'Chilli omáčka','1,50 €'), dish(163,'Sójová omáčka','1,50 €'),
    dish(164,'Mango omáčka','1,50 €'), dish(165,'Japonská majonéza','1,50 €'), dish(166,'Kokosové mlieko','1,50 €'),
    dish(167,'Nakladaný zázvor','1,50 €'), dish(168,'Čerstvé chilli','1,50 €')
  ]],
  ['Nápoje','napoje',[
    dish(169,'Coca-Cola + záloha','2 €'), dish(170,'Coca-Cola Zero + záloha','2 €'), dish(171,'Fanta + záloha','2 €'),
    dish(172,'Fanta Shokata + záloha','2 €'), dish(173,'Sprite + záloha','2 €'), dish(174,'Fuze Tea jahoda + záloha','2 €'),
    dish(175,'Fuze Tea broskyňa + záloha','2 €'), dish(176,'Fuze Tea zelený citrón + záloha','2 €'),
    dish(177,'Cappy pomaranč 0,5 l + záloha','2 €'), dish(178,'Cappy multivitamín 0,5 l + záloha','2 €'),
    dish(179,'Cappy pomaranč 0,3 l + záloha','1,50 €'), dish(180,'Cappy multivitamín 0,3 l + záloha','1,50 €'),
    dish(181,'Aloe Vera + záloha','2 €'), dish(182,'Natura jemne sýtená + záloha','2 €'),
    dish(183,'Natura nesýtená + záloha','2 €'), dish(184,'Natura limetka + záloha','2 €'),
    dish(185,'Cola 0,3 l','1,50 €'), dish(186,'Fanta 0,3 l','1,50 €'), dish(187,'Sprite 0,3 l','1,50 €'),
    dish(188,'Soda 0,3 l','1,50 €'), dish(189,'Cola 0,5 l','2 €'), dish(190,'Fanta 0,5 l','2 €'),
    dish(191,'Sprite 0,5 l','2 €'), dish(192,'Soda 0,5 l','2 €'), dish(193,'Kofola 0,5 l','2 €'),
    dish(194,'Kofola 0,3 l','1,50 €'), dish(195,'Kofola 0,5 l čapovaná','2 €')
  ]]
];

const menuItems = rawMenu.flatMap(([section,category,items]) => items.map(([number,name,price,allergens='',description='']) => ({section,category,number,name,price,allergens,description})));

const grid = document.querySelector('#menu-grid');
const empty = document.querySelector('#empty-state');
const search = document.querySelector('#menu-search');
const count = document.querySelector('#menu-count');
const loadMore = document.querySelector('#load-more');
const dishPhotos = [
  {src:'assets/images/menu/21-7/tom-yum-clean-v3.webp', alt:'Tom Yum s krevetami, hubami a koriandrom', width:1086, height:1448, matches:item=>item.section==='Polievky' && item.name==='Tom Yum'},
  {src:'assets/images/menu/21-7/gyoza-soup-clean-v3.webp', alt:'Gyoza Soup s taštičkami a udon rezancami', width:1086, height:1448, matches:item=>item.section==='Polievky' && item.name==='Gyoza Soup'},
  {src:'assets/images/menu/21-7/ramen-clean-v3.webp', alt:'Ramen s vajíčkom, rezancami, hubami a mäsom', width:1254, height:1254, matches:item=>item.section==='Ramen' && item.name==='Kurací'},
  {src:'assets/images/menu/optimized/hot-noodles-illustration-display.webp', alt:'Pad Thai s rezancami, zeleninou a kuracím mäsom', width:1000, height:1000, matches:item=>item.section==='Pad Thai' && item.name==='Kuracie'},
  {src:'assets/images/menu/optimized/stir-fry-selection-clean-display.webp', alt:'Na šťave s hovädzím mäsom, zeleninou a ryžou', width:880, height:880, matches:item=>item.section==='Na šťave' && item.name==='Na šťave – hovädzie'},
  {src:'assets/images/menu/optimized/chicken-pieces-clean-display.webp', alt:'Chrumkavé kuracie mäso s ryžou a zeleninou', width:1000, height:1000, matches:item=>item.section==='Rizoto' && item.name==='Chrumkavé kura'},
  {src:'assets/images/menu/optimized/crispy-duck-cutout-display.webp', alt:'Chrumkavá kačica s ryžou a zeleninou', width:1000, height:1000, matches:item=>item.section==='Rizoto' && item.name==='Chrumkavá kačica'},
  {src:'assets/images/menu/optimized/chicken-grill-clean-display.webp', alt:'Chicken Grill s ryžou a zeleninou', width:640, height:628, matches:item=>item.name==='Chicken Grill'},
  {src:'assets/images/menu/optimized/tempura-chicken-clean-display.webp', alt:'Tempurované kuracie mäso', width:640, height:565, matches:item=>item.name==='Tempurované kuracie mäso'},
  {src:'assets/images/menu/optimized/beef-pho-cutout-display.webp', alt:'Hovädzie Phở s rezancami a čerstvou zeleninou', width:640, height:541, matches:item=>item.section==='Phở' && item.name==='Hovädzí'},
  {src:'assets/images/menu/21-7/futomaki-crunchy-roll-light-clean-v3.webp', alt:'Futomaki Crunchy Roll Light', width:1536, height:1024, matches:item=>item.section==='Futomaki' && item.name==='Crunchy Roll Light'},
  {src:'assets/images/menu/optimized/special-bento-cutout-display.webp', alt:'Special Bento so sushi, nigiri a sashimi', width:640, height:640, matches:item=>item.name==='Special Bento'},
  {src:'assets/images/menu/optimized/chicken-bento-cutout-display.webp', alt:'Chicken Grill Bento s ryžou, sushi a šalátom', width:640, height:640, matches:item=>item.name==='Chicken Grill Bento'},
  {src:'assets/images/menu/optimized/rossa-bento-clean-v2-display.webp', alt:'Rossa Bento s lososom, sushi a ryžou', width:640, height:406, matches:item=>item.name==='Rossa Bento'},
  {src:'assets/images/menu/optimized/mango-poke-bowl-clean-v2-display.webp', alt:'Poke s opekaným lososom, mangom, avokádom a edamame', width:640, height:579, matches:item=>item.name==='Poke – opekaný losos, 500 g'},
  {src:'assets/images/menu/optimized/set-ocean-cutout-display.webp', alt:'Set Ocean, 32 kusov sushi', width:640, height:640, matches:item=>item.name==='Set Ocean, 32 ks'},
  {src:'assets/images/menu/optimized/uramaki-angry-dragon-clean-display.webp', alt:'Uramaki Angry Dragon', width:376, height:640, matches:item=>item.name==='Uramaki Angry Dragon'},
  {src:'assets/images/menu/optimized/yakitori-salmon-clean-display.webp', alt:'Yakitori losos', width:563, height:640, matches:item=>item.name==='Yakitori losos'},
  {src:'assets/images/menu/optimized/hawaii-salad-natural-display.webp', alt:'Hawaii šalát s mangom a avokádom', width:480, height:640, matches:item=>item.name==='Hawaii šalát'},
  {src:'assets/images/menu/21-7/crunchy-maki-special-clean-v3.webp', alt:'Crunchy Maki Special s mangovou omáčkou a kaviárom', width:1537, height:1023, matches:item=>item.name==='Crunchy Maki Special, 8 ks'}
];

// Web-optimized cut-outs supplied with the July 2026 menu. Some source
// photographs represent a whole family of variants, so those are matched by
// section/range rather than pretending that every protein has a unique photo.
const julyPhoto = (file, alt, matches) => ({
  src:`assets/images/menu/2026-07/${file}.webp`, alt, width:1000, height:1000, matches
});
const julyMenuPhotos = [
  julyPhoto('1-ostrokysla-polievka','Ostrokyslá polievka',item=>item.number===1),
  julyPhoto('3-tom-yum','Tom Yum s krevetami a zeleninou',item=>item.number===3),
  julyPhoto('4-rybacia-polievka','Rybacia polievka s lososom a zeleninou',item=>item.number===4),
  julyPhoto('6-gyoza-soup','Gyoza Soup s taštičkami a udon rezancami',item=>item.number===6),
  julyPhoto('tenke-ryzove','Tenké ryžové rezance so zeleninou',item=>item.section==='Tenké ryžové rezance'),
  julyPhoto('14-chicken-grill','Chicken Grill so zeleninou',item=>item.name==='Chicken Grill'),
  julyPhoto('udon','Udon rezance so zeleninou',item=>item.section==='Udon'),
  julyPhoto('22-kuracie-kusky','Kuracie kúsky s teriyaki omáčkou',item=>item.name==='Kuracie kúsky'),
  julyPhoto('pad-thai','Pad Thai rezance so zeleninou',item=>item.section==='Pad Thai'),
  julyPhoto('30-na-stave','Jedlo na šťave so zeleninou a ryžou',item=>item.section==='Na šťave'),
  julyPhoto('bun-bo-nam-bo','Bún bò Nam Bộ s ryžovými rezancami a zeleninou',item=>item.section==='Bún bò Nam Bộ'),
  julyPhoto('37-tempurovane-kuracie-masko','Tempurované kuracie mäso',item=>item.name==='Tempurované kuracie mäso'),
  julyPhoto('pho','Phở s rezancami a čerstvou zeleninou',item=>item.section==='Phở'),
  julyPhoto('ramen','Ramen s vajíčkom, rezancami a zeleninou',item=>item.section==='Ramen'),
  julyPhoto('rizoto','Rizoto so zeleninou',item=>item.section==='Rizoto'),
  julyPhoto('52-chrumkave-kura','Chrumkavé kura s ryžou a zeleninou',item=>item.name==='Chrumkavé kura'),
  julyPhoto('53-chrumkava-kacica','Chrumkavá kačica s ryžou a zeleninou',item=>item.name==='Chrumkavá kačica'),
  julyPhoto('hrube-ryzove','Hrubé ryžové rezance so zeleninou',item=>item.section==='Hrubé ryžové rezance'),
  julyPhoto('61-jarne-zavtiky-3ks','Jarné závitky',item=>item.name.startsWith('Jarné závitky')),
  julyPhoto('opekane','Opekané vaječné rezance so zeleninou',item=>item.section==='Opekané vaječné rezance'),
  julyPhoto('curry-udon-500g','Curry Udon so zeleninou',item=>item.section==='Curry Udon'),
  julyPhoto('76-vyprazany-syr','Vyprážaný syr s prílohou',item=>item.name==='Vyprážaný syr'),
  julyPhoto('77-yakitori-losos','Yakitori losos',item=>item.name==='Yakitori losos'),
  julyPhoto('39-bun-thit-nuong','Bún Thịt Nướng s mäsom, rezancami a zeleninou',item=>item.name==='Bún Thịt Nướng'),
  julyPhoto('63-nem-cuon-tom','Nem Cuốn Tôm',item=>item.name==='Nem Cuốn Tôm'),
  julyPhoto('80-thai-kary','Thai karí s ryžou',item=>item.name==='Thai karí'),
  julyPhoto('poke','Poke so zeleninou a ryžou',item=>item.section==='Poke'),
  julyPhoto('sashimi','Sashimi výber',item=>item.number>=95&&item.number<=98),
  julyPhoto('nigiri','Nigiri výber',item=>item.number>=99&&item.number<=111),
  julyPhoto('110-futomaki-crunchy-roll-light','Futomaki Crunchy Roll Light',item=>item.name==='Crunchy Roll Light'),
  julyPhoto('114-futomaki-salmon','Futomaki Salmon',item=>item.section==='Futomaki'&&item.name==='Salmon'),
  ...[['115-special-bento','Special Bento'],['116-fish-bento','Fish Bento'],['118-unagi-bento','Unagi Bento'],['119-poke-bento','Poke Bento'],['120-nigiri-maki-bento','Nigiri Maki Bento'],['121-chicken-grill-bento','Chicken Grill Bento'],['122-duck-bento','Duck Bento'],['123-vege-bento','Vege Bento'],['124-rossa-bento','Rossa Bento']]
    .map(([file,name])=>julyPhoto(file,name,item=>item.name===name)),
  julyPhoto('125-ha-noi-set-32-ks','Hà Nội Set, 32 kusov sushi',item=>item.name==='Hà Nội Set'),
  julyPhoto('126-love-set-26-ks','Love Set, 26 kusov sushi',item=>item.name==='Love Set, 26 ks'),
  julyPhoto('132-maki','Maki sushi výber',item=>item.section==='Maki'),
  julyPhoto('136-crunchy-maki-special-8ks','Crunchy Maki Special',item=>item.name==='Crunchy Maki Special, 8 ks'),
  julyPhoto('142-uramaki-angry-dragon','Uramaki Angry Dragon',item=>item.name==='Uramaki Angry Dragon'),
  julyPhoto('146-family-set-62-ks','Family Set, 62 kusov sushi',item=>item.name==='Family Set'),
  julyPhoto('147-hawaii-salat','Hawaii šalát s mangom a avokádom',item=>item.name==='Hawaii šalát'),
  julyPhoto('82-chilli-kusky-150g','Chilli kúsky so sezamom',item=>item.name.startsWith('Chilli kúsky')),
  julyPhoto('160-163','Výber omáčok Hà Nội Phố',item=>item.number>=160&&item.number<=163),
  julyPhoto('164-166','Mango omáčka, majonéza a kokosové mlieko',item=>item.number>=164&&item.number<=166),
  julyPhoto('167-170','Doplnky a nápoje',item=>item.number>=167&&item.number<=170),
  julyPhoto('171-174','Fanta, Sprite a Fuze Tea',item=>item.number>=171&&item.number<=174),
  julyPhoto('175-178','Fuze Tea a Cappy nápoje',item=>item.number>=175&&item.number<=178),
  julyPhoto('179-180','Cappy nápoje',item=>item.number>=179&&item.number<=180),
  julyPhoto('183-184','Natura voda',item=>item.number>=181&&item.number<=184),
  julyPhoto('185-186','Čapovaná Cola a Fanta',item=>item.number>=185&&item.number<=186),
  julyPhoto('187-188','Čapovaný Sprite a sóda',item=>item.number>=187&&item.number<=188),
  julyPhoto('189-190','Cola a Fanta, 0,5 l',item=>item.number>=189&&item.number<=190),
  julyPhoto('191-192','Sprite a sóda, 0,5 l',item=>item.number>=191&&item.number<=192),
  julyPhoto('193-194','Kofola',item=>item.number>=193&&item.number<=194),
  julyPhoto('195-196','Kofola',item=>item.number===195)
];

// Exact dish-name matches always take priority over a category photograph.
const julyExactPhotoByName = new Map([
  ['Ostrokyslá polievka','1-ostrokysla-polievka'],['Tom Yum','3-tom-yum'],
  ['Rybacia polievka','4-rybacia-polievka'],['Gyoza Soup','6-gyoza-soup'],
  ['Chicken Grill','14-chicken-grill'],['Kuracie kúsky','22-kuracie-kusky'],
  ['Na šťave','30-na-stave'],['Tempurované kuracie mäso','37-tempurovane-kuracie-masko'],
  ['Chrumkavé kura','52-chrumkave-kura'],['Chrumkavá kačica','53-chrumkava-kacica'],
  ['Jarné závitky, 3 ks','61-jarne-zavtiky-3ks'],['Nem Cuốn Tôm','63-nem-cuon-tom'],
  ['Vyprážaný syr','76-vyprazany-syr'],['Yakitori losos','77-yakitori-losos'],
  ['Thai karí','80-thai-kary'],['Bún Thịt Nướng','39-bun-thit-nuong'],
  ['Crunchy Roll Light','110-futomaki-crunchy-roll-light'],['Salmon','114-futomaki-salmon'],
  ['Special Bento','115-special-bento'],['Fish Bento','116-fish-bento'],
  ['Unagi Bento','118-unagi-bento'],['Poke Bento','119-poke-bento'],
  ['Nigiri Maki Bento','120-nigiri-maki-bento'],['Chicken Grill Bento','121-chicken-grill-bento'],
  ['Duck Bento','122-duck-bento'],['Vege Bento','123-vege-bento'],['Rossa Bento','124-rossa-bento'],
  ['Hà Nội Set','125-ha-noi-set-32-ks'],['Love Set, 26 ks','126-love-set-26-ks'],
  ['Crunchy Maki Special, 8 ks','136-crunchy-maki-special-8ks'],
  ['Uramaki Angry Dragon','142-uramaki-angry-dragon'],['Family Set','146-family-set-62-ks'],
  ['Hawaii šalát','147-hawaii-salat'],['Chilli kúsky, 150 g','82-chilli-kusky-150g']
]);
let activeFilter = 'all';
const menuPageSize = () => 12;
let visibleCount = menuPageSize();

function resetVisibleMenu(){
  visibleCount = menuPageSize();
}

function photoFor(item,featured=false){
  const exactFile = julyExactPhotoByName.get(item.name);
  if(exactFile) return julyPhoto(exactFile,item.name,()=>true);
  const exact = julyMenuPhotos.find(photo=>photo.matches(item)) ||
    dishPhotos.find(photo=>photo.matches(item) && (!photo.featuredOnly || featured));
  return exact ? {...exact, illustrative:false} : null;
}

function cardMarkup(item,index,featured=false){
  const description = item.description || `${item.section}. Čerstvo pripravené jedlo podľa našej ponuky.`;
  const photo = photoFor(item,featured);
  const badge = featured
    ? `<span class="food-badge">${['Pikantná klasika','Silný vývar','Ramen výber','Sushi výber'][index%4]}</span>`
    : '';
  const media = photo ? `<div class="food-card-media"><img src="${photo.src}" alt="${photo.alt}" loading="lazy" decoding="async" width="${photo.width}" height="${photo.height}"></div>` : '';
  const canOrder = /\d/.test(item.price);
  return `<article class="food-card ${featured?'favorite-card':''} ${photo?'has-photo':'no-photo'}" style="--card-index:${Math.min(index,9)}">${media}<div class="food-card-body">${badge}<div class="food-card-top"><h3>${item.name}</h3><strong class="food-card-price">${item.price}</strong></div><p>${description}</p><div class="food-card-bottom"><span>${item.allergens?`Alergény: ${item.allergens}`:'Bez uvedených alergénov'}</span><span>Č. ${item.number}</span></div>${canOrder?`<button class="add-to-cart" type="button" data-item-number="${item.number}"><span>Pridať do košíka</span><b aria-hidden="true">+</b></button>`:''}</div></article>`;
}

// Only feature dishes for which the site has a truthful, matching photograph.
const favoriteDishes = [
  ['Polievky','Tom Yum'],
  ['Polievky','Gyoza Soup'],
  ['Ramen','Kurací'],
  ['Maki','Crunchy Maki Special, 8 ks']
];
const favorites = favoriteDishes.map(([section,name])=>menuItems.find(item=>item.section===section && item.name===name));
document.querySelector('#favorite-grid').innerHTML = favorites.map((item,index)=>cardMarkup(item,index,true)).join('');

const galleryImages = [
  ['21-7/family-set-clean-v3.webp',1535,1024,'Family set s pestrým výberom sushi, nigiri a sashimi'],
  ['21-7/futomaki-crunchy-roll-light-clean-v3.webp',1536,1024,'Futomaki Crunchy Roll Light na bridlicovom tanieri'],
  ['21-7/nigiri-clean-v3.webp',1555,1011,'Lososové nigiri podávané paličkami'],
  ['21-7/sashimi-clean-v3.webp',1537,1023,'Lososové sashimi so zeleninovou oblohou'],
  ['21-7/crunchy-maki-special-clean-v3.webp',1537,1023,'Crunchy Maki Special na bridlicovom tanieri'],
  ['21-7/ostrokysla-clean-v3.webp',1254,1254,'Ostrokyslá polievka s jarnou cibuľkou'],
  ['21-7/rybacia-polievka-clean-v3.webp',1086,1448,'Rybacia polievka s lososom, zeleninou a bylinkami'],
  ['21-7/tom-yum-clean-v3.webp',1086,1448,'Tom Yum s krevetami, hubami a koriandrom'],
  ['21-7/gyoza-soup-clean-v3.webp',1086,1448,'Gyoza Soup s taštičkami a bylinkami'],
  ['21-7/ramen-clean-v3.webp',1254,1254,'Ramen s vajíčkom, rezancami, hubami a mäsom'],
  ['dish-01-thumb.webp',640,516,'Sushi set na drevenej doske'],
  ['dish-02-thumb.webp',586,640,'Sushi rolky s lososom a zeleninou'],
  ['dish-03-thumb.webp',640,625,'Sushi rolky na čiernom podnose'],
  ['dish-04-reference-color-thumb.webp',640,603,'Chrumkavá kačica s ryžou a zeleninou'],
  ['dish-05-thumb.webp',640,570,'Ázijský tanier s ryžou a zeleninou'],
  ['dish-06-reference-color-thumb.webp',640,619,'Restované mäso so zeleninou a ryžou'],
  ['beef-pho-gallery-thumb.webp',640,541,'Mäsový výber s rezancami a čerstvou zeleninou'],
  ['dish-08-thumb.webp',640,553,'Farebný sushi výber'],
  ['dish-09-thumb.webp',635,640,'Bento s farebným sushi výberom'],
  ['dish-10-thumb.webp',640,618,'Sushi set s nigiri a rolkami'],
  ['dish-11-thumb.webp',640,615,'Ázijský výber sushi a teplých kúskov'],
  ['dish-12-thumb.webp',640,623,'Bento s ryžou, sushi a šalátom'],
  ['dish-13-thumb.webp',639,640,'Sushi bento s edamame a šalátom'],
  ['chicken-grill-clean-thumb.webp',640,628,'Chicken Grill s ryžou a zeleninou'],
  ['chicken-pieces-clean-thumb.webp',640,620,'Chrumkavé kuracie kúsky'],
  ['hawaii-salad-natural-thumb.webp',480,640,'Hawaii šalát s mangom a avokádom'],
  ['hot-noodles-illustration-thumb.webp',640,640,'Teplé rezance s mäsom a zeleninou'],
  ['mango-poke-bowl-clean-v4-thumb.webp',640,579,'Mango poke bowl'],
  ['rossa-bento-clean-v3-thumb.webp',640,406,'Rossa Bento'],
  ['stir-fry-selection-reference-color-thumb.webp',640,623,'Restované jedlo podľa výberu'],
  ['tempura-chicken-clean-thumb.webp',640,565,'Kuracie kúsky v tempure'],
  ['uramaki-angry-dragon-clean-thumb.webp',376,640,'Uramaki Angry Dragon'],
  ['yakitori-salmon-clean-thumb.webp',563,640,'Yakitori losos']
];
const galleryGrid=document.querySelector('#dish-gallery');
const galleryMore=document.querySelector('#gallery-more');
let galleryVisible=6;
function renderGallery(){
  galleryGrid.innerHTML=galleryImages.slice(0,galleryVisible).map(([file,width,height,alt],index)=>`
    <figure class="gallery-item reveal visible" style="--gallery-index:${index}">
      <img src="assets/images/menu/${file.startsWith('21-7/') ? file : `optimized/${file}`}" alt="${alt}" loading="lazy" decoding="async" fetchpriority="low" width="${width}" height="${height}">
      <figcaption>${alt}</figcaption>
    </figure>
  `).join('');
  galleryMore.hidden=galleryVisible>=galleryImages.length;
}
renderGallery();
galleryMore.addEventListener('click',()=>{
  galleryVisible=Math.min(galleryVisible+6,galleryImages.length);
  renderGallery();
  prepareZoomableImages();
});

function renderMenu(){
  const query = search.value.trim().toLocaleLowerCase('sk');
  const filtered = menuItems.filter(item => (activeFilter === 'all' || item.category.includes(activeFilter)) && `${item.name} ${item.section}`.toLocaleLowerCase('sk').includes(query));
  const shown = filtered.slice(0,visibleCount);
  grid.innerHTML = shown.map((item,index)=>cardMarkup(item,index)).join('');
  count.textContent = `Zobrazené ${shown.length} z ${filtered.length} položiek`;
  empty.hidden = filtered.length > 0;
  loadMore.hidden = shown.length >= filtered.length;
}
renderMenu();

const cartDialog=document.querySelector('#cart-dialog'),checkoutDialog=document.querySelector('#checkout-dialog');
const cartItemsElement=document.querySelector('#cart-items'),cartEmpty=document.querySelector('#cart-empty'),cartCheckout=document.querySelector('#cart-checkout');
let cart={};
try{cart=JSON.parse(localStorage.getItem('hanoi-pho-cart-v2'))||{}}catch(error){cart={}}
const priceValue=price=>Number((price.match(/[\d.,]+/)?.[0]||'0').replace(',','.'));
const money=value=>new Intl.NumberFormat('sk-SK',{style:'currency',currency:'EUR'}).format(value);
function cartDetails(){return Object.entries(cart).map(([number,quantity])=>({item:menuItems.find(entry=>entry.number===Number(number)),quantity})).filter(row=>row.item&&row.quantity>0)}
function saveCart(){
  localStorage.setItem('hanoi-pho-cart-v2',JSON.stringify(cart));
  renderCart();
  document.querySelectorAll('.cart-count').forEach(element=>{
    element.classList.remove('bump');
    void element.offsetWidth;
    element.classList.add('bump');
  });
}
function renderCart(){
  const rows=cartDetails(),quantity=rows.reduce((sum,row)=>sum+row.quantity,0),total=rows.reduce((sum,row)=>sum+priceValue(row.item.price)*row.quantity,0);
  document.querySelectorAll('.cart-count').forEach(el=>{el.textContent=quantity;el.setAttribute('aria-label',`${quantity} položiek`)});
  document.querySelector('#mobile-cart-total').textContent=money(total);document.querySelector('#cart-total').textContent=money(total);document.querySelector('#checkout-total').textContent=money(total);
  cartItemsElement.innerHTML=rows.map(({item,quantity})=>`<article class="cart-item"><div class="cart-item-copy"><span>Č. ${item.number} · ${item.section}</span><h3>${item.name}</h3><strong>${money(priceValue(item.price)*quantity)}</strong></div><div class="quantity-control" aria-label="Množstvo pre ${item.name}"><button type="button" data-cart-action="decrease" data-item-number="${item.number}" aria-label="Odobrať jeden kus">−</button><b>${quantity}</b><button type="button" data-cart-action="increase" data-item-number="${item.number}" aria-label="Pridať jeden kus">+</button></div><button class="cart-remove" type="button" data-cart-action="remove" data-item-number="${item.number}" aria-label="Odstrániť ${item.name}">Odstrániť</button></article>`).join('');
  cartEmpty.hidden=rows.length>0;cartItemsElement.hidden=!rows.length;document.querySelector('.cart-footer').hidden=!rows.length;cartCheckout.disabled=!rows.length;
}
function showToast(message){const toast=document.querySelector('#cart-toast');toast.textContent=message;toast.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove('show'),2200)}
document.addEventListener('click',event=>{const add=event.target.closest('.add-to-cart');if(!add)return;const number=add.dataset.itemNumber;cart[number]=(cart[number]||0)+1;saveCart();showToast('Jedlo bolo pridané do košíka')});
document.querySelectorAll('.cart-trigger').forEach(button=>button.addEventListener('click',()=>cartDialog.showModal()));
document.querySelector('.cart-close').addEventListener('click',()=>cartDialog.close());
document.querySelector('.cart-browse').addEventListener('click',()=>{cartDialog.close();document.querySelector('#menu').scrollIntoView()});
cartDialog.addEventListener('click',event=>{if(event.target===cartDialog)cartDialog.close();const control=event.target.closest('[data-cart-action]');if(!control)return;const number=control.dataset.itemNumber;if(control.dataset.cartAction==='increase')cart[number]++;if(control.dataset.cartAction==='decrease')cart[number]--;if(control.dataset.cartAction==='remove'||cart[number]<=0)delete cart[number];saveCart()});
cartCheckout.addEventListener('click',()=>{cartDialog.close();checkoutDialog.showModal()});
document.querySelector('.checkout-close').addEventListener('click',()=>checkoutDialog.close());
document.querySelector('.checkout-back').addEventListener('click',()=>{checkoutDialog.close();cartDialog.showModal()});
checkoutDialog.addEventListener('click',event=>{if(event.target===checkoutDialog)checkoutDialog.close()});
document.querySelector('#checkout-form').addEventListener('submit',event=>{event.preventDefault();const data=new FormData(event.currentTarget),rows=cartDetails();if(!rows.length)return;const total=rows.reduce((sum,row)=>sum+priceValue(row.item.price)*row.quantity,0);const order=rows.map(({item,quantity})=>`${quantity}× č. ${item.number} ${item.name} (${money(priceValue(item.price)*quantity)})`).join('\n');const message=`Dobrý deň, chcem si objednať:\n${order}\n\nSpolu: ${money(total)}\nPrevzatie: ${data.get('fulfillment')}\nMeno: ${data.get('name')}\nTelefón: ${data.get('phone')}\nPoznámka: ${data.get('note')||'bez poznámky'}`;window.location.href=`sms:+421940797789?body=${encodeURIComponent(message)}`});
renderCart();

const pdfMenuDialog=document.querySelector('#pdf-menu-dialog');
document.querySelector('.pdf-menu-trigger').addEventListener('click',()=>pdfMenuDialog.showModal());
document.querySelector('.pdf-menu-close').addEventListener('click',()=>pdfMenuDialog.close());
pdfMenuDialog.addEventListener('click',event=>{if(event.target===pdfMenuDialog)pdfMenuDialog.close()});

const lightbox=document.querySelector('#image-lightbox');
const lightboxImage=document.querySelector('#lightbox-image');
const lightboxCaption=document.querySelector('#lightbox-caption');
const lightboxCount=document.querySelector('#lightbox-count');
const zoomableSelector='.hero-main img,.about-visual img,.favorite-card .food-card-media img,.gallery-item img,.category-visual img';
let lightboxImages=[];
let lightboxIndex=0;

function prepareZoomableImages(){
  lightboxImages=[...document.querySelectorAll(zoomableSelector)];
  lightboxImages.forEach(image=>{
    image.classList.add('zoomable-image');
    image.setAttribute('tabindex','0');
    image.setAttribute('role','button');
    image.setAttribute('aria-label',`Zobraziť detail: ${image.alt||'jedlo Hà Nội Phố'}`);
  });
}
function updateLightbox(){
  const source=lightboxImages[lightboxIndex];
  if(!source)return;
  lightboxImage.src=source.currentSrc||source.src;
  lightboxImage.alt=source.alt;
  lightboxCaption.textContent=source.alt||'Detail jedla Hà Nội Phố';
  lightboxCount.textContent=`${lightboxIndex+1} / ${lightboxImages.length}`;
}
function openLightbox(image){
  prepareZoomableImages();
  lightboxIndex=Math.max(0,lightboxImages.indexOf(image));
  updateLightbox();
  lightbox.showModal();
}
function moveLightbox(direction){
  lightboxIndex=(lightboxIndex+direction+lightboxImages.length)%lightboxImages.length;
  updateLightbox();
}
prepareZoomableImages();
document.addEventListener('click',event=>{
  const image=event.target.closest(zoomableSelector);
  if(image){openLightbox(image);return}
  if(event.target===lightbox)lightbox.close();
});
document.addEventListener('keydown',event=>{
  const image=event.target.closest?.(zoomableSelector);
  if(image&&(event.key==='Enter'||event.key===' ')){
    event.preventDefault();
    openLightbox(image);
  }
  if(!lightbox.open)return;
  if(event.key==='ArrowLeft')moveLightbox(-1);
  if(event.key==='ArrowRight')moveLightbox(1);
});
document.querySelector('.lightbox-close').addEventListener('click',()=>lightbox.close());
document.querySelector('.lightbox-prev').addEventListener('click',()=>moveLightbox(-1));
document.querySelector('.lightbox-next').addEventListener('click',()=>moveLightbox(1));

loadMore.addEventListener('click',()=>{visibleCount+=menuPageSize();renderMenu()});
const keepMenuInView = () => requestAnimationFrame(() => {
  document.querySelector('#menu').scrollIntoView({block:'start',behavior:'auto'});
});
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click',()=>{document.querySelector('.filter.active')?.classList.remove('active');button.classList.add('active');activeFilter=button.dataset.filter;resetVisibleMenu();renderMenu();button.focus({preventScroll:true});keepMenuInView()}));
search.addEventListener('input',()=>{resetVisibleMenu();renderMenu();keepMenuInView()});
document.querySelector('#reset-search').addEventListener('click',()=>{search.value='';activeFilter='all';resetVisibleMenu();document.querySelector('.filter.active')?.classList.remove('active');document.querySelector('[data-filter="all"]').classList.add('active');renderMenu();search.focus({preventScroll:true});keepMenuInView()});

const toggle=document.querySelector('.menu-toggle'), mobileNav=document.querySelector('.mobile-nav');
function setMobileMenu(open){
  toggle.setAttribute('aria-expanded',String(open));
  toggle.setAttribute('aria-label',open?'Zavrieť ponuku':'Otvoriť ponuku');
  mobileNav.classList.toggle('open',open);
  document.body.classList.toggle('no-scroll',open);
}
toggle.addEventListener('click',()=>setMobileMenu(toggle.getAttribute('aria-expanded')!=='true'));
mobileNav.addEventListener('click',event=>{if(event.target.matches('a'))setMobileMenu(false)});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){setMobileMenu(false);toggle.focus()}});
window.addEventListener('resize',()=>{if(window.matchMedia('(min-width:1100px)').matches)setMobileMenu(false)});

function updateHours(){
  const now=new Date(), parts=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Bratislava',weekday:'short',hour:'2-digit',minute:'2-digit',hour12:false}).formatToParts(now);const values=Object.fromEntries(parts.map(p=>[p.type,p.value]));const mins=Number(values.hour)*60+Number(values.minute);const sunday=values.weekday==='Sun';const open=mins>=(sunday?630:600)&&mins<(sunday?1200:1260);const label=open?'Otvorené':'Zatvorené';
  ['#open-status','#open-status-large'].forEach(id=>document.querySelector(id).textContent=label);document.querySelectorAll('.hero-status,.hours-status').forEach(el=>el.classList.toggle('closed',!open));document.querySelector('#next-hours').textContent=sunday?'Dnes 10:30 - 20:00':'Dnes 10:00 - 21:00';
}
updateHours();setInterval(updateHours,60000);

const heroMedia=document.querySelector('.hero-media');
if(heroMedia&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  let parallaxFrame=0;
  const updateHeroParallax=()=>{
    parallaxFrame=0;
    const offset=Math.min(window.scrollY*.055,42);
    heroMedia.style.transform=`translate3d(0,${offset}px,0)`;
  };
  window.addEventListener('scroll',()=>{
    if(!parallaxFrame)parallaxFrame=requestAnimationFrame(updateHeroParallax);
  },{passive:true});
}

document.body.classList.add('motion-ready');
document.querySelectorAll('.favorite-card').forEach((element,index)=>{
  element.classList.add('reveal');
  element.style.setProperty('--reveal-index',index);
});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const header=document.querySelector('.site-header');new IntersectionObserver(([entry])=>header.classList.toggle('scrolled',!entry.isIntersecting),{rootMargin:'-80px 0px 0px'}).observe(document.querySelector('.hero'));
const navLinks=[...document.querySelectorAll('.desktop-nav a[href^="#"],.mobile-nav a[href^="#"]')];
const trackedSections=[...new Set(navLinks.map(link=>document.querySelector(link.getAttribute('href'))).filter(Boolean))];
const sectionObserver=new IntersectionObserver(entries=>{
  const current=entries.find(entry=>entry.isIntersecting);
  if(!current)return;
  navLinks.forEach(link=>{
    const active=link.getAttribute('href')===`#${current.target.id}`;
    if(active)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');
  });
},{rootMargin:'-30% 0px -60%',threshold:.01});
trackedSections.forEach(section=>sectionObserver.observe(section));
