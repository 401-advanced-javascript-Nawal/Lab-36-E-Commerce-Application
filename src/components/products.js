import React from 'react';
import { connect } from 'react-redux';

import { catToPro , reset } from '../store/actions.js';

const renderProducts = props => {
    return (
        <section>
            <ul>
                {props.categories.map(cat => {
                        return <li onClick= {() => props.catToPro(cat.name)} key={cat.name}>
                            {cat.name} - {cat.displayName} - {cat.desp}
                        </li>
                    })}
            </ul>
            <button onClick={props.reset}> Reset</button>
        </section>
    )
} // end of renderProducts function 

const mapStateToProps = state => ({
    activeCat: state.catPro
  })

const mapDispatchToProps = { catToPro, reset };

export default connect(mapStateToProps, mapDispatchToProps)(renderProducts);

