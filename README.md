# Polymer Hackaton

## Target

Creare un tag `<five-star>` che permetta di votare un elemento.

## Attributi

Da configurare:

Per il voto:
- Numero Elementi Totali
- Valore Si/No
- Valore di default
- * Step (0,5 - 1)
- Configurazione delle Icone
- * Mostrare la media dei voti (configurabile prima o dopo)

Commenti:
- Escape Stringhe
- Testo
- * Email
- * Nome e Cognome

Ajax Parameters:
- Dominio (nome)
- Id (Id del box)
- Url (EndPoint per chiamate AJAX)

## BE Data Structure:

```
{
	"_id": "",
	"domain":
	"refId":
	"votes:" [
		{
			"_id": 
			"vote":
		}
	],
	"comments": [
		{
			"_id":
			"text":
			"authorEmail":
			"authorName":
		}
	]
}
```