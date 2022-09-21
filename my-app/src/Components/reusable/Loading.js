import React from 'react'
import { TailSpin } from 'react-loader-spinner'
import './Loading.css'


export default function Loading() {
    return (
        <div className='center'>
            <TailSpin
            height="80"
            width="80"
            color="rgb(169, 8, 169)"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
        </div>
        
    )
}
