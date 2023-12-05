import React from 'react';
import '../css/Testimonio.css';


function Testimonio({ texto }){
    return(
        
            <div className='testimonio-texto'>
                { texto }
            </div>
            
    );
}

export default Testimonio;