<div align="center">
  <img src="/.github/assets/LOGO-RDS-API.png" />
</div>

<div align="center">
  <h1>Futebol GRAPHQL API</h1>
</div>
<div align="center">
  [:e-mail:]
  <img src="https://img.shields.io/static/v1?label=TypeScript&message=100%&color=green&labelColor=blue" alt="TypeScript" />

  <img src="https://img.shields.io/static/v1?label=GRAPHQL&message=V&color=green&labelColor=D70D95" alt="Graphql" />
</div>

## :star: Tecnologias - Ferramentas

- <img width="20px" src="https://graphql.org/img/logo.svg" alt="Graphql" />

- <img width="20px" src="https://rafaelsantos-dev.netlify.app/static/media/file_type_typescript_official_icon.a4675187b2d19ba3409b859297dff9da.svg" alt="TypeScript" />

- <img width="20px" src="https://typegraphql.com/img/logo.png" alt="Typegraphql" />

- <img width="20px" src="/.github/assets/apollo-server.png" alt="Apollo Server" />

- <img width="20px" src="https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png" />

# Iniciar

Clonar Projeto

```
git clone https://github.com/Rafael-Santos-DV/graphql-football-api.git
```

Acessar pasta

```bash
cd graphql-football-api
```

Instalar Depedências

```bash
yarn install
# or
npm install
```

Iniciar Aplicação

```bash
yarn dev
# or
npm run dev
```

Acessar: [localhost:4000](http://locahost:4000)

## Listar os jogos de hoje do campeonato Brasileiro Série A

```gql
query {
  todayMatches(championship: "serie-a", country: "brasil") {
    championship
    eventTime
    status
    homeTeam {
      name
      goals
      imageUrl
    }
    visitantTeam {
      name
      goals
      imageUrl
    }
  }
}
```

## Listar tabela do campeonato Brasileiro Série A

```gql
query {
  championshipTable(championship: "serie-a", country: "brasil") {
    name
    draws
    position
    goalsDifference
    goalsScored
    goalsTaken
    imageUrl
    loss
    matches
    points
    winners
  }
}
```

### Você pode fazer muitas coisas

## Queries

- **todayMatches** \
  Essa consulta procura os jogos de hoje de determinado campeonato

  Parâmetros aceitos:

  **championship: String**; -> required \
  **country: String**; -> required \
  **limit: Number**; -> optional

Exemplo:

```gql
query {
  todayMatches(championship: "serie-a", country: "brasil", limit: 1) {
    ...
  }
}
```

Possível retorno:

```json

"data": {
  "todayMatches": [
    {
      "championship": "<nome do campeonato>",
      "eventTime": "<horário>",
      "status": "<não iniciado | number | encerrado | adiado>",
      "visitantTeam": {
        "goals": "<number | ''>",
        "name": "<nome equipe visitante>",
        "imageUrl": "<logo da equipe visitante>"
      },
      "homeTeam": {
        "goals": "<number | ''>",
        "imageUrl": "<logo equipe da casa>",
        "name": "<nome da equipe da casa>"
      }
    }
  ]
}

```

- **lastMatches** \
   Essa consulta procura pelos últimos jogos de determinado time

  Parâmetros aceitos: \

  **id: String**; -> required \
   **limit: Number**; -> optional

  Exemplo:

  ```gql
  query {
    lastMatches(id: "<id da equipe>", limit: 1) {
      championship
      eventTime
      homeTeam {
        goals
        imageUrl
        name
      }
      visitantTeam {
        goals
        imageUrl
        name
      }
    }
  }
  ```

  Retorno:

  ```json
  {
    "data": {
      "lastMatches": [
        {
          "championship": "<campeonato>",
          "eventTime": "data e horário",
          "homeTeam": {
            "goals": "<number>",
            "imageUrl": "<logo url>",
            "name": "<nome da equipe da casa>"
          },
          "visitantTeam": {
            "goals": "<number>",
            "imageUrl": "<logo url>",
            "name": "<nome da equipe visitante>"
          }
        }
      ]
    }
  }
  ```

## Exemplo com React

//

### OBS: em desenvolvimento
