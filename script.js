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
  ['Futomaki','sushi',[[72,'Crunchy Roll Light','16 €','1, 3, 4, 6, 7, 10, 12'],[73,'Crunchy Roll Tuna','16 €','1, 3, 4, 6, 7, 10, 11'],[74,'California Ebi Ten','16 €','1, 2, 3, 4, 6, 7, 10, 11'],[75,'Special Roll','16 €','1, 3, 4, 6, 7, 10, 11'],[76,'Salmon','16 €','1, 3, 4, 6, 10, 11']]],
  ['Bento','sushi',[[77,'Special Bento','16 €','4, 11'],[78,'Fish Bento','16 €','4, 7, 11'],[79,'California Bento','14 €','2, 4, 7, 11'],[80,'Unagi Bento','16 €','1, 3, 4, 6, 10, 11'],[81,'Poke Bento','16 €','1, 3, 4, 7, 11'],[82,'Nigiri Maki Bento','14 €','4, 11'],[83,'Chicken Grill Bento','16 €','1, 3, 4, 7, 11'],[84,'Duck Bento','16 €','1, 3, 4, 7, 11'],[85,'Vege Bento','14 €','1, 3, 8, 11'],[86,'Rossa Bento','16 €','1, 3, 4, 6, 10, 11']]],
  ['Poke Bowl','sushi salaty',[[87,'Beef Poke Bowl','9 €','1, 3, 6, 10, 11'],[88,'Grill Poke Bowl','9,50 €','3, 4, 6, 10, 11'],[89,'Hawai Poke Bowl','9,50 €','3, 4, 6, 10, 11'],[90,'Mango Poke Bowl','9,50 €','3, 4, 6, 7, 10, 11']]],
  ['Sushi sety','sushi',[[91,'Set Ocean, 32 ks','60 €','2, 4, 7, 11'],[92,'Love Set, 26 ks','50 €','2, 4, 7, 11'],[93,'Uramaki Salmon Roll','12 €','2, 4, 7, 11'],[94,'Uramaki Royal','13 €','1, 2, 3, 4, 6, 11'],[95,'Uramaki Rainbow','13 €','2, 4, 11'],[96,'Uramaki Marimondon','13 €','1, 3, 4, 6, 10, 11'],[97,'Uramaki Aburi','13 €','4, 6, 7, 11']]],
  ['Maki, nigiri a sashimi','sushi',[[98,'Maki','6 €','podľa výberu'],[99,'Crunchy Maki','7 €','podľa výberu'],[100,'Nigiri','od 5,25 €','podľa výberu'],[101,'Sashimi','6 €','2, 4'],[102,'Maki vegetariánske','5,50 €','podľa výberu'],[103,'Crunchy Maki vegetariánske','6,50 €','podľa výberu'],[104,'Crunchy Maki Special, 8 ks','7 €','1, 2, 3, 4, 7, 11']]],
  ['Uramaki','sushi',[[105,'Uramaki Sesame','10 €','4, 11'],[106,'Uramaki Marshmallow','10 €','1, 2, 3, 4, 11'],[107,'Uramaki Vegetarian','10 €','6, 11'],[108,'Uramaki Duck Maki','10 €','1, 3, 11'],[109,'Uramaki Chilli Roll','10 €','4, 11'],[110,'Uramaki Angry Dragon','12 €','1, 2, 3, 4, 11'],[111,'Uramaki Tobikko','12 €','2, 4, 11'],[112,'Uramaki Togepi','12 €','1, 2, 3, 4, 10, 11']]],
  ['Sety, šaláty a malé jedlá','salaty sushi',[[113,'Norimaki Set, 18 ks','12 €','4, 11'],[114,'Sunshine Set, 50 ks','68 €','podľa výberu'],[115,'Hawaii šalát','6 €','3, 6, 10, 11'],[116,'Kurací šalát','6 €','3, 6, 10, 11'],[117,'Gyoza taštičky','6,50 €','1, 3, 11'],[118,'Chilli kúsky, 150 g','5,50 €','1, 3, 7, 11'],[119,'Vegetarian Spring Rolls','6 €','1, 3, 11']]],
  ['Prílohy','prilohy',[[120,'Opekané zemiaky','3 €',''],[121,'Hranolky','3,50 €',''],[122,'Jasmínová ryža','2,50 €',''],[123,'Vyprážaný syr','4,50 €','1, 3, 7'],[124,'Tom Yum, 0,7 l','7,50 €','2, 4'],[125,'Yakitori losos','6,50 €','4, 6, 11'],[126,'Hot Wok','6 €','3, 6, 10, 11'],[127,'Ebi Tempura','6 €','1, 2, 3, 6, 10, 11'],[128,'Rezance','3 €','1, 3']]],
  ['Omáčky a doplnky','prilohy',[[129,'Tatárska omáčka','1,50 €','3, 7, 10'],[130,'Teriyaki omáčka','1,50 €','6, 11'],[131,'Sladkokyslá omáčka','1,50 €',''],[132,'Chilli omáčka','1,50 €',''],[133,'Sójová omáčka','1,50 €','6'],[134,'Mango omáčka','1,50 €',''],[135,'Japonská majonéza','1,50 €','3, 10'],[136,'Kokosové mlieko','1,50 €',''],[137,'Nakladaný zázvor','1,50 €',''],[138,'Čerstvé chilli','1,50 €','']]],
  ['Špeciality Hà Nội Phố','vietnam',[[139,'Bún Nem','Cena na vyžiadanie','4, 6, 14','Vyprážané jarné závitky, ryžové rezance, šalát, vietnamské bylinky a sladkokyslá rybacia omáčka.'],[140,'Nem Cuốn Tôm','Cena na vyžiadanie','2, 4, 6','Čerstvé ryžové rolky s rezancami, šalátom, bylinkami, krevetami a zeleninou.'],[141,'Bún Thịt Nướng','Cena na vyžiadanie','1, 4, 5, 6','Ryžové rezance s grilovaným bravčovým mäsom, zeleninou a vietnamskými bylinkami.'],[142,'Kuracie mäso so zeleninou','7 €','6, 14','Restované kuracie mäso so sezónnou zeleninou, hubami, ustricovou a sójovou omáčkou.'],[143,'Krevety so zeleninou','7,50 €','1, 2, 6, 14','Restované krevety so sezónnou zeleninou, hubami, ustricovou a sójovou omáčkou.']]]
];

const menuItems = rawMenu.flatMap(([section,category,items]) => items.map(([number,name,price,allergens='',description='']) => ({section,category,number,name,price,allergens,description})));

const galleryImages = [
  ['assets/images/food-5.jpg','Krevety s ryžou a čerstvým koriandrom'],
  ['assets/images/food-1.jpg','Opekané rezance s krevetami'],
  ['assets/images/food-4.jpg','Naparované ázijské taštičky'],
  ['assets/images/food-2.jpg','Kuracie mäso s brokolicou a ryžou'],
  ['assets/images/food-3.jpg','Farebná miska so zeleninou a ryžou']
];

const grid = document.querySelector('#menu-grid');
const empty = document.querySelector('#empty-state');
const search = document.querySelector('#menu-search');
const count = document.querySelector('#menu-count');
const loadMore = document.querySelector('#load-more');
const dishPhotos = [
  {src:'assets/images/food-1.jpg', alt:'Pad Thai s krevetami', matches:item=>item.section==='Pad Thai' && /krevetami/i.test(item.name)},
  {src:'assets/images/food-2.jpg', alt:'Kuracie mäso s brokolicou a ryžou', matches:item=>item.number===142},
  {src:'assets/images/food-3.jpg', alt:'Grilovaný losos so zeleninou a ryžou', matches:item=>item.number===88},
  {src:'assets/images/food-4.jpg', alt:'Naparované gyoza taštičky', matches:item=>item.number===117},
  {src:'assets/images/food-5.jpg', alt:'Krevety so zeleninou a ryžou', matches:item=>item.number===143}
];
let activeFilter = 'all';
let visibleCount = 12;

function photoFor(item){
  return dishPhotos.find(photo=>photo.matches(item));
}

function cardMarkup(item,index,featured=false){
  const description = item.description || `${item.section}. Čerstvo pripravené jedlo podľa našej ponuky.`;
  const badge = featured ? `<span class="food-badge">${['Obľúbené','Odporúčame','Špecialita'][index%3]}</span>` : '';
  const photo = photoFor(item);
  const media = photo ? `<div class="food-card-media"><img src="${photo.src}" alt="${photo.alt}" loading="lazy" width="1400" height="947"></div>` : '';
  const canOrder = /\d/.test(item.price);
  return `<article class="food-card ${featured?'favorite-card':''} ${photo?'has-photo':'no-photo'}">${badge}${media}<div class="food-card-body"><div class="food-card-top"><h3>${item.name}</h3><strong class="food-card-price">${item.price}</strong></div><p>${description}</p><div class="food-card-bottom"><span>${item.allergens?`Alergény: ${item.allergens}`:'Bez uvedených alergénov'}</span><span>Č. ${item.number}</span></div>${canOrder?`<button class="add-to-cart" type="button" data-item-number="${item.number}"><span>Pridať do košíka</span><b aria-hidden="true">+</b></button>`:''}</div></article>`;
}

// Only feature dishes for which the site has a truthful, matching photograph.
const favorites = [28,117,143].map(number=>menuItems.find(item=>item.number===number));
document.querySelector('#favorite-grid').innerHTML = favorites.map((item,index)=>cardMarkup(item,index,true)).join('');

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
try{cart=JSON.parse(localStorage.getItem('hanoi-pho-cart'))||{}}catch(error){cart={}}
const priceValue=price=>Number((price.match(/[\d.,]+/)?.[0]||'0').replace(',','.'));
const money=value=>new Intl.NumberFormat('sk-SK',{style:'currency',currency:'EUR'}).format(value);
function cartDetails(){return Object.entries(cart).map(([number,quantity])=>({item:menuItems.find(entry=>entry.number===Number(number)),quantity})).filter(row=>row.item&&row.quantity>0)}
function saveCart(){localStorage.setItem('hanoi-pho-cart',JSON.stringify(cart));renderCart()}
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
document.querySelector('#checkout-form').addEventListener('submit',event=>{event.preventDefault();const data=new FormData(event.currentTarget),rows=cartDetails();if(!rows.length)return;const total=rows.reduce((sum,row)=>sum+priceValue(row.item.price)*row.quantity,0);const order=rows.map(({item,quantity})=>`${quantity}× č. ${item.number} ${item.name} (${money(priceValue(item.price)*quantity)})`).join('\n');const message=`Dobrý deň, chcem si objednať:\n${order}\n\nSpolu: ${money(total)}\nPrevzatie: ${data.get('fulfillment')}\nMeno: ${data.get('name')}\nTelefón: ${data.get('phone')}\nPoznámka: ${data.get('note')||'—'}`;window.location.href=`sms:+421940797789?body=${encodeURIComponent(message)}`});
renderCart();
loadMore.addEventListener('click',()=>{visibleCount+=12;renderMenu()});
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click',()=>{document.querySelector('.filter.active')?.classList.remove('active');button.classList.add('active');activeFilter=button.dataset.filter;visibleCount=12;renderMenu()}));
search.addEventListener('input',()=>{visibleCount=12;renderMenu()});
document.querySelector('#reset-search').addEventListener('click',()=>{search.value='';activeFilter='all';visibleCount=12;document.querySelector('.filter.active')?.classList.remove('active');document.querySelector('[data-filter="all"]').classList.add('active');renderMenu();search.focus()});

const gallery = document.querySelector('#gallery-grid');
gallery.innerHTML = galleryImages.map(([src,caption],i)=>`<button class="gallery-item" data-index="${i}" aria-label="Zväčšiť: ${caption}"><img src="${src}" alt="${caption}" loading="lazy" width="1132" height="1600"></button>`).join('');
const lightbox=document.querySelector('#lightbox'), lightboxImage=document.querySelector('#lightbox-image'), lightboxCaption=document.querySelector('#lightbox-caption');
let currentImage=0,touchStart=0;
function showImage(index){currentImage=(index+galleryImages.length)%galleryImages.length;lightboxImage.src=galleryImages[currentImage][0];lightboxImage.alt=galleryImages[currentImage][1];lightboxCaption.textContent=galleryImages[currentImage][1]}
gallery.addEventListener('click',event=>{const item=event.target.closest('.gallery-item');if(!item)return;showImage(Number(item.dataset.index));lightbox.showModal();document.body.classList.add('no-scroll')});
document.querySelector('.lightbox-close').addEventListener('click',()=>lightbox.close());
document.querySelector('.lightbox-prev').addEventListener('click',()=>showImage(currentImage-1));
document.querySelector('.lightbox-next').addEventListener('click',()=>showImage(currentImage+1));
lightbox.addEventListener('close',()=>document.body.classList.remove('no-scroll'));
lightbox.addEventListener('click',event=>{if(event.target===lightbox)lightbox.close()});
lightbox.addEventListener('touchstart',event=>touchStart=event.changedTouches[0].screenX,{passive:true});
lightbox.addEventListener('touchend',event=>{const delta=event.changedTouches[0].screenX-touchStart;if(Math.abs(delta)>45)showImage(currentImage+(delta<0?1:-1))},{passive:true});

const toggle=document.querySelector('.menu-toggle'), mobileNav=document.querySelector('.mobile-nav');
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));toggle.setAttribute('aria-label',open?'Otvoriť ponuku':'Zavrieť ponuku');mobileNav.classList.toggle('open',!open)});
mobileNav.addEventListener('click',event=>{if(event.target.matches('a')){toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Otvoriť ponuku');mobileNav.classList.remove('open')}});

function updateHours(){
  const now=new Date(), parts=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Bratislava',weekday:'short',hour:'2-digit',minute:'2-digit',hour12:false}).formatToParts(now);const values=Object.fromEntries(parts.map(p=>[p.type,p.value]));const mins=Number(values.hour)*60+Number(values.minute);const sunday=values.weekday==='Sun';const open=mins>=(sunday?630:600)&&mins<(sunday?1200:1260);const label=open?'Otvorené':'Zatvorené';
  ['#open-status','#open-status-large'].forEach(id=>document.querySelector(id).textContent=label);document.querySelectorAll('.hero-status,.hours-status').forEach(el=>el.classList.toggle('closed',!open));document.querySelector('#next-hours').textContent=sunday?'Dnes 10:30 - 20:00':'Dnes 10:00 - 21:00';
}
updateHours();setInterval(updateHours,60000);

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const header=document.querySelector('.site-header');new IntersectionObserver(([entry])=>header.classList.toggle('scrolled',!entry.isIntersecting),{rootMargin:'-80px 0px 0px'}).observe(document.querySelector('.hero'));
