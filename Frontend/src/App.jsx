import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

function App() {

  const [area, setArea] = useState(["1st block jayanagar", "1st phase jp nagar", "2nd phase judicial layout",
    "2nd stage nagarbhavi", "5th phase jp nagar", "6th phase jp nagar", "7th phase jp nagar", "8th phase jp nagar",
    "9th phase jp nagar", "aecs layout", "abbigere", "akshaya nagar", "ambalipura", "ambedkar nagar", "amruthahalli", "anandapura", "ananth nagar", "anekal", "anjanapura", "ardendale", "arekere", "attibele", "beml layout", "btm 2nd stage", "btm layout", "babusapalaya", "badavala nagar", "balagere", "banashankari", "banashankari stage ii", "banashankari stage iii", "banashankari stage v",
    "banashankari stage vi", "banaswadi", "banjara layout", "bannerghatta", "bannerghatta road", "basavangudi", "basaveshwara nagar", "battarahalli", "begur", "begur road", "bellandur", "benson town", "bharathi nagar", "bhoganhalli", "billekahalli", "binny pete", "bisuvanahalli", "bommanahalli", "bommasandra", "bommasandra industrial area", "bommenahalli", "brookefield", "budigere", "cv raman nagar", "chamrajpet", "chandapura", "channasandra", "chikka tirupathi", "chikkabanavar", "chikkalasandra",
    "choodasandra", "cooke town", "cox town", "cunningham road", "dasanapura", "dasarahalli", "devanahalli",
    "devarachikkanahalli", "dodda nekkundi", "doddaballapur", "doddakallasandra", "doddathoguru", "domlur", "dommasandra", "epip zone", "electronic city", "electronic city phase ii",
    "electronics city phase 1", "frazer town", "gm palaya", "garudachar palya", "giri nagar", "gollarapalya hosahalli", "gottigere",
    "green glen layout", "gubbalala", "gunjur", "hbr layout", "hrbr layout", "hsr layout", "haralur road", "harlur", "hebbal",
    "hebbal kempapura", "hegde nagar", "hennur", "hennur road", "hoodi", "horamavu agara", "horamavu banaswadi", "hormavu", "hosa road", "hosakerehalli",
    "hoskote", "hosur road", "hulimavu", "isro layout", "itpl", "iblur village", "indira nagar", "jp nagar", "jakkur", "jalahalli", "jalahalli east", "jigani", "judicial layout", "kr puram", "kadubeesanahalli", "kadugodi", "kaggadasapura", "kaggalipura", "kaikondrahalli", "kalena agrahara",
    "kalyan nagar", "kambipura", "kammanahalli", "kammasandra", "kanakapura", "kanakpura road", "kannamangala", "karuna nagar", "kasavanhalli", "kasturi nagar", "kathriguppe", "kaval byrasandra", "kenchenahalli", "kengeri", "kengeri satellite town", "kereguddadahalli", "kodichikkanahalli", "kodigehaali", "kodihalli", "kogilu", "konanakunte", "koramangala", "kothannur", "kothanur", "kudlu", "kudlu gate", "kumaraswami layout", "kundalahalli", "lb shastri nagar", "laggere", "lakshminarayana pura", "lingadheeranahalli", "magadi road", "mahadevpura", "mahalakshmi layout", "mallasandra", "malleshpalya", "malleshwaram", "marathahalli", "margondanahalli", "marsur",
    "mico layout", "munnekollal", "murugeshpalya", "mysore road", "ngr layout", "nri layout", "nagarbhavi", "nagasandra", "nagavara", "nagavarapalya", "narayanapura", "neeladri nagar", "ombr layout", "old airport road", "old madras road", "padmanabhanagar", "pai layout", "panathur", "parappana agrahara", "pattandur agrahara", "poorna pragna layout", "prithvi layout", "r.t. nagar", "rachenahalli", "raja rajeshwari nagar", "rajaji nagar", "rajiv nagar", "ramagondanahalli", "ramamurthy nagar", "rayasandra", "sahakara nagar", "sanjay nagar", "sarakki nagar", "sarjapur", "sarjapur  road", "sarjapura - attibele road", "sector 2 hsr layout", "sector 7 hsr layout", "seegehalli", "shampura",
    "shivaji nagar", "singasandra", "somasundara palya", "sompura", "sonnenahalli", "subramanyapura", "sultan palaya", "tc palaya", "talaghattapura", "thanisandra", "thigalarapalya", "thubarahalli", "thyagaraja nagar", "tindlu", "tumkur road",
    "ulsoor", "uttarahalli", "varthur", "varthur road", "vasanthapura", "vidyaranyapura",
    "vijayanagar", "vishveshwarya layout", "vishwapriya layout", "vittasandra",
    "whitefield", "yelachenahalli", "yelahanka", "yelahanka new town", "yelenahalli", "yeshwanthpur"])
  const [location, setLocation] = useState('')
  const [sqft, setSqft] = useState(null)
  const [bath, setBath] = useState(null)
  const [bhk, setBhk] = useState(null)
  const [balcony, setBalcony] = useState(null)


  const handleFormating = (number) => {
    if (String(number).length == 6){
      let output = `${number[0]} crores ${number.slice(1,3)} lakhs`
      return output
    }else if(String(number).length == 5){
      let output = `${number.slice(0,2)} lakh ${number.slice(3,5)} thousand`
      return output
    }
  }


  const handleSubmit = async () => {
    const input_data = {
      location: location,
      sqft: sqft,
      bath: bath,
      bhk: bhk,
      balcony: balcony
    }
    console.log(input_data)
    const request = await axios.post(`http://127.0.0.1:8000/price/predict/`, input_data)
    const response = await request.data
    if (request.status == 200) {
      console.log("Response: ", response.predicted_price.toFixed(2))
      let data = await handleFormating(response.predicted_price.toFixed(2))
      Swal.fire({
        title: `Apartment Price is: ${data}`,
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
                  <select onChange={(e) => setLocation(e.target.value)} className="select rounded-none w-full max-w-xs">
                    <option disabled selected>Area Type</option>
                    {
                      area.map((item) => {
                        return (
                          <option value={item}>{item}</option>
                        )
                      })
                    }
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
