import React, { Component } from 'react'

// export default class Greet extends Component {
//     render() {
//         return (
//             <div>
//                 Hello Himani!
//             </div>
//         )
//     }
// }
const Greet = (props) => {
return (<div>
        Hello -{props.name}!
        {props.children}
        </div>)
}
export default Greet