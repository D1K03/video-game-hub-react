import './CategoryItem.css'

const CategoryItem = ({ icon, description }) => {
    const Icon = icon;
    
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