if(!document.querySelector('link[href="who-pages.css"]')){const s=document.createElement('link');s.rel='stylesheet';s.href='who-pages.css';document.head.appendChild(s)}

const catalogs={
'zhejiang-coosai-valve.html':{
'BALL VALVES':['Floating Ball Valves','Trunnion-Mounted Ball Valves','Metal-Seated Ball Valves','Cryogenic Ball Valves','Segment Ball Valves','V-Port Ball Valves','Top-Entry Ball Valves','Fully Welded Ball Valves','Three-Piece Ball Valves','Manual Ball Valves','Pneumatic Ball Valves','Electric Ball Valves','Hydraulic-Operated Ball Valves'],
'GATE VALVES':['API Gate Valves','Industrial Gate Valves','Cast-Steel Gate Valves','Forged-Steel Gate Valves','Pressure-Seal Gate Valves','Cryogenic Gate Valves','Manual Gate Valves','Pneumatic Gate Valves','Electric Gate Valves','Hydraulic-Operated Gate Valves'],
'GLOBE VALVES':['Cast-Steel Globe Valves','Forged-Steel Globe Valves','Bellows-Sealed Globe Valves','Angle Globe Valves','Y-Pattern Globe Valves','Pressure-Seal Globe Valves','Cryogenic Globe Valves','Automated Globe Valves'],
'CHECK VALVES':['Swing Check Valves','Lift Check Valves','Dual-Plate Check Valves','Tilting-Disc Check Valves','Piston Check Valves','Forged-Steel Check Valves','Pressure-Seal Check Valves','Non-Return Valves'],
'BUTTERFLY VALVES':['Resilient-Seated Butterfly Valves','Double-Eccentric Butterfly Valves','Triple-Offset Butterfly Valves','High-Performance Butterfly Valves','Wafer Butterfly Valves','Lug-Type Butterfly Valves','Flanged Butterfly Valves','Pneumatic Butterfly Valves','Electric Butterfly Valves','Hydraulic Butterfly Valves'],
'KNIFE GATE VALVES':['Uni-Directional Knife Gate Valves','Bi-Directional Knife Gate Valves','Slurry Knife Gate Valves','Mining-Service Knife Gate Valves','Pulp and Paper Knife Gate Valves','Wastewater Knife Gate Valves','Industrial Process Knife Gate Valves'],
'CONTROL VALVES':['Globe Control Valves','Pressure-Reducing Valves','Pressure-Regulating Valves','Self-Operated Control Valves','Pneumatic Control Valves','Electric Control Valves','Severe-Service Control Valves'],
'VALVE AUTOMATION & ACCESSORIES':['Pneumatic Actuators','Electric Actuators','Hydraulic Actuators','Gear Operators','Limit Switches','Solenoid Valves','Valve Positioners','Air-Filter Regulators','Valve Accessories']},
'khd-huadu-valve.html':{
'BALL VALVES':['Soft-Seated Ball Valves','Hard-Seated Ball Valves','Floating Ball Valves','Trunnion-Mounted Ball Valves','Fixed Ball Valves','API Flanged Ball Valves','DIN Ball Valves','JIS Ball Valves','Three-Way Ball Valves','V-Shaped Ball Valves','High-Temperature Ball Valves','Jacketed Ball Valves','Fully Welded Ball Valves','Forged-Steel Ball Valves','Pneumatic Ball Valves','Electric Ball Valves'],
'GATE VALVES':['API Gate Valves','GB Gate Valves','JIS Gate Valves','GOST Gate Valves','Flanged Gate Valves','Welded Gate Valves','Non-Rising-Stem Gate Valves','Wedge Gate Valves','Low-Temperature Gate Valves','Power-Station Gate Valves','Electric Gate Valves','Cast-Steel Gate Valves','Stainless-Steel Gate Valves'],
'GLOBE VALVES':['API Globe Valves','GB Globe Valves','Flanged Globe Valves','Welded Globe Valves','Angle Globe Valves','Y-Pattern Globe Valves','Bellows-Sealed Globe Valves','Oxygen-Service Globe Valves','Insulated Globe Valves','Low-Temperature Globe Valves','Pneumatic Globe Valves','Electric Globe Valves'],
'CHECK VALVES AND FILTERS':['Lift Check Valves','Swing Check Valves','Vertical Check Valves','Wafer Check Valves','Clamp Check Valves','Welded Check Valves','API Check Valves','Stainless-Steel Check Valves','Y-Strainers','Basket Filters'],
'BUTTERFLY VALVES':['Worm-Gear Butterfly Valves','Pneumatic Butterfly Valves','Electric Butterfly Valves','Flanged Butterfly Valves','Wafer Butterfly Valves','Clamp Butterfly Valves','Hard-Seated Butterfly Valves','Stainless-Steel Butterfly Valves','Extended-Stem Butterfly Valves'],
'THREADED VALVES':['One-Piece Threaded Ball Valves','Two-Piece Threaded Ball Valves','Three-Piece Threaded Ball Valves','Threaded Gate Valves','Threaded Globe Valves','Threaded Check Valves','Threaded Y-Strainers','Exhaust Valves','Pressure-Reducing Valves'],
'ELECTRIC AND PNEUMATIC ACTUATED VALVES':['Electric Ball Valves','Pneumatic Ball Valves','Electric Gate Valves','Pneumatic Globe Valves','Electric Globe Valves','Pneumatic Butterfly Valves','Electric Butterfly Valves','Valve and Pipeline Supporting Products']},
'lixin-valve.html':{
'BALL VALVES':['Floating Ball Valves','Trunnion-Mounted Ball Valves','Double Block and Bleed Valves','Metal-to-Metal Seated Ball Valves','Cryogenic Ball Valves','Side-Entry Ball Valves','Top-Entry Ball Valves','Forged Ball Valves','Cast Ball Valves','Three-Way Ball Valves','Pneumatic Ball Valves','Electric Ball Valves'],
'GATE VALVES':['Forged Gate Valves','Cast Gate Valves','Slab Gate Valves','Through-Conduit Gate Valves','Pressure-Seal Gate Valves','Expanding Gate Valves','Flanged Gate Valves','Welded Gate Valves','Non-Rising-Stem Gate Valves','Electric Gate Valves'],
'GLOBE VALVES':['Y-Type Globe Valves','Forged Globe Valves','Cast Globe Valves','Cryogenic Globe Valves','Bellows-Sealed Globe Valves','Flanged Globe Valves','Welded Globe Valves','Angle Globe Valves','Pneumatic Globe Valves','Electric Globe Valves'],
'CHECK VALVES AND FILTERS':['Forged Check Valves','Cast Check Valves','Wafer Check Valves','Lift Check Valves','Swing Check Valves','Vertical Check Valves','Y-Strainers','Basket Filters'],
'BUTTERFLY VALVES':['Eccentric Butterfly Valves','Centre-Line Butterfly Valves','Flanged Butterfly Valves','Wafer Butterfly Valves','Hard-Seated Butterfly Valves','Pneumatic Butterfly Valves','Electric Butterfly Valves'],
'THREADED VALVES':['Threaded Ball Valves','Threaded Gate Valves','Threaded Globe Valves','Threaded Check Valves','Threaded Y-Strainers','Exhaust Valves','Pressure-Reducing Valves'],
'ELECTRIC AND PNEUMATIC ACTUATED VALVES':['Electric Ball Valves','Pneumatic Ball Valves','Electric Gate Valves','Pneumatic Gate Valves','Electric Globe Valves','Pneumatic Globe Valves','Electric Butterfly Valves','Pneumatic Butterfly Valves']},
'rovv-shanghai-rogers.html':{
'BALL VALVES':['Floating Ball Valves','Cast Trunnion Ball Valves','Forged Trunnion Ball Valves','Fully Welded Ball Valves','Buried Fully Welded Ball Valves','Cryogenic Ball Valves','Orbital Ball Valves','Stainless-Steel Ball Valves','Eccentric Semi-Ball Valves','Electric Ball Valves','Pneumatic Ball Valves'],
'GATE VALVES':['API Gate Valves','GB Gate Valves','JIS Gate Valves','GOST Gate Valves','Flanged Gate Valves','Welded Gate Valves','Non-Rising-Stem Gate Valves','Electric Gate Valves'],
'GLOBE VALVES':['API Globe Valves','GB Globe Valves','Flanged Globe Valves','Welded Globe Valves','Angle Globe Valves','Y-Pattern Globe Valves','Bellows-Sealed Globe Valves','Oxygen-Service Globe Valves','Pneumatic Globe Valves','Electric Globe Valves'],
'CHECK VALVES AND FILTERS':['Lift Check Valves','Swing Check Valves','Vertical Check Valves','Wafer Check Valves','Clamp Check Valves','API Check Valves','Y-Strainers','Basket Filters'],
'BUTTERFLY VALVES':['Centre-Line Butterfly Valves','Double-Eccentric Butterfly Valves','Triple-Eccentric Butterfly Valves','High-Performance Butterfly Valves','Flanged Butterfly Valves','Wafer Butterfly Valves','Pneumatic Butterfly Valves','Electric Butterfly Valves'],
'THREADED VALVES':['Threaded Ball Valves','Threaded Gate Valves','Threaded Globe Valves','Threaded Check Valves','Threaded Y-Strainers','Exhaust Valves','Pressure-Reducing Valves'],
'ELECTRIC AND PNEUMATIC ACTUATED VALVES':['Electric Ball Valves','Pneumatic Ball Valves','Electric Gate Valves','Pneumatic Gate Valves','Electric Globe Valves','Pneumatic Globe Valves','Electric Butterfly Valves','Pneumatic Butterfly Valves']},
'huahang-filtration.html':{
'OIL PURIFICATION PRODUCTS':['Portable Oil Filtration Units','Hydraulic Oil Filter Elements','Suction Oil Filters','Pressure-Line Filters','Return-Line Filters','Stainless-Steel Oil Filters','Candle Filter Elements','Basket Filters and Strainers','Oil-Filter Housings'],
'COALESCING AND SEPARATION PRODUCTS':['Filter Coalescers','Filter Separators','Oil-Water Separation Elements','Oil-Gas Separator Elements','Air-Compressor Oil Separators','Natural-Gas Filter Elements','Natural-Gas Coalescer Elements'],
'AIR AND DUST COLLECTION PRODUCTS':['Industrial Air Filters','Dust-Collector Filter Cartridges','Bag Filters','Panel Filters','Carbon Air Filters','Stainless-Steel Air Filters','Air-Compressor Air Filters','Air-Compressor Oil Filters','Air-Compressor Oil Separators'],
'METAL SINTERED PRODUCTS':['Stainless-Steel Sintered Mesh Filters','Sintered Powder Filter Elements','Multilayer Sintered Filters','Cylindrical Sintered Filter Elements','Threaded Sintered Filter Elements','High-Temperature Metal Filters','Reusable Metal Filter Cartridges','Custom Sintered Filter Elements']}}
;

const file=location.pathname.split('/').pop()||'';
const catalog=catalogs[file];
const manufacturerCopy={
  'zhejiang-coosai-valve.html':'Servtech supplies Zhejiang Coosai industrial valves and automation packages for oil and gas, power, water and process applications. Explore the available valve families, then contact our team for material, pressure class, end connection and actuation selection.',
  'khd-huadu-valve.html':'KHD Huadu offers a broad portfolio of isolation and control valves for industrial piping systems. Servtech supports technical selection and quotation for manual, pneumatic and electric valve configurations.',
  'lixin-valve.html':'Servtech supplies Lixin valve solutions for critical isolation and flow-control duties, including cast and forged products, cryogenic designs and automated packages.',
  'rovv-shanghai-rogers.html':'ROVV Shanghai Rogers manufactures industrial valve solutions across ball, gate, globe, check and butterfly categories. Servtech provides regional product support, selection and quotation.',
  'huahang-filtration.html':'Servtech supplies Huahang industrial filtration products for hydraulic oil, gas separation, compressed air, dust collection and high-temperature process applications.'
};
if(catalog){
  const showcase=document.querySelector('.product-showcase');
  if(showcase&&!showcase.querySelector('.product-intro')){
    const intro=document.createElement('p');intro.className='product-intro';intro.textContent=manufacturerCopy[file]||'Contact Servtech for product selection, technical documentation and a project-specific quotation.';showcase.appendChild(intro);
  }
  const categories=document.querySelector('.categories');
  if(categories&&!categories.querySelector('.category-search')){
    const label=document.createElement('label');label.className='category-search';label.innerHTML='<span>Filter</span><input type="search" aria-label="Filter product categories" placeholder="Search product categories">';categories.querySelector('h2')?.after(label);
    label.querySelector('input').addEventListener('input',event=>{const query=event.target.value.toLowerCase();document.querySelectorAll('.category-list details').forEach(item=>item.hidden=!item.textContent.toLowerCase().includes(query))});
  }
  document.querySelectorAll('.category-list details').forEach(detail=>{
    const title=(detail.querySelector('summary')?.textContent||'').replace(/^\s*\d+\s*[—-]\s*/,'').trim().toUpperCase();
    const items=catalog[title];if(!items)return;
    const target=detail.querySelector('div');if(target)target.innerHTML='<ul class="subproduct-grid">'+items.map(item=>'<li>'+item+'</li>').join('')+'</ul>';
  });
  const firstCategory=document.querySelector('.category-list details');
  if(firstCategory)firstCategory.open=true;
  if(categories&&!document.querySelector('.product-catalog-cta')){
    categories.insertAdjacentHTML('afterend','<section class="product-catalog-cta"><div><span class="section-kicker">Project-specific support</span><h2>Need help selecting the right product?</h2><p>Send Servtech your datasheet, pressure class, material, end connection, actuation and delivery requirements.</p></div><a class="btn" href="quote.html">Request a quotation</a></section>');
  }
}
