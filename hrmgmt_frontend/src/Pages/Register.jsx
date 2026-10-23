import { useState } from "react"

function Register() {
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [age, setAge] = useState("")

    let handleRegister = (e) => {
        e.preventDefault()

        console.log("Name:", name)
        console.log("Email:", email)
        console.log("Password:", password)
        console.log("Age:", age)
    }

    return (
        <div>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                />
                <br />

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <br />

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                />
                <br />

                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Enter your age"
                    min="1"
                    required
                />
                <br />

                <button type="submit">Register</button>
            </form>

            <p>{name}</p>
            <p>{email}</p>
            <p>{password}</p>
            <p>{age}</p>
        </div>
    )
}

export default Register