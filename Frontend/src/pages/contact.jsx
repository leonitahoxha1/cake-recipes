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

                {/* RIGHT */}

                <div
                    style={{
                        background: 'white',

                        padding: '35px',

                        borderRadius: '20px',

                        boxShadow:
                            '0 5px 15px rgba(0,0,0,0.08)'
                    }}
                >

                    <div
                        style={{
                            display: 'flex',
                            gap: '20px',
                            flexWrap: 'wrap'
                        }}
                    >

                        <input
                            type="text"
                            placeholder="Your Name"
                            style={{
                                flex: '1',
                                padding: '15px',
                                borderRadius: '12px',
                                border: '1px solid #ddd',
                                outline: 'none'
                            }}
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            style={{
                                flex: '1',
                                padding: '15px',
                                borderRadius: '12px',
                                border: '1px solid #ddd',
                                outline: 'none'
                            }}
                        />

                    </div>

                    <input
                        type="text"
                        placeholder="Subject"
                        style={{
                            width: '100%',
                            padding: '15px',
                            borderRadius: '12px',
                            border: '1px solid #ddd',
                            outline: 'none',
                            marginTop: '20px',
                            boxSizing: 'border-box'
                        }}
                    />

                    <textarea
                        placeholder="Your Message"
                        rows="7"
                        style={{
                            width: '100%',
                            padding: '15px',
                            borderRadius: '12px',
                            border: '1px solid #ddd',
                            outline: 'none',
                            marginTop: '20px',
                            resize: 'none',
                            boxSizing: 'border-box'
                        }}
                    />

                    <button
                        style={{
                            marginTop: '25px',

                            background: '#234b3a',

                            color: 'white',

                            border: 'none',

                            padding: '14px 28px',

                            borderRadius: '30px',

                            cursor: 'pointer',

                            fontSize: '15px'
                        }}
                    >
                        Send Message
                    </button>

                </div>

            </div>

        </div>

    )
}

export default Contact