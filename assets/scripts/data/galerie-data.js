// AUTO-GENERATED — do not edit by hand.
// Run: node tools/generate-galerie-data.mjs
// Existing entries keep their date. New images get today's date (2026-10-02).

window.GALERIE_COLLECTIONS = [
  { id:'charaktere', name:'Charaktere & NSCs', hue:150, images:[
    {id:"c1",title:"Aurelia",hue:150,date:"2026-06-01",img:"assets/images/gods/backgrounds/BG_Aurelia.webp"},
    {id:"c2",title:"Elysarion",hue:200,date:"2026-06-01",img:"assets/images/gods/backgrounds/BG_Elysarion.png"},
    {id:"c3",title:"Vindeah",hue:280,date:"2026-06-01",img:"assets/images/gods/backgrounds/BG_Vindeah.png"},
    {id:"c4",title:"Daramur",hue:45,date:"2026-06-01",img:"assets/images/gods/backgrounds/BG_Daramur.png"},
    {id:"c5",title:"Aetherius",hue:220,date:"2026-06-01",img:"assets/images/gods/backgrounds/BG_Aetherius.png"},
    {id:"c6",title:"Maledor",hue:300,date:"2026-06-01",img:"assets/images/gods/backgrounds/BG_Maledor.png"},
    {id:"c7",title:"Serenith",hue:170,date:"2026-06-01",img:"assets/images/gods/backgrounds/BG_Serenith.png"},
    {id:"c8",title:"Thraxis",hue:15,date:"2026-06-01",img:"assets/images/gods/backgrounds/BG_Thraxis.png"}
  ]}
];

window.GALERIE_ALL_IMAGES = window.GALERIE_COLLECTIONS.flatMap(c => c.images.map(img => ({...img, collectionName: c.name})));
window.GALERIE_DEFAULT_FEATURED = window.GALERIE_ALL_IMAGES[0];
