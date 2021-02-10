import PropTypes from 'prop-types';
import Button from './Button.js';

const Header = ({ tittle, onAdd, showAdd }) => {

    return (
        <header className="header">
            <h1>{tittle}</h1>
            <Button 
                onClick={onAdd}
                color={showAdd ? "red" : "green"}  
                text = {showAdd ? "Close" : "Add"} 
            />
        </header>
    )
}

Header.defaultProps = {
    tittle: "Task Tracker",
}

Header.propTypes = {
    tittle: PropTypes.string.isRequired,
}

export default Header
