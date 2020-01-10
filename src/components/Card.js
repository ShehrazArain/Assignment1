import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card(props) {
    const {card1, card2, card3} = props;
    return (
         <div className="container">
            <div className="row"> 
                <div className="col-4 shadow-sm p-3 mb-5 bg-white rounded">
                    <p className="g-card">aepe minima odio est tenetur, fugiat iusto in hic minus omnis. Nulla cupiditate saepe harum eligendi assumenda consequatur modi nostrum, rem culpa.</p>
                    <h3> {card1}</h3> <br/>
                    <p className="text">ratione quidem nemo dignissimos, quis consequatur quibusdam iusto omnis cum maiores eius. Fugiat, suscipit?</p>
                    <h4>$25</h4><hr/><hr/>
                    <button className="input">Add to Cart</button>
                </div>
               <div className="col-4 shadow p-3 mb-5 bg-white rounded">
                    <p className="y-card">aepe minima odio est tenetur, fugiat iusto in hic minus omnis. Nulla cupiditate saepe harum eligendi assumenda consequatur modi nostrum, rem culpa.</p>
                    <h3> {card2}</h3> <br/>
                    <p className="text">ratione quidem nemo dignissimos, quis consequatur quibusdam iusto omnis cum maiores eius. Fugiat, suscipit?</p>
                    <h4>$37</h4><hr/><hr/>
                    <button className="input">Add to Cart</button>
                </div>
                <div className="col-4 shadow-lg p-3 mb-5 bg-white rounded">
                    <p className="b-card">aepe minima odio est tenetur, fugiat iusto in hic minus omnis. Nulla cupiditate saepe harum eligendi assumenda consequatur modi nostrum, rem culpa.</p>
                    <h3> {card3}</h3> <br/>
                    <p className="text">ratione quidem nemo dignissimos, quis consequatur quibusdam iusto omnis cum maiores eius. Fugiat, suscipit?</p>
                    <h4>$49</h4><hr/><hr/>
                    <button className="input ">Add to Cart</button>
                </div>
            </div>
       </div>
    );
}

export function Footer(props) {
    return (
      <div className="footer">
<h1>{props.footer}</h1>
      </div>
    );
}

export default Card;