import React, { useState } from "react";
import "../css/graphql.css"
import { sampleQuery, sampleResponse } from "../utils/graphql";

function RickAndMortyGraphQL(){
    const RICK_AND_MORTY_GRAPHQL_URL = "https://rickandmortyapi.graphcdn.app/"
    const [code, setCode] = useState({query: sampleQuery, response: sampleResponse})

    function handleGraphQLQuery(e){
        e.preventDefault()

        const isFetching = Array.from(e.target.classList)
            .find(c => c === 'fa-stop')

        if(isFetching){
            return
        }

        e.target.classList.remove('fa-paper-plane')
        e.target.classList.add('fa-stop')

        fetch(RICK_AND_MORTY_GRAPHQL_URL, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({query: code.query})
        }).then(res => {
            if(res.ok){
                res.json().then(data => {
                    updateResponse(data)
                })
            }
        }).finally(() => {
            e.target.classList.add('fa-paper-plane')
            e.target.classList.remove('fa-stop')
        })
    }

    function updateResponse(response){
        setCode(code => {
            return {
                query: code.query,
                response: JSON.stringify(response, null, 3)
            }
        })       
    }

    function updateQuery(e){
        setCode(code => {
            return {
                query: e.target.value,
                response: code.response
            }
        })
    }

    return (
        <div id="rick-and-morty-graphql">
            <div className="left">
                <h2>Sample query</h2>
                <div className="sample-query">
                    <i className="fa fa-solid fa-paper-plane" onClick={handleGraphQLQuery}></i>
                    <textarea value={code.query} onChange={updateQuery}/>
                </div>
            </div>
            <div className="right">
                <h2>Sample response</h2>
                <pre className="sample-response">
                    <code className="language-json response-code">
                        {code.response}
                    </code>
                </pre>
            </div>
        </div>
    )
}

export default RickAndMortyGraphQL