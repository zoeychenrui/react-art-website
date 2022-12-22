import React from 'react';
import Piece from '../Piece';
import '../Piece.css';

export default function Originals () {
    return (
        <div className='originals'>
            <h1>mostly pets</h1>
            <div className='container'>
            <div className='wrapper'>
                <ul className='pieces'>
                    <Piece
                    src='../../../public/original/worlds.jpg'
                    text='physical and virtual body-and-worlds'
                    path='/originals'
                    />
                    <Piece
                    src='../../../public/original/pumpkin-art'
                    text='pumpkin'
                    path='/originals'
                    />
                    <Piece
                    src='../../../public/original/toby-art'
                    text='toby'
                    path='/originals'
                    />
                    <Piece
                    src='../../../public/original/cole-art'
                    text='cole'
                    path='/originals'
                    />
                    <Piece
                    src='../../../public/original/clifford-art'
                    text='clifford'
                    path='/originals'
                    />
                    <Piece
                    src='../../../public/original/missy-art'
                    text='missy'
                    path='/originals'
                    />
                    <Piece
                    src='../../../public/original/pear-cat-art'
                    text='pear cat'
                    path='/originals'
                    />
                    <Piece
                    src='../../../public/original/computer-cat-art'
                    text='computer cat'
                    path='/originals'
                    />
                </ul>
            </div>
            </div>
        </div>
    )
}