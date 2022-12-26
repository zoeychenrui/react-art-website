import React from 'react'
import '../../App.css';

export default function Pinterest () {

    (function(d)
    {  var f = d.getElementsByTagName('SCRIPT')[0], 
    p = d.createElement('SCRIPT');  
    p.src = '//assets.pinterest.com/js/pinit.js';  
    f.parentNode.insertBefore(p, f);}(document));
    
    return (
        <center className="container">
            <a data-pin-do="embedBoard" data-pin-board-width="900" data-pin-scale-height="550" data-pin-scale-width="200" href="https://www.pinterest.com/zoeychen2013/paint-class/"></a>
        </center>
    )
}