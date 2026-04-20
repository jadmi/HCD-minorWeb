const btnSerieus = document.querySelector(".serieus");
const btnQuirky = document.querySelector(".quirky");
let samenvattingTitel = document.querySelector(".samenvattingTitel");
let samenvatting = document.querySelector(".samenvatting");

btnQuirky.addEventListener("click", function () {
  btnQuirky.setAttribute("aria-pressed", "true");
  btnSerieus.setAttribute("aria-pressed", "false");
  samenvattingTitel.innerHTML = `Quirky samenvatting`;
  samenvatting.innerHTML = `Nederland doet het acceptabel, niet geweldig, maar ook niet slecht zoals je zou denken. De economie groeit een beetje, de lonen stijgen, en de meeste mensen houden iets meer over dit jaar. Maar volgend jaar pakt de overheid dat natuurlijk weer deels terug via belastingen. De overheid zelf geeft flink meer uit dan binnenkomt, vooral aan defensie omdat de wereldmachten zich niet kunnen gedragen. Europa heeft ons al een briefje gestuurd dat we alert moeten blijven. Nederlanders zijn mogelijk luier geworden, voor het eerst in jaren zijn er meer werklozen dan vacatures. De energieprijzen kunnen nog een ongelukkige verrassing worden als de oorlog in het Midden-Oosten verder escaleert. Kortom: het gaat wel, maar er zijn genoeg dingen om je zorgen over te maken zoals elk jaar..`;
  samenvattingTitel.focus();
});

btnSerieus.addEventListener("click", function () {
  btnSerieus.setAttribute("aria-pressed", "true");
  btnQuirky.setAttribute("aria-pressed", "false");
  samenvattingTitel.innerHTML = `Serieuze samenvatting`;
  samenvatting.innerHTML = `De Nederlandse economie groeit gematigd door in 2026 en 2027, gedragen
      door hogere huishoudconsumptie en overheidsbestedingen. De bbp-groei
      bedraagt 1,4% in 2026 en 1,1% in 2027. De koopkracht stijgt in 2026 met
      1,4% door reële loonstijging, maar blijft in 2027 nagenoeg gelijk doordat
      lastenverzwaringen uit het coalitieakkoord de loongroei compenseren. Het
      overheidstekort loopt op van -1,6% bbp in 2025 naar -2,6% in 2026, mede
      door een eenmalige bijstorting van 8,2 miljard euro voor de
      defensiepensioenen. Op de middellange termijn verslechtert het EMU-saldo
      verder richting -3,1% bbp in 2034, waarmee Nederland de Europese
      begrotingsnorm dreigt te overschrijden. De arbeidsmarkt koelt verder af:
      voor het eerst sinds 2021 zijn er meer werklozen dan vacatures, en de
      werkloosheid stijgt naar 4,3% in 2027. Geopolitieke onzekerheid, met name
      door de oorlog in het Midden-Oosten, vormt het grootste neerwaartse risico
      voor inflatie en economische groei.`;
  samenvattingTitel.focus();
});
