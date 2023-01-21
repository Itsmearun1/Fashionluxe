import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './Dropdown.css';

const sections = [
    { name: 'FEATURED', items: ['New Arrivals', 'Best Sellers', 'Sale', 'Trending'] },
    { name: 'TOPS & SWEATERS', items: ['T-Shirts', 'Sweaters', 'Blouses', 'Shirts'] },
    { name: 'BOTTOMS', items: ['Pants', 'Jeans', 'Shorts', 'Skirts'] },
    { name: 'DRESSES', items: ['Day Dresses', 'Evening Dresses', 'Maxi Dresses', 'Mini Dresses'] },
    { name: 'ACTIVE', items: ['Workout Clothes', 'Sports Bras', 'Sneakers', 'Yoga Clothes'] },
    { name: 'COATS & JACKETS', items: ['Winter Coats', 'Leather Jackets', 'Trench Coats', 'Parkas'] },
    { name: 'SLEEPWEAR', items: ['Pajamas', 'Robe', 'Nightgowns', 'Slippers'] },
    { name: 'BRAS & INTIMATES', items: ['Bras', 'Panties', 'Shapewear', 'Lingerie'] },
    { name: 'SHOES & ACCESSORIES', items: ['Boots', 'Heels', 'Sneakers', 'Handbags'] },
    { name: 'SWIMWEAR', items: ['Bikinis', 'One-Piece Swimsuits', 'Cover-Ups', 'Beach Accessories'] },
    { name: 'HOME', items: ['Bed & Bath', 'Kitchen', 'Living Room', 'Outdoor'] },
    { name: 'CLEARANCE', items: ['Sale', 'Discounts', 'Clearance Items', 'Last Chance'] },
];

export const Dropdown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(null);

    return (
        <div className="dropdown-navbar-wrapper">
            {sections.map((section, index) => (
                <div
                    key={index}
                    className="dropdown-section"
                    onMouseEnter={() => setDropdownOpen(index)}
                    onMouseLeave={() => setDropdownOpen(null)}
                >
                    <h6>{section.name}</h6>
                    {dropdownOpen === index && (
                        <div className="dropdown-section-items" >
                            {section.items.map((item, i) => (
                                <NavLink to="products" key={i} style={{ textDecoration: 'none' }}>
                                    <div onClick={() => console.log(`${item} clicked`)}>{item}</div>
                                </NavLink>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
