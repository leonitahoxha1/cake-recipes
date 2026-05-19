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
                    height: '60px',
                    background: '#f8f5ef',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0 45px',
                    borderBottom: '1px solid #ece7de'
                }}
            >

                <h1
                    style={{
                        color: '#234b3a',
                        fontSize: '32px',
                        margin: '0'
                    }}
                >
                    Recipes 🍰
                </h1>

                <div
                    style={{
                        display: 'flex',
                        gap: '25px',
                        color: '#333',
                        fontSize: '15px'
                    }}
                >
                    <p>Home</p>
                    <p>Recipes</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>

                <button
                    style={{
                        background: '#234b3a',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '30px',
                        cursor: 'pointer',
                        fontSize: '14px'
                    }}
                >
                    Subscribe
                </button>

            </div>

            {/* HERO SECTION */}

            <div
                style={{
                    height: '420px',
                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(https://images.unsplash.com/photo-1490645935967-10de6ba17061)',
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
                            color: '#d4d4d4',
                            letterSpacing: '3px',
                            marginBottom: '10px',
                            fontSize: '13px'
                        }}
                    >
                        THE COLLECTION
                    </p>

                    <h1
                        style={{
                            color: 'white',
                            fontSize: '65px',
                            margin: '0',
                            lineHeight: '70px'
                        }}
                    >
                        All Recipes
                    </h1>

                    <p
                        style={{
                            color: '#eee',
                            marginTop: '18px',
                            fontSize: '18px',
                            maxWidth: '600px',
                            lineHeight: '30px'
                        }}
                    >
                        Discover delicious recipes, desserts and food ideas
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
                        'Traditcional',

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
                                cursor: 'pointer',
                                fontSize: '14px'
                            }}
                        >
                            {item}
                        </button>

                    ))
                }

            </div>

           

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns:
                        'repeat(auto-fit,minmax(240px,1fr))',
                    gap: '25px',
                    padding: '30px 50px 60px'
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
                                    height: '190px',
                                    objectFit: 'cover'
                                }}
                            />

                            <div
                                style={{
                                    padding: '18px'
                                }}
                            >

                                <h2
                                    style={{
                                        color: '#234b3a',
                                        marginBottom: '10px',
                                        fontSize: '22px'
                                    }}
                                >
                                    {recipe.title}
                                </h2>

                                <p
                                    style={{
                                        color: '#666',
                                        lineHeight: '22px',
                                        fontSize: '14px'
                                    }}
                                >
                                    Delicious recipes made with fresh
                                    ingredients and amazing flavor.
                                </p>

                                <button
                                    style={{
                                        marginTop: '18px',
                                        background: '#234b3a',
                                        color: 'white',
                                        border: 'none',
                                        padding: '10px 18px',
                                        borderRadius: '25px',
                                        cursor: 'pointer',
                                        fontSize: '14px'
                                    }}
                                >
                                    View Recipe
                                </button>

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>

    )

}

export default Recipes