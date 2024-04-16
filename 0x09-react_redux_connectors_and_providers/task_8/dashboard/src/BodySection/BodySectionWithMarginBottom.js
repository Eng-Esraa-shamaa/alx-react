import React, {Component} from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";
import { StyleSheet, css } from 'aphrodite';

const styles =StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: "40px",
    }

});

class BodySectionWithMarginBottom extends Component {
    render() {
        return(
            <div className="bodySectionWithMargin">
                <BodySection title={this.props.title}>
                    {this.props.children}
                </BodySection>
            </div>
        );
    }
}
BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
export default BodySectionWithMarginBottom;