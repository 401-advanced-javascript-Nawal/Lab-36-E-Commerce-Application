import React from 'react';
import { connect } from 'react-redux';
import { catToPro , reset } from '../store/actions.js';

const Status = props => {
    return (
        <section>
            <ul>
            {props.activeCat.products.map(pro => {
                    console.log('cat : ', pro.name);
                        return <li onClick= {() => props.catToPro(pro.name)} key={pro.name}>
                            {pro.catName} - {pro.name} - {pro.desc} - {pro.price} - {pro.invCount}
                        </li>
                    })}
            </ul>
            <button onClick={props.reset}> Reset</button>
            <div>
            {props.activeCatN}
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