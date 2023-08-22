import React from "react"
import "./global.css"
import "./Contact.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Contact = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-50 left-10 place-items-center">
        <div>
          <div>
            <div className="text-xl text-bold leading">Get in Touch</div>
            <p className="text-slate-500" >Ideal Zameen are hardworking analysts who watch<br></br> market trends,
              know the neighborhoods, and are <br></br>skilled at identifying the best opportunities for their clients.</p>
          </div >
          <div className="flex items-center p-6 max-w-sm  bg-white rounded-xl hover:shadow-lg space-x-4 mt-6">
            <LocationOnIcon />
            <div>
              <p className="text-slate-500">Location</p>
              <div className="text-xl">##########</div>
            </div>
          </div>
          <div className="flex items-center p-6 max-w-sm bg-white rounded-xl hover:shadow-lg space-x-4 mt-6">
            <CallIcon />
            <div>
              <p className="text-slate-500">Emergency Call</p>
              <div className="text-xl">+929898795873</div>
            </div>
          </div>
          <div className="flex items-center p-6 max-w-sm bg-white rounded-xl hover:shadow-lg space-x-4 mt-6">
            <ShareIcon />
            <div>
              <p className="text-slate-500">Follow Us on</p>
              <div><FacebookIcon /><LinkedInIcon /><WhatsAppIcon /><InstagramIcon /><EmailIcon /></div>
            </div>
          </div>
        </div>
        <div className="border">
          <div>
            <div className="text-xl text-bold leading pt-5 pl-10">Quick Contact</div>
            <p className="text-slate-500 pt-2 pl-10" >Ideal Zameen are hardworking analysts who watch<br></br> market trends,
              know the neighborhoods, and are <br></br>skilled at identifying the best opportunities for their clients.</p>
          </div >
          <div className="grid grid-cols-4 gap-2 pt-2 pl-10">

            <div>
              <label>Name*<br></br>
                <input type="text" name="name" className="border-2 h-10" />
              </label>
            </div><br></br>
            <div>
              <label>Phone*<br></br>
                <input type="text" name="name" className="border-2 h-10" />
              </label>
            </div><br></br>
            <div>
              <label>Comment*<br></br>
                <input type="text" name="name" className="border-2 h-20" />
              </label>
            </div>

          </div>
          <div className="flex justify-center">
            <div className="p-9 ">  <input type="submit" className="rounded-full bg-emerald-400  h-10 w-60 text-white "></input>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact