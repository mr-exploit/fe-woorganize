import FormAuth from './AuthLayout/FormAuth'

const Login = () => {
    return (
        <FormAuth
            inputs={[
                { label: 'Alamat Email', type: 'email' }, { label: 'Kata Sandi', type: 'password' }
            ]}
            name="Masuk"
            details="Belum punya akun?"
            path="/signup"
            navigation="Daftar"
        />
    )
}

export default Login
