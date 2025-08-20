import './CategoryItem.css'

const CategoryItem = ({ icon: Icon, description }) => {
    return (
        <li className="category-item">
            <Icon />
            <span>{description}</span>
        </li>
    );
};

export default CategoryItem;