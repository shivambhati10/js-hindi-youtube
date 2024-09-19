// FETCH API

//1. it is the successor of XMLHTTPRequest
//AbortController-->jab aapki node request gyi hui h fetch ke through, to aap usko rok bhi skte h browser ke andar aapko full control milta h
//Nodejs ne browser based web stream APIs khud likhi, to include fetch in nodejs


//2. Fetch method starts the process of fetching a resource from the network, returning  PROMISE which is fulfilled once the response is available.


//3. A Fetch() promise only rejects when a network error is encountered(jab permission ka issue hota h). A Fetch promise does not reject on HTTP errors(404).

//4. sabse pehle fetch() execute hoga then sab baadme, setTimeout bhi baad m, kyuki fetch() se jo queue banti h vo special queue banti h==> MicroTask queue(priority queue)
// 5. fetch se jo bhi kaam hota h vo callback queue ke andar aata h, kyuki promise object h to ye VIP QUEUE BAN GAYA, to ye line pehle jaati h call stack m sbse pehle add hoti h. task queue se phle.


// ISKE baad MAINE REGISTER M LIKHA H DIAGRAM KE SAATH

//1. response= fetch('something')___
// fetch hmara 2 part m hota h

// A. DATA:-
//.   onfulfilled[]
//.   onRejection[]
//  sbse pehle ye part hota h, variables or memory m data space reserve krne ke liye.


// B. web browser/ node api==> dusra part jaata h browser or node ki api ko handle krne ke liye.
  // iske andar hota h NETWORK REQUEST. network request dene ke liye resource chahiye jo browser deta h.
  // onfulfilled[fn]. ===> jab network request se kaam ho jaayega.
  //. iske andar function data ko fulfill krte h ,kyuki data ki initial value empty hoti h.
  //. hamara variable respone global memory m available h, to ye data ki responsibility h ki response ko fulfil kre.
   
