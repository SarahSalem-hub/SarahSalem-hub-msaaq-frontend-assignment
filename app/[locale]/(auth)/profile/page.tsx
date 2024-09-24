export default function Page() {
    //only logged in users can access this page
    return <form>
        <label>
            Email
            <input type="email"/>
        </label>
        <label>
            Username
            <input type="text"/>
        </label>
        <label>
            Password
            <input type="password"/>
        </label>
        <button type="submit">Update</button>
    </form>
}