// export default() =>{
//     return <>
//     <h2>Second child</h2>
// </>
// }



export default(props) =>{
    const {parentComponentName} = props
        return <div><h2>Second child from {parentComponentName} 
        </h2>

    </div>}
