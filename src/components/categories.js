import React from 'react';
import { connect } from 'react-redux';

const Status = props => {
    return (
        <section>
            {props.activeCat}
        </section>
    )
}

const mapStateToProps = state => ({
    activeCat:state.action.activeCat
})

export default connect(mapStateToProps)(Status);