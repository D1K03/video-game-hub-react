import './CategoryItem.css'

const CategoryItem = ({ icon: Icon, description }) => {
    return (
        <li>
            <span className='icon-background'>
                <Icon />
            </span>
            <span>{description}</span>
        </li>
    );
};

export default CategoryItem;