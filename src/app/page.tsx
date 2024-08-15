import Image from "next/image";

export default function Home() {
  return (
    
  
    <div className="container">
      
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <img className="img1" src="/images/logo-final.png" alt="Logo" />
      </div>

      
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
      <a href="./about" >
        <Image 
          src="/images/front-what-we-do.png"
          alt="What we do"
          width={250}
          height={200}
        />
      </a>

      <a href="./maintain">
      <Image 
        src="/images/front-maintainable.png" 
        alt="Maintainable"
        width={250}
        height={200}
      />
      </a>

      <a href="./contact">
      <Image 
        src="/images/front-get-in-touch.png" 
        alt="Get in touch" 
        width={250}
        height={200}
      />
      </a>
      </div>
      
    </div>
  );
}
