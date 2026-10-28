export function Profile({username, email, hobby, location}){
    return(
        <div>
        <div>Username: {username}</div>
        <div>Email: {email}</div>
        <div>Hobby: {hobby}</div>
        <div>Location: {location}</div>
        </div>
    )
}