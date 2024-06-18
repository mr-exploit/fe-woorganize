import FormAuth from './AuthLayout/FormAuth'
const SignUp = () => {
    return (
        <FormAuth
            inputs={[
                { label: 'Nama Lengkap' }, { label: 'Alamat Email', type: 'email' }, { label: 'Kata Sandi', type: 'password' }
            ]}
            name="Daftar"
            details="Sudah punya akun?"
            path="/login"
            navigation="Masuk"
            login="/login"
        />
    )
}

export default SignUp
