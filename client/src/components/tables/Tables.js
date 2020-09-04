import React, { useEffect } from 'react'
import Axios from "axios"
import { Table } from 'reactstrap';

function Tables(props) {
    const columns=[
        {title:'SSN_ID',field:'SSN_ID'},
        {title:'Patient_Id',field:'pid'},
        {title:'Name',field:'name'},
        {title:"Age",field:"age"},
        {title:"Room",field:"room"},
        {title:"Date of Admission",field:'doa'}
    ]
    const data =[
        {
            "SSN_ID":"001",
            'pid':'001',
            'name':'nikunj',
            "age":'20',
            room:'single',
            doa:'2020'
        }
    ]

    useEffect(()=>{
        let config = {
            headers: {
              "Authorization" : props.token,
            }
        }
        Axios.get("http://127.0.0.1:5000/patients",config)
        .then(res=>console.log(res))
        .catch(e=>alert(e))
    },[])


    return (
        <>
            <Table dark>
                <thead>
                    <tr>
                    {
                        columns.map(item=>{
                           return <th>{item.title}</th>
                        })
                    }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    {
                        data.map(item=>{
                            return <>
                            <th scope="row">{item.SSN_ID}</th>
                            <td>{item.pid}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.doa}</td>
                            <td>{item.room}</td>
                            </>
                        })
                    }
                    </tr>
                </tbody>
                </Table>
        </>
    )
}

export default Tables

