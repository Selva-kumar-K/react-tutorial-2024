import { FieldValues, useForm } from "react-hook-form"

import {z} from "zod"

import {zodResolver} from "@hookform/resolvers/zod"

const schema = z.object({
    description : z.string().min(3, {message : 'Description should atleast 3 characters'}),
    amount : z.number({invalid_type_error : 'Amount is required'}).min(1, {message : 'Amount should atlease $1 dollar'}),
    category : z.string().min(1, {message : 'Please Choose one Category'})
})

type FormData = z.infer<typeof schema>

interface Props {
    items : (d : object) => void;
}

const ExpenseForm = ({items} : Props) => {

    const {register, handleSubmit, formState:  {errors, isValid,}, reset} = useForm<FormData>({resolver : zodResolver(schema)})

    const onSubmit = (data : FieldValues) => {
        items(data)
        reset()
    }

  return (
    <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label htmlFor=""  className="form-label">Description</label>
            <input type="text" {...register('description')} className="form-control"/>
            {errors.description && <p className="text-danger">{errors.description.message}</p>}
        </div>

        <div className="mb-3">
            <label htmlFor=""  className="form-label">Amount</label>
            <input type="number" {...register('amount', {valueAsNumber : true})} className="form-control"/>
            {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
        </div>

        <div className="mb-3">
            <label htmlFor="" className="form-label">Category</label>
            <select className="form-select" {...register('category')}>
                <option value=""></option>
                <option value="Groceries">Groceries</option>
                <option value="Utilities">Utilities</option>
                <option value="Entertainment">Entertainment</option>
            </select>
            {errors.category && <p className="text-danger">{errors.category.message}</p>}

        </div>

        <button disabled= {!isValid} className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
}

export default ExpenseForm