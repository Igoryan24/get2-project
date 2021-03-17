import React from 'react'
import ArticleItem from './ArticleItem'
import flights from './flights'

import "./flightsPage.scss"


const FlightsPage = () => {
    return (
        <div className="container">
            <h1 className="flights-head">FlightsPage</h1>
            <div className="row-article">
                {
                    flights.map(({
                        id,
                        head,
                        photo,
                        description,
                        classwindrose,
                        gridcol,
                        color,
                    }) => (
                        <ArticleItem
                            //id={head}
                            key={id}
                            head={head}
                            photo={photo}
                            description={description}
                            color={color}
                            classwindrose={classwindrose}
                            gridcol={gridcol}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default FlightsPage