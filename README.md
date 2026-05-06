# HCD-Minorweb

# Week 1

## Ihab - de gebruiker waarvoor ik ontwikkel
Ihab studeert economie en politicologie aan de UvA en is blind. Daarom gebruikt hij een screenreader om het web te navigeren. Het is aan mij de taak om een design te maken voor een relevant onderwerp met betrekking tot de screenreader speciaal voor Ihab.

## Eerste idee
Voor mijn eerste idee wil ik gaan kijken naar het maken van een extensie om de voorkeuren van Ihab te ondersteunen, mogelijk een sneltoets library, mogelijk kunnen skippen naar de content die je zelf wilt. De voorkeuren baseer ik op de observaties die ik maak wanneer Ihab de sites doorgaat, dus daar ga ik achter komen. 

Ook heb ik nog onderzoek gedaan naar hoe je een extensie kan maken en een simpel voorbeeld gemaakt.
<img width="406" height="207" alt="Screenshot 2026-03-30 at 15 28 23" src="https://github.com/user-attachments/assets/81e2879a-ccdf-4805-a362-d0d8320c98d8" />
<img width="170" height="192" alt="Screenshot 2026-03-30 at 15 29 18" src="https://github.com/user-attachments/assets/cbcb40b9-10a7-47ec-a693-c9e030464e1b" />

## Checkout dag 1 week 1
Vandaag heb ik me verdiept in hoe ik het wil gaan aanpakken, welk onderwerp ik me mee bezig wil houden en een testplan gemaakt. Tot slot heb ik een extensie gemaakt om te testen hoe het maken van een extensie uberhaupt werkt. 

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

## Checkout dag 2
Natuurlijk ben ik de dag begonnen met de weekly geek waarna ik de eerste test met Ihab heb uitgevoerd. Daarna ben ik bezig geweest met het verwerken van de testresultaten en op basis daarvan aan de slag gegaan met het eerste prototype zoals bovenstaand te zien is. Ik heb mijn eerste idee uitgewerkt in figma maar ga deze nog omzetten naar een gecodeerd prototype voor Ihab.

Voor het eerste echte prototype wil ik de functionaliteit testen, dus eerst op een voorbeeld pagina en niet als extensie. Dat het een lang artikel is met verschillende kopjes en je dan kan aanvinken welke kopjes je wilt lezen. Dit ga ik met Ihab testen om te kijken of dit een fijne manier van gebruik is en zo niet, wat wel.

# Week 2

## Voortgang week 2
Ik ben goed op weg met mijn idee maar ik denk te ver vooruit alsin gelijk naar een oplossing toewerken, de interpretatie ervan staat open. De focus ligt op het iteratie proces en niet de techniek dus ik hoef niet meteen een extensie uit te werken voor de test van volgende week. Deel je idee in kleine functionaliteiten op en test deze, wat vind Ihab fijn en wat niet. 

Daarom ga ik voor de eerste test specifiek de manier van navigatie testen, ik ben nu van plan juist verschillende navigatie manieren voor te leggen/nabootsen en daarna vragen welke hij het fijnst vindt. Daarnaast wil ik vragen bij wat voor soort content mijn idee het beste past, meer dan alleen nieuwsartikelen.


## Prototype voor week 2
<img width="700" height="1154" alt="image" src="https://github.com/user-attachments/assets/7145c282-72be-420d-a279-738397b4e61c" />

Ik heb drie verschillende navigatie manieren gemaakt om content over te slaan voor Ihab om te testen. Daarnaast heb ik nvda gedownload om de basis zelf te kunnen testen en geen onnodige fouten maak met de code.

<img width="496" height="338" alt="image" src="https://github.com/user-attachments/assets/be205834-0f39-4850-b4e4-4c9f03d9f067" />

Tijdens het onderzoek voor de tweede test heb ik gemerkt dat de kopjes in een artikel op zichzelf niet beschrijvend genoeg zijn. Maar dit is een probleem waar ik een andere keer op ga focussen, voor nu richt ik me op de manier van navigatie die voor Ihab het beste werkt. Daarom heb ik ook de kopjes voor het prototype ietwat beschrijvender gemaakt.
Ook heb ik gemerkt dat ik niet snel nieuwsartikelen vind die echt lang zijn, dus ga ik vragen naar andere vormen van teksten/websites waarbij mijn toepassing handig kan zijn.

## Test week 2 aantekeningen
Observeren, welke navigatie is het fijnst? Heb je behoefte aan beschrijvende kopjes? Welke andere teskten/websites kan het van pas kan komen voor jou?

## Technisch

• Snelheid screenreader: 39
• Gebruikt Be My Eyes voor het beschrijven van foto’s
• Stemvoorkeur: Alice (Engels) / Xander (Nederlands)

## Navigatie

• Navigatiemethode 2 voorkeur
• Volgorde voorkeur: methode 2 → 3 → 1 (mogelijk 1 en 2 combineren?)

• Table of contents (methode 2) is het prettigst
• Elk kopje beschrijven in 1 zin, beschrijvender

• Nuttig bij wetenschappelijke artikelen, dan hoeft hij geen onnodige info door te spitten
• PDF’s zijn een belangrijk use case

• Een samenvatting van de pagina zou ook handig zijn (zeker bij pdf's) zodat hij niet de hele pagina door hoeft te gaan
• Ruimte voor add nonsense → grappende teksten (saaie onderzoekmethodes worden eerst besproken)

Voor de volgende test wil ik de tweede navigatie manier (table of contents) verder uitwerken met beschrijvende kopjes en mogelijk een "ai samenvatting" alleen weet ik niet in hoeverre ik dit zou kunnen toepassen op pdf's. Daarom ga ik nog opzoek naar een goed voorbeeld van een lange tekst voor de volgende iteratie. 

## Voortgang/checkout
Ik begon de dag weer met de weekly geek en daarna de gebruikerstest, vervolgens heb ik nog de aantekeningen hiervan verwerkt, een plan opgesteld wat ik voor de volgende test wil gaan doen en ene begin voor het volgende prototype.

<img width="868" height="578" alt="Screenshot 2026-04-10 at 10 54 08" src="https://github.com/user-attachments/assets/0d457e04-658b-4a6f-9c98-8b64dbcee2f5" />

## Feedback
Goed op weg, test het met een relevanter stuk tekst - economisch onderzoek pdf.

# Week 3

## Prototype voor week 3
Voor week 3 heb ik alle feedback toegepast van de week 2 test:
- Beschrijvende kopjes voor meer context
- Samenvatting onder de inhoudsopgave ---> Add nonsense, op een grappende manier geschreven
- Prototype nagemaakt voor een relevant pdf document --> alsof het voor de Centraal Economisch Plan 2026 pdf is gemaakt. Ik heb de inhoudsopgave iets ingekort en alleen de kern erin gelaten omdat dat het punt overbrengt. Dit keer ook geen extra tekst toegevoegd van het bestand zelf aangezien dat niet relevant is voor de test en vorige keer Ihab (vanzelfsprekend) door ging met de content van het nieuwsartikel wat niet relevant was dus moest ik hem onderbreken.
- Visueel gezien niet speciaal, daar draait het ook niet om, maar juist de functionaliteit ervan.

<img width="302" height="433" alt="Screenshot 2026-04-14 at 09 50 13" src="https://github.com/user-attachments/assets/a1120060-c32f-4e5d-8387-d066a03bfbb0" /> 

 <img width="749" height="822" alt="Screenshot 2026-04-14 at 09 50 58" src="https://github.com/user-attachments/assets/8620a428-b40b-43a5-b74e-bac6872c2d35" />

## Test week 3 aantekeningen
Observeren, vragen:
- Wat vind je algemeen? Vind je dit fijn werken? Of zou je nog wat aanpassen?
- Moet de inhoudsopgave uitgebreider?
- Moet de samenvatting uitgebreider of juist korter?
- Mis je nog iets? Bijvoorbeeld nog een functionaliteit die je kan helpen 
- Zou je per kopje de geschatte leestijd willen zien?
- Stel dit was een uitgewerkte extensie zou je dan twee verschillende shortcuts willen voor aan en uit zetten? Of nog andere shortcuts, bijvoorbeeld meteen naar de samenvatting kunnen skippen.

Ihab was over het algemeen tevreden, lengte van de inhoudsopgave was prima.
Lengte van de samenvatting is prima, leuke toevoeging van de informele toon ofwel "quirky" zoals Ihab het zelf noemde. Toevoeging hieraan, maak er knoppen van zodat je kan switchen tussen serieus en "quirky".

Verder had hij niet echt toevoegingen dus vroeg ik of hij de toevoeging van leestijd per sectie handig zou vinden en of paginanummers hierbij aanvullen of overbodig zijn. Leestijd is gewenst (gebaseerd op zijn screenreader snelheid van 39), paginanummers overbodig. Noemde nogmaals dat het voor PDF's handig is en dat het voor het idee handig was om de pdf tekst bijbehorend voor de kopjes er ook in te zetten. Ik ga dus de bijbehorende sectie er ook deels inzetten voor een complete ervaring. 

Eventuele toevoeging: sneltoetsen
1 sneltoets voor aan/uit (maar is geen extensie dus niet heel nuttig), zorg ervoor dat het niet dezelfde sneltoetsen als nvda zijn. 

# Week 4

## Prototype voor week 4
- Sr only tekst toegevoegd voor introductie prototype
- Feedback verwerkt, knoppen voor samenvatting modus serieus/onserieus, leestijd per kopje en totale leestijd
- PDF tekst erin gezet wat hoort bij het kopje voor een completer idee van het prototype

Verder heb ik op mijn windows computer zelf met NVDA verschillende dingen getest met betrekking tot de buttons om tot op zekere hoogte een goede ervaring te zorgen. Ik weet natuurlijk niet hoe Ihab zijn screenreader precies gebruikt maar uit de test zal blijken of hij het fijn vind. Op dit moment test ik met dingen zoals aria-pressed, aria-live, tabindex en focus. Zo had ik eerst met aria pressed er zonder dat ik het doorhad een toggle button van gemaakt terwijl het losse buttons zijn. In mijn geval is een radio button beter met de default selected value volgens toegankelijkheid richtlijnen, zo niet hoor ik dat natuurlijk van Ihab.

<img width="620" height="299" alt="image" src="https://github.com/user-attachments/assets/99fde8ab-9c19-43ca-b101-45d8f7ada9bd" />

<img width="772" height="841" alt="Screenshot 2026-04-21 at 10 11 34" src="https://github.com/user-attachments/assets/595e3b54-28c6-48a7-8f33-eb325993e0c7" />


## Test week 4 aantekeningen
Observeren, vragen
- Welke manier van keuze maken vind je fijner? Waarom?
- Wat vind je in het algemeen?
- Zijn er dingen die je mist of toch anders zou willen zien? Dit kan alles zijn.

Observatie:
i.p.v. 1.5 minuut anderhalf minuut. Leest fijner.
Gaat soepel door mijn prototype heen alle linkjes, knoppen etc werken.

- In eerste instantie zei hij dat beide fijn werkte, dus vroeg ik naar welke zijn voorkeur ging. De eerste keer gaf hij aan dat de eerste variatie beter was, maar na nog een keer testen de tweede.
- Variatie 2 vind hij fijner werken omdat je makkelijk door de twee keuzes kan navigeren met de pijltjestoetsen.
- Interface werkt goed, inhoudsopgave duidelijk, samenvatting duidelijk. Tevreden.

## Voortgang 
Ik heb de testresultaten verwerkt en mijn prototype daarop aangepast. 
- Tekst aangepast.
- Tweede variatie erin en eerste variatie eruit.
Stel dit project zou nog een aantal weken zijn, had ik zeker geprobeerd het echt technisch werkend te maken, waarbij Ihab het zelf zou kunnen gebruiken op een fijne manier voor PDF's en websites.

<img width="1157" height="1081" alt="image" src="https://github.com/user-attachments/assets/f3cc0eb8-689d-4809-898f-bd888583374d" />

## Final prototype

https://github.com/user-attachments/assets/d55a33a1-0545-4092-92a4-04dca8976c42



# Reflectie  - Exclusive design principles

## Study situation
In mijn ogen is study situation de kern van het hele vak, wat ik zeker heb toegepast. Ik heb de situatie van Ihab bestudeerd en onderzocht door elke test (zeker de eerste test zonder prototype) uit te voeren door middel van observaties en specifieke vragen stellen voor mijn situatie. Zo heb ik mijn idee elke week een beetje verfijnd om tot dit uiteindelijke resultaat te komen. Als eerst had ik een idee gepitched aan Ihab, wel op basis van de voorkeuren die Berend noemde aangezien Ihab niks specifieks had laten weten. Mijn idee om content te kunnen overslaan is van concept tot prototype ontwikkeld speciaal voor Ihab en wat hij fijn vind. 

## Ignore conventions
Ik vind ook dat je deze exclusive design principle eigenlijk standaard toepast. Ik ben gewoon het idee gaan uitwerken zonder rekening te houden met specifieke richtlijnen of conventies, natuurlijk heb ik wel rekening gehouden met de toegankelijkheids richtlijnen. Ik heb me puur gefocust op het praktische gedeelte en wat werkt voor Ihab. Laten we zeggen dat het geen standaard webapplicatie is.

## Prioritise identity
Voor het prototype heb ik alleen maar gefocust op Ihab en geen aannames gedaan van wat hij wel of niet fijn vind, gewoon elke keer geitereerd op basis van de tests. Het prototype is precies zo ingericht zoals hij aangaf het te willen hebben. Ook is zijn identiteit letterlijk terug te vinden in het woord 'quirky'. Ik had als voorstel het "niet serieuze samenvatting" voorgelegd en hij vond het een leuk idee: "een quirky samenvatting" zoals hij het noemde. Dat heb ik overgenomen en vervolgens erin verwerkt, met dat als titel voor de samenvatting. Tot slot had ik een screenreader only tekstje toegevoegd als soort introductie alleen voor Ihab.

## Add nonsense
Voor de test van week 3 heb ik zelf wat "nonsense" toegevoegd, in plaats van een serieuze samenvatting een onserieuze grappende samenvatting. Dit is juist ontoepasselijk bij een "serieus" document zoals het economisch plan en vond ik een onzinnige maar leuke toevoeging. Het was dan ook mooi om te horen dat Ihab het zelf ook een leuke toevoeging vond en is zo de "quirky samenvatting" tot stand gekomen. In de toekomst zou er ook nog ruimte zijn voor allerlei verschillende tonen van samenvatting, wat Ihab leuk zou vinden. Er is altijd wat ruimte voor nonsense!


## Bronnen
https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world

https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA

https://nos.nl/artikel/2609164-hoe-politiek-den-haag-grip-op-migratie-probeert-te-krijgen

https://www.cpb.nl/raming/centraal-economisch-plan-cep-2026

https://webaim.org/techniques/css/invisiblecontent/
