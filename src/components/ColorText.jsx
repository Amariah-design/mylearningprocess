export function ColorText({colors,children}){
    return(
        <div>
           <div style={{color: colors}}>
            {children}
           </div>
        </div>
    )
}