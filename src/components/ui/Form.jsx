import React from 'react'

const Form = () => {
  return (
    <div class="flex-col p-2 items-center text-center">
        <div class="text-center">
            <form>
                <div>
                    <input type="text" class="bg-slate-900 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded text-center" placeholder="Username" required />
                </div>
                <button type="submit" class="bg-slate-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Enter Draft</button>
            </form>
        </div>
    </div>
  )
}

export default Form;