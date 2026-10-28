export function PinkText({children}){
    return(
        <div style={{color: pink}}>
            {children}
        </div>
    )
}

export function CustomText({pickC, children}){
     return(
        <div style={{color:pickC}}>
            {children}
        </div>
     )
}