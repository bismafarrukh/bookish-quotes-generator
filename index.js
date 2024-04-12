 const quoteArea=document.querySelector(".quotearea");
const author=document.querySelector(".author");
const btn=document.querySelector("#btn");

const quotes = [
    {quote:"What is a person, if not the marks they leave behind?", author:"― V.E. Schwab, The Invisible Life of Addie LaRue"},
    {quote:"Books she has found are a way to live a thousand lives--or to find strength in a very long one.", author:"― V.E. Schwab, The Invisible Life of Addie LaRue"},
    {quote:"‘Nice comes from the Latin word for “stupid”,’ said Griffin. ‘We do not want to be nice.’", author:"― R.F. Kuang, Babel"},
    {quote:"Grief suffocated. Grief paralysed. Grief was a cruel, heavy boot pressed so hard against his chest that he could not breathe.", author:"― R.F. Kuang, Babel"},
    {quote:"Youth is happy because it has the capacity to see beauty. Anyone who keeps the ability to see beauty never grows old.", author:"- Franz Kafka"},
    {quote:"Books are a narcotic.", author:"- Franz Kafka"},
    {quote:"I think we ought to read only the kind of books that wound and stab us.", author:"- Franz Kafka"},
  {quote: "My Dear, Find what you love and let it kill you. Let it drain you of your all. Let it cling onto your back and weigh you down into eventual nothingness.", author: "- Charles Bukowski"},
  {quote: "Zindagi migzara. Life goes on.", author: "- Khaled Hosseni, The Kite Runner"},
  {quote: "“We must do what we can to mend our lives, we owe that to ourselves – but we need to be careful not to break others while achieving that.”", author: "- Elif Shafak, 10 Minutes 38 Seconds in This Strange World"},
   {quote: "Dreams tend to shatter if you're carrying other people's hopes around with you.", author: "- Uzma Jalaluddin, Ayesha at Last"},
   {quote: "“Everything is better told as a story, and mine is still unfolding.”", author: "- Uzma Jalaluddin, Hana Khan Carries On"},
   {quote: "“Maybe that's what living is--recognizing the marvels and oddities around you.”", author: "- S.K. Ali, Love From A to Z"},

];
function randomQuote(){
    const quoteIndex=Math.floor(Math.random()*quotes.length);
    return quotes[quoteIndex];
}

btn.addEventListener("click", function(){
     const random = randomQuote();
    author.innerHTML=random.author;
    quoteArea.innerHTML=random.quote;
})