// export default() =>{
//     return <> <h2>third child</h2>

// </>}

export default(props) =>{
    const {parentComponentName} = props
        return <div><h2>ThirdChild from {parentComponentName} 
        </h2>
    
    </div>}
