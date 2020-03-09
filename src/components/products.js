import React from 'react';
import { connect } from 'react-redux';

import { catToPro , reset } from '../store/actions.js';

const renderProducts = props => {
  console.log('here',props);
  return (
    <section className="catSec">
      <ul>
        {props.activeCat.categories.map(cat => {
          // console.log('cat : ', cat.name);
          return <li onClick= {() => props.catToPro(cat.name)} key={cat.name}>
            <p id="catTitle"> Category Details : </p>
            <p>  Name : {cat.name} </p>
            <p> Display Name : {cat.displayName}</p>
            <p> Description : {cat.desp}</p>
          </li>;
        })}
      </ul>
    </section>
  );
}; // end of renderProducts function 

const mapStateToProps = state => ({
  activeCat: state.catPro,
});

const mapDispatchToProps = { catToPro, reset };

export default connect(mapStateToProps, mapDispatchToProps)(renderProducts);

