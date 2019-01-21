import React from 'react';
import PropTypes from 'prop-types'

class Collapsible extends React.Component {

    constructor() {
        super();
        this.state = {
            isExpanded: false
        }
    }

    handleToggle(e) {
        e.preventDefault();
        this.setState ({
            isExpanded: !this.state.isExpanded
        })
    }

    render() {
        const {title, children} = this.props
        const {isExpanded} = this.state

        return (
            <div className={`panel ${isExpanded ? 'is-expanded' : ''}`} onClick={(e) => this.handleToggle(e)}>
                <div className="panel-heading">
                    <h2>{title}</h2>
                </div>
                <div className="panel-collapse">
                    <div className="panel-body">
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}

Collapsible.propTypes = {
    title: PropTypes.string,
}

export default Collapsible;