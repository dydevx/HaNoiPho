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
// Keep the live menu independent from the retired menu data above. Reusing a
// legacy description by a generic dish name (for example "Kuracie") can attach
// wording from a different PDF section after the menu is renumbered.
const dish = (number, name, price, allergens = '', description = '') => {
  return [number, name, price, allergens, description];
};

const rawMenu = [
  ['Polievky','polievky',[
    dish(1,'Ostrokyslá polievka','2 €','3, 6'), dish(2,'Hanojský vývar','2 €','4'),
    dish(3,'Tom Yum','6 €','2, 4'), dish(4,'Rybacia polievka','3 €','4'),
    dish(5,'Miso Shiro','3 €','6'), dish(6,'Gyoza Soup','6 €','1, 3, 6')
  ]],
  ['Tenké ryžové rezance','rezance',[
    dish(7,'Kuracie','7,50 €','3'), dish(8,'Hovädzie','8 €','3'), dish(9,'Kačacie','8 €','3'),
    dish(10,'S krevetami','8 €','2, 3'), dish(11,'Kuracie s krevetami','8 €','2, 3'),
    dish(12,'S tofu','7,50 €','3, 6'), dish(13,'So zeleninou','5,50 €','3'), dish(14,'Chicken Grill','6,50 €','3, 6, 10, 11')
  ]],
  ['Udon','rezance',[
    dish(15,'Kuracie','8 €','1, 3, 6'), dish(16,'Hovädzie','8,50 €','1, 3, 6'), dish(17,'Kačacie','8,50 €','1, 3, 6'),
    dish(18,'S krevetami','8,50 €','1, 2, 3, 6'), dish(19,'Kuracie s krevetami','8,50 €','1, 2, 3, 6'),
    dish(20,'S tofu','8 €','1, 3, 6'), dish(21,'So zeleninou','6,50 €','1, 3, 6'), dish(22,'Kuracie kúsky','5,50 €','1, 3, 6, 10, 11')
  ]],
  ['Pad Thai','rezance',[
    dish(23,'Kuracie','8 €','3, 5, 6'), dish(24,'Hovädzie','8,50 €','3, 5, 6'), dish(25,'Kačacie','8,50 €','3, 5, 6'),
    dish(26,'S krevetami','8,50 €','2, 3, 5, 6'), dish(27,'Kuracie s krevetami','8,50 €','2, 3, 5, 6'),
    dish(28,'S tofu','8 €','3, 5, 6'), dish(29,'So zeleninou','6,50 €','3, 5, 6')
  ]],
  ['Na šťave','vietnam',[
    dish(30,'Na šťave','6,50 €','11','Hovädzie, krevety, kuracie alebo tofu. 200 g.')
  ]],
  ['Bún bò Nam Bộ','vietnam',[
    dish(31,'Kurací','8 €','2, 4, 5, 6, 11'), dish(32,'Hovädzí','8,50 €','2, 4, 5, 6, 11'),
    dish(33,'Kačací','8,50 €','2, 4, 5, 6, 11'), dish(34,'S krevetami','8,50 €','2, 4, 5, 6, 11'),
    dish(35,'S tofu','8 €','2, 4, 5, 6, 11')
  ]],
  ['Tempura','vietnam',[
    dish(36,'Ebi Tempura','6 €','1, 2, 3, 6, 10, 11'), dish(37,'Tempurované kuracie mäso','6,50 €','1, 3, 6, 7, 10, 11')
  ]],
  ['Bún','vietnam',[
    dish(38,'Bún Nem','9 €','4, 6, 14'), dish(39,'Bún Thịt Nướng','9,50 €','1, 4, 5, 6')
  ]],
  ['Ramen','polievky',[
    dish(40,'Kuracie','7,50 €','1, 2, 3, 6'), dish(41,'Hovädzie','8 €','1, 2, 3, 6'),
    dish(42,'Krevety','8 €','1, 2, 3, 6'), dish(43,'Tofu','7,50 €','1, 2, 3, 6')
  ]],
  ['Phở','vietnam polievky',[
    dish(44,'Kurací','7,50 €','2, 4'), dish(45,'Hovädzí','8 €','2, 4')
  ]],
  ['Tom Yum 0,7 l','polievky',[
    dish(46,'Tom Yum (0,7 l)','8 €','2, 4','Jemne pikantná polievka s krevetami, hubami, paradajkami, tom yum pastou, jarnou cibuľkou a koriandrom. 0,7 l.')
  ]],
  ['Rizoto','vietnam',[
    dish(47,'Kuracie','7,50 €','2, 3'), dish(48,'Hovädzie','8 €','2, 3'), dish(49,'S krevetami','8 €','2, 3'),
    dish(50,'S tofu','7,50 €','2, 3'), dish(51,'So zeleninou','6 €','2, 3'), dish(52,'Chrumkavé kura','6 €','1, 3, 11'),
    dish(53,'Chrumkavá kačica','7 €','1, 3, 4, 6, 11, 14')
  ]],
  ['Hrubé ryžové rezance','rezance',[
    dish(54,'Kuracie','7,50 €','3'), dish(55,'Hovädzie','8 €','3'), dish(56,'Kačacie','8 €','3'),
    dish(57,'S krevetami','8 €','2, 3'), dish(58,'Kuracie s krevetami','8 €','2, 3'),
    dish(59,'S tofu','7,50 €','3, 6'), dish(60,'So zeleninou','6 €','3'), dish(61,'Jarné závitky, 3 ks','6 €','1, 2, 3, 4, 11'),
    dish(62,'Vegetarian Spring Rolls','6 €','1, 3, 11'), dish(63,'Nem Cuốn Tôm','7,50 €','2, 4, 6')
  ]],
  ['Opekané vaječné rezance','rezance',[
    dish(64,'Kuracie','7,50 €','1, 3'), dish(65,'Hovädzie','8 €','1, 3'), dish(66,'Kačacie','8,50 €','1, 3'),
    dish(67,'S krevetami','8,50 €','1, 2, 3'), dish(68,'Kuracie s krevetami','8,50 €','1, 2, 3'),
    dish(69,'S tofu','7,50 €','1, 3, 6'), dish(70,'So zeleninou','5,50 €','1, 3')
  ]],
  ['Curry Udon','rezance',[
    dish(71,'So zeleninou','7,50 €','1, 3, 7, 11'), dish(72,'S kuracím mäsom','8,50 €','1, 3, 7, 11'),
    dish(73,'S tofu','8 €','1, 3, 6, 7, 11'), dish(74,'S krevetami','9 €','1, 2, 3, 7, 11'),
    dish(75,'Hovädzí','9 €','1, 3, 7, 11')
  ]],
  ['Teplé jedlá Hà Nội Phố','vietnam',[
    dish(76,'Vyprážaný syr','4,50 €','1, 3, 7'), dish(77,'Yakitori losos','6,50 €','4, 6, 11'),
    dish(78,'Hot Wok','6 €','3, 6, 10, 11'), dish(79,'Kung Pao','5,50 €','2, 5, 6, 15, 16, 17'),
    dish(80,'Thai karí','5,50 €','7, 15, 16, 17'), dish(81,'Gyoza taštičky','6,50 €','1, 3, 11'),
    dish(82,'Chilli kúsky, 150 g','5,50 €','1, 3, 7, 11')
  ]],
  ['Prílohy','prilohy',[
    dish(83,'Ryžové rezance, 150 g','3 €','3'), dish(84,'Opekané zemiaky, 150 g','3 €'),
    dish(85,'Hranolky, 150 g','3 €'), dish(86,'Jasmínová ryža, 150 g','2,50 €'), dish(87,'Rezance, 150 g','3 €','1, 3')
  ]],
  ['Poke','sushi salaty',[
    dish(88,'Poke – tofu, 500 g','9 €','1, 3, 6, 7, 10, 11'), dish(89,'Poke – kuracie mäso, 500 g','9,50 €','1, 3, 6, 7, 10, 11'),
    dish(90,'Poke – hovädzie mäso, 500 g','10 €','1, 3, 6, 7, 10, 11'), dish(91,'Poke – krevety, 500 g','10,50 €','1, 2, 3, 6, 7, 10, 11'),
    dish(92,'Poke – losos, 500 g','11 €','1, 3, 4, 6, 7, 10, 11'), dish(93,'Poke – tuniak, 500 g','11,50 €','1, 3, 4, 6, 7, 10, 11'),
    dish(94,'Poke – opekaný losos, 500 g','11 €','1, 3, 4, 6, 7, 10, 11')
  ]],
  ['Sashimi, nigiri a sety','sushi',[
    dish(95,'Sashimi – sake / losos, 3 ks (50 g)','5,50 €','4'),
    dish(96,'Sashimi – managatsuo / maslová ryba, 3 ks (50 g)','5,50 €','4'),
    dish(97,'Sashimi – maguro / tuniak, 3 ks (50 g)','6 €','4'),
    dish(98,'Sashimi set 9 ks, 150 g','15 €','4'), dish(99,'Nigiri – avocado, 1 ks (40 g)','2 €','11'),
    dish(100,'Nigiri – mango, 1 ks (40 g)','2 €'), dish(101,'Nigiri – tamago / omeleta, 1 ks (40 g)','2 €','3'),
    dish(102,'Nigiri – kani / krabia tyčinka, 1 ks (40 g)','2 €','1, 2, 3, 4'),
    dish(103,'Nigiri – managatsuo / maslová ryba, 1 ks (40 g)','2,50 €','4'),
    dish(104,'Nigiri – ebi / kreveta, 1 ks (40 g)','2,50 €','2'), dish(105,'Nigiri – sake / losos, 1 ks (40 g)','2,50 €','4'),
    dish(106,'Nigiri – maguro / tuniak, 1 ks (40 g)','2,50 €','4'), dish(107,'Nigiri – unagi / úhor, 1 ks (40 g)','2,50 €','4'),
    dish(108,'Nigiri set 4 ks, 160 g','7,50 €','2, 4'), dish(109,'Nigiri set 10 ks, 350 g','15 €','2, 4')
  ]],
  ['Futomaki','sushi',[
    dish(110,'Crunchy Roll Light','13 €','1, 3, 4, 6, 7, 10, 12'), dish(111,'Crunchy Roll Tuna','13,50 €','1, 3, 4, 6, 7, 10, 11'), dish(112,'California Ebi Ten','14 €','1, 2, 3, 4, 6, 7, 10, 11'),
    dish(113,'Special Roll','14 €','1, 3, 4, 6, 7, 10, 11'), dish(114,'Salmon','13 €','1, 3, 4, 6, 10, 11')
  ]],
  ['Bento','sushi',[
    dish(115,'Special Bento','16 €','4, 11'), dish(116,'Fish Bento','16 €','4, 7, 11'), dish(117,'California Bento','14 €','4, 7, 11'),
    dish(118,'Unagi Bento','16 €','1, 3, 4, 6, 10, 11'), dish(119,'Poke Bento','16 €','1, 3, 4, 7, 11'), dish(120,'Nigiri Maki Bento','14 €','4, 11'),
    dish(121,'Chicken Grill Bento','16 €','1, 3, 4, 7, 11'), dish(122,'Duck Bento','16 €','1, 3, 4, 7, 11'), dish(123,'Vege Bento','14 €','1, 3, 8, 11'), dish(124,'Rossa Bento','16 €','1, 3, 4, 6, 10, 11')
  ]],
  ['Sushi sety','sushi',[
    dish(125,'Hà Nội Set, 32 ks','50 €','2, 3, 4, 6, 7, 10, 11'), dish(126,'Love Set, 26 ks','45 €','2, 4, 11'), dish(127,'Uramaki Salmon Roll','12 €','2, 4, 7, 11'),
    dish(128,'Uramaki Royal','13 €','1, 2, 3, 4, 6, 11'), dish(129,'Uramaki Rainbow','13 €','2, 4, 11'), dish(130,'Uramaki Marimondon','13 €','1, 3, 4, 6, 10, 11'),
    dish(131,'Uramaki Aburi','13 €','4, 6, 7, 11')
  ]],
  ['Maki','sushi',[
    dish(132,'Maki','5 €','podľa výberu'), dish(133,'Crunchy Maki','7 €','podľa výberu'),
    dish(134,'Maki vegetariánske','5 €','podľa výberu'), dish(135,'Crunchy Maki vegetariánske','7 €','podľa výberu'),
    dish(136,'Crunchy Maki Special, 8 ks','8 €','1, 2, 3, 4, 7, 11')
  ]],
  ['Uramaki','sushi',[
    dish(137,'Uramaki Sesame','10 €','4, 11'), dish(138,'Uramaki Marshmallow','10 €','1, 2, 3, 4, 11'), dish(139,'Uramaki Vegetarian','10 €','6, 11'),
    dish(140,'Uramaki Duck Maki','10 €','1, 3, 11'), dish(141,'Uramaki Chilli Roll','10 €','4, 11'), dish(142,'Uramaki Angry Dragon','12 €','1, 2, 3, 4, 11'),
    dish(143,'Uramaki Tobikko','12 €','2, 4, 11'), dish(144,'Uramaki Togepi','12 €','1, 2, 3, 4, 6, 10, 11')
  ]],
  ['Sety, šaláty a malé jedlá','salaty sushi',[
    dish(145,'Norimaki Set, 18 ks','12 €','4, 11'), dish(146,'Family Set, 62 ks','72 €','1, 2, 3, 4, 6, 7, 10, 11'), dish(147,'Hawaii šalát','7,50 €','3, 6, 10, 11'),
    dish(148,'Kurací šalát','7 €','3, 6, 10, 11'), dish(149,'Wakame šalát','7,50 €','1, 2, 6, 11','Morská riasa wakame, krabia tyčinka, edamame a avokádo. 200 g.')
  ]],
  ['Omáčky a doplnky','prilohy',[
    dish(150,'Tatárska omáčka','1 €'), dish(151,'Teriyaki omáčka','1 €','6, 11'),
    dish(152,'Sladkokyslá omáčka','1 €'), dish(153,'Chilli omáčka','1 €'), dish(154,'Sójová omáčka','1 €'),
    dish(155,'Mango omáčka','1 €'), dish(156,'Japonská majonéza','1 €'), dish(157,'Kokosové mlieko','1 €'),
    dish(158,'Nakladaný zázvor','1 €'), dish(159,'Ketchup','1 €')
  ]],
  ['Nápoje','napoje',[
    dish(160,'Coca-Cola','2 €'), dish(161,'Coca-Cola Zero','2 €'), dish(162,'Fanta','2 €'), dish(163,'Sprite','2 €'),
    dish(164,'Fuze Tea jahoda','2,50 €'), dish(165,'Fuze Tea broskyňa','2,50 €'), dish(166,'Fuze Tea zelený citrón','2,50 €'),
    dish(167,'Cappy jablko 0,3 l','2 €'), dish(168,'Cappy jahoda 0,3 l','2 €'),
    dish(169,'Cappy multivitamín 0,3 l','2 €'), dish(170,'Cappy multivitamín 0,3 l','2 €'),
    dish(171,'Aloe Vera','2,50 €'), dish(172,'Natura jemne sýtená','2 €'),
    dish(173,'Natura nesýtená','2,50 €'), dish(174,'Natura limetka','2,50 €'),
    dish(175,'Cola 0,3 l','2 €'), dish(176,'Fanta 0,3 l','2 €'), dish(177,'Sprite 0,3 l','2 €'),
    dish(178,'Soda 0,3 l','2 €'), dish(179,'Cola 0,5 l','2,50 €'), dish(180,'Fanta 0,5 l','2,50 €'),
    dish(181,'Sprite 0,5 l','2,50 €'), dish(182,'Soda 0,5 l','2,50 €'),
    dish(183,'DOSTI Basil jahoda','2,50 €'), dish(184,'DOSTI Basil melón','2,50 €'),
    dish(185,'DOSTI Basil liči','2,50 €'), dish(186,'Coco Royal Coconut Milk','2,50 €'),
    dish(187,'SAGIKO Lychee Drink','2,50 €'), dish(188,'SAGIKO Mango Drink','2,50 €'),
    dish(189,'Sóda Blue Sea 0,3 l','3 €'), dish(190,'Sóda Blue Sea 0,5 l','4,50 €'),
    dish(191,'Mätová sóda 0,3 l','3 €'), dish(192,'Mätová sóda 0,5 l','4,50 €'),
    dish(193,'Lemon tea 0,3 l','3 €'), dish(194,'Lemon tea 0,5 l','4,50 €'),
    dish(195,'Lychee tea 0,3 l','3 €'), dish(196,'Lychee tea 0,5 l','4,50 €'),
    dish(197,'Čučoriedková sóda 0,3 l','3 €'), dish(198,'Čučoriedková sóda 0,5 l','4,50 €'),
    dish(199,'Jahodová sóda 0,3 l','3 €'), dish(200,'Jahodová sóda 0,5 l','3,50 €'),
    dish(201,'Peach tea 0,3 l','3 €'), dish(202,'Peach tea 0,5 l','4,50 €'),
    dish(203,'Kofola 0,5 l','2,50 €'), dish(204,'Kofola 0,3 l','2 €'),
    dish(205,'Malina 0,5 l','2,50 €'), dish(206,'Malina 0,3 l','2 €'), dish(207,'Pivo Saigon bia Việt','3 €'),
    dish(208,'Čapované pivo 0,3 l','2 €'), dish(209,'Čapované pivo 0,5 l','3 €')
  ]]
];

const menuItems = rawMenu.flatMap(([section,category,items]) => items.map(([number,name,price,allergens='',description='']) => ({section,category,number,name,price,allergens,description})));

const groupedMenuRanges = [
  [7,13],[15,21],[23,29],[31,35],[40,45],[47,51],[54,60],[64,70],[71,75],[88,94]
];
const groupedMenuNumber = number => groupedMenuRanges.some(([from,to]) => number>=from && number<=to);
const groupedMenuSections = new Map();
menuItems.filter(item=>groupedMenuNumber(item.number)).forEach(item=>{
  if(!groupedMenuSections.has(item.section)) groupedMenuSections.set(item.section,[]);
  groupedMenuSections.get(item.section).push(item);
});
const menuDisplayEntries = [];
const insertedGroups = new Set();
menuItems.forEach(item=>{
  if(!groupedMenuNumber(item.number)){
    menuDisplayEntries.push(item);
    return;
  }
  if(insertedGroups.has(item.section)) return;
  insertedGroups.add(item.section);
  menuDisplayEntries.push({
    isGroup:true,
    section:item.section,
    category:item.category,
    variants:groupedMenuSections.get(item.section)
  });
});

// The PDF presents short variant names underneath a visible section heading.
// Menu cards stand on their own, so generic variants need the section context
// in their accessible/display name (for example Phở + Kurací must not read as
// the ambiguous "Kurací" on the website).
const variantNames = new Set([
  'Kuracie','Kurací','Hovädzie','Hovädzí','Kačacie','Kačací','Krevety','Tofu',
  'S krevetami','Kuracie s krevetami','S tofu','So zeleninou','S kuracím mäsom'
]);
const sectionVariantLabels = {
  'Phở': {
    'Kurací':'Phở s kuracím mäsom',
    'Hovädzí':'Phở s hovädzím mäsom',
    'Tom Yum (0,7 l)':'Tom Yum (0,7 l)'
  },
  'Ramen': {
    'Kuracie':'Ramen s kuracím mäsom',
    'Hovädzie':'Ramen s hovädzím mäsom',
    'Krevety':'Ramen s krevetami',
    'Tofu':'Ramen s tofu'
  }
};
function itemDisplayName(item){
  const sectionLabel = sectionVariantLabels[item.section]?.[item.name];
  if(sectionLabel) return sectionLabel;
  return variantNames.has(item.name) ? `${item.section} – ${item.name.toLocaleLowerCase('sk')}` : item.name;
}

// Shared preparation notes printed once per group in the PDF. Reusing them for
// each standalone web card preserves the PDF context without inventing copy.
const sectionDescriptions = {
  'Tenké ryžové rezance':'Opekané tenké ryžové rezance s vajíčkom a zeleninou. 400 g.',
  'Udon':'Opekané udon rezance s vajíčkom a zeleninou. 400 g.',
  'Pad Thai':'Jemne pikantné rezance s klíčkami, cesnakom, cibuľkou, chilli, mrkvou a koriandrom v tamarindovej omáčke, podávané s arašidmi a limetkou. 300 g.',
  'Bún bò Nam Bộ':'Studené ryžové rezance so zeleninou, arašidmi a aromatickými bylinkami. 300 g.',
  'Ramen':'Sýta japonská polievka s rezancami, hubami, vajíčkom a zeleninou. 0,7 l.',
  'Phở':'Vývar so širokými ryžovými rezancami, koriandrom, cibuľkou a zeleninou. 0,7 l.',
  'Rizoto':'Varená ryža vo vývare do krémovej podoby. 400 g.',
  'Hrubé ryžové rezance':'Opekané hrubé ryžové rezance s vajíčkom a zeleninou. 400 g.',
  'Opekané vaječné rezance':'Opekané vaječné rezance s vajíčkom a zeleninou. 400 g.',
  'Curry Udon':'Restované udon rezance s vajíčkom, zeleninou, chrumkavou cibuľkou a pikantnou curry omáčkou. 500 g.',
  'Poke':'Ryža, mrkva, edamame, avokádo, mango, uhorka, wakame, koriander, vajíčko a teriyaki omáčka. 500 g.'
};

const grid = document.querySelector('#menu-grid');
const empty = document.querySelector('#empty-state');
const search = document.querySelector('#menu-search');
const count = document.querySelector('#menu-count');
const loadMore = document.querySelector('#load-more');
// Web-optimized cut-outs supplied with the July 2026 menu. A photograph is
// attached only when it truthfully represents that exact dish or menu item.
const menuCutoutFiles = {
  '1-ostrokysla-polievka':'1. Ostrokyslá Polievka.png',
  '3-tom-yum':'3. Tom Yum.png',
  '4-rybacia-polievka':'4. Rybacia Polievka.png',
  '6-gyoza-soup':'6. Gyoza Soup.png',
  '14-chicken-grill':'14. Chicken Grill.png',
  '22-kuracie-kusky':'22. Kuracie Kúsky.png',
  '30-na-stave':'30. Na Šťave.png',
  '37-tempurovane-kuracie-masko':'37. Tempurované Kuracie Mäsko.png',
  '39-bun-thit-nuong':'39. Bún Thịt Nướng.png',
  '52-chrumkave-kura':'52. Chrumkavé Kura.png',
  '53-chrumkava-kacica':'53. Chrumkavá Kačica.png',
  '61-jarne-zavtiky-3ks':'61. Jarné Závtiky 3ks.png',
  '63-nem-cuon-tom':'63. Nem Cuốn Tôm.png',
  '76-vyprazany-syr':'76. Vyprážaný Syr.png',
  '77-yakitori-losos':'77. Yakitori Losos.png',
  '80-thai-kary':'80. Thái Kary.png',
  '82-chilli-kusky-150g':'82. Chilli Kúsky 150g.png',
  'ramen':'RAMEN.png',
  'sashimi':'SASHIMI.png',
  'nigiri':'NIGIRI.png',
  '110-futomaki-crunchy-roll-light':'110. Futomaki Crunchy Roll Light.png',
  '114-futomaki-salmon':'114. Futomaki Salmon.png',
  '115-special-bento':'115. Special Bento.png',
  '116-fish-bento':'116. Fish Bento.png',
  '118-unagi-bento':'118. Unagi Bento.png',
  '119-poke-bento':'119. Poke Bento.png',
  '120-nigiri-maki-bento':'120. Nigiri Maki Bento.png',
  '121-chicken-grill-bento':'121. Chicken Grill Bento.png',
  '122-duck-bento':'122. Duck Bento.png',
  '123-vege-bento':'123. Vege Bento.png',
  '124-rossa-bento':'124. Rossa Bento.png',
  '125-ha-noi-set-32-ks':'125. Hà Nội Set 32 ks.png',
  '126-love-set-26-ks':'126. Love Set 26 ks.png',
  '132-maki':'132. Maki.png',
  '136-crunchy-maki-special-8ks':'136. Crunchy Maki Special (8ks).png',
  '142-uramaki-angry-dragon':'142. Uramaki Angry Dragon.png',
  '146-family-set-62-ks':'146. Family Set 62 ks.png',
  '147-hawaii-salat':'147. Hawaii Šalát.png',
  '160-163':'160 - 163.png',
  '183-184':'183 - 184.png',
  '185-186':'185 - 186.png',
  '187-188':'187 - 188.png',
  '189-190':'189 - 190.png',
  '191-192':'191 - 192.png',
  '193-194':'193 - 194.png',
  '195-196':'195 - 196.png',
  '197-198':'197 - 198.png',
  '199-200':'199 - 200.png',
  '201-202':'201 - 202.png',
  '203-204':'203 - 204.png',
  '207':'207.png',
  '208-209':'208 - 209.png'
};
const sectionPhotoFiles = {
  'Tenké ryžové rezance':'TENKÉ RYŽOVÉ.png',
  'Udon':'UDON.png',
  'Pad Thai':'PAD THAI.png',
  'Bún bò Nam Bộ':'BUN BO NAM BO.png',
  'Ramen':'RAMEN.png',
  'Phở':'PHO.png',
  'Rizoto':'RIZOTO.png',
  'Hrubé ryžové rezance':'HRUBÉ RYŽOVÉ.png',
  'Opekané vaječné rezance':'OPEKANÉ.png',
  'Curry Udon':'CURRY UDON 500G.png',
  'Poke':'POKE.png'
};
const julyPhoto = (file, alt, matches) => ({
  src:encodeURI(`Hà Nội Phố/Ảnh Menu_Tách nền/${menuCutoutFiles[file]}`),
  alt, width:1000, height:1000, matches
});
const julyMenuPhotos = [
  julyPhoto('1-ostrokysla-polievka','Ostrokyslá polievka',item=>item.number===1),
  julyPhoto('3-tom-yum','Tom Yum s krevetami a zeleninou',item=>item.number===3),
  julyPhoto('4-rybacia-polievka','Rybacia polievka s lososom a zeleninou',item=>item.number===4),
  julyPhoto('6-gyoza-soup','Gyoza Soup s taštičkami a udon rezancami',item=>item.number===6),
  julyPhoto('14-chicken-grill','Chicken Grill so zeleninou',item=>item.name==='Chicken Grill'),
  julyPhoto('22-kuracie-kusky','Kuracie kúsky s teriyaki omáčkou',item=>item.name==='Kuracie kúsky'),
  julyPhoto('30-na-stave','Jedlo na šťave so zeleninou a ryžou',item=>item.section==='Na šťave'),
  julyPhoto('37-tempurovane-kuracie-masko','Tempurované kuracie mäso',item=>item.name==='Tempurované kuracie mäso'),
  julyPhoto('ramen','Kurací ramen s vajíčkom, rezancami a zeleninou',item=>item.number===40),
  julyPhoto('52-chrumkave-kura','Chrumkavé kura s ryžou a zeleninou',item=>item.name==='Chrumkavé kura'),
  julyPhoto('53-chrumkava-kacica','Chrumkavá kačica s ryžou a zeleninou',item=>item.name==='Chrumkavá kačica'),
  julyPhoto('61-jarne-zavtiky-3ks','Jarné závitky',item=>item.name.startsWith('Jarné závitky')),
  julyPhoto('76-vyprazany-syr','Vyprážaný syr s prílohou',item=>item.name==='Vyprážaný syr'),
  julyPhoto('77-yakitori-losos','Yakitori losos',item=>item.name==='Yakitori losos'),
  julyPhoto('39-bun-thit-nuong','Bún Thịt Nướng s mäsom, rezancami a zeleninou',item=>item.name==='Bún Thịt Nướng'),
  julyPhoto('63-nem-cuon-tom','Nem Cuốn Tôm',item=>item.name==='Nem Cuốn Tôm'),
  julyPhoto('80-thai-kary','Thai karí s ryžou',item=>item.name==='Thai karí'),
  julyPhoto('sashimi','Sashimi z lososa',item=>item.number===95),
  julyPhoto('nigiri','Nigiri set',item=>item.number===108),
  julyPhoto('110-futomaki-crunchy-roll-light','Futomaki Crunchy Roll Light',item=>item.name==='Crunchy Roll Light'),
  julyPhoto('114-futomaki-salmon','Futomaki Salmon',item=>item.section==='Futomaki'&&item.name==='Salmon'),
  ...[['115-special-bento','Special Bento'],['116-fish-bento','Fish Bento'],['118-unagi-bento','Unagi Bento'],['119-poke-bento','Poke Bento'],['120-nigiri-maki-bento','Nigiri Maki Bento'],['121-chicken-grill-bento','Chicken Grill Bento'],['122-duck-bento','Duck Bento'],['123-vege-bento','Vege Bento'],['124-rossa-bento','Rossa Bento']]
    .map(([file,name])=>julyPhoto(file,name,item=>item.name===name)),
  julyPhoto('125-ha-noi-set-32-ks','Hà Nội Set, 32 kusov sushi',item=>item.name==='Hà Nội Set, 32 ks'),
  julyPhoto('126-love-set-26-ks','Love Set, 26 kusov sushi',item=>item.name==='Love Set, 26 ks'),
  julyPhoto('132-maki','Maki sushi výber',item=>item.section==='Maki'),
  julyPhoto('136-crunchy-maki-special-8ks','Crunchy Maki Special',item=>item.name==='Crunchy Maki Special, 8 ks'),
  julyPhoto('142-uramaki-angry-dragon','Uramaki Angry Dragon',item=>item.name==='Uramaki Angry Dragon'),
  julyPhoto('146-family-set-62-ks','Family Set, 62 kusov sushi',item=>item.name==='Family Set, 62 ks'),
  julyPhoto('147-hawaii-salat','Hawaii šalát s mangom a avokádom',item=>item.name==='Hawaii šalát'),
  julyPhoto('82-chilli-kusky-150g','Chilli kúsky so sezamom',item=>item.name.startsWith('Chilli kúsky')),
  julyPhoto('160-163','Coca-Cola, Coca-Cola Zero, Fanta a Sprite',item=>item.number>=160&&item.number<=163),
  julyPhoto('183-184','DOSTI Basil jahoda a melón',item=>item.number>=183&&item.number<=184),
  julyPhoto('185-186','DOSTI Basil liči a kokosové mlieko',item=>item.number>=185&&item.number<=186),
  julyPhoto('187-188','SAGIKO liči a mango',item=>item.number>=187&&item.number<=188),
  julyPhoto('189-190','Sóda Blue Sea',item=>item.number>=189&&item.number<=190),
  julyPhoto('191-192','Mätová sóda',item=>item.number>=191&&item.number<=192),
  julyPhoto('193-194','Lemon tea',item=>item.number>=193&&item.number<=194),
  julyPhoto('195-196','Lychee tea',item=>item.number>=195&&item.number<=196),
  julyPhoto('197-198','Čučoriedková sóda',item=>item.number>=197&&item.number<=198),
  julyPhoto('199-200','Jahodová sóda',item=>item.number>=199&&item.number<=200),
  julyPhoto('201-202','Peach tea',item=>item.number>=201&&item.number<=202),
  julyPhoto('203-204','Kofola',item=>item.number>=203&&item.number<=204),
  julyPhoto('207','Pivo Saigon bia Việt',item=>item.number===207),
  julyPhoto('208-209','Čapované pivo',item=>item.number>=208&&item.number<=209)
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
  ['Hà Nội Set, 32 ks','125-ha-noi-set-32-ks'],['Love Set, 26 ks','126-love-set-26-ks'],
  ['Crunchy Maki Special, 8 ks','136-crunchy-maki-special-8ks'],
  ['Uramaki Angry Dragon','142-uramaki-angry-dragon'],['Family Set, 62 ks','146-family-set-62-ks'],
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
  const exact = julyMenuPhotos.find(photo=>photo.matches(item));
  return exact ? {...exact, illustrative:false} : null;
}

function cardSectionLabel(item){
  if(item.section==='Sashimi, nigiri a sety') return 'Sashimi';
  if(item.name==='Chicken Grill' || item.name==='Kuracie kúsky') return '';
  if(item.name==='Chrumkavé kura' || item.name==='Chrumkavá kačica') return '';
  if(item.name.startsWith('Jarné závitky') || item.name==='Vegetarian Spring Rolls' || item.name==='Nem Cuốn Tôm') return '';
  if(item.name==='Norimaki Set, 18 ks' || item.name==='Family Set, 62 ks') return '';
  return item.section;
}

function cardMarkup(item,index,featured=false){
  const description = item.description || (variantNames.has(item.name) ? sectionDescriptions[item.section] : '') || `${item.section}. Podrobnosti o zložení nájdete v PDF menu alebo u obsluhy.`;
  const displayName = itemDisplayName(item);
  const photo = photoFor(item,featured);
  const badge = featured
    ? `<span class="food-badge">${['Pikantná klasika','Silný vývar','Ramen výber','Sushi výber'][index%4]}</span>`
    : '';
  const media = photo ? `<div class="food-card-media"><img src="${photo.src}" alt="${photo.alt}" loading="lazy" decoding="async" width="${photo.width}" height="${photo.height}"></div>` : '';
  const sectionLabel = cardSectionLabel(item);
  const section = sectionLabel ? `<span class="food-card-section">${sectionLabel}</span>` : '';
  const volume = item.number>=160 && item.number<=163 ? '<small>300 ml</small>' : '';
  const price = `<span class="food-card-price"><strong>${item.price}</strong>${volume}</span>`;
  const canOrder = /^\d+(?:,\d{1,2})?\s*€$/.test(item.price.trim());
  return `<article class="food-card dish-${item.number} ${featured?'favorite-card':''} ${photo?'has-photo':'no-photo'}" style="--card-index:${Math.min(index,9)}">${media}<div class="food-card-body">${badge}${section}<div class="food-card-top"><h3>${displayName}</h3>${price}</div><p>${description}</p><div class="food-card-bottom"><span>${item.allergens?`Alergény: ${item.allergens}`:'Alergény: overte v PDF alebo u obsluhy'}</span><span>Č. ${item.number}</span></div>${canOrder?`<button class="add-to-cart" type="button" data-item-number="${item.number}" aria-label="Pridať ${displayName} do košíka"><span>Pridať do košíka</span><b aria-hidden="true">+</b></button>`:''}</div></article>`;
}

function groupCardMarkup(group,index){
  const representative = group.variants.find(item=>photoFor(item)) || group.variants[0];
  const sectionFile = sectionPhotoFiles[group.section];
  const photo = sectionFile
    ? {src:encodeURI(`Hà Nội Phố/Ảnh Menu_Tách nền/${sectionFile}`),alt:group.section,width:1000,height:1000}
    : photoFor(representative);
  const media = photo ? `<div class="food-card-media"><img src="${photo.src}" alt="${photo.alt}" loading="lazy" decoding="async" width="${photo.width}" height="${photo.height}"></div>` : '';
  const description = sectionDescriptions[group.section] || '';
  const numericPrices = group.variants.map(item=>Number((item.price.match(/[\d.,]+/)?.[0]||'0').replace(',','.')));
  const lowestPrice = Math.min(...numericPrices);
  const highestPrice = Math.max(...numericPrices);
  const formatPrice = value=>new Intl.NumberFormat('sk-SK',{style:'currency',currency:'EUR'}).format(value);
  const priceRange = lowestPrice===highestPrice ? formatPrice(lowestPrice) : `od ${formatPrice(lowestPrice)}`;
  const variants = group.variants.map(item=>`
    <li>
      <span><b>${item.name}</b><small>Č. ${item.number}${item.allergens?` · Alergény: ${item.allergens}`:''}</small></span>
      <strong>${item.price}</strong>
      <button class="add-to-cart variant-add" type="button" data-item-number="${item.number}" aria-label="Pridať ${itemDisplayName(item)} do košíka"><span>Pridať</span><b aria-hidden="true">+</b></button>
    </li>`).join('');
  return `<article class="food-card grouped-food-card has-photo" style="--card-index:${Math.min(index,9)}">${media}<div class="food-card-body"><div class="grouped-food-heading"><div><span class="food-card-section">Jedno jedlo, viac variantov</span><h3>${group.section}</h3></div><div class="grouped-food-meta"><strong>${priceRange}</strong><span>${group.variants.length} možností</span></div></div>${description?`<p>${description}</p>`:''}<ul class="food-variants">${variants}</ul></div></article>`;
}

// Only feature dishes for which the site has a truthful, matching photograph.
const favoriteDishes = [
  ['Polievky','Tom Yum'],
  ['Polievky','Gyoza Soup'],
  ['Ramen','Kuracie'],
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
  const filtered = menuDisplayEntries.filter(entry => {
    const categoryMatches = activeFilter === 'all' || entry.category.includes(activeFilter);
    const searchable = entry.isGroup
      ? `${entry.section} ${entry.variants.map(item=>`${item.name} ${item.price}`).join(' ')}`
      : `${itemDisplayName(entry)} ${entry.name} ${entry.section}`;
    return categoryMatches && searchable.toLocaleLowerCase('sk').includes(query);
  });
  const shown = filtered.slice(0,visibleCount);
  grid.innerHTML = shown.map((entry,index)=>entry.isGroup?groupCardMarkup(entry,index):cardMarkup(entry,index)).join('');
  count.textContent = `Zobrazené ${shown.length} z ${filtered.length} skupín a položiek`;
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
  cartItemsElement.innerHTML=rows.map(({item,quantity})=>{const displayName=itemDisplayName(item);return `<article class="cart-item"><div class="cart-item-copy"><span>Č. ${item.number} · ${item.section}</span><h3>${displayName}</h3><strong>${money(priceValue(item.price)*quantity)}</strong></div><div class="quantity-control" aria-label="Množstvo pre ${displayName}"><button type="button" data-cart-action="decrease" data-item-number="${item.number}" aria-label="Odobrať jeden kus">−</button><b>${quantity}</b><button type="button" data-cart-action="increase" data-item-number="${item.number}" aria-label="Pridať jeden kus">+</button></div><button class="cart-remove" type="button" data-cart-action="remove" data-item-number="${item.number}" aria-label="Odstrániť ${displayName}">Odstrániť</button></article>`}).join('');
  cartEmpty.hidden=rows.length>0;cartItemsElement.hidden=!rows.length;document.querySelector('.cart-footer').hidden=!rows.length;cartCheckout.disabled=!rows.length;
}
function showToast(message){const toast=document.querySelector('#cart-toast');toast.textContent=message;toast.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove('show'),2200)}
document.addEventListener('click',event=>{
  const add=event.target.closest('.add-to-cart');
  if(!add)return;
  const number=add.dataset.itemNumber;
  cart[number]=(cart[number]||0)+1;
  saveCart();
  const label=add.querySelector('span'),icon=add.querySelector('b');
  const previousLabel=add.dataset.defaultLabel||(label?.textContent||'Pridať');
  const previousIcon=add.dataset.defaultIcon||(icon?.textContent||'+');
  add.dataset.defaultLabel=previousLabel;
  add.dataset.defaultIcon=previousIcon;
  add.classList.add('is-added');
  if(label) label.textContent='Pridané';
  if(icon) icon.textContent='✓';
  window.setTimeout(()=>{
    add.classList.remove('is-added');
    if(label) label.textContent=previousLabel;
    if(icon) icon.textContent=previousIcon;
  },1200);
  showToast('Jedlo bolo pridané do košíka');
});
document.querySelectorAll('.cart-trigger').forEach(button=>button.addEventListener('click',()=>cartDialog.showModal()));
document.querySelector('.cart-close').addEventListener('click',()=>cartDialog.close());
document.querySelector('.cart-browse').addEventListener('click',()=>{cartDialog.close();document.querySelector('#menu').scrollIntoView()});
cartDialog.addEventListener('click',event=>{if(event.target===cartDialog)cartDialog.close();const control=event.target.closest('[data-cart-action]');if(!control)return;const number=control.dataset.itemNumber;if(control.dataset.cartAction==='increase')cart[number]++;if(control.dataset.cartAction==='decrease')cart[number]--;if(control.dataset.cartAction==='remove'||cart[number]<=0)delete cart[number];saveCart()});
cartCheckout.addEventListener('click',()=>{cartDialog.close();checkoutDialog.showModal()});
document.querySelector('.checkout-close').addEventListener('click',()=>checkoutDialog.close());
document.querySelector('.checkout-back').addEventListener('click',()=>{checkoutDialog.close();cartDialog.showModal()});
checkoutDialog.addEventListener('click',event=>{if(event.target===checkoutDialog)checkoutDialog.close()});
document.querySelector('#checkout-form').addEventListener('submit',event=>{event.preventDefault();const data=new FormData(event.currentTarget),rows=cartDetails();if(!rows.length)return;const total=rows.reduce((sum,row)=>sum+priceValue(row.item.price)*row.quantity,0);const order=rows.map(({item,quantity})=>`${quantity}× č. ${item.number} ${itemDisplayName(item)} (${money(priceValue(item.price)*quantity)})`).join('\n');const message=`Dobrý deň, chcem si objednať:\n${order}\n\nSpolu: ${money(total)}\nPrevzatie: ${data.get('fulfillment')}\nMeno: ${data.get('name')}\nTelefón: ${data.get('phone')}\nPoznámka: ${data.get('note')||'bez poznámky'}`;window.location.href=`sms:+421940797789?body=${encodeURIComponent(message)}`});
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
