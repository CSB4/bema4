www
===

#struktura plików

Główny plik strony: _layouts/default.html

Odpala pętle chodzącą po wszystkich plikach w _slides. W nich są dane wyświetlane poźniej na stronie i to te pliki edytujesz żeby zmienić coś na stronie (nazwy zazwierają daty - slidy posegregowane są wg. daty). Każdy slide do wyświetlania siebie używa templata, który znajduje się w _includes/slides/nazwa-slida.

Templaty dla slidów galeria i personel zawierają, pętle wyświetlające zdjęcia. Dane do nich są w pliku _data/galleries.yml Zdjęcia są w katalogu images.

#style strony

Pliki, które mialbys edytowac sa w katalogu _scss. Plik konfiguracyjny jest w katalogu _sass. W katalogu _plugin jest skrypt kompilujący scss do css.

#opis strony
W pliku _config.yml masz dane konfiguracyjne dla jekyll i tytuł i opis strony.

#head, header, footer

Do pliku default.html masz zaincludowane pliki: 
* head.html - zawartość tagu <head></head>
* header.html - lewa kolumna strony (nawigacja i logo)
* footer.html - stopka strony

#javascript

w pliku head.html ładują się dwa małe skrypty enquire.js i modernizr.js. Modernizr rozpoznaje funkcję, które obsługuje przeglądarka i pomoga dopasować do niej stronę.

W pliku footer.html za pomocą enquier.js sprawdzam na jakim urządzeniu się znajdujemy i w zależności ładuje odpowiednie skrypty. Co najwaznejsze robi to po załadowaniu strony, dzięki czemu strona nie musi czekać na pliki, które nie są potrzebne do jej wyświetlenia i znacznie przyśpiesza ogólne działanie.

#zdjęcia

W przyszości gdy będziecie dodawać zdjęcia do strony posstarajcię się jej nimi nie zapchać. Możecie użyc takich samych rozmiarów jakie znajdują się do tej pory w galerii (dosyć ważne żeby miniaturki do slidu galeria były kwadratami a zdjęcia personelu w formacie 2:3).

Przed wgraniem zdjęć proponowałbym przepuścic je przez https://kraken.io/ lub inną podobna strone. Kożysta ze znacznie wydajniejszych metod kompresji niz wiekszosc oprogramowania (wlaczajac photoshopa).

