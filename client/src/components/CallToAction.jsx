import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                My Name is Sushanth R Hegde
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout My Social Media 
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://github.com/SushanthRHegde" target='_blank' rel='noopener noreferrer'>
                    Visit My GitHub Profile
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxN0CVyuA0ITmZizYvxwFGq-XaJl_hMlHhnA&s" />
        </div>
    </div>
  )
}