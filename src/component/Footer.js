import instagram from "../photo/insta.png"
import facebook from "../photo/fac.png"
import telegram from "../photo/tele.webp"

function Footer() {
 
  
  return (
    <div class="container">
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item"><a href="/" class="nav-link px-2 text-body-secondary">Home</a></li>
          <li class="nav-item"><a href="/about" class="nav-link px-2 text-body-secondary">About Me</a></li>
          <li class="nav-item"><a href="/contact" class="nav-link px-2 text-body-secondary">Contact Me</a></li>
        </ul>
        <p class="text-center text-body-secondary">© 2023 @longsreyly</p>
        <div className='icon'>
          <img src={instagram}/>
          <img src={facebook} />
          <img src={telegram} />
        </div>
    
      </footer>
    </div>
  )
}
export default Footer;