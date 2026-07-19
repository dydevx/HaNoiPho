const rawMenu = [
  ['Polievky','polievky',[
    [1,'Ostrokyslá polievka','2 €','3, 6','Pikantná polievka s kuracím mäsom, tofu, vajíčkom, zeleninou a jarnou cibuľkou.'],[2,'Hanojský vývar','2 €','4','Hanojský vývar, kuracie mäso, ryžové rezance a cibuľka.'],[3,'Tom Yum','6 €','2, 4','Polievka s krevetami, hubami, paradajkami, tom yum pastou a koriandrom.'],[4,'Rybacia polievka','3 €','4','Jemne pikantný vývar s lososom, zeleninou, hubami, cukinou, kôprom a cibuľkou.'],[5,'Miso Shiro','3 €','6','Vegetariánsky vývar s hodvábnym tofu a riasami.'],[6,'Gyoza Soup','6 €','1, 3, 6','Silný vývar s udon rezancami a gyoza taštičkami.'],[7,'Kung Pao','5,50 €','2, 5, 6','Kuracie prsia na šťave so zeleninou, hubami, arašidmi a sójovou omáčkou.'],[8,'Thajské karí','5,50 €','7','Kuracie prsia so zeleninou, hubami, karí korením a kokosovým mliekom.']
  ]],
  ['Tenké ryžové rezance','rezance',[
    [9,'Kuracie','7 €','3'],[10,'Hovädzie','7,50 €','3'],[11,'Kačacie','7,50 €','3'],[12,'S krevetami','7,50 €','2, 3'],[13,'Kuracie s krevetami','7,50 €','2, 3'],[14,'S tofu','7 €','3, 6'],[15,'So zeleninou','3 €','3'],[16,'Chicken Grill','5,50 €','3, 6, 10, 11','Grilované kuracie prsia na špízoch, restovaná zelenina a japonská majonéza.']
  ]],
  ['Udon','rezance',[
    [17,'Kuracie','7 €','1, 3, 6'],[18,'Hovädzie','7,50 €','1, 3, 6'],[19,'Kačacie','7,50 €','1, 3, 6'],[20,'S krevetami','7,50 €','1, 2, 3, 6'],[21,'Kuracie s krevetami','7,50 €','1, 2, 3, 6'],[22,'S tofu','7 €','1, 3, 6'],[23,'So zeleninou','6 €','1, 3, 6'],[24,'Kuracie kúsky','5,50 €','1, 3, 6, 10, 11','Kuracie kúsky v jemnom cestíčku s teriyaki omáčkou.']
  ]],
  ['Pad Thai','rezance',[
    [25,'Kuracie','7 €','3, 5, 6'],[26,'Hovädzie','7,50 €','3, 5, 6'],[27,'Kačacie','7,50 €','3, 5, 6'],[28,'S krevetami','7,50 €','2, 3, 5, 6'],[29,'Kuracie s krevetami','7,50 €','2, 3, 5, 6'],[30,'S tofu','7 €','3, 5, 6'],[31,'So zeleninou','6 €','3, 5, 6'],[32,'Hovädzie na šťave','6 €','11','Hovädzie mäso s hubami, zeleninou a mungo klíčkami.']
  ]],
  ['Bún bò Nam Bộ','vietnam',[
    [33,'Kurací','7 €','2, 4, 5, 6, 11'],[34,'Hovädzí','7,50 €','2, 4, 5, 6, 11'],[35,'Kačací','7,50 €','2, 4, 5, 6, 11'],[36,'S krevetami','7,50 €','2, 4, 5, 6, 11'],[37,'S tofu','7 €','2, 4, 5, 6, 11'],[38,'Ebi Tempura','6 €','1, 2, 3, 6, 10, 11','Krevety a špargľa v tempure s omáčkou Ocean, majonézou a sezamom.'],[39,'Tempurované kuracie mäso','6 €','1, 3, 6, 7, 10, 11','Kuracie prsia v tempure s omáčkou Ocean, majonézou a sezamom.']
  ]],
  ['Ramen','polievky',[[40,'Kurací','7 €','1, 2, 3, 6'],[41,'Hovädzí','7,50 €','1, 2, 3, 6'],[42,'S krevetami','7,50 €','1, 2, 3, 6'],[43,'S tofu','6 €','1, 2, 3, 6']]],
  ['Phở','vietnam polievky',[[44,'Kurací','7 €','2, 4'],[45,'Hovädzí','7,50 €','2, 4']]],
  ['Rizoto','vietnam',[[46,'Kuracie','7 €','2, 3'],[47,'Hovädzie','7,50 €','2, 3'],[48,'S krevetami','7,50 €','2, 3'],[49,'S tofu','6 €','2, 3'],[50,'So zeleninou','4 €','2, 3'],[51,'Chrumkavé kura','5,50 €','1, 3, 11'],[52,'Chrumkavá kačica','6,50 €','1, 3, 4, 6, 11, 14']]],
  ['Hrubé ryžové rezance','rezance',[[53,'Kuracie','7 €','3'],[54,'Hovädzie','7,50 €','3'],[55,'Kačacie','7,50 €','3'],[56,'S krevetami','7,50 €','2, 3'],[57,'Kuracie s krevetami','7,50 €','2, 3'],[58,'S tofu','6,50 €','3, 6'],[59,'So zeleninou','6 €','3'],[60,'Jarné závitky, 3 ks','5,50 €','1, 2, 3, 4, 11','Bravčové mäso, zelenina, ázijské huby a sklenené rezance.']]],
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
    [87,'Beef Poke Bowl','9 €','1, 3, 6, 10, 11','Sushi ryža, hovädzia roštenka, mango, avokádo, uhorka, edamame, cherry paradajky, sezam, majonéza, omáčka Ocean a chrumkavá cibuľka.'],
    [88,'Grill Poke Bowl','9,50 €','3, 4, 6, 10, 11','Sushi ryža, flambovaná ryba, krabia tyčinka, mungo klíčky, uhorka, avokádo, cibuľka, sójová omáčka, japonská majonéza, teriyaki, chilli a kaviár.'],
    [89,'Hawai Poke Bowl','9,50 €','3, 4, 6, 10, 11','Sushi ryža, surová ryba, uhorka, cibuľka, paprika, avokádo, mango, wakame, sezam, sezamový olej, chilli a omáčka.'],
    [90,'Mango Poke Bowl','9,50 €','3, 4, 6, 7, 10, 11','Sushi ryža, flambovaná ryba, edamame, mrkva, mungo klíčky, mango, avokádo, wakame, omáčka Ocean, japonská majonéza a mangová omáčka.']
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
    [100,'Nigiri','od 5,25 €','podľa výberu','Ryžový valček s tenkým plátkom ryby alebo zeleniny, podávaný po 2 kusoch. Varianty: ikura, tobikko, tuniak, maslová ryba, losos, kreveta, údený úhor, krabia tyčinka, avokádo alebo tofu.'],
    [101,'Sashimi','6 €','2, 4','Plátky čerstvej surovej ryby podávané bez ryže so zázvorom a wasabi, 4 kusy. Varianty: tuniak, maslová ryba, losos alebo kreveta.'],
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
    [120,'Tom Yum, 0,7 l','7,50 €','2, 4'],
    [121,'Yakitori losos','6,50 €','4, 6, 11'],
    [122,'Hot Wok','6 €','3, 6, 10, 11']
  ]],
  ['Sety, šaláty a malé jedlá','salaty sushi',[
    [123,'Norimaki Set, 18 ks','12 €','4, 11','Maki podľa výberu: 3 ks losos, 3 ks tuniak, 3 ks maslová ryba, 3 ks avokádo, 3 ks uhorka a 3 ks reďkovka.'],
    [124,'Sunshine Set, 50 ks','68 €','podľa výberu','Futomaki: 6 ks Crunchy Roll Light a 6 ks Sashimi Rossa s kaviárom. Uramaki: 8 ks Salmon Roll a jedna rolka podľa vášho výberu.'],
    [125,'Hawaii šalát','6 €','3, 6, 10, 11','Avokádo, uhorka, mango, reďkovka, wakame, cibuľka, paprika, chilli korenie, sezamový olej, omáčka a sezam.'],
    [126,'Kurací šalát','6 €','3, 6, 10, 11','Kuracie mäso, šalát, paprika, rajčiny, omáčka a sezam.'],
    [127,'Gyoza taštičky','6,50 €','1, 3, 11','Taštičky plnené kuracím mäsom alebo zeleninou. Variant: chicken gyoza alebo vege gyoza. 5 ks.'],
    [128,'Chilli kúsky, 150 g','5,50 €','1, 3, 7, 11','Kuracie kúsky v cestíčku na sladko-pikantný spôsob so sezamom.'],
    [129,'Vegetarian Spring Rolls','6 €','1, 3, 11','Vegetariánske závitky vo fazuľovom obale. 7 ks.']
  ]],
  ['Prílohy','prilohy',[[130,'Jasmínová ryža','2,50 €','']]],
  ['Omáčky a doplnky','prilohy',[[131,'Tatárska omáčka','1,50 €','3, 7, 10'],[132,'Teriyaki omáčka','1,50 €','6, 11'],[133,'Sladkokyslá omáčka','1,50 €',''],[134,'Chilli omáčka','1,50 €',''],[135,'Sójová omáčka','1,50 €','6'],[136,'Mango omáčka','1,50 €',''],[137,'Japonská majonéza','1,50 €','3, 10'],[138,'Kokosové mlieko','1,50 €',''],[139,'Nakladaný zázvor','1,50 €',''],[140,'Čerstvé chilli','1,50 €','']]],
];

const menuItems = rawMenu.flatMap(([section,category,items]) => items.map(([number,name,price,allergens='',description='']) => ({section,category,number,name,price,allergens,description})));

const grid = document.querySelector('#menu-grid');
const empty = document.querySelector('#empty-state');
const search = document.querySelector('#menu-search');
const count = document.querySelector('#menu-count');
const loadMore = document.querySelector('#load-more');
const dishPhotos = [
  {src:'assets/images/menu/optimized/crispy-duck-cutout-display.webp', alt:'Chrumkavá kačica s ryžou a zeleninou', width:900, height:850, matches:item=>item.number===52},
  {src:'assets/images/menu/optimized/beef-pho-cutout-display.webp', alt:'Hovädzie phở s ryžovými rezancami a bylinkami', width:900, height:761, matches:item=>item.number===45},
  {src:'assets/images/menu/optimized/chicken-bento-cutout-display.webp', alt:'Chicken Grill Bento s ryžou, sushi a šalátom', width:900, height:888, matches:item=>item.number===83},
  {src:'assets/images/menu/optimized/special-bento-cutout-display.webp', alt:'Special Bento s nigiri, sushi a wakame šalátom', width:894, height:900, matches:item=>item.number===77}
];
let activeFilter = 'all';
const menuPageSize = () => window.matchMedia('(max-width: 560px)').matches ? 6 : 12;
let visibleCount = menuPageSize();

function resetVisibleMenu(){
  visibleCount = menuPageSize();
}

function photoFor(item,featured=false){
  if(!featured) return null;
  const exact = dishPhotos.find(photo=>photo.matches(item) && (!photo.featuredOnly || featured));
  return exact ? {...exact, illustrative:false} : null;
}

function cardMarkup(item,index,featured=false){
  const description = item.description || `${item.section}. Čerstvo pripravené jedlo podľa našej ponuky.`;
  const photo = photoFor(item,featured);
  const badge = featured
    ? `<span class="food-badge">${['Signature','Vietnamská klasika','Bento výber','Sushi výber'][index%4]}</span>`
    : '';
  const media = photo ? `<div class="food-card-media"><img src="${photo.src}" alt="${photo.alt}" loading="lazy" decoding="async" width="${photo.width}" height="${photo.height}"></div>` : '';
  const canOrder = /\d/.test(item.price);
  return `<article class="food-card ${featured?'favorite-card':''} ${photo?'has-photo':'no-photo'}" style="--card-index:${Math.min(index,9)}">${media}<div class="food-card-body">${badge}<div class="food-card-top"><h3>${item.name}</h3><strong class="food-card-price">${item.price}</strong></div><p>${description}</p><div class="food-card-bottom"><span>${item.allergens?`Alergény: ${item.allergens}`:'Bez uvedených alergénov'}</span><span>Č. ${item.number}</span></div>${canOrder?`<button class="add-to-cart" type="button" data-item-number="${item.number}"><span>Pridať do košíka</span><b aria-hidden="true">+</b></button>`:''}</div></article>`;
}

// Only feature dishes for which the site has a truthful, matching photograph.
const favorites = [52,45,83,77].map(number=>menuItems.find(item=>item.number===number));
document.querySelector('#favorite-grid').innerHTML = favorites.map((item,index)=>cardMarkup(item,index,true)).join('');

const galleryImages = [
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
      <img src="assets/images/menu/optimized/${file}" alt="${alt}" loading="lazy" decoding="async" fetchpriority="low" width="${width}" height="${height}">
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
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click',()=>{document.querySelector('.filter.active')?.classList.remove('active');button.classList.add('active');activeFilter=button.dataset.filter;resetVisibleMenu();renderMenu()}));
search.addEventListener('input',()=>{resetVisibleMenu();renderMenu()});
document.querySelector('#reset-search').addEventListener('click',()=>{search.value='';activeFilter='all';resetVisibleMenu();document.querySelector('.filter.active')?.classList.remove('active');document.querySelector('[data-filter="all"]').classList.add('active');renderMenu();search.focus()});

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
