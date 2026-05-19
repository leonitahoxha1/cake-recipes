import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()

    return (

        <div
            style={{
                minHeight: '100vh',
                background: '#f5f1e8',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >

            <div
                style={{
                    background: 'white',
                    width: '100%',
                    maxWidth: '420px',
                    padding: '45px',
                    borderRadius: '25px'
                }}
            >

                <h1>Recipes of Food</h1>

                <input
                    type="email"
                    placeholder="Email"
                    style={{
                        width:'100%',
                        padding:'15px',
                        marginTop:'20px'
                    }}
                />

                <input
                    type="password"
                    placeholder="Password"
                    style={{
                        width:'100%',
                        padding:'15px',
                        marginTop:'20px'
                    }}
                />

                <button

                    onClick={() => navigate('/recipes')}

                    style={{
                        width:'100%',
                        padding:'15px',
                        marginTop:'20px',
                        background:'#234b3a',
                        color:'white',
                        border:'none'
                    }}
                >
                    Sign In
                </button>

            </div>

        </div>

    )

}

export default Login