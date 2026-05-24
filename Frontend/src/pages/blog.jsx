function Blog() {

    const blogs = [

        {
            title: 'The Art of Slow Cooking',
            category: 'TECHNIQUE',
            image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
            text:
                'Learn how slow cooking creates deeper flavor and amazing texture in traditional recipes.'
        },

        {
            title: 'Healthy Food Ideas',
            category: 'INGREDIENTS',
            image: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg',
            text:
                'Learn how slow cooking creates deeper flavor and amazing texture in traditional recipes.'
        },

        {
            title: 'Kitchen Tips & Tricks',
            category: 'KITCHEN',
            image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg',
            text:
                'Learn how slow cooking creates deeper flavor and amazing texture in traditional recipes.'
        },

        {
            title: 'Best Homemade Bread',
            category: 'BAKING',
            image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg',
            text:
                'Learn how slow cooking creates deeper flavor and amazing texture in traditional recipes.'
        },

        {
            title: 'Easy Pasta Recipes',
            category: 'DINNER',
            image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
            text:
                'Learn how slow cooking creates deeper flavor and amazing texture in traditional recipes.'
        },

        {
            title: 'Fresh Summer Salads',
            category: 'HEALTHY',
            image: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg',
            text:
                'Learn how slow cooking creates deeper flavor and amazing texture in traditional recipes.'
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

            {/* HERO */}

            <div
                style={{
                    height: '320px',

                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg)',

                    backgroundSize: 'cover',

                    backgroundPosition: 'center',

                    display: 'flex',

                    alignItems: 'center'
                }}
            >

                <div
                    style={{
                        paddingLeft: '80px'
                    }}
                >

                    <p
                        style={{
                            color: '#d4a762',
                            letterSpacing: '2px',
                            fontSize: '13px'
                        }}
                    >
                        FROM THE KITCHEN
                    </p>

                    <h1
                        style={{
                            color: 'white',
                            fontSize: '60px',
                            margin: '10px 0'
                        }}
                    >
                        The Blog
                    </h1>

                    <p
                        style={{
                            color: '#eee',
                            maxWidth: '500px',
                            lineHeight: '30px',
                            fontSize: '18px'
                        }}
                    >
                        Technique guides, ingredient ideas and
                        seasonal cooking inspiration from our team.
                    </p>

                </div>

            </div>

            {/* BLOG CARDS */}

            <div
                style={{
                    display: 'grid',

                    gridTemplateColumns:
                        'repeat(auto-fit,minmax(320px,1fr))',

                    gap: '35px',

                    maxWidth: '1200px',

                    margin: '0 auto',

                    padding: '70px 30px'
                }}
            >

                {
                    blogs.map((blog, index) => (

                        <div
                            key={index}
                            style={{
                                background: 'white',

                                borderRadius: '18px',

                                overflow: 'hidden',

                                boxShadow:
                                    '0 5px 15px rgba(0,0,0,0.08)'
                            }}
                        >

                            <img
                                src={blog.image}
                                alt=""

                                style={{
                                    width: '100%',

                                    height: '220px',

                                    objectFit: 'cover'
                                }}
                            />

                            <div
                                style={{
                                    padding: '22px'
                                }}
                            >

                                <span
                                    style={{
                                        background: '#d4a762',

                                        color: 'white',

                                        padding: '6px 12px',

                                        borderRadius: '20px',

                                        fontSize: '12px'
                                    }}
                                >
                                    {blog.category}
                                </span>

                                <h2
                                    style={{
                                        color: '#234b3a',

                                        marginTop: '20px',

                                        fontSize: '28px',

                                        lineHeight: '38px'
                                    }}
                                >
                                    {blog.title}
                                </h2>

                                <p
                                    style={{
                                        color: '#666',

                                        lineHeight: '28px',

                                        marginTop: '15px'
                                    }}
                                >
                                    {blog.text}
                                </p>

                                <button
                                    style={{
                                        marginTop: '20px',

                                        background: '#234b3a',

                                        color: 'white',

                                        border: 'none',

                                        padding: '12px 22px',

                                        borderRadius: '30px',

                                        cursor: 'pointer'
                                    }}
                                >
                                    Read More
                                </button>

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>

    )
}

export default Blog