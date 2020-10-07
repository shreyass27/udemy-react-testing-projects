import React from 'react';
import { connect } from 'react-redux';
class Input extends React.Component {

    render() {
        return <div data-test="component-input">
            {this.props.success ? null :
                (
                    <form className="form-inline">
                        <input type="text" data-test="input-box" className="mb-2 mx-sm-3" placeholder="Enter guess" />
                        <button data-test='submit-button' className="btn btn-primary mb-2" type="submit">Submit</button>
                    </form>
                )}
        </div>;
    }
}

const mapStateToProps = ({ success }) => ({ success })

export default connect(mapStateToProps)(Input);
