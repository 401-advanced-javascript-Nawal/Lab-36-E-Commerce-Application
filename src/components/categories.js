import React from 'react';
import { connect } from 'react-redux';
import { catToPro, reset } from '../store/actions.js';

const Status = props => {
    return (
        <section className="proSec">
            <ul>
                {props.activeCat.products.map(pro => {
                    console.log('cat : ', pro.name);
                    return <li onClick={() => props.catToPro(pro.name)} key={pro.name}>
                        <p id="proTitle"> Product Details : </p>
                        <p>  Category Name : {pro.catName} </p>
                        <p>  Name :  {pro.name} </p>
                        <p> Description :  {pro.desc} </p>
                        <p> Price : {pro.price} </p>
                        <p> Inventory Count : {pro.invCount} </p>
                    </li>
                })}
            </ul>
            <p id="but">
                <button onClick={props.reset}> Reset</button>
            </p>
            <div>
                <p id="name"> Name : {props.activeCatN}</p>
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    activeCat: state.catPro,
    activeCatN: state.catPro.activeCat,

})

const mapDispatchToProps = { catToPro, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Status)