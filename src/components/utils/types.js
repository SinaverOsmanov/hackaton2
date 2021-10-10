import PropTypes from "prop-types"
export const ProgressBarPropsType = {
    skillName: PropTypes.string.isRequired,
    type: PropTypes.string,
    color: PropTypes.string,
    percents: PropTypes.number.isRequired,
}

export const BadgePropsType = {
    title:PropTypes.string.isRequired,
    color:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
}

export const ButtonPropsType = {
    color:PropTypes.string.isRequired, 
    clickHandler:PropTypes.func, 
    btnName: PropTypes.string.isRequired, 
    shape:PropTypes.string.isRequired, 
    size:PropTypes.string.isRequired, 
    type: PropTypes.string.isRequired
}