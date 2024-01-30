import React from 'react'

const Footer = () => {
  return (
      <>
          <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
      <span className="ml-3 text-xl">Ikigai</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 Ikigai —
      <a href="https://mail.google.com/mail/u/0/#inbox"  className="text-gray-600 ml-1 cursor-pointer hover:underline" rel="noopener noreferrer" target="_blank">ikigai1469@gmail.com</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a href='https://pin.it/7wLp3Pc' target='blank' className="h-6 w-6 cursor-pointer">
        <img src="https://www.freepnglogos.com/uploads/pinterest-logo-p-png-0.png" alt="pinterest" />
      </a>
      <a href='https://twitter.com/ikigai_mentor' target='blank' className="ml-3 h-6 w-6 cursor-pointer">
        <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" alt="twitter" />
      </a>
      <a href='https://www.instagram.com/ikigai576/' target='blank' className="ml-3 h-6 w-6 cursor-pointer">
        <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" alt="instagram" />
      </a>
      
    </span>
  </div>
</footer>
      </>
  )
}

export default Footer;