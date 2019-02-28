# JavaScript Notes
## History 
90s main pehla browser aaya tha , uska naam tha NetScape Navigator aur wo browser sirf html Language hi support karta tha aur usme sirf Text , Pictures, Link(Basahilaic HTML) hote the aur kuch nahi hota tha.
Baadme CSS Language aayi aur jis ke madad se hum page ko sundar dikhapaye par abhi bhi humari websites interactive nnah thi.
## JavaScript
Jab 1995 me JavaScript aayi tab humari websites me interactivity aayi. For example aagar user sensitive information access kar raha hai ya yir use change kar raha hai to hum user to ek alert popup dikhate hai. Ye wk bahut basic example hai ki javascript humari websites me interactivity kese lata hai.
Saal 91/92 main Java/C/C++ bahut popular languages thi Python nayi language thi zyada log us par bharosa nahi karte the.
## Static and Dynamic
Humari kuch programming languages static hoti hai aur kuch languages dynamic.Static ka matlab ki hame variables ko define  unke type ke saath define karna padta hain jaise ki java main. Ex int a = 2 , string b = “navgurukl”, float c = 3.5,
In sab example main hame variables ke pehele unka type diya hain ye sab `Static` language main use hota hain, Java static language hain, kyuki usme hame variables ke pehele uska data type declare karna padta hain.
Dynamic ka matlab ki hame variables ke pahile uske type nahi declare nahi karna padta hain. Ex a = 2, b = “Bhavnesh”and c = 3.5. Ye sab dynamic language ke examples hain.Python and JavaScript ye dynamic language hain kyuki usme variables ke types pecify nahi karne padte hain.
## Using JavaScript
Python/Java/C/C++ ye languages browser ke liye nahi bani hai on the other hand JavaScript humari browsers ke liye bani hui hai.
Har browser ka alage JavaScript engine hota hai JavaScript chalane ke liye. Jese Google Chrome V8 use karta hia aur Firefox SpiderMonkey use karta hai.
JS engine ek program hai jo JavaScipt ko run karta hai.
## Rendering 
Rendering ka mtalab hota hai 'fetching data'. Iska example ho sakta hi ek Class se uske methods lana.
## Python Model
Agar me python me 'google.com' ki request karu aur fir uske baad kuch print karau to jab tak request 'google.com' se data fetch nahi kar leta tab tak 'Hello World' Print Nahi hoga.
```Python
import requests
response = requests.get("https://google.com")
print('Hello World')
```
## JavaScript Model
Arar me javaScript me same task perform karu to mera Hello World pehele print hoga aur Data baad me aayega. Java Script dono task ko saath me run karega to ```log('Hello World)``` me 'google.com' ko fetch karne se kam time lagta hai is liye vo pehele ho jata hai baad me ```log('Hello World)``` hota hai.
Ek example se samajte hai. Supposse 'A' or 'B' ki kitchen me turn hai to 'A' ne 'B' ko bola ke dukan se pyaaz le aao to 'B' to chala gaya pyaaz lena ab 'A' free hai to vo tamatar kaat sakta hai pr nahi kaata vo pyaaz ke aane ka wait karta hai.
To ye upar wala example hai python ka.
Agra 'A' 'B' ko bhej kar tamtar kaatne lagjay to vo javascript ke tarah behave kar raha hai.
```JavaScript
const axios = require('axios')
axios.get('https://google/com')
  .then(response => {
   console.log('Data aagaya')
    }
  })
  .catch(error => {
    console.log('Error aagaya');
  });

console.log('Hello World')
```
## Event Driven Programming
Agra aap ko apna facebook account dekhna hai to aap apa id and password dal kar ```log in``` par click karte ho, vo click karna ek event ho jata hai. Log in tabhi hoga jab aap click karenge. To event ke maddad se humare program chalte hai. Vo events mostly user inputs hote hai.
## Callback functions
Agar hum meeting me hote hai to jab bhi hume koi call karta hai to ho hum bolte hai ki mai kuch kaam kar raha hu mai aap ko call back karunga. Similarly, JS me hum jab hum koi aur kaa kar rahe hote hai to hum ek callback function likhdete hai jise jab vo task ho jaya to hum aupe kaam kar sake. For exaple jab google.com ka data aajay to mai use scrape karu to mai ek callback function likhunga.
## Event Loop
Event Loop ek infinite loop hai basically jo chalta reheta hia  humare browser me aur ye check karta hai ki koi event to nahi hua. Agar Event aata hai to vo callback kar deta hai. Agar aap google.com ko open karenge ke aur 1 ghante tak chode denge fir ek ghante baad aap useme kuch search karenge to apki search tabhi bhi hogi. Ye possible  event loop ki madad se he hota hai.
## Sync and Async
Jab hum koi task synchronously execute karte hai to hum wait karte hai ki pehla step kahata ho tab hum dusra shuruu kare. Eg. Python
Jab hum koi task asynchronously execute karte hai to we can move on to step 2 agar step 1 complete nahi bhi hua hai to. Is me hum wait nahi karte. Eg. JavaScript
## Blocking and Non-blocking
Blocking Tasks vo hote hai jisme hum cpu ka use kar rahe hai. for example 2 + 3 ek blocking task hai.
Requests ka use karke data fetch karna non-blocking hai kyuki is me humari I/O devices use ho rahi hai, CPU nahi use ho raha hai. 


   
