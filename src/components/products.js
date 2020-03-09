import React from 'react';
import { connect } from 'react-redux';

import { catToPro , disable , reset } from '../store/categories-actions.js';

const renderProducts = props => {
  console.log('props in render ',props);
  return (
    <section className="catSec">
      <ul>
        {props.activeCat.categories.map(cat => {
          // console.log('cat : ', cat.name);
          return <li 
          onClick= {() =>cat.disable?{}: props.catToPro(cat.name)} key={cat.name}
          onDoubleClick={() => props.disable(cat)}
          >
            <p id="catTitle"> Category Details : </p>
            <p>  Name : {cat.name} </p>
            <p> Display Name : {cat.displayName}</p>
            <p> Description : {cat.desp}</p>
        {/* <p>{props.activeCat}</p> */}
          </li>;
        })}
      </ul>
    </section>
  );
}; // end of renderProducts function 

const mapStateToProps = state => ({
  activeCat: state.catAct,
});

const mapDispatchToProps = { catToPro,disable,reset };

export default connect(mapStateToProps, mapDispatchToProps)(renderProducts);

