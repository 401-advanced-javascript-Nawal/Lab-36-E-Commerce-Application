import React from 'react';
import { connect } from 'react-redux';

import { catToPro , reset } from '../store/actions.js';

const renderProducts = props => {
    console.log('here',props)
    return (
        <section>
            <ul>
                {props.activeCat.categories.map(cat => {
                    // console.log('cat : ', cat.name);
                        return <li onClick= {() => props.catToPro(cat.name)} key={cat.name}>
                            {cat.name} - {cat.displayName} - {cat.desp}
                        </li>
                    })}
            </ul>
        </section>
    )
} // end of renderProducts function 

const mapStateToProps = state => ({
    activeCat: state.catPro
  })

const mapDispatchToProps = { catToPro, reset };

export default connect(mapStateToProps, mapDispatchToProps)(renderProducts);

