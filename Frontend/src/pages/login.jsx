import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()

    return (

        <div
            style={{
                minHeight: '100vh',
                background: '#f8f5ef',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
                fontFamily: 'Arial'
            }}
        >

            <div
                style={{
                    width: '100%',
                    maxWidth: '300px',
                    background: 'white',
                    padding: '28px',
                    borderRadius: '20px',
                    boxShadow:
                        '0 5px 20px rgba(0,0,0,0.08)'
                }}
            >

                <div
                    style={{
                        textAlign: 'center',
                        marginBottom: '24px'
                    }}
                >

                    <h1
                        style={{
                            color: '#234b3a',
                            fontSize: '34px',
                            margin: '0'
                        }}
                    >
                        Recipes 
                    </h1>

                    <p
                        style={{
                            color: '#777',
                            marginTop: '8px',
                            fontSize: '13px'
                        }}
                    >
                        Welcome Back
                    </p>

                </div>

                <input
                    type="email"
                    placeholder="Email Address"
                    style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '12px',
                        border: '1px solid #ddd',
                        marginBottom: '14px',
                        fontSize: '13px',
                        boxSizing: 'border-box',
                        outline: 'none'
                    }}
                />

                <input
                    type="password"
                    placeholder="Password"
                    style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '12px',
                        border: '1px solid #ddd',
                        fontSize: '13px',
                        boxSizing: 'border-box',
                        outline: 'none'
                    }}
                />

                <p
                    style={{
                        textAlign: 'right',
                        fontSize: '12px',
                        color: '#234b3a',
                        marginTop: '10px',
                        cursor: 'pointer'
                    }}
                >
                    Forgot Password?
                </p>

                <button

                    onClick={() => navigate('/recipes')}

                    style={{
                        width: '100%',
                        padding: '12px',
                        marginTop: '18px',
                        border: 'none',
                        borderRadius: '30px',
                        background: '#234b3a',
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                >
                    Sign In
                </button>

            </div>

        </div>

    )

}

export default Login