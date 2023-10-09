const getQuotes = async() => {
    const api="https://type.fit/api/quotes";
    try
    {
        let data =await fetch(api);
        console.log(data.json());
    }catch(error)
    {}
};

getQuotes();