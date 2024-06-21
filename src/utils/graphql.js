const sampleQuery = `
  query {
    characters(page: 2, filter: { name: "rick" }) {
      info {
        count
      }
      results {
        name
      }
    }
    location(id: 1) {
      id
    }
    episodesByIds(ids: [1, 2]) {
      id
    }
  }
`

const sampleResponse = `
{
    "data": {
      "characters": {
        "results": [
          {
            "name": "Rick Sanchez",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "origin": {
              "id": "1"
            },
            "id": "1"
          },
          {
            "name": "Morty Smith",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "origin": {
              "id": null
            },
            "id": "2"
          },
          {
            "name": "Summer Smith",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "origin": {
              "id": "20"
            },
            "id": "3"
          },
          {
            "name": "Beth Smith",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "origin": {
              "id": "20"
            },
            "id": "4"
          },
          {
            "name": "Jerry Smith",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "origin": {
              "id": "20"
            },
            "id": "5"
          },
          {
            "name": "Abadango Cluster Princess",
            "status": "Alive",
            "species": "Alien",
            "type": "",
            "origin": {
              "id": "2"
            },
            "id": "6"
          },
          {
            "name": "Abradolf Lincler",
            "status": "unknown",
            "species": "Human",
            "type": "Genetic experiment",
            "origin": {
              "id": "20"
            },
            "id": "7"
          },
          {
            "name": "Adjudicator Rick",
            "status": "Dead",
            "species": "Human",
            "type": "",
            "origin": {
              "id": null
            },
            "id": "8"
          },
          {
            "name": "Agency Director",
            "status": "Dead",
            "species": "Human",
            "type": "",
            "origin": {
              "id": "20"
            },
            "id": "9"
          },
          {
            "name": "Alan Rails",
            "status": "Dead",
            "species": "Human",
            "type": "Superhuman (Ghost trains summoner)",
            "origin": {
              "id": null
            },
            "id": "10"
          },
          {
            "name": "Albert Einstein",
            "status": "Dead",
            "species": "Human",
            "type": "",
            "origin": {
              "id": "1"
            },
            "id": "11"
          },
          {
            "name": "Alexander",
            "status": "Dead",
            "species": "Human",
            "type": "",
            "origin": {
              "id": "1"
            },
            "id": "12"
          },
          {
            "name": "Alien Googah",
            "status": "unknown",
            "species": "Alien",
            "type": "",
            "origin": {
              "id": null
            },
            "id": "13"
          },
          {
            "name": "Alien Morty",
            "status": "unknown",
            "species": "Alien",
            "type": "",
            "origin": {
              "id": null
            },
            "id": "14"
          },
          {
            "name": "Alien Rick",
            "status": "unknown",
            "species": "Alien",
            "type": "",
            "origin": {
              "id": null
            },
            "id": "15"
          },
          {
            "name": "Amish Cyborg",
            "status": "Dead",
            "species": "Alien",
            "type": "Parasite",
            "origin": {
              "id": null
            },
            "id": "16"
          },
          {
            "name": "Annie",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "origin": {
              "id": "1"
            },
            "id": "17"
          },
          {
            "name": "Antenna Morty",
            "status": "Alive",
            "species": "Human",
            "type": "Human with antennae",
            "origin": {
              "id": null
            },
            "id": "18"
          },
          {
            "name": "Antenna Rick",
            "status": "unknown",
            "species": "Human",
            "type": "Human with antennae",
            "origin": {
              "id": null
            },
            "id": "19"
          },
          {
            "name": "Ants in my Eyes Johnson",
            "status": "unknown",
            "species": "Human",
            "type": "Human with ants in his eyes",
            "origin": {
              "id": null
            },
            "id": "20"
          }
        ]
      }
    }
  }
`

export { sampleQuery, sampleResponse }