import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function ClassCards() {
    return (
        <div className='cards'>
            {/* <h1>Classes</h1> */}
            <div className="cards__container">
                <div className="cards__wrapper">

                    <h1 className='year'>2021</h1>

                    <ul className="cards__items">

                        <CardItem
                            src='images/img-3.jpg'
                            text='paper class'
                            label='Paper'
                            path='/'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='Theory class'
                            label='Theory'
                            path='/'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            text='Revision class'
                            label='Revision'
                            path='/'
                        />
                    </ul>


                    <h1 className='year'>2022</h1>

                    <ul className="cards__items">

                        <CardItem
                            src='images/img-1.jpg'
                            text='paper class'
                            label='Paper'
                            path='/'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Theory class'
                            label='Theory'
                            path='/'
                        />
                        <CardItem
                            src='images/img-5.jpg'
                            text='Revision class'
                            label='Revision'
                            path='/'
                        />
                    </ul>


                    <h1 className='year'>2022</h1>

                    <ul className="cards__items">

                        <CardItem
                            src='images/img-6.jpg'
                            text='paper class'
                            label='Paper'
                            path='/'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            text='Theory class'
                            label='Theory'
                            path='/'
                        />
                        <CardItem
                            src='images/img-9.jpg'
                            text='Revision class'
                            label='Revision'
                            path='/'
                        />
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default ClassCards
