function Contact() {

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
                    height: '220px',

                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg)',

                    backgroundSize: 'cover',

                    backgroundPosition: 'center',

                    display: 'flex',

                    alignItems: 'center',

                    justifyContent: 'center'
                }}
            >

                <h1
                    style={{
                        color: 'white',
                        fontSize: '55px'
                    }}
                >
                    Contact Us
                </h1>

            </div>

            {/* CONTACT SECTION */}

            <div
                style={{
                    display: 'grid',

                    gridTemplateColumns:
                        'repeat(auto-fit,minmax(350px,1fr))',

                    gap: '60px',

                    padding: '70px 40px',

                    maxWidth: '1300px',

                    margin: '0 auto'
                }}
            >

                {/* LEFT */}

                <div>

                    <h1
                        style={{
                            color: '#234b3a',
                            marginBottom: '20px'
                        }}
                    >
                        We Read Every Email 📩
                    </h1>

                    <p
                        style={{
                            color: '#555',
                            lineHeight: '30px',
                            fontSize: '17px'
                        }}
                    >
                        Whether you have a question about recipes,
                        desserts or healthy food ideas — we would
                        love to hear from you.
                    </p>

                    <div
                        style={{
                            marginTop: '40px'
                        }}
                    >

                        <h3>Email</h3>

                        <p
                            style={{
                                color: '#777'
                            }}
                        >
                            recipes@gmail.com
                        </p>

                        <h3
                            style={{
                                marginTop: '25px'
                            }}
                        >
                            Address
                        </h3>

                        <p
                            style={{
                                color: '#777',
                                lineHeight: '28px'
                            }}
                        >
                            Prishtina, Kosovo
                        </p>

                        <h3
                            style={{
                                marginTop: '25px'
                            }}
                        >
                            Phone
                        </h3>

                        <p
                            style={{
                                color: '#777'
                            }}
                        >
                            +383 44 123 456
                        </p>

                    </div>

                </div>

             