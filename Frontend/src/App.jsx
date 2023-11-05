import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

function App() {

  const [area_type, setAreaType] = useState('')
  const [sqft, setSqft] = useState(null)
  const [bath, setBath] = useState(null)
  const [bhk, setBhk] = useState(null)
  const [balcony, setBalcony] = useState(null)

  const handleSubmit = async () => {
    const input_data = {
      area_type: area_type,
      sqft: sqft,
      bath: bath,
      bhk: bhk,
      balcony: balcony
    }
    console.log(input_data)
    const request = await axios.post(`http://127.0.0.1:8000/price/predict/`, input_data)
    const response = await request.data
    if (request.status == 200) {
      console.log("Response: ", response.predicted_price)
      Swal.fire({
        title: `Apartment Price is: ${response.predicted_price}`,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }
  }

  return (
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div class="max-w-md mx-auto">
            <div>
              <h1 class="text-2xl font-semibold">Enter Required Details</h1>
            </div>
            <div class="divide-y divide-gray-200">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="relative">
                  <select onChange={(e) => setAreaType(e.target.value)} className="select rounded-none w-full max-w-xs">
                    <option disabled selected>Area Type</option>
                    <option value={'carpet area'}>Carpet Area</option>
                    <option value={'super built-up area'}>Super BuildUp Area</option>
                    <option value={'plot area'}>Plot Area</option>
                    <option value={'built-up area'} >Build Up Area</option>
                  </select>
                </div>
                <div class="relative">
                  <input onChange={(e) => setSqft(e.target.value)} type="number" placeholder="Square Feet Area" className="input rounded-none input-bordered w-full max-w-xs" />
                </div>
                <div className='grid grid-flow-col max-w-xs gap-x-2'>
                  <input onChange={(e) => setBath(e.target.value)} type="number" placeholder="bath" className="input rounded-none input-bordered w-[140px]" />
                  <input onChange={(e) => setBalcony(e.target.value)} type="number" placeholder="balcony" className="input rounded-none input-bordered w-[140px]" />
                </div>
                <div class="relative">
                  <input onChange={(e) => setBhk(e.target.value)} type="number" placeholder="bhk" className="input rounded-none input-bordered w-full max-w-xs" />
                </div>
                <div class="relative flex items-center justify-center">
                  <button onClick={handleSubmit} className="btn rounded-sm w-full">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
