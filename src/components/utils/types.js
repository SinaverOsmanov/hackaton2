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
}

export const ButtonPropsType = {
    color: PropTypes.string, 
    clickHandler: PropTypes.func, 
    btnName: PropTypes.string.isRequired, 
    shape: PropTypes.string, 
    size: PropTypes.string, 
    type: PropTypes.string
}

export const SliderPropsType = {
    arrayComponents: PropTypes.array
}

export const CardPersonType = {
    user: PropTypes.object,
    onClickFavorite: PropTypes.func
}

export const UserType = {
    user: PropTypes.object,
    text: PropTypes.string
}