import React, { useEffect, useState } from "react";
import "./Pagination.css";
import Card from "./Card/Card";
import Loading from '../reusable/Loading'
let counter = 1;
let eachCardPage = 10
export default function Page() {
    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(false)
    const [current, setCurrent] = useState(1)

    useEffect(() => {
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/posts").then((respose) => (
            respose.json()
        )).then((responseData) => {
            const allCards = []

            for (const item in responseData) {
                allCards.push({
                    id: counter,
                    main: <Card
                        title={responseData[item].title}
                        body={responseData[item].body}
                    />
                })
                counter++;
            }
            setCards(allCards)
            setLoading(false)
        })
    }, [])

    let lastCardOfPage = eachCardPage * current
    let firstCardOfPage = lastCardOfPage - eachCardPage
    const cardsInOnePage = cards.slice(firstCardOfPage, lastCardOfPage);

    let content = ""
    if (loading) {
        content = <Loading />
    }
    else if (cardsInOnePage.length !== 0) {
        content = cardsInOnePage.map((item) => (
            <li key={item.id}>{item.main}</li>
        ))
    }
    function changePage(number) {
        setCurrent(number)
    }


    const pageNumbers = []
    let navbar = ""
    if (cards.length !== 0) {
        for (let index = 1; index <= Math.ceil(cards.length / eachCardPage); index++) {
            pageNumbers.push(index)
        }

        navbar = <ul className="nav-item">
            {pageNumbers.map((item) => (
                <li key={item}>
                    <a href="#top"><button onClick={() => changePage(item)}>{item}</button></a>
                </li>
            ))}
        </ul>

    }

    return (
        <div id="top" className="page-class">
            <ul>
                {content}
            </ul>
            <nav>
                {navbar}
            </nav>
        </div>
    )

}