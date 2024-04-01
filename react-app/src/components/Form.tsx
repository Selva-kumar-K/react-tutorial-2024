// import { FormEvent, useState } from "react"
import {useForm, FieldValues} from "react-hook-form"

import {zodResolver} from "@hookform/resolvers/zod"

import { z} from 'zod'

const schema = z.object({
    name : z.string().min(3, {message : 
    'Name must be at least 3 characters'}),
    age : z.number({invalid_type_error: 'Age field is required'}).min(18, {message : 'Age must be atleast 18'})
})


type FormData = z.infer<typeof schema>;

const Form = () => {

    // const nameRef = useRef<HTMLInputElement>(null)
    // const ageRef = useRef<HTMLInputElement>(null)

    const {register, handleSubmit, formState : {errors, isValid}} = useForm<FormData>({resolver : zodResolver(schema)})
    console.log(errors)
    const onSubmit = (data : FieldValues) => console.log(data)
 
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input {...register('name', {required: true, minLength : 3})} type="text" id="name" className="form-control"/>
                {errors.name && <p className="text-danger">{errors.name.message}</p>}
                             
            </div>

            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input {...register('age', {valueAsNumber : true})} type="number" id="age" className="form-control"/>
                {errors.age && <p className="text-danger">{errors.age.message}</p>}

            </div>
            <button disabled={!isValid} className="btn btn-primary" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form