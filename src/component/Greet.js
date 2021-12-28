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
return (
        <div>
                <h1>Hello -{props.name}!</h1>
                {props.children}
        </div>)
}
export default Greet