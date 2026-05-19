function Login(){

    return(

        <div
        style={{
            height:'100vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            background:'#566ea0'
        }}
        >

            <div
            style={{
                background:'white',
                padding:'40px',
                borderRadius:'10px',
                width:'300px'
            }}
            >

                <h1>Login</h1>

                <input
                type="email"
                placeholder="Email"
                style={{
                    width:'100%',
                    padding:'10px',
                    marginTop:'10px'
                }}
                />

                <input
                type="password"
                placeholder="Password"
                style={{
                    width:'100%',
                    padding:'10px',
                    marginTop:'10px'
                }}
                />

                <button
                style={{
                    width:'100%',
                    padding:'10px',
                    marginTop:'20px',
                    background:'grre',
                    color:'white',
                    border:'none'
                }}
                >
                    Login
                </button>

            </div>

        </div>

    )

}

export default Login