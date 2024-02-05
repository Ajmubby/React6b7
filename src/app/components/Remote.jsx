import Image from 'next/image'

export default function Remote() {
  return (
    <div className='flex mt-5'>
        <Image src='https://images.unsplash.com/photo-1693041137931-b055f0730f8d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='mudryk' width='500'height='400' />
        <Image src='https://i.pinimg.com/236x/b0/75/e3/b075e33f979a210d52a6bfde03b57657.jpg' alt='waterfall' width='500' height='500'/>
    </div>
  )
}
