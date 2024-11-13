"use client"
import React, { useState } from 'react'
import {Input} from '@/components/ui/input'
import { errorToJSON } from 'next/dist/server/render'
import { Textarea } from './ui/textarea'

const StartupForm = () => {
    const [errors, setErrors] = useState<Record<string,string>>({})
    
    return (
        <form 
        // action={()=>{}}
        className="startup-form">
            <div>
                <label htmlFor="title" className='startup-form_label'>
                    Title
                </label>
                <Input id="title" name="title" className='startup-form_input' 
                    required
                    placeholder='Startup Title'
                />
                {errors.title && <p className='startup-form_error'>{errors.title}</p>}
            </div>

            <div>
                <label htmlFor="description" className='startup-form_label'>
                    Description
                </label>
                <Textarea id="description" name="description" className='startup-form_textarea' 
                    required
                    placeholder='Short description of your startup idea'
                />
                {errors.description && <p className='startup-form_error'>{errors.description}</p>}
            </div>

            <div>
                <label htmlFor="category" className='startup-form_label'>
                    Category
                </label>
                <Input id="category" name="category" className='startup-form_input' 
                    required
                    placeholder='Choose a cateory (e.g. Tech, Health, Education, etc)'
                />
                {errors.category && <p className='startup-form_error'>{errors.category}</p>}
            </div>

            <div>
                <label htmlFor="link" className='startup-form_label'>
                    Image URL
                </label>
                <Input id="link" name="link" className='startup-form_input' 
                    required
                    placeholder='Paste a link to your demo or promotional media'
                />
                {errors.link && <p className='startup-form_error'>{errors.link}</p>}
            </div>
        
        </form>
    )
}

export default StartupForm 