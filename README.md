www
===

#struktura plików

Główny plik strony: <code>_layouts/default.html<code>

Odpala pętle chodzącą po wszystkich plikach w <code>_slides</code>. W nich są dane wyświetlane poźniej na stronie i to te pliki edytujesz żeby zmienić coś na stronie (nazwy zazwierają daty - slidy posegregowane są wg. daty). Każdy slide do wyświetlania siebie używa templata, który znajduje się w <code>_includes/slides/nazwa-slida</code>.

Template dla slidu personel zawiera pętle wyświetlające zdjęcia. Dane do nich są w pliku <code>_data/galleries.yml</code> Zdjęcia są w katalogu images.

#style strony

Pliki, które mialbys edytowac sa w katalogu <code>_scss</code>. Plik konfiguracyjny jest w katalogu <code>_sass</code>. W katalogu <code>_plugin</code> jest skrypt kompilujący <code>scss</code> do <code>css</code>.

#opis strony
W pliku <code>_config.yml</code> masz dane konfiguracyjne dla jekyll i tytuł i opis strony.

#head, header, footer

Do pliku default.html masz zaincludowane pliki:
* head.html - zawartość tagu </code><head></head></code>
* header.html - lewa kolumna strony (nawigacja i logo)
* footer.html - stopka strony

#javascript

w pliku <code>head.html</code> ładują się dwa małe skrypty <code>enquire.js</code> i <code>modernizr.js</code>. Modernizr rozpoznaje funkcję, które obsługuje przeglądarka i pomoga dopasować do niej stronę.

W pliku <code>footer.html</code> za pomocą <code>enquier.js</code> sprawdzam na jakim urządzeniu się znajdujemy i w zależności ładuje odpowiednie skrypty. Co najwaznejsze robi to po załadowaniu strony, dzięki czemu strona nie musi czekać na pliki, które nie są potrzebne do jej wyświetlenia i znacznie przyśpiesza ogólne działanie.

Zdjęcia w tłąch slidów ładują się tylko wtedy gdy są wyświetlane, czyli na dużym ekrania. (łądują się po załądowaniu reszty strony).

#zdjęcia

W przyszości gdy będziecie dodawać zdjęcia do strony posstarajcię się jej nimi nie zapchać. Możecie użyc takich samych rozmiarów jakie znajdują się do tej pory.

Przed wgraniem zdjęć proponowałbym przepuścic je przez https://kraken.io/ lub inną podobna strone. Kożysta ze znacznie wydajniejszych metod kompresji niz wiekszosc oprogramowania (wlaczajac photoshopa).

