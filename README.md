# HCD-Minorweb

## Ihab - de gebruiker waarvoor ik ontwikkel
Ihab studeert economie en politicologie aan de UvA en is blind. Daarom gebruikt hij een screenreader om het web te navigeren. Het is voor mij de taak om een design te maken voor een relevant onderwerp met betrekking tot de screenreader.

## Eerste idee
Voor mijn eerste idee wil ik gaan kijken naar het maken van een extensie om de voorkeuren van Ihab te ondersteunen, mogelijk een sneltoets library, mogelijk kunnen skippen naar de content die je zelf wilt. De voorkeuren baseer ik op de observaties die ik maak wanneer Ihab de sites doorgaat, dus daar ga ik achter komen. 

Ook heb ik nog onderzoek gedaan naar hoe je een extensie kan maken en een simpel voorbeeld gemaakt.
<img width="406" height="207" alt="Screenshot 2026-03-30 at 15 28 23" src="https://github.com/user-attachments/assets/81e2879a-ccdf-4805-a362-d0d8320c98d8" />
<img width="170" height="192" alt="Screenshot 2026-03-30 at 15 29 18" src="https://github.com/user-attachments/assets/cbcb40b9-10a7-47ec-a693-c9e030464e1b" />

# Daily checkout dag 1 week 1
Vandaag heb ik me verdiept in hoe ik het wil gaan aanpakken, welk onderwerp ik me mee bezig wil houden en een testplan gemaakt. Tot slot heb ik een extensie gemaakt om te testen hoe het werkt. 

## Testplan week 1
Tijdens de eerste week wil ik erachter komen/observeren wie Ihab als persoon is en hoe Ihab zijn screenreader gebruikt. Op basis van de interesses kan ik meer richting geven aan mijn ontwerp en kan ik een kant op die past bij Ihab. Daarbij wil ik van alles te weten te komen over het gebruik van de screenreader, hoe werkt Ihab ermee? Wat werkt handig, wat werkt minder handig? Waar komt de screenreader misschien tekort of wat kan beter? Welke voorkeuren heeft hij voor het gebruik van zijn screenreader? Gebruik sneltoetsen? 

Voor de eerste week wil ik niet zo zeer een protoype maken maar juist erachter komen hoe Ihab zijn screenreader gebruikt door hem verschillende sites aan te wijzen/ of te vragen of hij bepaalde relevante sites wilt bezoeken en dan ga ik observeren hoe hij daarmee interacteert. Skipt hij gelijk naar bepaalde content? Wat is belangrijk? Naast het aandachtig meeluisteren naar de algemene vragen die al gesteld zullen worden door anderen kan ik specifiekere vragen stellen zoals:

- Lijkt het je handig om aan het begin van je websitebezoek bepaalde content over te slaan zodat je er niet doorheen hoeft te tabben? Denk bijvoorbeeld aan een politiek nieuwsartikel of websites met langdradige informatie en veel kopjes.  
- Zou een sneltoets overzicht handig zijn zodat je altijd elke sneltoets kan vinden? Gebruik je veel sneltoetsen? Vergeet je die soms?


Op basis daarvan kan ik bezig met het eerste ontwerp, een extensie die deze voorkeuren kan toepassen. 

# Gebruikerstest Ihab 1 / voortgang
## Ihab gebruikerstest - relevante aantekeningen

---

### Mijn concept: browserextensie waarmee je irrelevante content kan overslaan
Gedurende de test vond ik dat de observatie niet zo zeer nodig was omdat hij elke site hetzelfde gebruikt met tabben, wel ging ik mijn concept voorstellen en vragen wat hij ervan vond. Gedurende de test heb ik ook besloten om het concept wat specifieker te maken van alle websites naar politieke nieuwsartikelen voor raakvlak met zijn studie. 

**Reactie Ihab op het concept:**

- Vond het een prima idee, handig voor lange artikelen met veel kopjes
- Vooraf een soort table of contents met de koppen, zodat je kan bepalen wat je wilt skippen
- Optie om focus ergens te starten? Content helemaal weghalen?
- Ik noemde als voorbeeld Specifiek voor scangedrag bij lange nieuwsartikelen met veel kopjes - focussen hierop?
---

### Ihab als gebruiker:

- Gebruikt **NVDA maar ook JAWS**, browser is **Brave (Tor)**
- Primaire input: **QWERTY-toetsenbord**
- Stem staat standaard **heel snel** → meer tekst voorlezen is geen probleem
- Engelse tekst wil hij met een **Engelse stem** voorgelezen krijgen

Na wat onderzoek merk ik dat de nieuwsartikelen niet vaak echt lang zijn, dus mogelijk dat ik naar andere soort informatie moet kijken zoals wetenschappelijke onderzoeken om die toegankelijker te maken voor Ihab. Of toch weer breed maken voor elke website dat hij een inhoudsopgave maakt ervan en je zelf kan bepalen wat je wilt bekijken? Ook dit zou ik extra kunnen vragen tijdens de volgende gebruikertest, bij welke content naast lange nieuwsartikelen kan dit handig zijn?

<img width="453" height="658" alt="Screenshot 2026-04-02 at 11 46 17" src="https://github.com/user-attachments/assets/79c86570-fb2c-4358-9e5f-1fdd9645e12b" />


Voor het eerste echte prototype wil ik de functionaliteit testen, dus eerst op een voorbeeld pagina en niet als extensie. Dat het een lang artikel is met verschillende kopjes en je dan kan aanvinken welke kopjes je wilt lezen. Dit ga ik met Ihab testen om te kijken of dit een fijne manier van gebruik is en zo niet, wat wel.

## Bronnen
https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world
