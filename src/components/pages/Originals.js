import React from 'react';
import Piece from '../Piece';
import '../Piece.css';

export default function Originals () {
    return (
        <div className='container'>
            <h2>mostly pets</h2>
            <div className='image-gallery1'>
            <div className="column">
                <Piece
                    src='original/worlds.jpg'
                    src2='original/worlds-one.jpg'
                    text='physical and virtual body-and-worlds'
                    path='/originals'
                    />
                    <Piece
                    src='original/pumpkin-art.jpg'
                    src2='original/pumpkin-pic.jpg'
                    text='pumpkin'
                    path='/originals'
                    />
                    <Piece
                    src='original/toby-art.jpg'
                    src2='original/toby-pic.jpg'
                    text='toby'
                    path='/originals'
                    />
            </div>
            <div className="column">
                    <Piece
                    src='original/cole-art.jpg'
                    src2='original/cole-pic.jpg'
                    text='cole'
                    path='/originals'
                    />
                    <Piece
                    src='original/clifford-art.jpg'
                    src2='original/clifford-pic.jpg'
                    text='clifford'
                    path='/originals'
                    />
                    <Piece
                    src='original/missy-art.jpg'
                    src2='original/missy-pic.jpg'
                    text='missy'
                    path='/originals'
                    />
            </div>
            <div className="column">
                    <Piece
                    src='original/pear-cat-art.jpg'
                    src2='original/pear-cat-pic.PNG'
                    text='pear cat'
                    path='/originals'
                    />
                    <Piece
                    src='original/computer-cat-art.jpg'
                    src2='original/computer-cat-pic.jpg'
                    text='computer cat'
                    path='/originals'
                    />
            </div>
            </div>
        </div>
    )
}