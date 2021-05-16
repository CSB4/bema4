www
===

# struktura plików

Główny plik strony: `_layouts/default.html`.

Odpala pętle chodzącą po wszystkich plikach w `_slides`. W nich są dane wyświetlane poźniej na stronie i to te pliki edytujesz żeby zmienić coś na stronie (nazwy zawierają daty - slidy posegregowane są wg. daty). Każdy slide do wyświetlania siebie używa template, który znajduje się w `_includes/slides/<nazwa-slida>`.

Template dla slidu personel zawiera pętle wyświetlające zdjęcia. Dane do nich są w pliku `_data/galleries.yml`. Zdjęcia są w katalogu images.

# style strony

Pliki, które miałbyś edytować są w katalogu `_scss`. Plik konfiguracyjny jest w katalogu `_sass`. W katalogu `_plugin` jest skrypt kompilujący `scss` do `css`.

# opis strony

W pliku `_config.yml` masz dane konfiguracyjne dla jekyll, tytuł i opis strony.

# head, header, footer

Do pliku `default.html` masz zaincludowane pliki:

* `head.html` - zawartość tagu `<head></head>`
* `header.html` - lewa kolumna strony (nawigacja i logo)
* `footer.html` - stopka strony

# javascript

w pliku `head.html` ładują się dwa małe skrypty `enquire.js` i `modernizr.js`. Modernizr rozpoznaje funkcję, które obsługuje przeglądarka i pomoga dopasować do niej stronę.

W pliku `footer.html` za pomocą `enquier.js` sprawdzam na jakim urządzeniu się znajdujemy i w zależności ładuje odpowiednie skrypty. Co najwaznejsze robi to po załadowaniu strony, dzięki czemu strona nie musi czekać na pliki, które nie są potrzebne do jej wyświetlenia i znacznie przyśpiesza ogólne działanie.

Zdjęcia w tłach slidów ładują się tylko wtedy gdy są wyświetlane, czyli na dużym ekrania. (Ładują się po załadowaniu reszty strony.)

# zdjęcia

W przyszości gdy będziecie dodawać zdjęcia do strony postarajcię się jej nimi nie zapchać. Możecie użyć takich samych rozmiarów jakie znajdują się do tej pory.

Przed wgraniem zdjęć proponowałbym przepuścic je przez https://kraken.io/, https://cloudinary.com/, lub inną podobną stronę. Korzysta ze znacznie wydajniejszych metod kompresji niż większość oprogramowania (włączając Photoshopa).

