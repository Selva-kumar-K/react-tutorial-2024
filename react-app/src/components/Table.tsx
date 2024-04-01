//import {useForm} from "react-hook-form"

import { FormEvent, useState } from "react"

interface Props {
    data : items[]
    amount : number
    onDelete : (d : string) => void
    onChange : (f: string) => void
    newData : items[]
}

type items = {description : string,
amount : number,
category : string,
}

const Table = ({data,amount, onDelete,onChange, newData} : Props) => {

    const [state, setState] =useState(false)
  
  return (
    <div className="mt-3">

        <label htmlFor="" className="form-label">Filter by Category</label>

        <select className="form-control" onChange={(e) => {
            setState(!state)
            onChange(e.target.value)
            }}>
            <option value="" selected>Choose here</option>
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
        </select>

        <table className="table table-bordered mt-3">
            <thead>
                <tr>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
                <th scope="col">Category</th>
                </tr>
            </thead>

            <tbody>

               
                {data == '' ? 
                <tr><td>No Data</td></tr>
                : 
                
                data.map((d) => (
                    <>
                <tr>
                <td>{d.description}</td>
                <td>${d.amount}</td>
                <td>{d.category}</td>
                <td><button className="btn btn-danger" onClick={() => onDelete(d.description)}>Delete</button></td>
                </tr>

                </>
                ))}

                
                {data == '' ? '' : <tr>
                    <td>Total</td>
                    <td>${amount}</td>
                </tr>}

               

               
            </tbody>
        </table>
            </div>
  )
}

export default Table