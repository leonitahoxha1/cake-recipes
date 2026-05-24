import { useState } from 'react'

function Recipes() {

    const [selectedCategory, setSelectedCategory] = useState('All')

   const recipes = [

{
    title: 'Red Velvet Cake',
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg'
},

{
    title: 'Strawberry Cake',
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg'
},

{
    title: 'Chocolate Donuts',
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/4686960/pexels-photo-4686960.jpeg'
},

{
    title: 'Macarons',
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/239578/pexels-photo-239578.jpeg'
},

{
    title: 'Tiramisu',
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg'
},

{
    title: 'Cheesecake',
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg'
},

{
    title: 'Cookies',
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg'
},

{
    title: 'Brownies',
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/9170501/pexels-photo-9170501.jpeg'
},

{
    title: 'Cupcakes',
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg'
},

{
    title: 'Chocolate Cake',
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg'
},

{
    title: 'Pancakes',
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg'
},

{
    title: 'Ice Cream',
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg'
},

{
    title: 'Donuts',
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/4686960/pexels-photo-4686960.jpeg'
},
{
    title: 'Cake',
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/16544183/pexels-photo-16544183.jpeg'
},
{
    title: 'Orange',
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/14996603/pexels-photo-14996603.jpeg'
},

{
    title: 'Milkshake',
    category: 'Drinks',
    image: 'https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg'
},

{
    title: 'Iced Coffee',
    category: 'Drinks',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg'
},

{
    title: 'Orange Juice',
    category: 'Drinks',
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg'
},

{
    title: 'Berry Smoothie',
    category: 'Drinks',
    image: 'https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg'
},

{
    title: 'Mango Juice',
    category: 'Drinks',
    image: 'https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg'
},

{
    title: 'Smoothie',
    category: 'Drinks',
    image: 'https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg'
},

{
    title: 'Lemonade',
    category: 'Drinks',
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg'
},

{
    title: 'Cappuccino',
    category: 'Drinks',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg'
},

{
    title: 'Mojito',
    category: 'Drinks',
    image: 'https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg'
},

{
    title: 'Fruit Juice',
    category: 'Drinks',
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg'
},

{
    title: 'Greek Salad',
    category: 'Healthy',
    image: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg'
},

{
    title: 'Vegetable Bowl',
    category: 'Healthy',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'
},

{
    title: 'Healthy Sandwich',
    category: 'Healthy',
    image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg'
},

{
    title: 'Salmon Dish',
    category: 'Healthy',
    image: 'https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg'
},

{
    title: 'Fruit Plate',
    category: 'Healthy',
    image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg'
},

{
    title: 'Healthy Bowl',
    category: 'Healthy',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'
},

{
    title: 'Avocado Toast',
    category: 'Healthy',
    image: 'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg'
},

{
    title: 'Healthy Salad',
    category: 'Healthy',
    image: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg'
},

{
    title: 'Traditional Pizza',
    category: 'Traditional',
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg'
},

{
    title: 'Traditional Pasta',
    category: 'Traditional',
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg'
},

{
    title: 'Grilled Chicken',
    category: 'Traditional',
    image: 'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg'
},

{
    title: 'Rice Bowl',
    category: 'Traditional',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg'
},

{
    title: 'Fish Plate',
    category: 'Traditional',
    image: 'https://images.pexels.com/photos/3296279/pexels-photo-3296279.jpeg'
},

{
    title: 'Pizza',
    category: 'Traditional',
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg'
},

{
    title: 'Lasagna',
    category: 'Traditional',
    image: 'https://images.pexels.com/photos/5949888/pexels-photo-5949888.jpeg'
},

{
    title: 'Spaghetti',
    category: 'Traditional',
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg'
},

{
    title: 'Tacos',
    category: 'Traditional',
    image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg'
},

{
    title: 'Ramen',
    category: 'Traditional',
    image: 'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg'
},

{
    title: 'Burger',
    category: 'Traditional',
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg'
},

{
    title: 'Pasta',
    category: 'Traditional',
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg'
}
]

    const filteredRecipes =
        selectedCategory === 'All'
            ? recipes
            : recipes.filter(
                (recipe) =>
                    recipe.category === selectedCategory
            )

    return (

        <div
            style={{
                background: '#f8f5ef',
                minHeight: '100vh',
                overflowX: 'hidden',
                fontFamily: 'Arial, sans-serif'
            }}
        >

            {/* NAVBAR */}
<div
    style={{
        background: '#fff4df',

        position: 'fixed',

        top: '0',

        left: '0',

        width: '100%',

        zIndex: '1000',

        display: 'flex',

        justifyContent: 'space-between',

        alignItems: 'center',

        padding: '15px 25px',

        borderBottom: '1px solid #ece7de',

        flexWrap: 'wrap',

        gap: '15px',

        boxSizing: 'border-box'
    }}
>

    <h1
        style={{
            color: '#234b3a',

            fontSize: '28px',

            margin: '0'
        }}
    >
        Recipe 🍰
    </h1>

    <div
        style={{
            display: 'flex',

            gap: '20px',

            flexWrap: 'wrap',

            fontSize: '15px'
        }}
    >
        <a
    href="/"
    style={{
        textDecoration: 'none',
        color: '#234b3a',
        padding: '10px 18px',
        borderRadius: '25px',
        transition: '0.3s',
        fontWeight: '600',
        background: '#f3ead7'
    }}
>
    Home
</a>

<a
    href="/recipes"
    style={{
        textDecoration: 'none',
        color: '#234b3a',
        padding: '10px 18px',
        borderRadius: '25px',
        transition: '0.3s',
        fontWeight: '600',
        background: '#f3ead7'
    }}
>
    Recipes
</a>

<a
    href="/blog"
    style={{
        textDecoration: 'none',
        color: '#234b3a',
        padding: '10px 18px',
        borderRadius: '25px',
        transition: '0.3s',
        fontWeight: '600',
        background: '#f3ead7'
    }}
>
    Blog
</a>

<a
    href="/contact"
    style={{
        textDecoration: 'none',
        color: '#234b3a',
        padding: '10px 18px',
        borderRadius: '25px',
        transition: '0.3s',
        fontWeight: '600',
        background: '#f3ead7'
    }}
>
    Contact
</a>
    </div>

    <button
        style={{
            background: '#234b3a',

            color: 'white',

            border: 'none',

            padding: '10px 20px',

            borderRadius: '30px',

            cursor: 'pointer'
        }}
    >
        Subscribe
    </button>

</div>

            {/* HERO */}

            <div
                style={{
                    height: '420px',

                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(https://wallpapers.com/images/hd/food-4k-3gsi5u6kjma5zkj0.jpg)',

                    backgroundSize: 'cover',

                    backgroundPosition: 'center',

                    display: 'flex',

                    justifyContent: 'center',

                    alignItems: 'center',

                    textAlign: 'center',

                    padding: '0 20px'
                }}
            >

                <div>

                    <p
                        style={{
                            color: '#ddd',

                            letterSpacing: '3px',

                            fontSize: '14px'
                        }}
                    >
                        THE COLLECTION
                    </p>

                    <h1
                        style={{
                            color: 'white',

                            fontSize: '32px',

                            margin: '10px 0',

                            lineHeight: '40px'
                        }}
                    >
                        All Recipes
                    </h1>

                    <p
                        style={{
                            color: '#eee',

                            fontSize: '15px',

                            maxWidth: '500px',

                            lineHeight: '26px'
                        }}
                    >
                        Discover delicious recipes and food ideas
                        from around the world.
                    </p>

                </div>

            </div>

            {/* CATEGORY BUTTONS */}

            <div
                style={{
                    display: 'flex',
                    gap: '15px',
                    flexWrap: 'wrap',
                    padding: '40px 20px 10px'
                }}
            >

                {
                    [
                        'All',
                        'Desserts',
                        'Healthy',
                        'Drinks',
                        'Traditional'
                    ].map((item) => (

                        <button
                            key={item}

                            onClick={() =>
                                setSelectedCategory(item)
                            }

                            style={{
                                padding: '10px 18px',

                                borderRadius: '30px',

                                background:
                                    selectedCategory === item
                                        ? '#234b3a'
                                        : 'white',

                                color:
                                    selectedCategory === item
                                        ? 'white'
                                        : '#333',

                                border:
                                    selectedCategory === item
                                        ? 'none'
                                        : '1px solid #ddd',

                                cursor: 'pointer'
                            }}
                        >
                            {item}
                        </button>

                    ))
                }

            </div>

            {/* RECIPES */}

            <div
                style={{
                    display: 'grid',

                    gridTemplateColumns:
                        'repeat(auto-fit,minmax(260px,1fr))',

                    gap: '25px',

                    padding: '30px 20px 70px',

                    maxWidth: '1400px',

                    margin: '0 auto'
                }}
            >

                {
                    filteredRecipes.map((recipe, index) => (

                        <div
                            key={index}
                            style={{
                                background: 'white',
                                borderRadius: '18px',
                                overflow: 'hidden',
                                boxShadow:
                                    '0 5px 15px rgba(0,0,0,0.06)'
                            }}
                        >

                            <img
                                src={recipe.image}
                                alt=""
                                style={{
                                    width: '100%',
                                    height: '220px',
                                    objectFit: 'cover'
                                }}
                            />

                            <div
                                style={{
                                    padding: '20px'
                                }}
                            >

                                <h2
                                    style={{
                                        color: '#234b3a',
                                        fontSize: '24px'
                                    }}
                                >
                                    {recipe.title}
                                </h2>

                                <p
                                    style={{
                                        color: '#666',
                                        lineHeight: '25px',
                                        fontSize: '14px'
                                    }}
                                >
                                    Delicious recipes made with fresh
                                    ingredients and amazing flavor.
                                </p>

                                <button
                                    style={{
                                        marginTop: '15px',
                                        background: '#234b3a',
                                        color: 'white',
                                        border: 'none',
                                        padding: '10px 18px',
                                        borderRadius: '25px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    View Recipe
                                </button>

                            </div>

                        </div>

                    ))
                }

            </div>

            {/* FOOTER */}

            <div
                style={{
                    background: '#111',
                    color: 'white',
                    padding: '70px 50px'
                }}
            >

                <h1
                    style={{
                        color: '#d4a762'
                    }}
                >
                    Recipe
                </h1>

                <p
                    style={{
                        color: '#ccc',
                        maxWidth: '500px',
                        lineHeight: '28px'
                    }}
                >
                 
                </p>

                <div
                    style={{
                        display: 'flex',
                        gap: '40px',
                        flexWrap: 'wrap',
                        marginTop: '40px'
                    }}
                >
                    <p>All Recipes</p>
                    <p>Kitchen Store</p>
                    <p>Membership</p>
                    <p>Food Blog</p>
                    <p>Contact</p>
                </div>

                <hr
                    style={{
                        margin: '40px 0',
                        border: '1px solid #333'
                    }}
                />

                <p
                    style={{
                        color: '#888'
                    }}
                >
                    © 2026 Recipes. All rights reserved.
                </p>

            </div>

        </div>

    )
}

export default Recipes