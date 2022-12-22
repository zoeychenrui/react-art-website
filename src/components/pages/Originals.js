import React from 'react';
import Piece from '../Piece';
import '../Piece.css';

export default function Originals () {
    return (
        <div className='container'>
            <h2>mostly pets</h2>
            <div className='image-gallery'>
            <div className="column">
                <Piece
                    src='original/worlds.jpg'
                    text='physical and virtual body-and-worlds'
                    path='/originals'
                    />
                    <Piece
                    src='original/pumpkin-art.jpg'
                    text='pumpkin'
                    path='/originals'
                    />
                    <Piece
                    src='original/toby-art.jpg'
                    text='toby'
                    path='/originals'
                    />
            </div>
            <div className="column">
                    <Piece
                    src='original/cole-art.jpg'
                    text='cole'
                    path='/originals'
                    />
                    <Piece
                    src='original/clifford-art.jpg'
                    text='clifford'
                    path='/originals'
                    />
                    <Piece
                    src='original/missy-art.jpg'
                    text='missy'
                    path='/originals'
                    />
            </div>
            <div className="column">
                    <Piece
                    src='original/pear-cat-art.jpg'
                    text='pear cat'
                    path='/originals'
                    />
                    <Piece
                    src='original/computer-cat-art.jpg'
                    text='computer cat'
                    path='/originals'
                    />
            </div>
            </div>
        </div>
    )
}