import AddTodo from '@/components/shared/AddTodo'

const Home = () => {
  return (
    <div className="w-sceen py-20 flex justify-center flex-col items-center">
      <span
        className="text-3xl font-extrabold
      uppercase"
      >
        TO-DO-APP
      </span>
      <h1
        className="text-3xl font-extrabold 
        uppercase mb-5"
      >
        Next.js 14
        <span className="text-orange-700"> By Flag Nguyen</span>
      </h1>

      <div
        className="fkex justify-center flex-col 
        items-center w-[1000px]"
      >
        <AddTodo />
      </div>
    </div>
  )
}

export default Home
