function Recipes() {

    const recipes = [

        {
            title: 'Chocolate Cake',
            image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587'
        },

        {
            title: 'Pancakes',
            image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93'
        },

        {
            title: 'Healthy Salad',
            image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'
        },

        {
            title: 'Burger',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'
        },

        {
            title: 'Pizza',
            image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591'
        },

        {
            title: 'Pasta',
            image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9'
        },

        {
            title: 'Ice Cream',
            image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb'
        },

        {
            title: 'Tacos',
            image: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85'
        },

        {
            title: 'Donuts',
            image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307'
        },

        {
            title: 'Roasted Chicken',
            image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'
        },

        {
            title: 'French Toast',
            image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929'
        },

        {
            title: 'Sushi',
            image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
        },

        {
            title: 'Steak',
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947'
        },

        {
            title: 'Cupcakes',
            image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d'
        },

        {
            title: 'Fruit Bowl',
            image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea'
        },

        {
            title: 'Waffles',
            image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0'
        },

        {
            title: 'Macarons',
            image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b'
        },

        {
            title: 'Lasagna',
            image: 'https://images.unsplash.com/photo-1619895092538-128341789043'
        },

        {
            title: 'Chicken Salad',
            image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1'
        },

        {
            title: 'Mojito',
            image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd'
        },

        {
            title: 'Brownies',
            image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c'
        },

        {
            title: 'Hot Dog',
            image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a'
        },

        {
            title: 'Nachos',
            image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d'
        },

        {
            title: 'Milkshake',
            image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767'
        },

        {
            title: 'Croissant',
            image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff'
        },

        {
            title: 'Omelette',
            image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71'
        },

        {
            title: 'Fried Rice',
            image: 'https://images.unsplash.com/photo-1512058564366-c9e3c3d1b2a2'
        },

        {
            title: 'Spaghetti',
            image: 'https://images.unsplash.com/photo-1622973536968-3ead9e780960'
        },

        {
            title: 'Cheesecake',
            image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad'
        },

        {
            title: 'Smoothie',
            image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc'
        },

        {
            title: 'Avocado Toast',
            image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8'
        },

        {
            title: 'Soup',
            image: 'https://images.unsplash.com/photo-1547592180-85f173990554'
        },

        {
            title: 'BBQ Ribs',
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947'
        },

        {
            title: 'Cookies',
            image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e'
        },

        {
            title: 'Apple Pie',
            image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2'
        },

        {
            title: 'Seafood Pasta',
            image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141'
        },

        {
            title: 'Cappuccino',
            image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085'
        },

        {
            title: 'Falafel',
            image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd'
        },

        {
            title: 'Fried Chicken',
            image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb92'
        },

        {
            title: 'Ramen',
            image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e'
        },

        {
            title: 'Burrito',
            image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f'
        },

        {
            title: 'Pudding',
            image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777'
        },

        {
            title: 'Frappe',
            image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735'
        },

        {
            title: 'Shrimp',
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'
        },

        {
            title: 'Tiramisu',
            image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9'
        },

        {
            title: 'Dumplings',
            image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950'
        },

        {
            title: 'Lemonade',
            image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd'
        },

        {
            title: 'Crepes',
            image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548'
        },

        {
            title: 'Grilled Fish',
            image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2'
        },

        {
            title: 'Muffins',
            image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa'
        },

        {
            title: 'Fruit Juice',
            image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4'
        }

    ]

    return (

        <div
            style={{
                background: '#f8f5ef',
                minHeight: '100vh',
                fontFamily: 'Arial, sans-serif'
            }}
        >

            {/* NAVBAR */}
<div
    style={{
        background: '#f8f5ef',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 25px',
        borderBottom: '1px solid #ece7de',
        flexWrap: 'wrap',
        gap: '15px'
    }}
>

    <h1
        style={{
            color: '#234b3a',
            fontSize: '28px',
            margin: '0'
        }}
    >
        Recipes 🍰
    </h1>

    <div
        style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            fontSize: '15px'
        }}
    >
        <p>Home</p>
        <p>Recipes</p>
        <p>Blog</p>
        <p>Contact</p>
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
                    alignItems: 'center',
                    padding: '0 70px'
                }}
            >

                <div>

                    <p
                        style={{
                            color: '#ddd',
                            letterSpacing: '3px'
                        }}
                    >
                        THE COLLECTION
                    </p>

                    <h1
                        style={{
                            color: 'white',
                            fontSize: '70px',
                            margin: '10px 0'
                        }}
                    >
                        All Recipes
                    </h1>

                    <p
                        style={{
                            color: '#eee',
                            fontSize: '18px',
                            maxWidth: '600px',
                            lineHeight: '30px'
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
                    padding: '40px 50px 10px'
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
                            style={{
                                padding: '10px 18px',
                                borderRadius: '30px',
                                border:
                                    item === 'All'
                                        ? 'none'
                                        : '1px solid #ddd',
                                background:
                                    item === 'All'
                                        ? '#234b3a'
                                        : 'white',
                                color:
                                    item === 'All'
                                        ? 'white'
                                        : '#333',
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
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '25px',
        padding: '30px 50px 70px',
        maxWidth: '1400px',
        margin: '0 auto'
    }}
>
                {
                    recipes.map((recipe, index) => (

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
                    Recipes 🍰
                </h1>

                <p
                    style={{
                        color: '#ccc',
                        maxWidth: '500px',
                        lineHeight: '28px'
                    }}
                >
                    Bringing delicious recipes and food inspiration
                    from around the world.
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