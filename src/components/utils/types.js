import PropTypes from "prop-types"
export const ProgressBarPropsType = {
    skillName: PropTypes.string.isRequired,
    type: PropTypes.string,
    color: PropTypes.string,
    percents: PropTypes.number.isRequired,
}