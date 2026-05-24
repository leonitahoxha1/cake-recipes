function Blog() {

    return (

        <div
            style={{
                minHeight: '100vh',
                background: '#f8f5ef',
                padding: '60px 30px',
                fontFamily: 'Arial'
            }}
        >

            <h1
                style={{
                    color: '#234b3a',
                    fontSize: '50px'
                }}
            >
                Food Blog 🍴
            </h1>

            <p
                style={{
                    color: '#555',
                    maxWidth: '700px',
                    lineHeight: '30px',
                    fontSize: '18px'
                }}
            >
                Welcome to our food blog where you can discover
                cooking tips, healthy recipes, desserts and
                delicious food inspiration every day.
            </p>

            <div
                style={{
                    marginTop: '50px',
                    display: 'grid',
                    gridTemplateColumns:
                        'repeat(auto-fit,minmax(300px,1fr))',
                    gap: '30px'
                }}
            >

                <div
                    style={{
                        background: 'white',
                        padding: '20px',
                        borderRadius: '20px'
                    }}
                >
                    <h2>5 Healthy Breakfast Ideas</h2>

                    <p>
                        Discover delicious healthy breakfasts to
                        start your morning better.
                    </p>
                </div>

                <div
                    style={{
                        background: 'white',
                        padding: '20px',
                        borderRadius: '20px'
                    }}
                >
                    <h2>Best Dessert Recipes</h2>

                    <p>
                        Amazing desserts and sweet recipes for
                        every occasion.
                    </p>
                </div>

            </div>

        </div>

    )
}

export default Blog