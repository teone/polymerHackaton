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

# Server

Per far partire il server, entrare nella cartella `server` ed eseguire il comando
```
node server.js
```

Il BackEnd sarà ora raggiungibile all'indirizzo `http://127.0.0.1:3000/api`

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

## Available Endpoint:

- `127.0.0.1:3000/api/fiveStar` [POST] -> Crea un elemento
- `127.0.0.1:3000/api/fiveStar/:label/:refId` [GET] -> Get di un elemento
- `127.0.0.1:3000/api/fiveStar/:label/:refId/vote` -> Vota un elemento (campo required `vote`)
- - `127.0.0.1:3000/api/fiveStar/:label/:refId/comment` -> Commenta un elemento (campo required `text`)

## TODO
- Nella creazione di un elemento controllare che non sia duplicato