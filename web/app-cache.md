## Offline Dokumente - App Cache

### Grundprinzip:

Definiere Dateien in einer zusätzlichen Datei einem sogenannten Manifest, die für Offline-Nutzung gespeichert werden sollen.

Außerdem ausgewählte Dateien bestimmen, die immer angefordert werden sollen und für andere Dateien eine Fallback-Lösung festlegen (Platzhalter-Dateien), die bei der Offline-Nutzung zum Einsatz kommen.


Bsp. für eine einfache Manifest-Datei

```js
CACHE MANIFEST		//Manifest einleiten
#Version 1.3		//Kommentar

style.css			//Pfade der Dateien zum Offline-Nutzung
bild1.jpg
bild2.jpg

NETWORK:			//Pfade zu Dokumenten, die immer online angefordert sollen
bild3.jpg

FALLBACK:			//Platzhalter für Offline-Modus angeben
bild4.jpg  platzhater.jpg	


// Manifest-Datei speichern mit der Endung appcache und mit HTML-Dokument verbinden
// manifest.appcache 
<html manifest=“manifest.appcache“>

```

weitere Informationen zu diesem Thema gibt es unter 
html5rocks.com/de/tutorials/appcache/beginner/
