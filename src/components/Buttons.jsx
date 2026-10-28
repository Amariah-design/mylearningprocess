export function Buttons({color, children}){
    return(
        <div>
          <button style={{backgroundColor: color, borderRadius: 15, padding:20}}>
            {children} 
          </button>
        </div>
    )
}