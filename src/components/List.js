import React from 'react'

function List({info, upcoming}) {


  return (
    <ul>
        {
            iterate(info,upcoming)
        }
    </ul>
  )
}

export default List


function iterate(data, flag) {
    if(!data) return;
    let bgColor = flag ? {backgroundColor : "#ffe66d"} : {} ;
    return  (
        <>
            {
                data.map((person,index) => {
                    
                    return (
                        <li key={index}>
                            <div className="flex" style={bgColor}>
                                <img src={person.img} alt="person" />
                                <div className="title">
                                    <h3 className='name'>{person.name}</h3>
                                    <div className="age">{old(person.birthday)} Years</div>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </>
    )
}

// how old the person is :

function old(personAge) {
    let years = new Date(personAge).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - years
    return age
}