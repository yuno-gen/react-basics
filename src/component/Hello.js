import React from 'react'

export default function Hello() {
    //use of JSX
    // return (
    //     <div>
    //         <h1>Functional Component</h1>
    //     </div>
    // )
    //Without JSX
    // return React.createElement('div',null,React.createElement('h4',null,<h4>Functional Component</h4>))
    return React.createElement('div',{id:'hello', className:'dummyClass'},
        React.createElement('div',null,'Functional component')
        
        )
}

// TypeScript
// const Hello =() => {
//     return React.createElement('div'.{id:'hello', className:'dummyClass'},
//     React.createElement('h1',null,'Functional component')
//     )
// }
