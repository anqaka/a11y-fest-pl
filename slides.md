---
theme: ./
author: 'Ania Karoń'
position: 'Specjalista ds. Dostępności'
position2: 'i Senior Frontend Developer'
email: 'anna.karon@snow.dog'
profilePicture: '/anna-karon-photo.jpg'
linkedin: 'https://www.linkedin.com/in/anna-karon/'
highlighter: shiki
lineNumbers: false
hideInToc: true
mdc: true
---

# Jak tworzyć dostępny kod?

Praktycznie dla Frontendowców


---
layout: aboutme
class: "text-left"
hideInToc: true
---

---
layout: center
class: "text-center"
hideInToc: true
---

# Spis treści
<Toc />


---

# Frontendowa piaskownica

<v-click>

* HTML
* CSS
* JavaScript

</v-click>
<v-click>

* WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications)

</v-click>


---
layout: two-cols
---


# Struktura i semantyka

* Dokument HTML - RWD, język, tytuł
* Landmarks: `header`, `main`, `footer`, `section`, `nav`, `aside`
* Semantyczne elementy HTML: `<p>`, `<ul><li>...</li></ul>`, `<button>`, `<a href="/">`, `<article>`, `<address>`, `<time>`...


<div>&nbsp;</div>

<div v-click="8">
```html
<button type="button">
  Good button
</button>

<div @onclick="close" role="button">
  Bad button
</div>
```
</div>

::right::

<div v-click="1">
```html {2|4|5-8|11-15|16-20|25-27|all}
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Page title</title>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1"
    />
  </head>
  <body>
    <header>
      <nav>
        <ul><li>...</li></ul>
      </nav>
    </header>
    <main>
      <h1>Heading</h1>
      <section><h2>My favorite puffin</h2></section>
      ...
    </main>
    <aside>
      <h2>Sidebar - recently viewed</h2>
      ...
    </aside>
    <footer>
      ...
    </footer>
  </body>
</html>
```
</div>

---
layout: two-cols
---

# Nagłówki

<div>&nbsp;</div>

Nagłówki - `<h1>` - `<h6>`

* kolejność nagłówków
* semantyka nad stylami

<a href="https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi">HeadingsMap</a> - rozszerzenie do przeglądarki (Chrome, Firefox)

::right::

<v-click>
<div class="my-6">
  <img src="/headings-map.png" alt="zrzut z ekranu - HeadingsMap w akcji" />
</div>
</v-click>

---

# Dostępna nazwa

Niektóre elementy otrzymują swoje nazwy od treści, na przykład: przyciski, linki i nagłówki. Najlepszym sposobem jest użycie widocznej nazwy, która jest spójna dla wszystkich użytkowników.

Pełną listę elementów, które otrzymują nazwę od swojej zawartości, można znaleźć w dokumantach ARIA: <a href="https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/#naming_with_child_content" target="_blank">Nadawanie nazw na podstawie zawartości podrzędnej</a>


<v-click>

Natywne znaczniki do nazywania elementów HTML:


* `label` dla pól formularzy: `input`, `textarea`, `select`
* `legend` dla elementu `fieldset`
* `caption` dla elementu `table`
* `figcaption` dla `figure`
* ...

</v-click>

<div>&nbsp;</div>

<v-click>

Elementy graficzne bez widocznej etykiety powinny mieć tekst alternatywny

</v-click>


---
layout: two-cols-header
hideInToc: true
---
# Nazwy alternatywne

::left::

## aria-label

Dodajemy bezpośrednio do elementu
<v-click>
```html
<!-- overrides the content -->
<button type="button" aria-label="Close">
  X
</button>
```
</v-click>

<v-click>
```html
<!-- name and content are accessible -->
<nav aria-label="Customer">
  <ul>
    <li><a href="/profile">Profile</a></li>
    <li><a href="/settings">Settings</a></li>
    <li><a href="/logout">Logout</a></li>
  </ul>
</nav>
```
</v-click>

<div>&nbsp;</div>

<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label" target="_blank" v-after>
aria-label docs
</a>


::right::

## aria-labelledby

Podpinamy element (np. nagłówek), który opisuje sekcje używając jego `id`

<v-click>
```html
<h2 id="penguins-heading">Penguins list</h2>
<ul aria-labelledby="penguins-heading">
  <li>King penguin</li>
  <li>Adelie penguin</li>
  <li>Gentoo penguin</li>
</ul>
```
</v-click>
<div>&nbsp;</div>

<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby" target="_blank" v-after>
aria-labelledby docs
</a>

---
hideInToc: true
---

# Warto pamiętać

<v-clicks>

* Nie nadużywaj ARIA! Nie każdy element potrzebuje `aria-label`. Jeśli to możliwe, używaj natywnego rozwiązania HTML.
* Nie używaj `aria-label` na elementach `div`, `span` i `paragraph`. Sprawdź czy dany atrybut lub rola ARIA są dozwolone na danym elementcie.
* Gdy używasz `aria-label` lub `aria-labelledby` na przycisku lub linku z widocznym tekstem, wartość nazwy powinna odpowiadać widocznemu tekstowi lub przynajmniej zaczynać się od widocznego tekstu (WCAG SC 2.5.3). Jest to ważne dla użytkowników korzystających z poleceń głosowych, którzy odwołują się do widocznych etykiet.

</v-clicks>

<div>&nbsp;</div>

<v-click>

<a href="https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/" target="_blank">
Więcej informacji: Providing Accessible Names and Descriptions
</a>

</v-click>

---
hideInToc: true
---

# Alternatywna treść, uzupełnienie

## aria-describedby

Używamy, by dodać dodatkowy opis (np. do pola formularza lub przycisku), podpinamy element, używając jego `id`

<v-click>
```html
<form>
  <label for="fname">First name</label>
  <input aria-describedby="int2" autocomplete="given-name" id="fname" type="text">
  <p id="int2">Your first name is sometimes called your "given name".</p>
</form>
```
</v-click>

<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby" target="_blank" v-after>
aria-describedby docs
</a>

---
layout: two-cols-header
---

# Jak skutecznie schować element?

**Warto pamiętać!** Ukrywaj z rozwagą, może to wpłynąć na SEO (np,, wizualne ukrycie nagłówka)

::left::

<v-click>

**Dla wszystkich**

```css
.element {
  display: none;
  visibility: hidden;
}
```
</v-click>

<v-click>

**Dla technologii asystujących, nie wizualnie**

`aria-hidden="true"`

```html
<span aria-hidden="true">Decorative element</span>
```

</v-click>


::right::

<v-click>

**Tylko wizualnie**

```css
/* "sr" meaning "screen-reader" */

.sr-only:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
```
</v-click>

<v-click>

TailwindCss - `sr-only`

</v-click>


---

# Focus

**stan `focus` powinien być widoczny**

* css `outline`, przeglądarki dostarczają `focus`, jeśli nie dodajecie swoich styli, nie ustawiajcie `outline: none`
* kolejność elementów fokusowalnych
* `:focus` i `:focus-visible`


---

# ARIA najczęściej

## Live region

* `aria-live` - wskazuje AT dynamicznie zmieniające się na stronie (ustawiamy na kontenerze)
* wartość `polite` - informuje o zmianie, kiedy akończone zostanie aktualne zadanie
* wartość `assertive` - informuje o zmianie natychmiast
* `aria-atomic` - informuje, jak elementy w "obserwowanym" regionie (oznaczonym atrybutem `aria-live`) mają zostać przedstawione - tylko zmiany: `false`, czy wszystkie elementy: `true`

## Zmiana widoczności elementu

`aria-expanded="true / false"` - informuje o tym czy element jest widoczny czy schowany

---
layout: iframe
url: https://codepen.io/anqa/embed/eYbrjyp?default-tab=html%2Cresult
---

# W praktyce


---
layout: two-cols-right-wide
---

# Axe devTools

<a href="https://www.deque.com/axe/browser-extensions/" target="_blank">
Axe DevTools -<br> rozszerzenie do przeglądarki
</a>

::right::


<v-click>
<div class="my-6">
  <img src="/axe-devtools-example.png" alt="zrzut z ekranu - Axe DevTools w akcji" />
</div>
</v-click>


---

# Checklista A11y dla frontendowca

<style>
li {
  font-size: 0.875rem;
}
</style>

<ol>
  <li v-click>
    Uruchom Axe DevTools w przeglądarce, sprawdź błędy i napraw je. Dobrze jest mieć 0 błędów (chyba że problem nie jest związany z funkcjonalnością, nad którą pracujesz lub został naprawiony w innym zadaniu).
  </li>
  <li v-click>
    Sprawdź kolejność nagłówków na całej stronie (czy nowy komponent nie narusza tej kolejności). Możesz użyć rozszerzenia przeglądarki HeadingsMap
  </li>
  <li v-click>
    Jeśli pracujesz nad komponentem, który pokazuje i ukrywa zawartość (na przykład listę rozwijaną, dialog, dropdown itp.), uruchom skanowanie Axe DevTools dla obu wersji komponentu - widocznej i ukrytej.
  </li>
  <li v-click>
    Sprawdź wszystkie przyciski, które otwierają ukrytą zawartość - powinny mieć atrybut `aria-expanded="true/false"`.
  </li>
  <li v-click>
    Sprawdź wszystkie przyciski, które otwierają dialogi /popupy - powinny mieć atrybuty `aria-expanded="true/false"` i `aria-haspopup="dialog"`.
  </li>
  <li v-click>
    Przetestuj stronę klawiaturą i sprawdź czy:
    <ul>
      <li>
        wszystkie funckjonalności obsługiwane za pomocą myszy są również obsługiwane za klawiaturą
      </li>
      <li>
        wszystkie interaktywne elementy są fokusowalne
      </li>
      <li>
        stan `focus` jest widoczny i wyróżniający
      </li>
    </ul>
  </li>
</ol>


---

# Polecajki - Testowanie dostępności

## Testy automatyczne
* [Axe DevTools- rozszerzenie do przeglądarki](https://www.deque.com/axe/browser-extensions/)
* [Wave - rozszerzenie do przeglądarki](https://wave.webaim.org/extension/)
* [Lighthouse](https://developer.chrome.com/docs/lighthouse/accessibility/)
* [IBM Accessibility Equal Access Accessibility Checker](https://chrome.google.com/webstore/detail/ibm-equal-access-accessib/lkcagbfjnkomcinoddgooolagloogehp)
<div>&nbsp;</div>

## Testy manualne
* sprawdzenie kodu
* [ANDI](https://www.ssa.gov/accessibility/andi/help/install.html)
* Czytnik ekranu - VoiceOver (macOS), Narrator lub NDVA (Windows), [ChromeVox (rozszerzenie do przeglądarki)](https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn)

---

# Polecajki różne

* [Accessibility Non-checklist](https://not-checklist.intopia.digital/)
* [HeadingsMap - chrome extension](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi)
* [Blog post mojego autorstwa o Accessible Name](https://snow.dog/blog/how-to-use-accessible-names-properly-to-easily-improve-accessibility-of-your-website-aria-label-aria-labeledby-and-more)
* [Providing Accessible Names and Descriptions](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/)
* [ARIA Authoring Practice Guide - Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/)
* [CodePen Kitties](https://codepen.io/anqa/pen/eYbrjyp)

---
layout: center
class: "text-center"
---
# Poznań A11y Meetup

Serdecznie zapraszam na Meetup o Dostępności, który organizuję w Poznaniu

Najbliższe spotkaniu już 26.10 w Poznaniu! (oficjalne informacje już wkrótce ;) )


<a href="https://www.meetup.com/pl-PL/poznan-a11y-meetup/" target="_blank">Strona meetupu na Meetup.com</a>

<a href="https://www.youtube.com/@SnowdogApps" target="_blank">Nagrania z poprzednich meetupów na YouTube</a>


---
layout: thankyou

---
