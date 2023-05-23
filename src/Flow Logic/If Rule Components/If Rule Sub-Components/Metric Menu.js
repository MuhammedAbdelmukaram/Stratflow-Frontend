import React, { useState } from 'react';


const ArrowDown = {
    appearance: "none",
    backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 10l5 5 5-5z\"/></svg>')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 7px top 50%",
    paddingRight: "20px"
};



const categories = [
    {
        name: 'Interactive Add-Ons',
        items: ['Total Cost', 'Item 2', 'Item 3'],
    },
    {
        name: 'Category 2',
        items: ['Item 4', 'Item 5', 'Item 6'],
    },
    {
        name: 'Category 3',
        items: ['Item 7', 'Item 8', 'Item 9'],
    },
];

const MenuItem = ({ item, onClick, isSelected }) => (
    <div
        style={{padding:3,
                cursor:"pointer"
        }}
        className={`menu-item ${isSelected ? 'selected' : ''}`}
        onClick={onClick}
    >
        {item}
    </div>
);

const CategoryMenu = ({ categories, onCategorySelect, onItemSelected }) => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        onCategorySelect(category);
    };

    const handleItemClick = (item) => {
        onItemSelected(item);
    };


    return (
        <div
            className="category-menu"
            style={{ position: 'absolute', left: 50, display:"flex", fontSize:12,backgroundColor:"white",boxShadow: '1px 3px 8px 1px rgba(0,0,0,0.24)', zIndex:2,
                     padding:5, borderRadius:4, border:"1px solid #A7A7A7"}}
        >
            <div className="category-list"
            style={{height:"fit-content", width:140,
           }}
            >
                {categories.map((category) => (
                    <MenuItem
                        style={{width:"max-content"}}
                        key={category.name}
                        item={category.name}
                        isSelected={category === selectedCategory}
                        onClick={() => handleCategoryClick(category)}
                    />
                ))}
            </div>
            <div
            style={{backgroundColor:"white", zIndex:2, borderLeft:"1px solid black", height:"fit-content", paddingLeft:10,
            width:200, fontWeight:"bold", fontSize:10}}
                className="item-list">
                {selectedCategory.items.map((item) => (
                    <MenuItem
                        key={item}
                        item={item}
                        onClick={() => handleItemClick(item)}
                    />
                ))}
            </div>
        </div>
    );
};

const MetricMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleMenuClick = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    const handleCategorySelect = (category) => {
        console.log(`Selected category: ${category.name}`);
    };

    const handleItemSelected = (item) => {
        setSelectedItem(item);
        setIsMenuOpen(false);
    };

    return (
        <div
            className="menu-container"
            style={{ position: 'relative', backgroundColor:"white" }}
        >
            <div
                className="clickable-element"
                style={
                {
                    marginLeft: 30,
                    width: 126,
                    border: '1px solid black',
                    fontSize:12,
                    height:'2rem',
                    borderRadius: 4,
                    boxShadow: '1px 3px 8px 1px rgba(0, 0, 0, 0.24)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems:"center",
                    cursor:"pointer",
                    ...ArrowDown
                }}
                onClick={handleMenuClick}
            >
                {selectedItem ? selectedItem : 'Add Metric!'}
            </div>
            {isMenuOpen && (
                <CategoryMenu
                    categories={categories}
                    onCategorySelect={handleCategorySelect}
                    onItemSelected={handleItemSelected}
                />
            )}
        </div>
    );
};

export default MetricMenu;