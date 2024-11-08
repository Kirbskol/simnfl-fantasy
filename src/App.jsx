function App() {
  return (
    <div class="flex-col p-8 items-center text-center">
      <div class="text-center w-1/2 justify-self-center">
        <h1 class="text-4xl self-center mb-2">Welcome to SimNFL Fantasy Draft</h1>
        <p class="text-lg text-wrap">At present we are only offering a Fantasy Draft option, where you can export your drafted team as an image and show it off to other users.</p>
      </div>
      <div class="text-center">
        <input class="bg-slate-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" type="text" placeholder="Username"></input>
        <button class="bg-slate-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enter Draft</button>
      </div>
    </div>
  )
}

export default App
