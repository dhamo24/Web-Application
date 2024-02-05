
const validation = () => {

const [formData, setFormData] = useState({
    name: '',
    email: '',
    Purpose: '',
    Message: ''
    })

const [errors, setErrors] = useState({})

    const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData, [name] : value
    })
    }

    const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}
    if(!formData.name.trim()) {
    validationErrors.name = "name is required"
    }

    if(!formData.email.trim()) {
        validationErrors.email = "email is required"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
        validationErrors.email = "email is not valid"
    }

    if(!formData.Purpose.trim()) {
        validationErrors.Purpose = "Purpose is required"
    } else if(formData.Purpose.length < 100){
        validationErrors.Purpose = "Purpose should be at least 100 char"
    }

    if(formData.Message !== formData.Message) {
        validationErrors.Message = "Message is required"
    }else if(formData.Message.length < 100){
        validationErrors.Message = "Message should be at least 100 char"
    }

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
        alert("Form Submitted successfully")
    }

    }
}


export default function GetInTouch(){
    return(
        <div onSubmit={handleSubmit} class="container mx-auto px-4 py-6">
        <h2 class="text-4xl font-bold mb-4">Get In Touch</h2>
        <form class="w-full max-w-lg justify-center" >
            <div class="flex items-center mb-4 text-center">
                <label htmlFor="name" class="w-1/4 text-center">Name:</label>
                <input type="text" id="name" onChange={handleChange}  class="border rounded px-2 py-1 w-3/4"/>
            </div>
            <div class="flex items-center mb-4 text-center">
                <label htmlFor="email" class="w-1/4">Email:</label>
                <input type="email" id="email" onChange={handleChange}  class="border rounded px-2 py-1 w-3/4 text-justify"/>
            </div>
            <div class="flex items-center mb-4">
                <label htmlFor="message" class="w-1/4 text-center">Purpose:</label>
                <input type="text" id="purpose" onChange={handleChange}  class="border rounded px-2 py-1 w-3/4" rows="4"/>
                
            </div>

            <div class="flex items-center mb-4">
                <label htmlFor="message" class="w-1/4 text-center">Message:</label>
                <input type="text" id="Message" onChange={handleChange}  class="border rounded px-2 py-1 w-3/4" rows="4"/>
                
            </div>
            <button class=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded justify-center">Submit</button>
        </form>
    </div>
    )
}
