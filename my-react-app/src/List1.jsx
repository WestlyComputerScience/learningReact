import PropTypes from 'prop-types';

function List1(props){

    const category = props.category;

    const itemList = props.items;

    const listItems = itemList.map(item => <li key = {item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>);

    return (
        <>
            <h3 className="list1-category">{category}</h3> {/* Category Name*/}
            <ol className="list1-items">{listItems}</ol> {/* list of the items */}
        </>
    );

}

List1.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, 
                                            category: PropTypes.string,
                                            calories: PropTypes.number})), // Allows us to define our array for PropTypes
};

List1.defaultProps = {
    category: "Category Name Missing",
    items: [], // items is empty array so something will display
};

export default List1