let quotes = document.getElementById("quotes");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
let realdata = "";
let quotesdata = "";

const getNewQuotes = () => {
    const rnum =  Math.floor(Math.random() * 16);
    console.log(realdata[rnum].author.split(",")[0]);
    quotesdata = realdata[rnum];
    quotes.innerHTML=`${quotesdata.text}`;
    if(quotesdata.author == null || quotesdata.author.localeCompare("type.fit") == 0)
    {
        author.innerHTML="unKnown";
    }
    else
    {
        author.innerHTML=`${quotesdata.author.split(",")[0]}`;
    }
};

const getQuotes = async() => {
    const api="https://type.fit/api/quotes";
    try
    {
        let data =await fetch(api);
        realdata = await data.json();

        getNewQuotes();
        // console.log(realdata.length);
        // console.log(realdata[0].text);
        // console.log(realdata[0].author);
    }catch(error)
    {}
};

btn.addEventListener("click", getNewQuotes);
getQuotes();