import React from 'react';
import { connect } from 'react-redux';

const Status = props => {
    let currentState = {name: '', displayName: '', desp: ''} ;

    console.log('props : ', props.categories);
    let leader = props.categories.reduce ((chosenCat,record) => {
        let res = record.name === chosenCat.name ? record : chosenCat;
        return res;
    },currentState);

    return (
        <section>
            <span> Current Category : {props.desp}</span>
            {/* <span> Active Category : {props.} </span> */}
        </section>
    )
}


const mapStateToProps = state => ({
    desp: state.desp
    // candidates: state.candidates
  });
  
  export default connect(mapStateToProps)(Status);