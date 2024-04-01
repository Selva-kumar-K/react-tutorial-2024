import {FieldValues, useForm} from "react-hook-form"
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import Table from "./Table"
import {useState} from "react"

const schema = z.object({
    description : z.string({required_error : 'Name is required'}).min(3, {message : 'Name atleast 3 characters'}),
    amount : z.number({invalid_type_error: 'Amount is required'}).min(1, {message : "Amount shouldn't less than 1$"}),
    category : z.string({required_error : 'Please choose the options!'}).min(1, {message : 'Please choose one option!'})
})

type FormData = z.infer<typeof schema>

const ProjectForm = () => {

    const [formdata, setData] = useState([])
    const [newData, setNewData] = useState([])
    const [count, setCount] = useState(0)

    const {register, handleSubmit, formState: {errors , isValid}, reset}= useForm<FormData>({resolver : zodResolver(schema)})
    
    const onSubmit = (data : FieldValues) => {
       
        setData(prev => [...prev, data])

        setCount(prev => prev + data.amount)

        reset()
       
    }

    const handleDelete = (d: string) => {
        setData(formdata.filter(i => i.description !== d))
    }

    const handleChange = (f: string) => {

        setNewData(formdata.filter((i) => i.category === f))
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Description</label>
                <input {...register('description', {required: true})} type="text" className="form-control" />
                {errors.description && <p  className="text-danger">{errors.description.message}</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="" className="form-label">Amount</label>
                <input {...register('amount' , {required: true, valueAsNumber: true})} type="number" className="form-control" />
                {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="" className="form-label">Category</label>
                {errors.category && <p className="text-danger">{errors.category.message}</p>} 
                <select {...register('category', {required: true})} className="form-control" >
                    <option value="">Choose here</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Entertainment">Entertainment</option>
                </select>
            </div>

            <button className="btn btn-primary" disabled= {!isValid}>Submit</button>

    
        </form>

        <Table data={formdata} amount={count} onDelete={handleDelete} onChange={handleChange} newData={newData}/>
    </div>
  )
}

export default ProjectForm